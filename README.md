# Mobile Video Player Demo

This is a locally hosted Next.js webapp (React, TypeScript, Tailwind CSS) designed for iPad and Android browsers. It features a mobile-friendly UI with pressable buttons that play videos when pressed.

## Features
- Responsive, touch-optimized design
- Accessible HTML5 video elements
- Easy to add or replace video files (see `public/sample1.mp4`, `public/sample2.mp4`)

## Getting Started

1. **Add your videos:**
   - Place your video files in the `public/` directory (e.g., `public/sample1.mp4`).
   - Update the video list in `src/app/page.tsx` if you want to change labels or add more videos.

2. **Run the development server:**
   ```zsh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) on your iPad or Android browser (ensure your device is on the same network).

3. **Usage:**
   - Tap a button to play the corresponding video. Only one video plays at a time.

## Customization
- Update Tailwind styles in `src/app/page.tsx` for your branding.
- Replace placeholder videos with your own content.

---

This project was bootstrapped with Next.js, TypeScript, and Tailwind CSS.
