# Flow Builder

A sleek and minimal drag-and-drop flow editor built with [React Flow](https://reactflow.dev/), [shadcn/ui](https://ui.shadcn.com/), and [Tailwind CSS](https://tailwindcss.com/).  
This tool allows you to create, connect, and configure nodes in an intuitive canvas environment. It includes a customizable dock for adding elements, a preview panel, zoom controls, and an edit drawer for node configuration.

---

## Features

- Drag-and-drop node editor powered by React Flow  
- Custom node components with headers, images, and descriptions  
- Dock with quick access to add nodes and control the viewport scale  
- Edit drawer to update node label, description, color, and image URL  
- Zoom controls with slider, plus preview panel in the bottom-right corner  
- Validation when saving: ensures only one entry node without incoming edges  
- Integrated with [Sonner](https://sonner.emilkowal.ski/) for clean error and success toasts  

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or later recommended)  
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)  

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/flow-builder.git
cd flow-builder
npm install
```

If you prefer pnpm:

```bash
pnpm install
```

---

## Development

Run the project in development mode:

```bash
npm run dev
```

Then open http://localhost:5173 (or the port shown in your terminal).

---

## Build

To create an optimized production build:

```bash
npm run build
```

You can preview the build with:

```bash
npm run preview
```
---

## Saving and Validation

When clicking the Save button in the top-right corner:

- If there are multiple nodes and more than one node has no incoming edges (empty target handle), an error is shown.  
- Otherwise, the flow is saved and logged to the console.  

---

## Customization

- Update `TextNode.tsx` to change the appearance of message nodes.  
- Adjust `FlowDock.tsx` to add new node types or modify the dock layout.  
- Modify `NodeDrawer.tsx` to add more editable fields for nodes.  
