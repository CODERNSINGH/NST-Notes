# 🚀 Comprehensive System Design Interview Guide: SDSE Project

This document is an in-depth study guide tailored specifically for your System Design and Software Engineering (SDSE) interview. It breaks down the exact architecture, design patterns, and principles implemented in your codebase, giving you the theoretical backing and concrete examples needed to ace the interview.

---

## 1. System Architecture Deep Dive

Your application follows a modern, modular, API-first architecture designed for scalability and maintainability.

### 1.1 The Backend: NestJS (TypeScript)
NestJS is heavily inspired by Angular and enforces a rigid, modular architecture. It forces developers to use **Dependency Injection (DI)**, which is crucial for testing and loose coupling.
- **Modules**: Group related logic (e.g., `SubscriptionModule`, `ChannelModule`).
- **Controllers**: Handle incoming HTTP requests and route them to the appropriate service.
- **Providers (Services)**: Contain the core business logic.
- **Pipes**: You are using `ValidationPipe` globally (in `main.ts`). This is an implementation of the **Decorator Pattern**, where incoming JSON payloads are automatically transformed into DTO (Data Transfer Object) classes and validated before hitting your controller.

### 1.2 Data Access: Prisma ORM
Prisma is a next-generation Node.js and TypeScript ORM. Unlike traditional ORMs (like TypeORM or Sequelize) which use the Active Record pattern, Prisma uses a custom query engine and provides deep type safety. It abstracts away raw SQL, protecting against SQL injection and allowing you to easily swap the underlying database engine if needed.

### 1.3 The Streaming Infrastructure: Nginx RTMP & HLS
This is a critical part of your system design, handling high-throughput video data.
1. **Ingestion (RTMP)**: Broadcasters use OBS to send an RTMP (Real-Time Messaging Protocol) stream to your Nginx server on Port 1935.
2. **Authentication Webhook**: Before Nginx accepts the stream, it triggers an `on_publish` event. This sends a synchronous POST request to your NestJS backend (`/api/streaming/auth`). This prevents unauthorized users from consuming your server's bandwidth.
3. **Transcoding & Delivery (HLS)**: Once authenticated, Nginx converts the continuous RTMP stream into HLS (HTTP Live Streaming). It breaks the video into small `.ts` (MPEG-2 Transport Stream) chunks and updates an `.m3u8` playlist file.
4. **Client Playback**: The client's web browser fetches these chunks via standard HTTP (Port 8080). This is highly scalable because HTTP traffic can be easily cached by CDNs (Content Delivery Networks) like Cloudflare, whereas RTMP cannot.

---

## 2. In-Depth Design Patterns (Gang of Four)

Design patterns are proven solutions to common software design problems. Your project effectively utilizes three major patterns.

### 2.1 The Repository Pattern (Architectural Pattern)
**File**: `subscription.repository.ts`

*   **The Problem**: If your services interact directly with Prisma (e.g., `this.prisma.subscription.findMany()`), your business logic becomes tightly coupled to your ORM. If you want to change databases or write unit tests without spinning up a real database, it becomes extremely difficult.
*   **The Solution**: The Repository pattern acts as a middleman. It abstracts the data layer behind an interface.
*   **Implementation in Your Code**:
    You have a `SubscriptionRepository` that extends a generic `BaseRepository`. By calling `findByUserId(userId)`, the consumer of this class doesn't need to know *how* the data is fetched (whether from PostgreSQL, MongoDB, or a mock array in memory)—it only knows that it will receive a `Subscription` object back.
*   **Interview Talking Point**: "I used the Repository pattern to isolate the domain logic from the data access layer. This makes the application database-agnostic and significantly improves the testability of our services via mocking."

### 2.2 The Strategy Pattern (Behavioral Pattern)
**File**: `free-viewing.strategy.ts`

*   **The Problem**: You have different types of users (Free, Paid, Admin) who have different rules for watching streams. The naive approach is to use massive `if/else` or `switch` statements inside your video playback service. This violates the Open/Closed Principle and becomes a maintenance nightmare.
*   **The Solution**: The Strategy pattern encapsulates each algorithm (rule set) into its own class. All these classes implement the same interface.
*   **Implementation in Your Code**:
    You defined a `ViewingStrategy` interface. The `FreeViewingStrategy` is a concrete implementation of this interface. It contains the specific logic that limits viewing to 300 seconds (5 minutes). At runtime, the application checks the user's tier and dynamically injects the correct strategy.
*   **Interview Talking Point**: "To handle different subscription tiers without polluting our core streaming logic with conditional statements, I implemented the Strategy pattern. The context simply delegates the authorization check to the injected strategy object."

### 2.3 The Composite Pattern (Structural Pattern)
**File**: `channel.composite.ts`

*   **The Problem**: A streaming platform has a hierarchical, tree-like structure: A `Channel` contains `Streams`, and `Streams` contain `Comments`. If you treat these as entirely separate entities, rendering the full UI tree or aggregating data (like total interactions) requires complex recursive functions or multiple disjointed API calls.
*   **The Solution**: The Composite pattern allows you to compose objects into tree structures and treat individual objects (leaves) and compositions of objects (nodes) uniformly.
*   **Implementation in Your Code**:
    *   **Component**: The `ChannelComponent` interface dictates that everything must have a `getDetails()` method.
    *   **Leaf**: `CommentLeaf` is the end of the line. It implements `getDetails()` to just return its own data.
    *   **Composite**: `StreamComposite` and `ChannelComposite` maintain a list of children (`ChannelComponent[]`). When `getDetails()` is called on a `ChannelComposite`, it recursively calls `getDetails()` on all its streams, which in turn call it on all their comments.
*   **Interview Talking Point**: "Because a channel's data is inherently hierarchical, I chose the Composite pattern. It allows the client to request the entire channel structure with a single method call, treating single comments and entire streams with the same uniform interface."

---

## 3. SOLID Principles in Practice

SOLID is an acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.

### 1. Single Responsibility Principle (SRP)
*   **Definition**: A class should have one, and only one, reason to change. It should have only one job.
*   **Project Example**: Your `SubscriptionRepository` has only one job: interacting with the database regarding subscriptions. It does not contain business logic for billing, and it does not handle HTTP requests. If the database schema changes, only the repository changes.

### 2. Open/Closed Principle (OCP)
*   **Definition**: Software entities (classes, modules, functions) should be open for extension, but closed for modification.
*   **Project Example**: Your **Strategy Pattern** implementation is the perfect example here. If the business decides to add a "Student Tier", you do not need to modify the `FreeViewingStrategy` or the `ViewerService`. You simply *extend* the system by creating a new `StudentViewingStrategy` class that implements the `ViewingStrategy` interface.

### 3. Liskov Substitution Principle (LSP)
*   **Definition**: Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.
*   **Project Example**: Any place in your code that expects a `ViewingStrategy` can safely accept a `FreeViewingStrategy` or a `PaidViewingStrategy`. The system won't crash because both implementations guarantee they will return a `ViewingResult` object from the `canWatch()` method.

### 4. Interface Segregation Principle (ISP)
*   **Definition**: Clients should not be forced to depend on interfaces they do not use. Keep interfaces small and specific.
*   **Project Example**: Your `ChannelComponent` interface is extremely lean—it only requires the `getDetails()` method. A `CommentLeaf` doesn't need to implement irrelevant methods like `addStream()` because those methods are kept specific to the `ChannelComposite` class, not the shared interface.

### 5. Dependency Inversion Principle (DIP)
*   **Definition**: High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces).
*   **Project Example**: Thanks to NestJS, your controllers (high-level) don't instantiate repositories or strategies (low-level) directly using the `new` keyword. Instead, they depend on abstractions injected via the constructor (`constructor(private readonly prisma: PrismaService)`). The NestJS IoC (Inversion of Control) container handles providing the actual instances.

---

## 4. Mastering UML and System Diagrams

You will likely be asked to draw your system on a whiteboard. Here is exactly how to draw the different diagrams for your project.

### 4.1 Entity-Relationship Diagram (ERD)
The ERD focuses strictly on the database tables.
*   **Draw boxes for**: `User`, `Subscription`, `Channel`, `Stream`, `Comment`.
*   **Relationships (Cardinality)**:
    *   `User` ||---|{ `Subscription` (One-to-Many: A user can have many past/present subscriptions).
    *   `User` ||---|| `Channel` (One-to-One: A user owns one channel).
    *   `Channel` ||---|{ `Stream` (One-to-Many: A channel has many streams).
    *   `Stream` ||---|{ `Comment` (One-to-Many: A stream has many comments).

### 4.2 UML Class Diagrams
Class diagrams show the static structure of your code.
*   **How to draw the Composite Pattern**:
    1. Draw a box at the top labeled `<<interface>> ChannelComponent` with method `+ getDetails()`.
    2. Draw a box for `ChannelComposite` and `StreamComposite`. Draw an arrow with a **hollow triangle** pointing from them up to `ChannelComponent` (this means "implements/realizes").
    3. Draw a line with a **hollow diamond** at the `ChannelComposite` end, pointing to `ChannelComponent`. This is *Aggregation*, meaning a Composite holds a list of Components.
    4. Draw a box for `CommentLeaf` and draw the hollow triangle arrow pointing up to `ChannelComponent`.
*   **How to draw the Strategy Pattern**:
    1. Draw a box labeled `VideoPlayerService` (the Context).
    2. Draw a box labeled `<<interface>> ViewingStrategy`.
    3. Draw an arrow with a **hollow diamond** from `VideoPlayerService` to `ViewingStrategy` (Aggregation/Composition—the service *has a* strategy).
    4. Draw boxes for `FreeViewingStrategy` and `PaidViewingStrategy` with hollow triangle arrows pointing up to the `ViewingStrategy` interface.

### 4.3 UML Sequence Diagram
Sequence diagrams show the flow of messages over time. They are perfect for explaining your Nginx Auth flow.
1. **Actors/Lifelines** at the top: `Broadcaster (OBS)`, `Nginx (RTMP)`, `NestJS Backend`, `Database`.
2. **Step 1**: Draw an arrow from `OBS` to `Nginx` labeled: `Start Stream (streamKey="123")`.
3. **Step 2**: Draw an arrow from `Nginx` to `NestJS Backend` labeled: `HTTP POST /api/streaming/auth {name: "123"}`.
4. **Step 3**: Draw an arrow from `NestJS Backend` to `Database` labeled: `SELECT * FROM Channel WHERE streamKey="123"`.
5. **Step 4**: Draw a dashed return arrow from `Database` to `NestJS Backend` labeled: `Channel Data (Valid)`.
6. **Step 5**: Draw a dashed return arrow from `NestJS Backend` to `Nginx` labeled: `HTTP 200 OK`.
7. **Step 6**: Draw an arrow from `Nginx` to itself labeled: `Begin HLS Transcoding`.
8. **Step 7**: Draw a dashed arrow from `Nginx` back to `OBS` labeled: `Stream Accepted`.

---
*Tip for the Interview: When explaining these concepts, always tie the theory back to your specific code. Don't just define "Liskov Substitution"—explain how your `FreeViewingStrategy` is a perfect example of it!*
