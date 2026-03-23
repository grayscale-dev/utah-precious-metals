# Website Remodel Template

A Codex-friendly starter repository for rebuilding existing marketing
websites into cleaner, more modern versions using Vue, Vite, PrimeVue,
PrimeBlocks, Tailwind CSS, and optional Supabase.

This repository is designed for a workflow where you:

1.  duplicate or reuse this template
2.  paste in a source website URL
3.  set the brand color and notes
4.  run Codex against the repository
5.  let Codex inspect the source site and rebuild it here as a polished
    remodel

This is not meant to be a direct clone workflow. It is meant to be a
fast, repeatable website remodel workflow.

---

## Creative model

This template uses a tight-constraints, loose-execution approach.

Non-negotiables:

- preserve business intent, page purpose, and core CTA paths
- use PrimeVue components and PrimeBlocks-style section composition
- remain responsive, accessible, and believable
- avoid fabricated claims, testimonials, or trust signals

Creative freedom:

- layout composition and section rhythm
- visual hierarchy and spacing system
- card/grid treatment and section transitions
- hero/CTA styling direction
- stock imagery choices (per policy)

Use `site-remodel.config.json` to tune creativity level and visual
direction for each project.

---

## Stack

- Vite
- Vue 3
- TypeScript
- PrimeVue
- PrimeIcons
- Tailwind CSS
- Vue Router
- optional Supabase

---

## Repository workflow

### 1. Edit the config

Update `site-remodel.config.json`.

Example:

{ "sourceUrl": "https://example.com", "siteName": "Example Company",
"primaryColor": "#2563eb", "secondaryColor": "#0f172a", "tone": "modern,
clean, premium", "notes": "Focus on trust, clarity, and stronger CTA
structure.", "creativeFreedom": "high", "visualDirection": "editorial
clean", "layoutStyle": "dynamic", "referenceNotes": "Use asymmetric
section pacing and stronger hero contrast.", "useSupabase": false }

Creativity controls:

- `creativeFreedom`: `low`, `medium`, or `high`
- `visualDirection`: short art-direction phrase for the run
- `layoutStyle`: layout intent such as `structured`, `dynamic`, or
  `minimal`
- `referenceNotes`: optional notes about composition, interaction, and
  visual cues

### 2. Review agent instructions

This repository includes `AGENTS.md`, which tells Codex how to operate
inside the repo.

### 3. Run Codex

Point Codex at this repository and instruct it to follow the README and
AGENTS instructions.

### 4. Review the remodel plan

Before major implementation, Codex should update `remodel-plan.md` with
its plan.

### 5. Review the finished remodel

The final output should include: - rebuilt pages - improved structure
and styling - updated content organization - a completed
`remodel-plan.md`

### 6. Stock photo policy

Codex may use free stock photos when the source site does not provide
usable imagery.

Preferred sources: Unsplash, Pexels, Pixabay.

Requirements:

- confirm license terms allow website/commercial use
- choose photos that match the business and audience
- avoid misleading imagery
- document selected image sources in `remodel-plan.md`

---

## Development

Install dependencies:

npm install

Run locally:

npm run dev

Build for production:

npm run build

Preview production build:

npm run preview

---

## Important files

Root files:

- README.md --- repo instructions and Codex master prompt
- AGENTS.md --- operating rules for Codex
- site-remodel.config.json --- source URL and design inputs
- remodel-plan.md --- planning document for each remodel

App files:

- src/content/site-content.ts --- structured content model
- src/pages/\* --- top-level pages
- src/sections/\* --- reusable marketing sections
- src/components/layout/\* --- shared layout
- src/lib/theme.ts --- theme/config application
- src/lib/supabase.ts --- optional Supabase client

---

## Master Remodel Prompt

Read this repository before making changes.

This repository is a website remodeling system, not a generic app
starter. Your task is to inspect the source website defined in
`site-remodel.config.json` and rebuild it inside this repository as a
more modern, more polished, more conversion-focused marketing site using
Vue, PrimeVue, PrimeBlocks patterns, and the repository structure
already provided.

Follow all repository instructions, especially: - README.md - AGENTS.md

Required process:

1.  Read `site-remodel.config.json`
2.  Inspect the source website at the configured `sourceUrl`
3.  Identify:
    - business type
    - target audience
    - site structure
    - key pages
    - major sections
    - CTA patterns
    - strengths and weaknesses
4.  Propose 2-3 visual directions in `remodel-plan.md`, choose one, and
    explain why it fits the business and audience
5.  Update `remodel-plan.md` before major implementation
6.  Rebuild the site using the repository's page and section structure
7.  Prefer reusable sections over one-off markup
8.  Use Prime-first patterns
9.  Preserve business intent and real content where possible
10. Do not blindly clone the original design
11. Do not fabricate testimonials, case studies, statistics, or business
    claims
12. Only use Supabase if genuinely needed
13. Keep the implementation responsive, accessible, and believable
