## 1. What Cypress will test

Before setup:

* Jest tests small pieces of logic
* Cypress tests the application from the user’s point of view in the browser
* today we will automate real actions like typing, clicking, and checking UI behavior

You can say that Cypress is mainly being used here for **end-to-end testing**, where the user flow is tested in a real browser context. ([docs.cypress.io][2])

---

## 2. Install Cypress

Run:

```bash
npm install --save-dev cypress
```

This is the standard installation flow in the Cypress docs. ([docs.cypress.io][1])

---

## 3. Open Cypress for the first time

Run:

```bash
npx cypress open
```

The Cypress Launchpad should open. From there, choose **E2E Testing**. Cypress’s docs describe this as the normal way to open the app and start creating tests. ([docs.cypress.io][3])

---

## 4. Let Cypress create its starter files

When Cypress opens for the first time, it will create the basic Cypress structure in the repo. After setup, students will usually see files and folders like these:

```text
cypress/
  e2e/
  fixtures/
  support/
cypress.config.js
```

Cypress supports organizing tests in spec files under the E2E folder, and it watches these files while you work. ([docs.cypress.io][4])

---

















