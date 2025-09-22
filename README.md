# Label Lift - Mini Music Distribution Dashboard

This project is a mini-dashboard for a music distribution platform, built as a hands-on assessment for a frontend developer role. It was created using Next.js and React, focusing on fundamentals like routing, API integration, state management, and creating a polished, responsive user interface.

---

## ✅ Features Completed

This project successfully implements all mandatory and bonus features outlined in the assignment brief.

### Core Requirements
- [cite_start]**Mock Login Page**: A simple, styled login page that redirects to the dashboard on submit. [cite: 10]
- [cite_start]**Dashboard Page**: Displays a list of all music tracks in a clean, responsive table format showing Title, Artist Name, Release Date, and Status. [cite: 11]
- **Track Upload Page**: A functional form allowing users to add a new track with fields for Title, Artist, Release Date, and Genre. [cite_start]On submission, the new track is added to the main list. [cite: 13, 14]
- [cite_start]**Track Details Page**: A dynamic page route (`/track/[id]`) that fetches and displays detailed information for a single, selected track. [cite: 15]
- [cite_start]**Mock Backend API**: All data is served from a self-contained mock backend built using Next.js API Routes, as required. [cite: 12, 21]
- [cite_start]**Responsive Design**: The entire application is fully responsive and mobile-friendly, with the dashboard transforming into a card-based layout on smaller screens for better usability. [cite: 23, 61]

### ✨ Bonus & Extra Features
- [cite_start]**Search/Filter**: The dashboard includes a real-time search bar to filter tracks by title or artist. [cite: 16]
- [cite_start]**Dark/Light Theme Switcher**: A theme toggle is included in the header to switch the entire application between light and dark modes. [cite: 16]
- [cite_start]**Persistence with `localStorage`**: The user's theme choice is saved in `localStorage` and persists across browser sessions. [cite: 16]
- **Toast Notifications**: Professional pop-up notifications provide user feedback on successful track uploads.
- **Skeleton Loaders**: A modern skeleton loading state is shown on the dashboard while data is being fetched, improving the perceived performance and user experience.
- **Animated Background**: The login page features an interactive, animated particle background to create a more engaging and attractive user interface.

---

## Explanation of Approach

- **Project Structure**: The project uses the `src` directory structure. Pages and API routes are organized by feature in `src/app`. Reusable components are in `src/components`, and global state logic (like the theme context) is in `src/context`.
- **API & State Management**: A mock backend was created using Next.js API Routes to keep the project self-contained. [cite_start]State is managed with standard React Hooks (`useState`, `useEffect`, `useContext`) to demonstrate mastery of React fundamentals without external libraries, as required by the assignment. [cite: 22]

---

## 🚀 Setup Instructions

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd <repository-name>
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.