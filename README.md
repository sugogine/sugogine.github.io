# Sumanth Kumar Gogineni — Portfolio (GitHub Pages)

A free, static portfolio site built from the final resume. No build step, no backend, no cost.

## Files in this folder
- `index.html` — the site
- `styles.css` — styling
- `script.js` — skill filter + expandable project cards
- `assets/` — certification badge images
- `resume.pdf` — downloadable resume (generated from the final resume)
- `.nojekyll` — tells GitHub Pages to serve the files as-is

## Publish on GitHub Pages (about 5 minutes)

1. Sign in to GitHub as **sugogine**, and create a **new public repository** named exactly:
   - `sugogine.github.io`
   - Leave it public (GitHub Pages on the free plan needs a public repo for a user site) and empty — no README from GitHub, or you can delete it after.
2. Upload all the files in this folder to the repository root (not inside a subfolder):
   - On GitHub: Add file → Upload files → drag `index.html`, `styles.css`, `script.js`, `resume.pdf`, `.nojekyll`, and the `assets` folder, then Commit.
   - Or, from your computer with Git: `git clone` the repo, copy these files in, `git add .`, `git commit -m "Portfolio"`, `git push`.
3. Go to the repository → **Settings → Pages**.
   - Source: **Deploy from a branch**
   - Branch: **main** (or master, whichever you created), folder: **/ (root)**
   - Save.
4. Wait 1–2 minutes, then open:
   - `https://sugogine.github.io/`
   - That is the link to send recruiters. Anyone can open it — no login needed.

## Updating the site later
Edit `index.html` (or any file) in the repo and commit — GitHub Pages republishes automatically in a minute or two.

## Changing the site link
A custom domain (for example, `sumanthgogineni.com`) is optional and is the only part that would ever cost money, for the domain itself. GitHub Pages hosting stays free. To add one later: Settings → Pages → Custom domain, then add the DNS records your domain provider shows.

## If you do not have a GitHub account yet
Create one free at github.com first, then follow the steps above. No card or paid plan is needed for this site.

## Note on this deployed copy
Badge images in this copy load from their public Credly / LevelUp URLs, because the GitHub connector can only push text files. After the first push, upload `resume.pdf` (from the original zip) to the repo root to enable the Download Resume button.
