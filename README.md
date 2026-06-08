# My Project Showcase

This is my personal portfolio hosted on GitHub Pages. 

## How to add a new project

Follow these 3 simple steps to add a new project to the website:

**Step 1: Add the Project Files**
* Create a new folder inside the `projects/` directory (e.g., `projects/new_project`).
* Place your `index.html`, `style.css`, etc., inside that new folder.

**Step 2: Add an Image**
* Take a screenshot or find an image for the project.
* Name it the same as your project folder (e.g., `new_project.jpg`).
* Place this image inside the `images/` directory.

**Step 3: Update `scrypt.js`**
Open `scrypt.js` and add a new block to the top of the `projects` list:

```javascript
    {
        title: "Name of New Project",
        description: "A short description of what it does.",
        url: "projects/new_project/index.html",
        image: "images/new_project.jpg"
    },