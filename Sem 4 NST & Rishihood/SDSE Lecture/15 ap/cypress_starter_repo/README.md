# Todo App with Vite and React

## About this project

This is a simple Todo application built using **React** and **Vite**. It is designed as a small starter project to help learners understand how a React application works and how user interactions are handled in the UI.

The app allows users to:
- view a list of todo items
- add a new todo
- delete an existing todo
- see an empty state when no todos are present

The project is intentionally kept simple so it can also be used later for practicing frontend testing with tools like Cypress.

---

## Features

- Add a new todo item
- Delete an existing todo item
- Display a default list of todos
- Show an empty state when no todos are left
- Simple and beginner-friendly React structure

---

## Tech stack

- React
- Vite
- JavaScript
- CSS

---

## Project structure

```text
todo-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
````

---

## Setup instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd todo-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open the app in the browser

After the server starts, open the local URL shown in the terminal.

---

## Available scripts

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## How the app works

* The app starts with a default list of todo items
* Users can type a task in the input field
* Clicking the **Add** button adds the new task to the list
* Clicking the **Delete** button removes a task from the list
* If all tasks are deleted, an empty state message is shown

---



