# [jack-farmer.com](https://jack-farmer.com)

My personal site. A single static page, served by GitHub Pages from the
root of this repo.

## Stack

Plain HTML plus [Tailwind CSS v4](https://tailwindcss.com). Tailwind is
compiled ahead of time by the CLI into `styles.css`, which is committed
and served as a normal stylesheet. There is no CDN, no framework and no
build step on GitHub's side. The only JavaScript on the page is the one
line that sets the copyright year.

## Working on it

```sh
npm install       # once
npm run dev       # rebuild styles.css on change
npm run serve     # http://localhost:4000
```

Run `npm run build` before committing so the minified `styles.css` in
the repo matches the markup. Editing classes in `index.html` without
rebuilding will leave the page missing styles.

## Layout

| Path             | What it is                                    |
| ---------------- | --------------------------------------------- |
| `index.html`     | The whole site                                |
| `src/input.css`  | Tailwind entry point and design tokens        |
| `styles.css`     | Compiled output. Generated, but committed     |
| `jack-farmer.jpg`| Profile photo, also used for link previews     |
| `CNAME`          | Custom domain for GitHub Pages                |

## Design

Deliberately minimal: one column, near-monochrome, system fonts, hairline
rules. The palette is four colours and their dark-mode counterparts,
defined as tokens in `src/input.css`. Dark mode follows the reader's
system setting via `prefers-color-scheme`, with no toggle.
