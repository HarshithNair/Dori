# dori. — Kaam se kamaai tak.

A light blue frontend-only worker livelihood demo built with Next.js App Router, TypeScript, Tailwind CSS, Motion, Radix/shadcn-style components, Recharts and QRCode React.

## Run

`npm install`

`npm run dev`

Open http://localhost:3000. `npm run build` produces a static export in `out/`.

## Demo story

1. Start the cinematic opening and select Worker.
2. Use demo OTP **123456**, then complete the electrician onboarding.
3. Find work and express interest to open Chats.
4. Invite teammates from Team up; simulate their acceptance.
5. Confirm the Wageprint as the worker. Switch Demo Role, open Chats → Wageprint, and confirm as the customer.
6. Switch back to worker and start work.
7. As the customer, request two additional hours; as the worker, approve.
8. Mark work complete, then approve it as the customer.
9. Record partial or full received payment. Pending money never contributes to Budget coverage.
10. Check the worker dashboard, Budget, Invisible CV and Forecast for the updated information.

All services are simulated. No real authentication, payments, forecasts or eligibility decisions. The one exception is noted under Messaging below. Data persists in this browser's localStorage. Role switching shares that same state; devices do not synchronise.

## Opening media

The original generated image in `public/images/morning.png` is the static fallback, labelled in the UI. To enable video and sound, supply `public/intro.mp4`. It is intentionally absent in the demo. Reduced-motion preferences are respected.

## QR and public profile

The verify QR uses the current origin and `/verify/`. The UPI QR contains a clearly labelled **demo identifier; do not send money**. The public view shows identity and skills without private earnings. Work approval is a local simulation.

## Known demo scope

Language selection translates the interface into Hindi or Marathi. Proper nouns, demo IDs and the `dori.` wordmark stay as they are. Voice controls show simulated transcriptions or summaries. Baseline job history and profiles are sample records. Worker portraits were provided as references. A single active project connects the judge's story; this is not a multi-job accounting system. Team shares are proposals and are not automatically paid or deducted.

## Messaging

Tapping **I'm interested** on a job card opens the visitor's own SMS app with a message prefilled to the number in `lib/sms.ts`, via an `sms:` link. The site sends nothing itself and the visitor has to tap send, so there is no provider account, no credential and no cost involved.

This is deliberate rather than a shortcut. The site is a static export with no server, so an SMS provider's API key would have to ship inside the JavaScript bundle, where any visitor could read and use it. A deep link avoids that entirely. Auto-sending without the visitor's involvement would need either a serverless endpoint holding the key, or a write-only webhook the browser can POST to.

Two caveats: desktop browsers often have no `sms:` handler, so nothing happens there; and transactional SMS to Indian numbers normally requires DLT registration with TRAI, which does not apply here only because the visitor's own messaging app does the sending.

## Palette

Colours are defined as CSS custom properties on `:root` in `app/globals.css`: `--blue` (primary accent), `--bright` (light blue highlight), `--sky` (pale tint), `--bg`, `--navy` (ink), `--muted`, `--line`, plus semantic `--green` and `--red`. A palette block near the end of the file overrides specific components, and a few SVG strokes are hardcoded in the components that draw them.

Every text pairing meets WCAG AA or better; `--green` on the page background sits at 4.49:1, so it is used for badge-sized text only.

## Language

Hindi, Marathi and English are selectable from the topbar globe or during onboarding, and the choice persists in localStorage.

The English source string is itself the translation key, so anything without a translation falls back to readable English rather than a raw identifier. Translations live in `lib/translations-hi.ts` and `lib/translations-mr.ts`; `lib/i18n.tsx` holds the lookup and a `fmt()` helper whose `{0}` placeholders let a translation reorder interpolated values. Components read `t` from the store as `tr`, because `t` is already used as a map parameter in several files.

Select option values stay in English so state comparisons keep working while the visible label is translated. Choosing Hindi or Marathi sets `<html lang>` and `data-lang`, which switches to a Devanagari font stack and relaxes the Latin letter-spacing.

## Checks

`npm run typecheck` and `npm run build`.
