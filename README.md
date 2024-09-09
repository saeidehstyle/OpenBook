# OpenBook 

This project is a simple JavaScript DOM manipulation example for managing a list of books. The project features adding, editing, searching, hiding, and deleting books with animations. It also includes a dark mode toggle, and all book data is saved in the browser's `localStorage`.

## Project Structure

The project consists of the following files:

- `index.html`: Contains the HTML structure and references to external CSS and JavaScript files.
- `styles.css`: The stylesheet for the page's layout and design.
- `javascript.js`: The JavaScript logic for DOM manipulation, event handling, and data management using `localStorage`.

## Features

### 1. Book List Management
- **Add New Book**: Users can add a new book to the list by typing the book's name in a modal popup.
- **Delete Book**: Each book has a delete button that allows users to remove the book from the list.
- **Edit Book Name**: Users can double-click on a book name to edit it.
- **Hide/Show Books**: Users can hide or show the list of books using a checkbox.
  
### 2. Search Functionality
- Users can search for books using the search bar. Books that match the search query are displayed, while others are hidden.

### 3. Theme Toggle
- Users can switch between light and dark themes using the toggle button. The current theme is applied instantly to the website.

### 4. LocalStorage
- Books added to the list are saved in `localStorage`. When the user refreshes the page, the books are reloaded from `localStorage`.

### 5. Animations
- **Fade-in/Fade-out Animations**: Books are animated when added or deleted using CSS animations.

## Technologies Used

- **HTML5**: Provides the structure and layout of the page.
- **CSS3**: Styles the interface, including layout, transitions, animations, and theming.
- **JavaScript (ES6+)**: Manages the DOM, event listeners, localStorage, and theme switching logic.
- **Bootstrap 4.5.2**: Used for responsive design, modal windows, and other UI components.
- **JQuery**: Simplifies DOM manipulation and integrates with Bootstrap modals.
