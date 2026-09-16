---
name: Imported frontend archives
description: Uploaded Lovable-style frontend exports can carry stale lockfiles and incomplete peer dependency declarations.
---

When importing a frontend archive into the workspace, prefer the archive's source files but keep the workspace artifact's Vite/runtime configuration. Regenerate dependencies from the manifest instead of trusting a stale lockfile, and add any peer dependencies surfaced by the first Vite request.

**Why:** A client-consultant export arrived with an out-of-sync npm lockfile and BlockNote peer dependencies missing from its package manifest; the app rendered after dependency regeneration and peer installation.

**How to apply:** Treat type-check issues in unused legacy screens separately from preview readiness, and verify the primary route through the managed artifact workflow.