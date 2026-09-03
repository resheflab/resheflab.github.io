# resheflab.org

The Reshef Lab website. Plain HTML and CSS — there is nothing to install,
nothing to build, and no dependencies to keep up to date.

## How it works

Edit a file, commit it, push to `main`. GitHub Pages publishes it within a
minute or two. That's the whole process.

## The files

| File | What it is |
| --- | --- |
| `index.html` | Every word on the site. All four sections live here. |
| `style.css` | How the site looks. Colors, fonts and widths are set once at the top. |
| `script.js` | Makes the "Menu" button work on phones. Nothing else. |
| `images/` | Photos, plus `og-card.png`, the preview shown when the link is shared. |
| `favicon.svg` `favicon.ico` `apple-touch-icon.png` | The browser-tab icon, in three formats. |
| `robots.txt` `sitemap.xml` | For search engines. Nothing to change unless pages are added. |

If a `CNAME` file is present, it is what points the site at resheflab.org.
Don't edit or delete it.

## Common edits

Open `index.html` and look for the big comment blocks in capital letters
(`ABOUT`, `PEOPLE`, `PUBLICATIONS`, `CONTACT`) — they mark where each
section starts.

**Add a person.** In the `PEOPLE` section, copy an entire
`<div class="person"> ... </div>` block, paste it under the last one, and
change the photo filename, the name, and the paragraph. Put the new photo in
`images/`. Photos look best around 700 pixels wide — anything much larger
just makes the page slow to load.

**Add a publication.** In the `PUBLICATIONS` section, copy an entire
`<article class="pub"> ... </article>` block, paste it where it belongs in
the list, and change the title, authors, journal and links. Papers are
listed newest first.

The square brackets around `[abstract]`, `[pdf]`, `[code]` are drawn
automatically. Don't type them.

The symbols in the author lists carry meaning and should be copied from the
paper, not guessed:

- `*` — co-first author
- `#` — co-corresponding author
- `[ ... ]` — equal contribution, listed alphabetically

Whatever symbols a paper uses, spell them out in the small grey
`pub__notation` line underneath the authors.

**Change the tagline or the description.** The tagline near the top of
`index.html` also appears twice inside `<head>`, as `description` and as
`og:description` — that second copy is what Google and Slack show. It is not
automatic; if you reword the tagline, reword those to match.

**Change a color or a font.** Everything visual is set in the `SETTINGS`
block at the top of `style.css`. Changing `--accent` there re-tints every
link and rule on the site at once.

**Change how wide the page is.** Also in `SETTINGS`, and it is two numbers,
not one. `--page-width` is the outer edge of the page. `--measure` is how
wide a paragraph is allowed to get, and it is deliberately much smaller —
lines longer than about 70 characters are tiring to read. If the page looks
too narrow, raise `--page-width` first and leave `--measure` alone.

## Checking your work before you push

Double-click `index.html` to open it in a browser. That is exactly what the
live site will look like. Then narrow the window until it's phone-width and
check it still reads well.
