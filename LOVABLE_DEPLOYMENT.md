# Lovable + GitHub Pages Sync

## What Happened

When you edit in **Lovable**, it pushes changes to this GitHub repo. Lovable's sync **overwrites** these deployment files (it doesn't know about GitHub Pages):

- `.github/workflows/deploy.yml` — gets deleted
- `vite.config.ts` — loses `base: '/pixel-perfect-replication/'`
- `src/App.tsx` — loses `basename="/pixel-perfect-replication"` on BrowserRouter

So your Lovable updates were on GitHub, but the site was not redeploying because the workflow was removed.

## What Was Done

Those 3 pieces were restored and pushed. Your site should now show the latest from Lovable.

## For Future Lovable Edits

After you make changes in Lovable:

1. **Pull** the latest from GitHub: `git pull origin main`
2. **Restore** the deployment config (add these back if Lovable removed them):
   - `.github/workflows/deploy.yml` — the workflow file
   - `base: '/pixel-perfect-replication/'` in `vite.config.ts`
   - `basename="/pixel-perfect-replication"` in `src/App.tsx` (on `<BrowserRouter>`)
3. **Push**: `git add . && git commit -m "Restore deployment config" && git push origin main`

**Better long-term**: Add these files and settings to your project **inside Lovable** (via Lovable's editor), so they persist when Lovable syncs.
