# Engineering Portfolio

## Deploy to GitHub Pages

This project is configured for static export with GitHub Pages.

1. Push the project to a GitHub repository.
2. In GitHub, open Settings -> Pages.
3. Under Build and deployment, set Source to GitHub Actions.
4. Push to the main branch. The workflow in .github/workflows/deploy-github-pages.yml builds the site and publishes the out folder.

For a project site such as https://your-username.github.io/repository-name/, the workflow sets GITHUB_PAGES_REPO automatically so Next.js uses the correct base path.

For a user site such as https://your-username.github.io/, remove the GITHUB_PAGES_REPO environment variable from the workflow or leave it empty so there is no base path.
