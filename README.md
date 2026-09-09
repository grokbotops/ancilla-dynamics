# Ancilla Dynamics, LLC

Static public one-pager for Stripe business-website verification and general company presence.

**Live URL (after Pages is enabled):** https://grokbotops.github.io/ancilla-dynamics/

## Pages

| Path | Description |
|------|-------------|
| `/` (`index.html`) | Company home |
| `/privacy/` (`privacy/index.html`) | Privacy policy |

Contact: `grokbotops@gmail.com`

## Enable GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Save. After a short deploy, the site is at  
   `https://grokbotops.github.io/ancilla-dynamics/`  
   Privacy: `https://grokbotops.github.io/ancilla-dynamics/privacy/`

## Smoke test

```bash
node test/smoke.js
```

Checks that `index.html` and `privacy/index.html` exist and contain the company name and ops email, and that content does not look like a street address.
