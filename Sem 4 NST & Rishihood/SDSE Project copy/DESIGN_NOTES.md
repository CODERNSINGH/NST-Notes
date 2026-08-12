# Live Streaming Platform - Design Notes

## 📋 Project Overview
A production-grade live streaming platform with NestJS (backend), React (frontend), and PostgreSQL with Prisma ORM.

**Tech Stack:**
- Backend: NestJS + TypeScript + Prisma ORM + PostgreSQL + Socket.io
- Frontend: React + Vite + HLS.js + Socket.io-client
- Streaming: Nginx RTMP → HLS playback

---

## 🏗️ Architecture Design Principles

### 1. Layered Architecture
```
┌─────────────────────────────────────────┐
│         Presentation Layer              │
│  (Controllers, WebSocket Gateways)      │
└──────────────┬──────────────────────────┘
               │
┌────────────────▼────────────────────────┐
│           Business Layer                │
│  (Services, Factories, Strategies)      │
└──────────────┬──────────────────────────┘
               │
┌────────────────▼────────────────────────┐
│         Data Access Layer               │
│     (Repositories, Prisma ORM)          │
└──────────────┬──────────────────────────┘
               │
┌────────────────▼────────────────────────┐
│         Database (PostgreSQL)           │
└─────────────────────────────────────────┘
```

### 2. SOLID Principles Applied

#### S - Single Responsibility Principle
Each class has one reason to change:
- `AuthService`: Handles authentication only
- `UserService`: User CRUD operations only
- `ChannelService`: Channel management only
- `StreamService`: Stream lifecycle only
- `ChatService`: Chat message persistence only

#### O - Open/Closed Principle
- New viewing strategies can be added without modifying existing code (Strategy pattern)
- New stream factories can be added without changing `StreamService`
- New event listeners can be added via `@OnEvent()` decorator

#### L - Liskov Substitution Principle
- `FreeViewingStrategy` and `PaidViewingStrategy` both implement `ViewingStrategy` interface
- `StreamService` uses strategies interchangeably

#### I - Interface Segregation Principle
- `IStreamingAdapter` has only methods needed for streaming
- `ViewingStrategy` interface has minimal required methods
- `ChannelComponent` interface has single `getDetails()` method

#### D - Dependency Inversion Principle
- Services depend on abstractions (`BaseRepository`, interfaces)
- `PrismaService` abstracts database access
- Factories, strategies injected via constructor

---

## 🎨 Design Patterns Implemented

### 1. Singleton Pattern
**File:** `prisma.service.ts`

```typescript
@Injectable()
export class PrismaService extends PrismaClient {}
```
- Single `PrismaClient` instance shared across all modules
- Managed by NestJS DI container
- Ensures connection pooling efficiency

---

### 2. Factory Pattern
**File:** `stream.factory.ts`

```typescript
@Injectable()
export class StreamFactory {
  createStandard(input): StreamCreateInput
  createLive(input): StreamCreateInput
  createScheduled(input, scheduledAt): StreamCreateInput
}
```
- Encapsulates stream creation logic
- Centralizes default values and validation
- Types: Standard, Live, Scheduled streams

**Use Case:** When creating streams for channels, factory ensures proper structure.

---

### 3. Strategy Pattern
**Files:** 
- Interface: `viewing-strategy.interface.ts`
- Implementations: `free-viewing.strategy.ts`, `paid-viewing.strategy.ts`
- Service: `subscription.service.ts`

```typescript
interface ViewingStrategy {
  canWatch(): ViewingResult;
  getPlanName(): string;
}
```

**Free Tier:** 5-minute viewing limit
**Paid Tier:** Unlimited viewing

**Use Case:** View access decisions made at runtime based on subscription plan.

---

### 4. Observer Pattern
**File:** `stream.observer.ts`

```typescript
@OnEvent(STREAM_EVENTS.STARTED)
handleStreamStarted(event: StreamStartedEvent)

@OnEvent(STREAM_EVENTS.ENDED)
handleStreamEnded(event: StreamEndedEvent)
```

**Events:**
- `stream.started`: Emitted when stream goes live
- `stream.ended`: Emitted when stream ends

**Consumers:** ChatGateway listens to these events to manage chat rooms.

**Benefits:** Decouples stream module from downstream consumers.

---

### 5. Adapter Pattern
**File:** `streaming.adapter.ts`

```typescript
interface IStreamingAdapter {
  getIngestUrl(streamKey: string): string;
  getPlaybackUrl(streamKey: string): string;
  validateStreamKey(streamKey: string): Promise<boolean>;
}

class NginxRtmpAdapter implements IStreamingAdapter
```

**Use Case:** Decouples business logic from streaming backend. If switching from Nginx to Wowza/MediaMTX, only adapter changes.

---

### 6. Template Method Pattern
**File:** `base.service.ts`

```typescript
async create(data): Promise<T> {
  await this.beforeCreate(data);
  const entity = await this.repository.create(data);
  await this.afterCreate(entity);
  return entity;
}
```

**Hook Methods (override in subclasses):**
- `beforeCreate()`
- `afterCreate()`
- `beforeUpdate()`
- `afterUpdate()`

**Use Case:** `UserService` logs after user creation via `afterCreate()` hook.

---

### 7. Composite Pattern
**File:** `channel.composite.ts`

**Tree Structure:**
```
ChannelComposite
  ├─ StreamComposite
  │   └─ CommentLeaf
  │   └─ CommentLeaf
  └─ StreamComposite
      └─ CommentLeaf
```

**Components:**
- `ChannelComposite` (root, has children)
- `StreamComposite` (mid, has children)
- `CommentLeaf` (leaf, no children)

**Use Case:** Displaying full channel hierarchy with nested streams and comments.

---

### 8. Repository Pattern
**Files:** `base.repository.ts`, `*.repository.ts`

```typescript
abstract class BaseRepository<T, CreateInput, UpdateInput> {
  abstract get model(): any;
  async findAll(where, include): Promise<T[]>
  async findById(id, include): Promise<T | null>
  async create(data, include): Promise<T>
  async update(id, data, include): Promise<T>
  async delete(id): Promise<T>
}
```

**Concrete Repositories:**
- `UserRepository`
- `ChannelRepository`
- `StreamRepository`
- `SubscriptionRepository`

---

### 9. Gateway Pattern (WebSocket)
**File:** `chat.gateway.ts`

```typescript
@WebSocketGateway({ namespace: '/chat' })
export class ChatGateway
```

**Events:**
- `joinRoom`: Join stream chat
- `leaveRoom`: Leave chat
- `sendMessage`: Post message
- `newMessage`: Broadcast message
- `existingMessages`: History on join
- `streamEnded`: Stream terminated notification

---

### 10. Guard Pattern (Authorization)
**Files:**
- `jwt-auth.guard.ts`: Validates JWT tokens
- `subscription.guard.ts`: Checks subscription status

```typescript
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context): boolean
}

@Injectable()
export class SubscriptionGuard implements CanActivate {
  canActivate(context): boolean
}
```

**Usage:**
```typescript
@Get('me')
@UseGuards(JwtAuthGuard)
getMyChannel(@CurrentUser() user)
```

---

## 🗄️ Database Schema (ERD)

### Tables and Relationships

```
┌──────────┐      ┌──────────┐      ┌──────────┐
│   User   │ 1─── │ Channel  │ 1─── │ Stream   │
└──────────┘      └──────────┘      └──────────┘
      │                   │              │
      │                   │              │
      ▼                   ▼              ▼
┌──────────┐      ┌──────────┐    ┌──────────┐
│Subscription│    │ Comment  │    │ Comment  │
└──────────┘      └──────────┘    └──────────┘
```

### Tables

**User**
- id, name, email (unique), password (bcrypt)
- One-to-One with Channel, One-to-One with Subscription
- One-to-Many with Comments

**Channel**
- id, name (unique), streamKey (auto-generated cuid)
- One-to-One with User, One-to-Many with Streams

**Stream**
- id, title, status (PENDING/LIVE/ENDED)
- startedAt, endedAt timestamps
- One-to-Many with Comments

**Subscription**
- id, plan (FREE/PAID), expiresAt
- One-to-One with User

**Comment (Chat Messages)**
- id, content, createdAt
- User reference, Stream reference

---

## 🔐 Security Features

1. **Password Hashing:** bcrypt with 12 rounds
2. **JWT Authentication:** Signed tokens with 7-day expiry
3. **Stream Keys Hidden:** Not exposed in API responses
4. **Input Validation:** class-validator DTOs
5. **CORS:** Restricted to frontend origins
6. **Subscription Guards:** Prevent unauthorized premium access
7. **Ownership Verification:** Stream operations verify channel ownership

---

## 🔄 Authentication & Authorization Flow

```
┌─────────────┐
│  Register   │
│   /auth/    │
└──────┬──────┘
       │
       ▼
┌──────────────┐
│   Hash       │ bcrypt
│   Password   │
└──────┬───────┘
       │
       ▼
┌─────────────────┐
│ Create User +   │
│ Channel +       │
│ Subscription    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Generate JWT   │ jwtService.sign({sub, email})
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Return Token   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Store Token    │ localStorage
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  API Requests   │ Authorization: Bearer {token}
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  JwtAuthGuard   │ Validates token
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Route Handler  │
└─────────────────┘
```

---

## 📊 Subscription Viewing Access Flow

```
┌─────────────────────────────┐
│  Client: /subscriptions/    │
│        viewing-access       │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ SubscriptionService         │
│ getViewingAccess(userId)    │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│  Check subscription.plan    │
└──────────────┬──────────────┘
               │
       ┌───────┴───────┐
       │               │
   FREE            PAID
       │               │
       ▼               ▼
┌─────────┐      ┌──────────┐
│ 5 min   │      │ Unlimited  │
│ limit   │      │ access     │
└─────────┘      └──────────┘
```

---

## 📱 Frontend Structure

### Routes
```
/              → HomePage (Live streams grid)
/login         → LoginPage
/register      → RegisterPage
/dashboard     → DashboardPage (Channel info, Go Live)
/watch/:id     → WatchPage (Player + Chat)
```

### Components
- **Navbar.jsx:** Auth state navigation
- **VideoPlayer.jsx:** HLS.js video playback
- **ChatBox.jsx:** Socket.io chat interface

### Pages
- **HomePage.jsx:** Fetch live streams via `/streams/live`
- **DashboardPage.jsx:** Channel details, start/stop stream
- **WatchPage.jsx:** Stream playback + real-time chat

---

## 🌐 Real-Time Chat Flow

```
Client                    Server (ChatGateway)          Database
   │                              │                          │
   │ joinRoom(streamId)           │                          │
   │─────────────────────────────>│                          │
   │                              │                          │
   │                              │ client.join(streamId)  │
   │                              │                          │
   │                              │ getMessages(streamId)  │
   │                              │─────────────────────────>│
   │                              │<─────────────────────────│
   │ existingMessages(messages)   │                          │
   │<─────────────────────────────│                          │
   │                              │                          │
   │ sendMessage(...)             │                          │
   │─────────────────────────────>│                          │
   │                              │ saveMessage(...)         │
   │                              │─────────────────────────>│
   │                              │                          │
   │                              │ newMessage (emit to room)│
   │<─────────────────────────────│                          │
   │                              │                          │
```

---

## 🎬 Streaming Flow (RTMP → HLS)

```
┌──────────┐  RTMP   ┌──────────┐   HLS   ┌──────────┐
│   OBS    │──────> │ Nginx    │──────> │  Player  │
│ (Source) │        │ (Server) │        │ (Browser)│
└──────────┘        └──────────┘        └──────────┘
```

1. **OBS** connects to `rtmp://server/live/{streamKey}`
2. **Nginx RTMP** receives stream, converts to HLS segments
3. **Player** (HLS.js) loads `http://server/hls/{streamKey}.m3u8`

---

## 📈 Key Metrics & Monitoring

**Logging Middleware:**
- HTTP method, URL, status code
- Request duration in ms

**Event Emitter Logging:**
- Stream started: `🔴 Stream LIVE: {title}`
- Stream ended: `⚫ Stream ENDED: {id}`

---

## 🛠️ Development Setup

### Backend
```bash
cd server
npm install
npx prisma generate
npx prisma db push
npm run start:dev  # http://localhost:3001
```

### Frontend
```bash
cd frontend
npm install
npm run dev  # http://localhost:5173
```

### Environment Variables
```env
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret
JWT_EXPIRES_IN=7d
RTMP_URL=rtmp://localhost/live
HLS_BASE_URL=http://localhost:8080/hls
```

---

## 📚 Summary of Design Patterns

| Pattern | File(s) | Purpose |
|---------|---------|---------|
| **Singleton** | `prisma.service.ts` | Single PrismaClient instance |
| **Factory** | `stream.factory.ts` | Stream creation logic |
| **Strategy** | `*.strategy.ts` | Free vs Paid viewing rules |
| **Observer** | `stream.observer.ts` | Event-driven architecture |
| **Adapter** | `streaming.adapter.ts` | RTMP/HLS abstraction |
| **Template Method** | `base.service.ts` | CRUD with hooks |
| **Composite** | `channel.composite.ts` | Channel/Stream/Comment hierarchy |
| **Repository** | `*.repository.ts` | Data access abstraction |
| **Gateway** | `chat.gateway.ts` | WebSocket communication |
| **Guard** | `*.guard.ts` | Authorization |

---

## 🎯 Interview talking points

1. **Scalability:** Layered architecture allows scaling individual layers
2. **Maintainability:** SOLID principles ensure single responsibility
3. **Flexibility:** Strategy pattern allows adding new viewing tiers
4. **Real-time:** Socket.io + EventEmitter for decoupled events
5. **Security:** JWT + Guards + bcrypt password hashing
6. **Type Safety:** TypeScript throughout stack
7. **Database:** PostgreSQL with Prisma for type-safe queries
8. **Streaming:** Nginx RTMP → HLS for adaptive bitrate delivery
