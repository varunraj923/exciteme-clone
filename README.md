# ExciteMe Clone - React Project

A responsive clone of staging.exciteme.ai homepage built with React.

## 🚀 How to Run

### Prerequisites
- Node.js installed (https://nodejs.org)
- npm (comes with Node.js)

### Steps

```bash
# 1. Go into the project folder
cd exciteme-clone

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000**

### Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
exciteme-clone/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx         # Left sidebar navigation
│   │   ├── Sidebar.module.css
│   │   ├── Header.jsx          # Top search bar + sign in
│   │   ├── Header.module.css
│   │   ├── FilterBar.jsx       # Category chips + tab filters
│   │   ├── FilterBar.module.css
│   │   ├── CharacterCard.jsx   # Individual AI character card
│   │   └── CharacterCard.module.css
│   ├── App.jsx             # Root component, layout + click handler
│   ├── App.module.css
│   ├── data.js             # Mock character data + categories
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
└── package.json
```

---

## 🔑 Key Features

- **Responsive Design** – 2 columns on mobile → 6 columns on large screens
- **Sidebar** – Collapsible on mobile with overlay, sticky on desktop
- **Category Chips** – Horizontally scrollable category filter
- **Tab Filters** – All / Following / New / Popular tabs
- **Toggle Switches** – Premium and NSFW toggles (working UI)
- **Character Cards** – Image cards with hover chat button, tags, ratings
- **Alert on Click** – Every click shows: "Work in progress, get back in few days"

---

## 🧠 Interview Answer Guide

**Q: Why React?**
→ Component-based architecture makes UI reusable and maintainable. Each section (Sidebar, Header, Cards) is its own isolated component.

**Q: Why CSS Modules?**
→ Scoped styles – no class name conflicts between components. Cleaner than inline styles, better than global CSS.

**Q: How is it responsive?**
→ CSS Grid with responsive breakpoints: `grid-template-columns` changes at 600px, 900px, 1200px, 1500px. Sidebar uses `position: fixed` + transform on mobile.

**Q: How does the click handler work?**
→ Single `handleAction` function in `App.jsx` is passed as a prop to all child components. Every interactive element calls `onAction()` which triggers the alert.

**Q: What are CSS Modules?**
→ CSS files where class names are locally scoped to the component. You import them as an object: `import styles from './Component.module.css'` and use `className={styles.myClass}`.

**Q: How does the grid layout work?**
→ CSS Grid with `repeat(auto-fill or fixed count, 1fr)`. Media queries change the column count at different breakpoints.

**Q: What is `aspect-ratio: 3/4` on the card?**
→ Maintains consistent card height proportional to width, so cards look uniform regardless of screen size.
# exciteme-clone
