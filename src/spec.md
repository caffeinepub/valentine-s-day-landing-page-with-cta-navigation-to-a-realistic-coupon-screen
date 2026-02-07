# Specification

## Summary
**Goal:** Fix the Valentine app build/deployment error so it deploys successfully, then promote the deployed draft to the live production environment.

**Planned changes:**
- Identify and resolve the current build/deploy failure so the project builds cleanly and deploys to the Internet Computer without errors.
- Verify the deployed app runs without runtime crashes and that both routes (`/` and `/coupon`) render correctly.
- Promote the latest successfully deployed draft build to the live/production environment.

**User-visible outcome:** The live production Valentine app loads successfully in the browser, and users can navigate from the landing page (`/`) to the coupon page (`/coupon`) via the CTA without errors.
