Here’s a clear **`notes.md`** you can use:

---

# Notes on Sync vs Async File Handling in Node.js

## 1. Synchronous File Handling

* Example: `fs.writeFileSync(path, data)`
* Execution blocks the event loop until the operation is finished.
* Good for simple scripts, but **not recommended** for production (can freeze the application).

```js
const fs = require("fs")

for (let i = 1; i < 9; i++) {
    fs.writeFileSync(`data/file${i}.txt`, generateRandomNumber(i))
}
```

---

## 2. Asynchronous File Handling

* Example: `fs.writeFile(path, data, callback)`
* Non-blocking → execution continues without waiting for the file write to complete.
* **Callback** is passed to handle the result (success or error) after the async task finishes.
* Does **not return a Promise by default** (because Node.js used callback-style APIs before Promises were common).

```js
const fs = require("fs")

for (let i = 1; i < 9; i++) {
    fs.writeFile(`data/file${i}.txt`, generateRandomNumber(i), () => {
        console.log(`File ${i}.txt is created`)
    })
}
```

---

## 3. Why We Pass a Callback in Async?

* Async functions in Node.js **do not return Promises by default**.
* Instead, they expect a **callback function** as the last argument.
* This callback is executed once the task finishes.
* Pattern: **Error-first callback**

  * First argument → error (if any)
  * Second argument → result

Example:

```js
fs.writeFile("example.txt", "Hello World", (err) => {
    if (err) {
        console.error("Error writing file:", err)
    } else {
        console.log("File written successfully!")
    }
})
```

---

## 4. If You Want Promises Instead

* Use `fs.promises` (Promise-based API).
* Or wrap `fs.writeFile` with `util.promisify`.

```js
const fs = require("fs").promises

async function createFiles() {
    for (let i = 1; i < 9; i++) {
        await fs.writeFile(`data/file${i}.txt`, generateRandomNumber(i))
        console.log(`File ${i}.txt is created`)
    }
}
createFiles()
```

---

✅ **Summary**

* **Sync →** blocks execution until done.
* **Async (callback) →** non-blocking, no Promise by default, requires callback.
* **Async (Promise/async-await) →** modern approach, easier to handle.

---

# Now all Asyc

- Lib u v is software which run Javascript it's C++ programme 

- if i am getting 100K together how the request will be serve