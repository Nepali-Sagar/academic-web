# Web Development Course - Folder Structure

This folder contains organized web development coursework for **CSY1063 Web Development**.

## 📁 Folder Organization

```
coding/
├── 01-html-basics/              # HTML fundamentals and DOM basics
│   ├── index.html
│   ├── main.js
│   ├── script.js
│   └── style.css
│
├── 02-css-basics/               # CSS fundamentals and float layouts
│   ├── index.html
│   └── style.css
│
├── 03-javascript-basics/        # JavaScript basics and functions
│   ├── functions/               # Function examples
│   │   ├── index.html
│   │   ├── main.js
│   │   └── style.css
│   ├── index.html               # DOM manipulation and keyboard events
│   ├── script.js
│   └── style.css
│
├── 04-dom-manipulation/         # DOM & JavaScript interactivity
│   ├── assignment/              # DOM assignment project
│   │   ├── index.html
│   │   ├── main.js
│   │   └── style.css
│   ├── box-position/            # Box positioning with keyboard control
│   │   ├── index.html
│   │   ├── main.js
│   │   └── style.css
│   ├── index.html               # DOM manipulation examples
│   ├── main.js
│   └── style.css
│
├── 05-css-layouts/              # CSS layout techniques
│   ├── float/                   # Float-based layouts
│   │   ├── float.html
│   │   └── float.css
│   ├── flex/                    # Flexbox layouts
│   │   ├── flex.html
│   │   └── flex.css
│   ├── grid/                    # CSS Grid layouts
│   │   ├── grid.html
│   │   └── grid.css
│   └── position/                # CSS positioning (absolute, relative, etc.)
│       ├── position.html
│       └── position.css
│
├── 06-responsive-design/        # Responsive design examples
│   ├── float/                   # Responsive float layouts
│   │   ├── index.html
│   │   └── style.css
│   └── flex/                    # Responsive flex layouts
│       ├── index.html
│       └── style.css
│
├── 07-forms/                    # HTML forms and form styling
│   ├── form.html
│   └── form.css
│
├── 08-assignment-pages/         # Main assignment project (multi-page)
│   ├── css/                     # CSS files for each page
│   │   ├── style.css            # Home page styles
│   │   ├── page2.css            # Page 2 styles
│   │   └── page3.css            # Page 3 styles
│   ├── js/                      # JavaScript for assignment
│   │   └── main.js
│   ├── index.html               # Home page
│   ├── page2.html               # Page with list and links
│   └── page3.html               # Page with images
│
├── 09-background-styling/       # CSS background properties and effects
│   ├── index.html
│   └── style.css
│
├── assets/                      # Shared assets (images, fonts)
│   ├── img/                     # Image files
│   └── fonts/                   # Custom fonts
│
└── README.md                    # Course overview
```

## 📚 What's in Each Folder?

### 01-html-basics
Basic HTML and DOM manipulation with keyboard events. Demonstrates moving elements with arrow keys.

### 02-css-basics
Fundamental CSS concepts including layout with floats and positioning.

### 03-javascript-basics
JavaScript fundamentals including:
- Variables and functions
- DOM element selection and manipulation
- Event listeners (click, keydown, etc.)
- DOM manipulation on page load

### 04-dom-manipulation
Advanced DOM manipulation techniques:
- **assignment/**: Click event that changes container background color
- **box-position/**: Move boxes around using arrow keys on keyboard
- Main folder: Opacity changes and DOM element styling

### 05-css-layouts
Different CSS layout methods:
- **float/**: Traditional float-based layouts
- **flex/**: Modern flexbox layouts with alignment and ordering
- **grid/**: CSS Grid layouts with auto-fit and gap properties
- **position/**: CSS positioning (absolute, relative) with z-index and transforms

### 06-responsive-design
Responsive design implementations with media queries:
- **float/**: Responsive layouts using floats
- **flex/**: Responsive layouts using flexbox with proper breakpoints

### 07-forms
HTML form elements and form styling with CSS. Includes text inputs, password fields, radio buttons, and submit buttons.

### 08-assignment-pages
Multi-page assignment project with:
- **index.html**: Home page with header, navigation, and content sections
- **page2.html**: Page with unordered list and navigation links
- **page3.html**: Page with images and image containers
- **css/**: Separate stylesheets for responsive design
- **js/**: JavaScript functionality

### 09-background-styling
CSS background properties including:
- Background gradients
- Background images
- Background positioning and sizing

## 🎯 Learning Path

Follow this sequence for a structured learning experience:

1. **01-html-basics** → Learn HTML structure and basic DOM
2. **02-css-basics** → Understand CSS fundamentals
3. **03-javascript-basics** → Learn JavaScript and functions
4. **04-dom-manipulation** → Combine HTML, CSS, and JavaScript
5. **05-css-layouts** → Master different layout methods
6. **06-responsive-design** → Create responsive websites
7. **07-forms** → Build interactive forms
8. **08-assignment-pages** → Complete multi-page project
9. **09-background-styling** → Advanced CSS styling

## 🔗 File References

All file references have been updated to work with the new structure:
- Asset paths remain in `/assets/` (accessible from root)
- Relative paths used within project folders where applicable
- CSS and JS files linked properly in HTML files

## 📝 Notes

- Each folder is self-contained with its own HTML, CSS, and JavaScript files
- Consistent naming conventions used (kebab-case for folders, standard extensions)
- Clear separation of concerns between different topics
- Ready to view using a local server or VS Code Live Server extension

