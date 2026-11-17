# Update your live portfolio — Windows PowerShell

Your existing GitHub Pages repository remains `naveenachennupati/naveenachennupati.github.io`.
This ZIP is an updated version of the same site. **Do not create a new repository** and do not run `git init` or `git remote add origin` again.

## 1. Prepare your local folder

Download `Naveena_Professional_Portfolio_3D_Updated.zip` into:

`C:\Users\navee\OneDrive\Desktop\Profile Github`

Open PowerShell and run:

```powershell
cd "C:\Users\navee\OneDrive\Desktop\Profile Github"
Expand-Archive -LiteralPath ".\Naveena_Professional_Portfolio_3D_Updated.zip" -DestinationPath "." -Force
```

It extracts to `naveenachennupati.github.io` with `index.html`, `style.css`, `script.js`, `research.html`, `projects/`, `evidence/` and `downloads/`.

## 2. Safely update the already-published local Git project

If your original website was uploaded from a *different* directory, first locate it with File Explorer. In that **original repository folder**, `git status` should work and `git remote -v` should point to your professional account. **Do not delete its `.git` folder.**

For example, if your original project is `C:\Users\navee\OneDrive\Desktop\Profile Github\naveenachennupati.github.io`, and the ZIP extracted into that same folder, it overwrote only website files and preserved `.git`.

Run:

```powershell
cd "C:\Users\navee\OneDrive\Desktop\Profile Github\naveenachennupati.github.io"
git status
git remote -v
```

Expected remote: `https://naveenachennupati@github.com/naveenachennupati/naveenachennupati.github.io.git` (or the same URL without the username before `@`).

If `git status` says **not a git repository**, stop and do not initialize another repository in a random folder. Download the existing repository with `git clone`, then copy the unzipped website files into that clone. Reply with the exact output for tailored commands.

## 3. Publish the updated design

Verify that the source contains your updated contact section and more skills:

```powershell
Select-String -Path .\index.html -Pattern "From security signals"
Select-String -Path .\index.html -Pattern "How to read the project results"
```

The first should find the new headline; the second should return **no results**.

Then:

```powershell
git add -A
git status --short
git commit -m "Refresh professional portfolio with 3D design and expanded security expertise"
git push origin main
```

Sign in as `naveenachennupati` if prompted, not the PhD GitHub account.

## 4. Confirm live deployment

1. Open https://github.com/naveenachennupati/naveenachennupati.github.io/actions
2. Confirm the GitHub Pages deployment run shows a green check.
3. Open https://naveenachennupati.github.io/ and refresh. If the old content remains in your browser cache, try Ctrl+Shift+R.
4. Check Skills, Experience, Contact, Research, all project pages, and resume links on desktop and mobile.

The 3D interaction is progressive enhancement, with no additional dependencies or installation. Reduced-motion and touch devices use a stable non-tilting layout.

## Role-title and claims review

- UnitedHealth Group: `Cyber Security Analyst` (as supplied).
- SSPart Enterprise: `Security Engineer` (as supplied).
- No seniority was added to official job titles.
- The standalone explanatory box about project results was removed from the homepage. Specific project study limitations remain alongside the related results, and full methodology remains in the case studies and repositories.
- The site focuses on skills and research supported by your supplied experience and completed repositories, rather than implying hands-on expertise with every cybersecurity product.
