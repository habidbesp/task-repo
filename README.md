# Task-repo

## Overview

This project is a visually appealing and responsive web layout. It incorporates modern techniques such as Sass for styling, responsive image handling with `picture` elements, and optimizations using `webp` images for better performance.

## Demo

You can view the live demo of the project by following this link:

[task-demo](https://habidbesp.github.io/task-repo/)

## Features

- **Responsive Design**: The layout adapts seamlessly across different screen sizes, including mobile-first design principles.

- **Image Optimization**: Utilizes `webp` image format for better performance and quality. Desktop users get `webp` images, while mobile users get images in the appropriate format. All images were processed using the terminal and tools like `cwebp` for efficient image conversion.

- **Sass with Real-Time Preview**: The project is set up to use Sass for styles, with npm scripts for real-time style updates.

- **Google Fonts**: The project uses `Nunito` font from Google Fonts to improve typography.

## Technologies Used

- **HTML5**: For the markup structure.

- **CSS3 (Sass)**: For responsive and modular styling.

- **Sass**: Preprocessor used for cleaner, more maintainable CSS code.

- **WebP Images**: Used to improve load times and visual performance. Conversion of images to `webp` format was done using terminal-based tools like `cwebp`, ensuring optimized image handling.

- **GitHub Pages**: Deployed directly from the `gh-pages` branch.

## Setup Instructions

1. **Clone the repository**:

```bash
git clone https://github.com/habidbesp/task-repo.git
cd tractive-task
```

2. **Install dependencies**: Make sure you have Node.js and npm installed. Run:

```bash
npm install
```

3. **Running the project**: To start the live development server and compile Sass:

```bash
npm start
```

This will launch the project in your browser with real-time updates for changes in the Sass files.

4. **Compile CSS manually**: If you need to manually compile Sass, you can run the following command:

```bash
npm run compile:sass
```

5. **File Structure**:

```bash
├── /css
│   └── style.css          # Compiled CSS
│
├── /img
│   ├── human-society-desktop.webp
│   ├── human-society-desktop.png
│   ├── human-society-mobile.webp
│   └── human-society-mobile.png  # For non-supporting browsers
├── /src/sass
│   ├── _animations.scss   # CSS animations (keyframes)
│   ├── _base.scss         # Base styles (e.g., resets, global styles)
│   ├── _component.scss    # Component-specific styles
│   ├── _container.scss    # Layout and container-specific styles
│   ├── _heart.scss        # Heart component styles
│   ├── _mixins.scss       # Reusable Sass mixins
│   ├── _shared.scss       # Shared styles across components
│   ├── _variables.scss    # Sass variables
│   └── main.scss          # Main entry point for Sass, imports all the partials
├── index.html             # Main HTML file
└── package.json           # Project dependencies and scripts
```

## How to Contribute

Feel free to fork the repository and make any improvements or suggest new features. If you'd like to contribute, please follow the steps below:

1. Fork the repo.
2. Clone your forked repo.
3. Make changes and commit them.
4. Submit a pull request.

## Acknowledgements

- **Remove.bg**: Used for background removal in images to improve visual quality.

- **cwebp**: Used for converting images to `webp` format for optimized image loading. Image conversion was carried out directly in the terminal, highlighting the ability to manage image formats efficiently using command-line tools.

- **Google Fonts**: For beautiful typography with Nunito font.
