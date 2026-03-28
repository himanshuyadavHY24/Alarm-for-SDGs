# sdg-recall

> A minimal PWA that interrupts your day twice with random SDG numbers — spaced recall for the 17 UN Sustainable Development Goals.

Built for anyone preparing for competitive exams, Model UN, or anyone who wants to know all 17 SDGs cold without grinding flashcard apps. The core idea is simple: **random interruption is better than scheduled revision**. When you don't know when the buzz is coming, recall becomes genuine rather than anticipated.

---

## How it works

- Every day you tap **Activate**, the app picks two random times spread across your remaining waking hours
- At each time, your phone buzzes with a notification showing **2 random SDG numbers**
- You try to recall the full name before tapping to reveal
- The app also has a tap-to-recall grid of all 17 SDGs for quick reference

No accounts. No server. No data collected. Everything runs on your device.

---

## Install on Android

This is a Progressive Web App (PWA) — it installs directly from the browser, no Play Store needed.

**Step 1 — Host the files**

The PWA needs to be served over HTTPS. Two free options:

| Option | How |
|--------|-----|
| **Netlify Drop** | Go to [netlify.com/drop](https://netlify.com/drop), drag the project folder onto the page. Done in 30 seconds. |
| **GitHub Pages** | Upload files to a repo → Settings → Pages → set source to main branch. |

**Step 2 — Install on your phone**

1. Open the HTTPS URL in **Chrome** on your Android phone
2. Tap the three-dot menu (top right)
3. Tap **Add to Home Screen** → Install
4. Open from your home screen — it runs like a native app

**Step 3 — Activate**

1. Tap **Activate Today's Alarms**
2. Allow notifications when Chrome prompts you
3. Keep Chrome running in the background — do not force-stop it

That's it. Two random buzzes will arrive sometime today.

---

## Files

```
sdg-recall/
├── index.html      # Main app — all UI and scheduling logic
├── sw.js           # Service worker — handles background notifications
├── manifest.json   # PWA manifest — enables install + standalone mode
└── icon.png        # App icon
```

---

## The 17 SDGs

| # | Goal |
|---|------|
| 1 | No Poverty |
| 2 | Zero Hunger |
| 3 | Good Health & Well-being |
| 4 | Quality Education |
| 5 | Gender Equality |
| 6 | Clean Water & Sanitation |
| 7 | Affordable & Clean Energy |
| 8 | Decent Work & Economic Growth |
| 9 | Industry, Innovation & Infrastructure |
| 10 | Reduced Inequalities |
| 11 | Sustainable Cities & Communities |
| 12 | Responsible Consumption & Production |
| 13 | Climate Action |
| 14 | Life Below Water |
| 15 | Life on Land |
| 16 | Peace, Justice & Strong Institutions |
| 17 | Partnerships for the Goals |

---

## Technical notes

**Why not a native Android app?**
A PWA with a service worker covers the core use case without requiring Android Studio, APK signing, or Play Store distribution. Anyone can fork and self-host this in under two minutes.

**Why random times?**
Fixed alarms (e.g. 9 AM and 6 PM) become predictable, which lets your brain prepare. Random timing forces genuine cold recall — the same mechanism that makes spaced repetition effective is amplified when the *when* is also unpredictable.

**Limitations**
- Chrome must be running in the background for notifications to fire. If your phone's battery optimisation force-stops Chrome, notifications may not arrive. On most Android phones: Settings → Apps → Chrome → Battery → set to Unrestricted.
- iOS Safari has limited PWA notification support. This app works best on Android + Chrome.
- Times are scheduled in-session. If you close and reopen the app, it reschedules using the saved state for that day.

---

## Why I built this

Just for fun. Flashcard apps require you to sit down and grind. This doesn't — it comes to you, twice a day, at times you can't predict, and asks a question you either know or you don't. After a few weeks you stop needing it.

---

## License

MIT — do whatever you want with it.
