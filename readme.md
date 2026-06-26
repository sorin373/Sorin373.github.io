# Engineering Portfolio

A static-site-compatible personal engineering portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Markdown/MDX-style content files, and Lucide icons.

## Local development

1. Install dependencies: npm install
2. Start the development server: npm run dev
3. Build for production: npm run build
4. Check TypeScript: npm run typecheck

## Main files to edit

- Personal details: src/config/site.ts
- Projects: content/projects/*.mdx
- Notes: content/notes/*.mdx
- Experience timeline: content/experience.ts
- Skills: content/skills.ts
- Publications/documents: content/publications.ts
- CV: public/documents/cv.pdf
- Images: public/profile and public/projects

## Add a new project

Create a new file in content/projects, for example content/projects/new-project.mdx. The filename becomes the URL slug: /projects/new-project.

Use this frontmatter:

---
title: "Project title"
shortDescription: "One-sentence project summary."
date: "2026"
status: "In progress"
category: "Space Systems"
featured: false
thumbnail: "/projects/new-project/cover.svg"
technologies:
  - C++
  - Numerical Modelling
github: ""
demo: ""
report: ""
---

Then write the case study below the frontmatter using Markdown headings, lists, tables, images and code blocks.

## Modify an existing project

Open the project file in content/projects and edit either the frontmatter fields or the Markdown body. Project cards and project pages update from the same file, so do not edit React components for project content.

## Mark a project as featured

Set featured: true in the project frontmatter. Featured projects appear on the homepage and show a featured indicator on cards.

## Add project images

1. Create a folder in public/projects using the project slug.
2. Add images such as cover.svg, diagram.png or test-setup.webp.
3. Reference them from frontmatter or Markdown with paths starting at /projects, for example /projects/new-project/cover.svg.

## Add GitHub, report and demo links

Set github, report or demo in the project frontmatter. Empty strings are hidden automatically.

## Add a new project category

Use a new category value in any project frontmatter. The Projects page filter is generated automatically from project files.

## Add an engineering note

Create a file in content/notes, for example content/notes/my-note.mdx, with frontmatter:

---
title: "Note title"
description: "Short note summary."
date: "2026-02-01"
topic: "Systems Engineering"
featured: false
---

Write the note below the frontmatter in Markdown. Disable the notes section by setting sections.notes to false in src/config/site.ts.

## Deployment

### Vercel

1. Push the repository to GitHub.
2. Import it in Vercel.
3. Use the default Next.js settings.
4. Replace src/config/site.ts siteUrl with your final domain.

### GitHub Pages

This app uses static-compatible content and unoptimized images. For GitHub Pages, configure a static Next.js export workflow or deploy with a GitHub Action that runs npm install and npm run build. If you publish under a repository subpath, add the required basePath and assetPrefix in next.config.mjs.

## Replace personal information

Before publishing, replace: name, email, location, LinkedIn, GitHub, CV, profile image, university details, real project descriptions, actual links, and siteUrl.
