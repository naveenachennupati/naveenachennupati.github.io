# Publish the Complete Portfolio Website — Windows PowerShell

These steps assume the professional GitHub account is **naveenachennupati** and Git for Windows is installed.

## 1. Download and extract

Download `Naveena_Complete_Portfolio_GitHub_Pages.zip` and move it to:

`C:\Users\navee\OneDrive\Desktop\Profile Github`

Then open PowerShell and run the following **one command at a time**:

```powershell
cd "C:\Users\navee\OneDrive\Desktop\Profile Github"
Test-Path ".\Naveena_Complete_Portfolio_GitHub_Pages.zip"
```

Proceed only when it returns `True`:

```powershell
Expand-Archive -LiteralPath ".\Naveena_Complete_Portfolio_GitHub_Pages.zip" -DestinationPath "." -Force
cd ".\naveenachennupati.github.io"
Get-ChildItem -Force -Name
```

You should see `index.html`, `research.html`, `style.css`, `script.js`, `projects`, `evidence`, `downloads`, and `assets` at this level. **Do not create a second nested directory inside the repository.**

## 2. Create your empty GitHub website repository

1. Go to https://github.com/new while signed in as your **professional** GitHub account.
2. Owner: `naveenachennupati`.
3. Repository name: **`naveenachennupati.github.io`** (exact spelling).
4. Description: `Professional cybersecurity portfolio — security operations, Azure identity governance, incident response, technical engineering, and IEEE research.`
5. Choose **Public**.
6. Leave initial README, `.gitignore`, and license options **unchecked**.
7. Click **Create repository**.

## 3. Commit and push the website

In PowerShell, while inside the `naveenachennupati.github.io` folder:

```powershell
git init -b main
git add -A
git status --short
git commit -m "Publish complete cybersecurity professional portfolio"
git remote add origin https://naveenachennupati@github.com/naveenachennupati/naveenachennupati.github.io.git
git push -u origin main
```

If Git says `remote origin already exists`, stop and run `git remote -v` first. If Git asks to authenticate, choose the **naveenachennupati** account, not your PhD account. Keep passwords and tokens private.

The LF/CRLF warnings about Windows line endings are harmless.

## 4. Enable GitHub Pages

1. Open https://github.com/naveenachennupati/naveenachennupati.github.io
2. Click **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Set **Branch: `main`** and **Folder: `/(root)`**; click **Save**.
5. Check the Pages deployment / Actions status. After GitHub reports success, open https://naveenachennupati.github.io/

## 5. Check every section and link

- Home: name, value statement, four career metrics
- About, expertise, experience (UnitedHealth Group / SSPart Enterprise)
- Projects: all three cards, project details, source links, evidence reports
- Research: all nine IEEE links
- Education: PhD, Master's, Bachelor's
- Contact: email, phone, LinkedIn, GitHub
- Downloads: application resume, master resume, case-study PDF
- Mobile: check website from your phone

## 6. Make the portfolio discoverable

- GitHub profile → **Edit profile** → Website → `https://naveenachennupati.github.io/`
- LinkedIn profile → Website and Featured → same link
- Resume header → add portfolio URL once live
- Pin the three source repositories on your GitHub profile

## Update an already published website later

From the same folder:

```powershell
git add -A
git commit -m "Update portfolio content"
git push
```

**Note:** This is a publicly hosted, static professional portfolio. The three project benchmarks are controlled exercises, not production outcomes.
