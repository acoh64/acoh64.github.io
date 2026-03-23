# acoh64.github.io

Personal website of Alexander E. Cohen, built with [Jekyll](https://jekyllrb.com/) using the [al-folio](https://github.com/alshedivat/al-folio) theme.

**Live site:** [https://acoh64.github.io](https://acoh64.github.io)

## Branch layout

| Branch | Purpose |
|---|---|
| `new-site` | Jekyll source code. **All content and config changes go here.** |
| `gh-pages-local` | Compiled static HTML served by GitHub Pages. Never edit directly. |
| `master` | Outdated (pre-redesign). Not actively used. |

## Simple Instructions
1. `docker compose up`
2. Open https://localhost:8080 to view the site
3. Ctrl+C to stop server once I am happy with everything
4. `docker compose run --rm jekyll bundle exec jekyll build`
5. `cp -r _site ../tmp`
6. Commit and push code
7. Switch to gh-pages-local: `git checkout gh-pages-local`
8. `git rm -rf .`
9. `git clean -fd`
10. `cp -r ../tmp/_site/* .`
11. `git add -A`
12. `git commit -m "deploy: update site"`
13. `git push origin gh-pages-local`
14. Switch back to new-site: `git checkout new-site` 

# 6. Switch back to the source branch
git checkout new-site

## Prerequisites

### Option A: Docker (recommended)

Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/).

### Option B: Native Ruby/Jekyll

Install [Ruby](https://www.ruby-lang.org/en/downloads/), [Bundler](https://bundler.io/), and [Python](https://www.python.org/) (for Jupyter notebook support). Then from the `new-site` branch:

```bash
bundle install
pip install jupyter
```

## Local development

Start from the `new-site` branch:

```bash
git checkout new-site
```

### With Docker

```bash
docker compose pull    # first time, or to update the image
docker compose up
```

The site will be served at **http://localhost:8080** with live reload. Changes to most files are picked up automatically; changes to `_config.yml` trigger an automatic restart.

### Without Docker

```bash
bundle exec jekyll serve --port 8080 --livereload
```

The site will be served at **http://localhost:8080**.

## Building the site for deployment

The build step compiles the Jekyll source into static HTML in the `_site/` directory.

### With Docker

If the container is already running (`docker compose up`), exec into it:

```bash
docker compose exec jekyll bundle exec jekyll build
```

Or do a one-off build without the dev server:

```bash
docker compose run --rm jekyll bundle exec jekyll build
```

### Without Docker

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

Either way, the compiled output lands in `_site/`.

## Deploying to GitHub Pages

After building, the contents of `_site/` need to be placed on the `gh-pages-local` branch and pushed. There are two approaches.

### Approach 1: Copy via a temporary directory

```bash
# 1. Build the site on new-site (see above), then copy _site out of the repo
cp -r _site /tmp/_site_build

# 2. Switch to the deploy branch
git checkout gh-pages-local

# 3. Remove old site files (keep .git)
git rm -rf .
git clean -fd

# 4. Copy the new build in
cp -r /tmp/_site_build/* .

# 5. Commit and push
git add -A
git commit -m "deploy: update site"
git push origin gh-pages-local

# 6. Switch back to the source branch
git checkout new-site
```

### Approach 2: Build directly into a separate worktree / checkout

If you have a second clone or a [git worktree](https://git-scm.com/docs/git-worktree) checked out to `gh-pages-local`, you can build straight into it:

```bash
# From new-site branch
bundle exec jekyll build --destination /path/to/gh-pages-local-checkout
```

Then commit and push from that directory. Note that Jekyll **cleans** the destination directory before building, so make sure it only contains the site files (and `.git`).

## Quick-reference cheat sheet

```bash
# Edit content
git checkout new-site
# ... make changes ...
git add -A && git commit -m "describe changes"
git push origin new-site

# Build
docker compose up              # dev server with live reload
# or
docker compose exec jekyll bundle exec jekyll build   # production build

# Deploy
cp -r _site /tmp/_site_build
git checkout gh-pages-local
git rm -rf . && git clean -fd
cp -r /tmp/_site_build/* .
git add -A && git commit -m "deploy: update site"
git push origin gh-pages-local
git checkout new-site
```

## Project structure (key files on `new-site`)

```
_config.yml          # Site configuration (url, metadata, features)
_pages/              # Top-level pages (about, publications, etc.)
_posts/              # Blog posts
_bibliography/       # BibTeX files for publications
_data/               # YAML data files (CV, repositories, etc.)
_news/               # News items shown on the homepage
_sass/               # Custom SCSS styles
assets/              # Images, CSS, JS, PDFs
docker-compose.yml   # Docker config for local development
Gemfile              # Ruby dependencies
```

## Theme

Based on [al-folio v0.14.6](https://github.com/alshedivat/al-folio/releases/tag/v0.14.6). See the upstream [INSTALL.md](https://github.com/alshedivat/al-folio/blob/main/INSTALL.md) for additional setup options and troubleshooting.
