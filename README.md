# REMWaste Skip Size Selector Redesign

## Project Overview

This project is a complete redesign of the "Choose Your Skip Size" page from [wewantwaste.co.uk](https://wewantwaste.co.uk/), delivered as part of a coding challenge for a Mid-Level Full-Stack Developer position. The goal was to create a modern, responsive, and user-friendly interface for selecting skip sizes, while preserving all original functionality and integrating with the provided API.

## How to Run Locally

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd REMWaste
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Approach & Design Decisions

- **Modern, Clean UI:** The page was redesigned from scratch with a focus on clarity, accessibility, and a professional look, using Tailwind CSS for rapid iteration and consistency.
- **Componentization:** All UI elements (filters, skip cards, modals, theme toggle) are modular React components for maintainability and reusability.
- **Theme Support:** Light and dark mode toggle for accessibility and user preference, with all theme colors managed via a utility for consistency.
- **API-Driven:** Skip size data is fetched from the provided API endpoint, ensuring real-world data and up-to-date options. Data is normalized and enriched for the UI.
- **Accessibility:** Semantic HTML, ARIA labels, and keyboard navigation for inclusivity.
- **UX Enhancements:**
  - Animated modals and transitions
  - Clear filter and sort controls (with dropdowns and category menus)
  - Visual feedback for selections
  - Error and empty state handling
  - Mobile-friendly touch targets

## Mobile/Desktop Responsiveness

- **Mobile-First:** Layouts and components are designed to be fully functional and visually appealing on mobile devices first, then enhanced for desktop.
- **Responsive Grid:** Tailwind's responsive utilities ensure the skip cards and controls adapt smoothly from single-column mobile to multi-column desktop layouts.
- **Touch-Friendly:** All interactive elements are sized and spaced for easy use on touch devices.

## Use of AI Tools

- **GitHub Copilot:** Used extensively for code generation, refactoring, and rapid prototyping of UI components and utility functions.
- **AI-Assisted Design:** Leveraged Copilot for Tailwind class suggestions, accessibility improvements, and code documentation.
- **Workflow:** AI tools accelerated development, improved code quality, and enabled focus on higher-level design and UX decisions.

## Challenges & Solutions

- **API Data Mapping:** The API response required transformation to match the new UI's data model. A utility function was created to normalize and enrich the data (e.g., adding images, capacity info).
- **State Management:** Managing multiple filters, sorting, and modal states in a clean and predictable way was solved with React hooks and memoization.
- **Responsiveness:** Ensuring pixel-perfect layouts across breakpoints required careful use of Tailwind's grid and flex utilities, as well as custom media queries for edge cases.
- **Theme Consistency:** Dynamic theme color management was abstracted into a utility for easy maintenance and scalability.
- **Dropdown/Popover Logic:** For category and sorting dropdowns, custom logic was implemented to ensure accessibility, keyboard navigation, and closing on outside click.

## Live Demo

- [CodeSandbox Demo](https://codesandbox.io/p/github/your-username/remwaste-skip-selector)

## Screenshots

### Desktop

<img src="./public/screenshots/1.png" alt="Desktop Screenshot" width="500" />
<img src="./public/screenshots/2.png" alt="Desktop Screenshot" width="500" />

### Mobile

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="./public/screenshots/3.png" alt="Mobile 1" width="200" />
  <img src="./public/screenshots/4.png" alt="Mobile 2" width="189" />
</div>

---

**Approach Summary:**

- The redesign focused on clean code, modularity, and a seamless user experience across devices.
- All features were built with accessibility and maintainability in mind.
- AI tools were used as a core part of the workflow, in line with the company's AI-native culture.

Thank you for reviewing this submission. I look forward to discussing how my approach and skills can contribute to your AI-native SaaS platform!
