# DevStack

<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript" />
</div>

A modern, interactive app for developers to discover, compare, and build their ideal technology stack.

## Overview

DevStack is a sleek front-end project designed to help developers quickly explore trending technologies and assemble a personalized stack based on their needs. It combines a clean UI, responsive layout, and smooth interaction patterns to make the experience both intuitive and visually appealing.

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- Lucide React
- React Toastify
- JSON-driven content

## Key Features

1. Explore a curated list of modern developer tools and technologies.
2. Build a custom stack by adding or removing technologies with a single click.
3. Receive instant feedback through toast notifications and a polished, user-friendly interface.

## Why This Project?

DevStack helps simplify the decision-making process when choosing tools for a project. Instead of researching technologies manually, users can compare options visually and create a stack that fits their workflow.

## Getting Started

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:5173
```

## Project Goal

The goal of DevStack is to make technology selection simpler, faster, and more engaging for developers while showcasing strong front-end design and product thinking.








#QUESTION ANSWERS#

**Q1. What is JSX, and why is it used in React?**
JSX lets us write HTML-like code directly inside JavaScript. It makes creating React components much easier and cleaner to read.

**Q2. What is the difference between props and state?**
Props are read-only data passed down from a parent component. State is internal data managed inside a component that can change and cause the component to re-render.

**Q3. What does the useState hook do, and where did you use it in this project?**
`useState` helps a component store and update its local data. I used it to hold the fetched items list and manage selected items in the cart/deck.

**Q4. What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` handles side effects like fetching data. I used it to load the JSON data once when the page loads, preventing infinite re-render loops.

**Q5. Why does every item in a .map() list need a unique key prop?**
Keys help React identify which list items changed, were added, or removed. This speeds up rendering by updating only the specific item instead of the entire list.

**Q6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing UI elements based on a condition (like true or false).

*Example:* `{items.length === 0 && <p>No items added yet!</p>}`

**Q7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

* **Parent to Child:** Passed directly using props (e.g., `<Child data="{items}"/>`).
* **Child to Parent:** The parent passes a function as a prop, and the child calls that function with data as an argument.
