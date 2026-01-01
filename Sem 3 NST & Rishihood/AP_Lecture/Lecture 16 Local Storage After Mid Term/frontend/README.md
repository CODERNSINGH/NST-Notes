# LocalStorage Auth Demo — Lecture 16

This small demo shows how to store and verify a username and password in the browser's `localStorage` for teaching purposes.

Files
- `index.html` — interactive demo: Register, Login, Show stored users, Clear storage.

How to run
1. Open `index.html` in any modern browser (Chrome, Firefox, Safari).
2. Use the Register form to add a username and password. The demo hashes the password (SHA-256) before saving to `localStorage` under the `users` key.
3. Use the Login form to verify credentials. The demo hashes the entered password and compares with the stored hash.
4. Click "Show Stored Users" to display the current `users` map (you will see username => password-hash pairs).

Learning objectives (what to teach)
- What localStorage is and how it persists data in the browser.
- How to serialize data (JSON) for storage and parsing on retrieval.
- The difference between storing plain text vs. hashed passwords.
- Limitations and security concerns of client-side storage.

Security & teaching notes (important)
- localStorage is accessible to any JavaScript running on the page (including injected scripts). Do not store sensitive secrets here in production.
- Client-side hashing (SHA-256) reduces plain-text exposure but is NOT sufficient for production authentication. Use server-side hashing with a salt and a slow KDF (bcrypt/argon2), plus secure HTTPS and HttpOnly cookies for session management.
- Discuss attack vectors: XSS (which can read localStorage), lack of server validation, weak hashing, replay attacks.

Demo talking points / exercise ideas
- Show what happens when students open Developer Tools -> Application -> Local Storage and view the `users` entry.
- Try registering two users with the same password — hashes match; explain why salting is necessary.
- Replace the hashing with a plain-text store and show the difference (dangerous — only for class lab with isolated environment).

Classroom checklist
- [ ] Open `index.html` in the lecture machine
- [ ] Register at least one user
- [ ] Verify login succeeds/fails appropriately
- [ ] Show Developer Tools and inspect `localStorage`
- [ ] Discuss why this pattern is only for demos and not real apps

If you want, I can also:
- Add a small animation or nicer UI.
- Add a small unit-test harness (Node + JSDOM) to exercise the hashing and storage functions.
- Convert the demo to use sessionStorage or IndexedDB for comparison.
