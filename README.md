## inbound.new: React Email Templates

A repository of high‑quality React Email templates built and maintained by the inbound.new team. Templates are authored with `@react-email/components`, Tailwind in emails via `<Tailwind />`, and web fonts via `<Font />`, with a lightweight design system to keep spacing, color, and typography consistent.

### Preview locally

```bash
npm run email:dev   # launch the React Email preview server
npm run email:build # production build for emails
npm run email:export
```

### Structure

- `design-systems/<brand>/<brand>-design-system.ts` — tokens used by all templates
- `emails/<brand>/**` — brand templates and shared email components
- `emails/autumn/marketing/**` — example marketing emails

## Contributing

We welcome high‑quality templates. Please follow these guidelines:

1. Create a design system
   - Add `design-systems/<your-brand>/<your-brand>-design-system.ts` patterned after `design-systems/autumn/autumn-design-system.ts`.
   - Include tokens for colors, typography, spacing, borders, and button variants (primary/secondary/destructive).
2. Build the first template using the rules
   - Use the design system tokens and follow the project’s `react-email.mdc` guidelines.
   - Use `<Tailwind />` and `<Font />` from `@react-email/components`.
3. Polish and test
   - Verify alignment and spacing in the React Email preview.
   - Sanity‑check rendering in popular clients (Gmail, Apple Mail, Outlook) if possible.
4. Add the rest
   - After the first template looks perfect, implement the remaining templates in the set, reusing shared components (e.g., Logo card, buttons, footer, signature).
5. Include screenshots
   - Every PR must include at least one screenshot for each template (hero/top of email is fine).

### PR checklist

- Uses the brand design system (no hard‑coded colors that duplicate tokens).
- Fonts are declared with `<Font />`; Tailwind classes are used for spacing/typography.
- CTA buttons use the shared button component and appear above the footer.
- Footer includes company address and a support mailto link.
- Screenshots attached to the PR.
