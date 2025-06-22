# Code-Challenge-III
# Blog Post Manager Application

This is a simple single-page application built with HTML, CSS (Tailwind CSS), and JavaScript to manage blog posts. It interacts with a mock REST API served by `json-server`, allowing users to view, add, update, and delete blog posts.

## Features

* **View Posts:** See a list of all blog post titles and associated images.
* **View Post Details:** Click on a post title to view its full content, author, and image. The first post's details are displayed by default on page load.
* **Add New Post:** A form is available to create and add new blog posts. New posts are persisted to the backend API.
* **Edit Post:** An "Edit" button appears on the detail view, allowing users to modify the title and content of an existing post. Changes are persisted to the backend API.
* **Delete Post:** A "x" button removes a post from the list.
* **Responsive Design:** The layout adjusts when clicked
* **Custom Message System:** Instead of browser `alert()`s, a custom message box is used for user feedback.

## Technologies Used

* **HTML5:** For the application's structure.
* **CSS3 (Tailwind CSS):** For styling and responsive design.
* **JavaScript (ES6+):** For all frontend logic and API interactions.
* **`json-server`:** A powerful tool to create a mock REST API for development purposes.

## Setup and Installation

Follow these steps to get the application up and running on your local machine.

### Steps

1.  **Clone or Download the Project:**
    If using Git:
    ```
    git clone <repository-url> # If this project is in a repository
    

2.  **Create Project Structure:**
    Ensure you have the following folder structure:
    ```
    
    ├── index.html
    ├── db.json
    ├── css/
    │   └── styles.css
    └── src/
        └── index.js
    ```

3.  **Populate `db.json`:**
    Create a `db.json` file in the root directory and add some sample data.
  

4.  **Populate `index.html`, `css/styles.css`, and `src/index.js`:**
    Copy the code for these files into their respective locations (as provided in our previous conversations).

5.  **Install `json-server`:**
    This will serve your mock API.
    ```bash
    npm install -g json-server@0.17.4
   
## Usage

* **View Posts:** The left panel (`#post-list`) will display all blog post titles.
* **View Details:** Click on any post title in the left panel to see its full details (title, author, image, content) in the right panel (`#post-detail`).
* **Add Post:** Use the "Add New Post" form at the bottom to create a new post. Fill in the title, content, and author, then click "Add Post."
* **Edit Post:** When viewing a post's details, click the "Edit Post" button. An edit form will appear, pre-populated with the current post's data. Make your changes and click "Update Post."
* **Delete Post:** When viewing a post's details, click the "x" button.

## Project Structure

