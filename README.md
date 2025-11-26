# About
Embetter's Main Website hosted at https://embetter.in/

## Getting Started Locally

If you'd like to run the website locally for development or testing, follow these steps:

### Prerequisites

Make sure you have [Hugo](https://gohugo.io/) installed on your system.

### Clone the Repository

You can clone the repository using either SSH or HTTPS, depending on your GitHub connection setup.

### Navigate to the Project Directory

Change your working directory to the cloned repository:

```bash
cd embetter.github.io
```

### Start the Local Server

Now, you can use Hugo to serve the website locally. Run the following command:

```bash
hugo server
```

### Download dependencies
Download dependencies for tailwind css:

```bash
npm install
```

### Start Tailwind CSS
Download dependencies for tailwind css:

```bash
npx tailwindcss -i ./static/css/input.css -o ./static/css/output.css --watch
```

### Access the Local Website

Once the server is up and running, open your favorite web browser and navigate to:

[http://localhost:1313/](http://localhost:1313/)
