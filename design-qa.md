# ASR Hero Design QA

final result: passed

## Comparison target

- Source: `design/selected/asr-hero-reference.png`
- Implementation: `tmp/asr-hero-desktop-final.png`
- Normalized side-by-side comparison: `tmp/asr-hero-comparison.png`
- Desktop viewport: 1440 × 1024
- Mobile viewport: 390 × 844

## Fidelity ledger

| Surface | Source evidence | Render evidence | Result |
| --- | --- | --- | --- |
| Composition | Full-bleed architectural media, floating glass nav, lower-left copy and lower-right service tag | The same hierarchy and anchors are present at the matching viewport | Passed |
| Typography | Large, light modern sans headline with tight tracking and two deliberate lines | Manrope Variable reproduces the weight, scale, line break and spacing without clipping | Passed |
| Spacing | 24–36 px outer nav inset, generous hero negative space, actions aligned near the lower edge | Header, copy, actions and tag follow the same container and bottom rhythm | Passed |
| Color and contrast | Cool, muted construction scene with deep charcoal glass and a dark lower-left tonal area | Video filter reduces warmth and saturation; localized bottom contrast preserves headline readability | Passed |
| Media treatment | One stable construction view with no project cards or secondary imagery | Autoplaying muted loop uses the supplied ASR video only, with WebM, MP4 and poster fallbacks | Passed |
| Copy | “From structure to soul.”, supporting experience statement, two actions and service tag | All selected hero copy is present, correctly ordered and spelled | Passed |
| Navigation | ASR mark, five links and one primary action | Desktop nav matches; mobile collapses to a functional animated menu | Passed |

## Interaction and responsive checks

- Mobile menu opens, closes and exposes every navigation item.
- Primary project actions are real links.
- Reduced-motion behavior is supported.
- Video is muted, inline, looping and has a poster fallback.
- Browser console returned no application errors during the final check.
- Mobile keeps the headline and actions inside the first viewport without horizontal overflow.

## Intentional deviations

- The live video naturally changes frame over time; the still comparison uses one representative frame.
- The full-color logo is rendered as a high-contrast monochrome version in the dark glass bar for legibility.
- The mobile arrangement is a responsive continuation because the selected reference supplied only a desktop viewport.

## Remaining polish

- P3: Replace the temporary homepage anchor destinations as the corresponding homepage sections are built.
