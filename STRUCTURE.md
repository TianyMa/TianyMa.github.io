# Website Structure Guide

This document describes the organization of files and folders in this Jekyll-based personal website.

## Directory Structure

```
TianyMa.github.io/
├── _config.yml           # Main Jekyll configuration
├── _data/                # Data files (locales, contact info, etc.)
├── _drafts/              # Unpublished draft posts
├── _includes/            # Reusable HTML components
├── _plugins/             # Custom Jekyll plugins
├── _posts/               # Published blog posts
├── _tabs/                # Main navigation pages
├── assets/               # CSS, JS, and theme assets
├── images/               # Image files (organized by year)
│   ├── 2024/            # Images from 2024
│   ├── 2025/            # Images from 2025
│   ├── UCL-2024/        # UCL-specific images
│   ├── logos/           # University and company logos
│   └── [misc files]     # General images (profile, backgrounds, etc.)
└── tools/               # Build and deployment scripts

## Content Organization

### Blog Posts (_posts/)

All blog posts follow the naming convention: `YYYY-MM-DD-title.md`

- Posts are automatically sorted by date
- Use descriptive titles in filenames
- Include proper front matter (title, date, categories, tags, image)

### Navigation Pages (_tabs/)

Main navigation pages include:
- `about.md` - Personal information and contact details
- `archives.md` - Chronological post archive
- `categories.md` - Posts organized by category
- `tags.md` - Posts organized by tags
- `projects.md` - Project showcase
- `github.md` - GitHub integration
- `sponsor.md` - Sponsorship information

### Images (images/)

Images are organized by:
- **Year folders** (2024/, 2025/) - General images by year
- **Project folders** (UCL-2024/) - Project-specific images
- **logos/** - University and company logos
- **Root level** - Profile pictures and site-wide assets

## Writing Guidelines

### Front Matter Template

```yaml
---
title: Your Post Title
date: YYYY-MM-DD HH:MM:SS +TIMEZONE
author_id:
  - name: Tianyi MA
    github: TSdreamer
    url: tsdreamer.github.io
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
pin: false
math: false
mermaid: false
image:
  path: /images/YYYY/image-name.jpg
  alt: Image description
---
```

### Image References

When referencing images in posts:
- Use absolute paths: `/images/2024/filename.jpg`
- For logos: `/images/logos/logo-name.png`
- For project images: `/images/UCL-2024/image.png`

### Categories and Tags

**Common Categories:**
- PhD Life
- Homelab
- Lab
- Research

**Common Tags:**
- weekly updates
- DMEEA
- introduction
- typography

## Maintenance

### Adding New Posts

1. Create a new file in `_posts/` with format: `YYYY-MM-DD-descriptive-title.md`
2. Add proper front matter
3. Place images in appropriate year folder
4. Reference images using absolute paths

### Draft Posts

- Place unfinished posts in `_drafts/`
- No date needed in filename
- Move to `_posts/` when ready to publish

### Image Management

- Keep images organized by year
- Use descriptive filenames
- Optimize images before uploading
- Store logos separately in `logos/` folder

## Build and Deploy

This site uses GitHub Actions for automatic deployment. See `.github/workflows/pages-deploy.yml` for details.

### Local Development

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview the site.

---

Last updated: March 2026
