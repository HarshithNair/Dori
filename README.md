# dori. — Kaam se kamaai tak.

A warm yellow-and-gold frontend-only worker livelihood demo built with Next.js App Router, TypeScript, Tailwind CSS, Motion, Radix/shadcn-style components, Recharts and QRCode React.

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

All services are simulated. No real authentication, messaging, payments, forecasts or eligibility decisions. Data persists in this browser's localStorage. Role switching shares that same state; devices do not synchronise.

## Opening media

The original generated image in `public/images/morning.png` is the static fallback, labelled in the UI. To enable video and sound, supply `public/intro.mp4`. It is intentionally absent in the demo. Reduced-motion preferences are respected.

## QR and public profile

The verify QR uses the current origin and `/verify/`. The UPI QR contains a clearly labelled **demo identifier; do not send money**. The public view shows identity and skills without private earnings. Work approval is a local simulation.

## Known demo scope

Language selection translates the interface into Hindi or Marathi. Proper nouns, demo IDs and the `dori.` wordmark stay as they are. Voice controls show simulated transcriptions or summaries. Baseline job history and profiles are sample records. Worker portraits were provided as references. A single active project connects the judge's story; this is not a multi-job accounting system. Team shares are proposals and are not automatically paid or deducted.

## Language

Hindi, Marathi and English are selectable from the topbar globe or during onboarding, and the choice persists in localStorage.

The English source string is itself the translation key, so anything without a translation falls back to readable English rather than a raw identifier. Translations live in `lib/translations-hi.ts` and `lib/translations-mr.ts`; `lib/i18n.tsx` holds the lookup and a `fmt()` helper whose `{0}` placeholders let a translation reorder interpolated values. Components read `t` from the store as `tr`, because `t` is already used as a map parameter in several files.

Select option values stay in English so state comparisons keep working while the visible label is translated. Choosing Hindi or Marathi sets `<html lang>` and `data-lang`, which switches to a Devanagari font stack and relaxes the Latin letter-spacing.

## Checks

`npm run typecheck` and `npm run build`.
