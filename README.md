# dori. — Kaam se kamaai tak.

A frontend-only worker livelihood demo built with Next.js App Router, TypeScript, Tailwind CSS, Motion, Radix/shadcn-style components, Recharts and QRCode React.

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

Language selection persists a preference; full translation is not implemented. Voice controls show simulated transcriptions or summaries. Baseline job history and profiles are sample records. Worker portraits were provided as references. A single active project connects the judge's story; this is not a multi-job accounting system. Team shares are proposals and are not automatically paid or deducted.

## Checks

`npm run typecheck` and `npm run build`.
