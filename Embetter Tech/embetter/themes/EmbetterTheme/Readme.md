+++
Steps for including and Tailwind css into Zola using CLI:

1) Go to your themes directory.

2) Run the command in terminal
    npm install -D tailwindcss
    npx tailwindcss init

3) Your tailwind.config.js file will be created. Inside it paste this code:
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./templates/*.html"],
    theme: {
        extend: {},
    },
    plugins: [],
    }

4) Inside your static folder of theme, create a css folder, create an input.css file and paste this code inside it:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

5) Run this code in your terminal:
    npx tailwindcss -i ./static/css/input.css -o ./static/css/styles.css --watch

    this will generate your output file .
    Now you can use tailwind classes in your templates. Just link your styles.css file into your html file.
    +++