# pix-test-angular

Minimal Angular 17+ project for testing PixToCode's project-context feature.

## What's inside

- **UI primitives** in `src/app/components/`: button, card, input
- **Domain components** in `src/app/components/`: product-card, user-card, pricing-card
- **Design tokens** in `src/styles.css` (CSS variables)
- **Path aliases** in `tsconfig.json`: `@app/*`, `@components/*`, `@/components/*`

All components are standalone (Angular 17+ pattern), use OnPush change detection, and use the new `@if`/`@for` control flow.

## Run

```bash
npm install
npm start
```
