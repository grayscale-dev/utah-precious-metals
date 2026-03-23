# Remodel Plan

## Source URL

- https://utahpreciousmetals.godaddysites.com/

## Business Summary

- Local Utah custom metal design and fabrication business focused on steel landscape and outdoor pieces.
- Core offer positioning on source site: handcrafted metal art, landscape structures, and furniture-style outdoor metal work.
- Primary conversion path: call/text/email and simple contact form submission.
- Note: `site-remodel.config.json` notes mention a "precious metals buyer," but the live source site content and structure clearly present metal design/fabrication services. Rebuild follows the live source business intent.

## Target Audience

- Homeowners in Utah County and nearby areas wanting custom outdoor metal features.
- Property owners seeking premium-looking, durable steel landscaping elements.
- Prospects who value direct local contact, project discussion, and clear process over ecommerce/self-serve flows.

## Sitemap

- `/` (single-page source with sections):
- Hero
- About
- Gallery
- Testimonials (section present; no detailed testimonial quotes found)
- Contact + hours + form
- Subscribe
- Contact details discovered: Springville, UT 84663, phone `8013685880`, email `utahpreciousmetals@gmail.com`, hours `09:00 am – 05:00 pm`.

## Configuration Snapshot

- creativeFreedom: `medium` (implemented with conservative, conversion-first structure due conflicting note and live site simplicity)
- visualDirection: `clean, high-contrast, slightly premium financial feel with subtle luxury cues`
- layoutStyle: `conversion-focused, simple sections, mobile-first, fast scanning`
- referenceNotes: Strong hero, trust/contact emphasis, process clarity, FAQ, and persistent CTA without clutter.

## Direction Options (Required Before Build)

- Option A: Dark editorial look with large image-led sections and cinematic spacing.
- Option B: Clean premium local-service layout with white/light surfaces, dark anchors, restrained metallic accents, and strong contact utility.
- Option C: Minimal brochure style with compact sections and mostly text-forward presentation.

## Selected Direction + Rationale

- Selected: Option B
- Why this direction fits the business and audience: It best supports quick trust-building for a local service business, keeps scanning easy on mobile, and balances premium feel with straightforward conversion actions (call/email/form).

## Page-by-Page Rebuild Plan

- Home:
- Single-page architecture with anchored sections: hero, trust strip, services, process, gallery, FAQ, contact.
- About/services/contact content is integrated as sections on this one page.
- Additional Pages:
- None. `/about`, `/services`, and `/contact` were removed from routing and navigation.

## Design Notes

- Prime-first sections with reusable Vue components and PrimeVue cards/buttons/accordion.
- High contrast and readability prioritized; avoid low-contrast light-on-light pairings.
- Brand colors from config used for button variants and accents, with computed readable foreground.
- Minimal, purposeful motion only.
- Visual inspiration update (March 23, 2026): adjusted layout direction to reference `https://purehavenhomes.com/` patterns:
- editorial all-caps section labels
- spacious, image-led section rhythm
- restrained neutral palette with subtle luxury cues
- minimal but clear CTA hierarchy
- Simplification update (March 23, 2026):
- reduced site to a minimal single-page structure (`Hero -> What We Build -> Featured Work -> Contact`)
- removed extra sections from homepage flow to better match client preference for simplicity

## Content Issues

- Source content is sparse and somewhat inconsistent in naming/capitalization.
- Testimonials section heading exists, but detailed testimonial text is not clearly published in extractable source content.
- Messaging mixes "precious metals" brand name with steel landscape/fabrication services, so copy must stay explicit about actual services.

## Asset Issues

- Source has usable hosted assets (logo/hero/gallery) on `img1.wsimg.com`.
- Gallery source markup is carousel/background heavy; exact individual image list is partially opaque in generated HTML.
- Plan: reuse source-hosted assets where available; do not add fabricated logos/reviews/badges.
- Asset notes (source-hosted):
- Logo: `https://img1.wsimg.com/isteam/ip/9a5ff8ef-d94a-4fa8-9808-0648ff0ce477/IMG_5985.PNG`
- Hero: `https://img1.wsimg.com/isteam/ip/9a5ff8ef-d94a-4fa8-9808-0648ff0ce477/IMG_1045.jpg`
- About image: `https://img1.wsimg.com/isteam/ip/9a5ff8ef-d94a-4fa8-9808-0648ff0ce477/Rolled%20Edge%20Planter%20Box.webp`
- Additional gallery/background assets detected via GoDaddy-hosted URLs in page output.

## Implementation Checklist

- [x] Confirm source page inventory
- [x] Confirm navigation and primary CTA paths
- [x] Update `site-remodel.config.json`
- [x] Define 2-3 design directions and select one
- [x] Update `src/content/site-content.ts`
- [x] Implement section/page updates
- [x] QA responsiveness and accessibility
- [x] Run lint and build
