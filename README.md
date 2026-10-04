# Wiki Club Programs

Reusable Next.js template for Wiki Club programs such as **Chai with Wiki** and **Road to Wiki**.

## Included sections
- Hero: title, tagline, Apply/Join CTA
- About Program: description, goals, duration, format
- Mentors: photos, bios and partner logos
- Cohorts: batch highlights, top contributors and testimonials
- Achievements: impact stats and milestones
- Gallery: photos, video/reel placeholders
- Call to Action: apply, become a mentor, contact
- FAQs

## Structure
```
app/
  page.tsx
  layout.tsx
  globals.css
  programs/[slug]/page.tsx
data/programs.ts
```

## Add a new program
1. Open `data/programs.ts`.
2. Add a new object to `programs`.
3. Provide the same fields as the existing examples.
4. Visit `/programs/<your-slug>`.

The UI is data-driven, so one page template can power many programs.

## Run locally
```bash
npm install
npm run dev
```

## Production checklist
Replace sample mentor images/bios, partner logos, cohort data, testimonials, achievement numbers, gallery media, application URL, contact email, and FAQ answers with official content before launch.
