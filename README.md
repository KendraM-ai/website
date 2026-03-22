# Ms. M's Classroom Website !4

**Live site:** https://kendram-ai.github.io/website/

A static, purple-themed classroom site hosted on **GitHub Pages** — GitHub's free static site hosting service. When you push a change to the `main` branch, the included GitHub Actions workflow automatically packages the files and publishes them to that URL within about a minute. There is no server to manage, no hosting bill, and no deployments to trigger manually — a commit is all it takes.

---

## Updating Class Content (No Coding Required!)

All class content lives in the **`content/`** folder as plain Markdown (`.md`) files. You can edit them directly on GitHub without installing anything.

| File | Section |
|------|---------|
| `content/english3.md` | English 3 |
| `content/english3-honors.md` | English 3 Honors |
| `content/ap-lang.md` | AP Language & Composition |
| `content/yearbook.md` | Yearbook |

### How to edit a file on GitHub

1. Open the file on GitHub (e.g., `content/english3.md`)
2. Click the **pencil icon** (✏️) in the top-right corner
3. Make your changes using the simple Markdown format shown below
4. Click **"Commit changes"** at the bottom — the site will update in about a minute!

---

## Markdown Quick Reference

```
# Big Heading
## Medium Heading
### Small Heading

Regular paragraph text goes here.

**bold text**   _italic text_

- Bullet item
- Another item

1. Numbered item
2. Another numbered item

[Link text](https://example.com)

| Column 1 | Column 2 |
|----------|----------|
| Row data | Row data |

> This is a blockquote — great for highlighted tips or reminders.

---   (horizontal rule / divider)
```

---

## One-Time GitHub Pages Setup

> Do this once when you first create the repository.

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Source", select **"GitHub Actions"**
4. Push any change to the `main` branch — the site will deploy automatically

After the first deploy, your site will be live at:
```
https://<your-github-username>.github.io/<repository-name>/
```

---

## Project Structure

```
website/
├── index.html                   # Main page (structure & layout)
├── css/
│   └── styles.css               # All styling (colors, fonts, layout)
├── js/
│   └── main.js                  # Accordion + markdown loading logic
├── content/                     # ← Edit these files to update class content
│   ├── english3.md
│   ├── english3-honors.md
│   ├── ap-lang.md
│   └── yearbook.md
└── .github/
    └── workflows/
        └── deploy.yml           # Auto-deploys to GitHub Pages on every push
```

---

## Customizing the Site

- **Change the teacher's name / school name** — edit the `<h1>` and `.tagline` in `index.html`
- **Change the color scheme** — edit the CSS variables at the top of `css/styles.css`
- **Add a new section** — duplicate one of the `<section class="class-section">` blocks in `index.html` and create a matching `.md` file in `content/`
