# Livepeer Design System

A working design system for the **Livepeer Developer Dashboard** — Livepeer's
console for browsing AI capabilities, managing API keys, and watching usage on
the open network for GPU-powered video.

This system is **dashboard-scoped** (not the marketing site). The dashboard
runs on Geist + a cool zinc-neutral surface scale; the marketing site runs on
Favorit Pro on warm dark surfaces. Where the two diverge, this system follows
the dashboard.

---

## Sources

Everything here was lifted directly from the dashboard codebase on the
`claude/dashboard-updates` branch (no screenshots).

- **Repo:** [livepeer/website @ claude/dashboard-updates](https://github.com/livepeer/website/tree/claude/dashboard-updates)
- **Brand spec:** `brand-tokens.md` — colors, typography, logo rules, gradients, greyscale ramp, graphic elements
- **Dashboard conventions:** `CLAUDE.md` (the "Dashboard conventions" + "Brand & Styling" sections)
- **Token CSS:** `app/globals.css` — `@theme` block + `[data-theme]` overrides
- **Dashboard layout:** `app/(dashboard)/dashboard/layout.tsx` — Geist override, density, sidebar scaffold
- **Reference components:** `components/dashboard/*` — `KpiCard`, `KpiStrip`, `Pill`, `StatusDot`, `SectionHeader`, `ModelCard`, `DashboardSidebar`, `DashboardPageHeader`, etc.
- **Reference pages:** `app/(dashboard)/dashboard/{page,explore,models/[id],network,usage,settings,keys,runs}/page.tsx`

---

## Index

| File | What's in it |
| --- | --- |
| `README.md` | This file. Brand context, content + visual foundations, iconography. |
| `colors_and_type.css` | All color + typography tokens. The single source of truth for any HTML built from this system. |
| `SKILL.md` | Agent-facing summary — drop into Claude Code as a skill. |
| `assets/` | Logos (symbol, wordmark, lockup) — white-on-dark variants from the upload. |
| `fonts/` | Geist OTF weights (Thin → Black). |
| `preview/` | Per-token cards rendered for the Design System tab. |
| `ui_kits/dashboard/` | Pixel-faithful recreations of dashboard screens (Home, Explore, Network, Usage, Settings) — JSX components + `index.html` click-thru. |

---

## Company context

**What Livepeer is.** *"The open network for GPU-powered video."* A specialized
GPU compute network for real-time video inference, operated by independent
orchestrators. Builders ship products on top of it — they're called
**solutions** (not "platforms," not "DGEs," not "tools"): Daydream, Frameworks,
Streamplace, Embody.

**The stack.** Three layers — Demand (solutions on the network) → Protocol
(routing, payments, staking) → Supply (GPUs contributed by orchestrators).

**Surfaces in this system.** This system covers the **Developer Dashboard** —
the console where developers browse capabilities, get API keys, and watch
runs / spend / latency. The marketing site (`livepeer.org`) is a separate
visual system using Favorit Pro on the warm "Holographik" dark scale; not in
scope here.

**Audience.** Builders evaluating GPU infrastructure for real-time video AI.
Comparison-shopping against AWS, RunPod, Fal, Replicate. Tolerant of edges
constraints (~100 AI-capable GPUs today, no formal SLAs) because cost,
capability, or community alignment unlocks their work.

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, technical, no-nonsense. Lead with what builders can do
on the network and why it matters. Use concrete numbers where validated. Be
honest about constraints — "the network has ~100 AI-capable GPUs, ~90–95%
uptime, no formal SLAs." Don't oversell what doesn't exist yet.

**Person.** Mostly third-person around the network ("the network routes…",
"Livepeer is…"). Direct second-person around the user's stuff in the
dashboard ("Your runs", "You're on the free tier"). Imperative for actions —
"Browse capabilities", "Sign in", "Open in playground", "Run again".

**Casing.**
- Page + section titles: Title Case ("Recent runs", "Your runs", "Network").
- Eyebrows / column labels / micro-labels: ALL CAPS in mono ("WORKSPACE · FLIPBOOK", "P50", "SPEND · MTD"). Tracked +0.06–0.08em.
- Pills + status text: lowercase in mono ("warm", "cold", "live", "success").
- Body sentences: sentence case.

**Tone examples (from the dashboard):**
- Greeting: *"Good morning, Adam"* / *"Workspace · Flipbook"*
- Free-tier banner: *"You're on the free tier · 4,217 requests left this month · resets in 12 days"* + CTA *"Add a payment provider"*
- Empty state: *"No runs yet — Run inference to see your runs here — status, latency, and time per request."*
- Promo card: *"5 demo runs per capability — No credit card. Spin up in 30 seconds with an API key."*
- Last-run hero: *"Last run · 4m ago · success · video-to-video · via livepeer-go-cli"*
- CTA: *"Open in playground"* with an `R` keyboard chip
- Status: *"All systems operational"*

**Numbers + units.** Always tabular. Compact units: `$0.005/min`, `284ms`,
`17,374`, `1.2K`. Latency in `ms` under 1s, `s` above. Money to 2dp under
$10, abbreviated above (`$5.70`, `$1.8K`). Percent deltas with sign +
direction (`+18.2%`, `−12ms`, `−0.2pp`).

**Terminology — required.**
| Use | Don't use |
| --- | --- |
| the network | the platform / the service |
| open network | decentralized infrastructure |
| solutions | builds, gateways, tools, DGEs |
| GPU providers (dev-facing) | nodes |
| orchestrators (protocol context) | miners, validators |
| inference | processing (when AI-specific) |
| GPU-powered video | real-time AI video (retired headline) |
| capability | endpoint (in dashboard surface copy) |
| run | request, hit, call |

**What we don't say.**
- No "revolutionary," "game-changing," empty superlatives.
- No "decentralized" as a selling point (too web3-coded for the dev audience).
- No "10x" cost claims — copy says **60–85% cheaper**, flagged pending validation.
- No emoji in product copy. (Lucide icons carry the visual language.)
- No mock numbers presented as real — all dashboard demo data is mock-driven.
- No lorem ipsum. Use realistic placeholder strings (e.g. `daydream/video-v2`, `req_8H4t…f1c0`).

---

## VISUAL FOUNDATIONS

**Theme.** Dual-source. Dashboard ships dark by default; light is opt-in via
Settings → Appearance. Both themes share the same accent palette; surface,
foreground, border, and CTA tokens swap. The marketing site is dark-only
(except `/primer`).

**Color vibe.** Cool. Brand green `#18794E` (forest, not minty). Greyscale
`#121212 → #2A2A2A` is neutral R≈G≈B (no warm cream). Light mode lives on
the zinc family, not the Notion warm palette — Vercel/Linear/Stripe family.

**Surface ramp (dark).** A 4-tier dark scale used across the dashboard:
`shell #070707` (chrome) → `bg #121212` (canvas, matches marketing) →
`bg-1 #181818` (elevated) → `bg-card #1E1E1E` (cards) → `bg-raised #242424`
(hover/nested). Borders: `hairline rgba(255,255,255,.06)` →
`subtle .10` → `strong .15` → solid `#2A2A2A` for opaque cases.

**Surface ramp (light).** `shell zinc-100` (sidebar) → `bg zinc-50` (canvas)
→ `bg-1 white` (cards). Subtle 5-RGB-step jumps; cards pop off canvas via
the bg step alone, no shadow needed.

**Foreground ramp.** Opacity-driven over the canvas — `100 / 70 / 60 / 50 /
40 / 25%`. Map: heading / strong body / body / supporting / labels / disabled.
Same opacity ramp on light mode (over `rgb(24,24,27)`) so the two themes
read as one system.

**Type.**
- **Sans:** Geist (Thin → Black). Body 13.5px, tracking −0.005em — denser
  than Tailwind's default to land in the Linear/Stripe density bracket.
- **Mono:** Geist Mono (not in this upload — falls back to ui-monospace). Used
  for IDs, hashes, prices, latencies, eyebrows, KPI numbers, pills, kbd chips.
  This mono usage is the dashboard's signature — it appears in *every* card.
- **Marketing (not in this kit):** Favorit Pro / Favorit Mono.

**Backgrounds.** No gradients on dashboard surfaces — backgrounds are flat
`bg`. The only background flourish is the **`.tile-bg`** grid overlay
(48px × 48px green-tinted lines at 4% opacity) used sparingly: login splash,
signed-out promo card. Marketing site uses gradients heavily; dashboard
deliberately doesn't.

**Cards.** Always rounded `--r-md` (6px) — not 8px, not 12px. Border is
`border-hairline` (1px, .06 alpha). Background `bg-1` (#181818) on dark or
white in light. **Shadow is a no-op** on cards — elevation comes from the
surface step, not box-shadow. Padding: `p-4` for data-dense rows, `p-6` for
feature blocks.

**Cards (capability / model).** Rounded `--r-md`, hairline border, hover
lifts by `-1px translateY` and steps the border up to `border-strong`. 16:10
thumbnail with a backdrop-blur category chip pinned bottom-left. Three-column
mono stat footer (p50 / Price / 7d runs) separated from the body by a single
hairline.

**Buttons.**
- *Primary (`btn-primary`):* `--r-sm` 4px, height 28–36px depending on
  context, brand-green fill on dark / zinc-900 on light, 1px edge highlight
  in `--cta-border`, hover lifts to `--cta-hover` (`green-light` /
  `zinc-800`). White text. Often has an inline kbd chip (`R`, `⌘K`).
- *Ghost:* transparent, `text-fg-strong`, hover `bg-hover` + `border-hairline`.
- *Icon ghost:* 26×26px, rounded `--r-sm`, `text-fg-faint` → `text-fg` on hover.

**Pills.** Rounded `--r-xs` (3px), 1px outset border, mono lowercase 10.5px,
optional leading dot. Tones: `live` (green, pulsing breathe), `warm` (amber,
status only), `cold` (faint), `default` (neutral), `fail` (red).

**Status dots.** Center dot + animated halo (`statusHalo` keyframe — smoother
+ slower than Tailwind's `animate-ping`). Tones: `green / warm / blue / red /
amber`. Pair with mono lowercase status text.

**Chips + badges (mono).** Rounded `--r-xs`, mono tabular-nums, used for
trend deltas (`+18.2%`), kbd chips (`⌘K`, `R`), and counts.

**Borders.** Three semantic tiers — hairline (.06), subtle (.10), strong
(.15). Solid `#2A2A2A` reserved for opaque cases (e.g. divider strokes
between table rows where overlap can clip).

**Radii.** Conservative. `xs 3px` (pills, kbd) · `sm 4px` (buttons) ·
`md 6px` (cards, inputs) · `lg 8px` (search, sidebar promo cards) · `xl 12px`
(rare large feature blocks). Never `2xl+`. The whole system feels Linear-tight.

**Shadows.** Cards: none. Popovers: a black-tinted layered shadow on dark
(`0 8px 24px -4px rgba(0,0,0,.45) + 0 2px 6px -1px rgba(0,0,0,.30)`). Light
mode swaps to a softer slate-toned shadow. CTA glow is its own keyframe
(`ctaGlow`), used on hero/login CTAs only.

**Spacing rhythm.** Tailwind 4px base. Per-section margins on the home view
follow a strict rhythm — 16px tight cluster (greeting → KPIs → banner) /
28px section break / 10px section header → panel / 28px panel → panel.
Sidebar nav rows: `26px` collapsed icon button, `28px` expanded NavLink.

**Layout rules (dashboard).** Each page picks one max-width based on content:
`max-w-5xl` forms-heavy (Settings tabs) · `max-w-6xl` tables/charts (Network,
Usage) · `max-w-7xl` dense grids (Explore). The same max-width is repeated
2–3× per page (header, sticky tab strip, content) so they line up exactly —
there's no shared `<DashboardPage>` wrapper.

**Sidebar.** Flush against the left edge, no rounded floating panel. Width
`--side-w 232px` (collapsed `56px`). Background `--shell` (one step darker
than canvas) so the canvas feels lifted; hairline border on the right
separates the rail from main content.

**Animation.** Three durations: `150ms` (hover/focus/color), `200ms`
(dropdowns/menus/tab switches), `300ms` (drawers/modals). Three easings:
`ease-out` (entry — `cubic-bezier(0.16, 1, 0.3, 1)`), `ease-in` (exit), and
`ease-spring` (drawer-style). All animations respect
`prefers-reduced-motion`. No bounces, no oversized springs — feels
mechanical-quiet, like Linear.

**Hover states.** Subtle. Backgrounds step from transparent → `--hover`
(.04). Borders step from `hairline` → `subtle` or `strong`. Cards do a
single `-1px translateY` lift. Text rarely changes color on hover; when it
does, it goes from `fg-muted` → `fg`. **Never** an outline glow on hover.

**Press / active.** Backgrounds step from `--hover` → `--active` (.07) or
the strongest tint `--pop` (.10). Buttons go from `--cta-hover` →
`--cta-active`. No "click bounce" / scale-down.

**Focus.** Form controls show a 1px ring in `green-bright/30`
(`focus-visible:ring-1 focus-visible:ring-green-bright/30`). Border-only
focus is banned by convention.

**Transparency + blur.** Used sparingly. Two intentional places:
1. **Capability category chip** on capability cards — `rgba(10,10,11,0.72) +
   backdrop-blur(6px)` over the thumbnail.
2. **Drawer / dialog scrim** — `--overlay` (.50 black on dark, .32 zinc-900
   on light).
No frosted glass elsewhere.

**Imagery.** Capability thumbnails are 16:10 cropped photography or
generative outputs. **Color treatment is cool — slightly green-tinted, ~B&W
or low-saturation**, with `contrast(1.1) brightness(0.5)` and a green-tint
overlay (`ImageMask` recipe). Marketing-side adds a tile-grid + scanline
overlay; dashboard does not.

**Motion accents (marketing, not dashboard).**
- `breathe` — opacity 0.6 → 1 → 0.6 (used on dashboard's `<StatusDot>`)
- `node-pulse` — scale 1 → 1.3 → 1 at 86% mark
- `scanLine` — 4s linear translateY (marketing only)
- `imageMaskFlow` — 20s ease background-position cycle (marketing only)
- `ctaGlow` — soft breathing green halo (used on marketing CTAs, occasionally on dashboard hero CTAs)

**Selection + caret.** Branded — selection is `green-bright` at 25% over the
fg color; caret is `green-bright`. Browser autofill is killed by inset
box-shadow.

---

## ICONOGRAPHY

**Icon system.** **Lucide React.** Default `strokeWidth={1.5}`. Override
only when a glyph reads too thin at the size you're using (e.g. `Activity`
at sizes ≥16px reads better at `1.75`). No custom icon font; no inline
brand SVGs as decoration; no Heroicons.

**CDN.** Lucide is embedded directly in this kit's HTML files via the
`lucide@latest` UMD bundle from unpkg — no codebase dependency, no font
license to track, exact same glyphs as the production dashboard.

**Sizes (use these — they're the dashboard's vocabulary).**
| px | Tailwind class | Use |
| --- | --- | --- |
| 12 | `h-3 w-3` | Inline arrows, ChevronDown chips |
| 14 | `h-3.5 w-3.5` | Inline label icons, search glyph in input |
| 16 | `h-4 w-4` | Buttons, nav rail icons |
| 20 | `h-5 w-5` | Card icons |
| 28–40 | `h-7 w-7` / `h-10 w-10` | Empty-state hero glyphs |

**Logo.**
- `assets/livepeer-symbol-white.svg` — 6 squares in a play-button arrangement (3 cols × 5 rows). Favicon, app icon, avatar, sidebar collapsed.
- `assets/livepeer-wordmark-white.svg` — "LIVEPEER" wordmark with custom-notched 'E' letters. Sidebar header, dashboard chrome.
- `assets/livepeer-lockup-white.svg` — Symbol + wordmark with 3× spacing. Footers, splash, partner pages.

White variants only in this upload — the brand spec calls for a black
variant on light backgrounds; in the dashboard, color is set via
`text-fg`/`text-shell` and SVGs use `currentColor`. (See `preview/Logos.html`
for the swap-by-currentColor pattern.)

**Logo-on-background rule.** White on dark, white on green-gradient, black on
white. Minimum clear space = symbol width (lockup), wordmark height
(wordmark), one square (symbol).

**Emoji.** **Not used.** Lucide carries the visual language. The only
exception is third-party logos (e.g. provider thumbnails) — those are real
images.

**Unicode chars.** Limited. `→` arrows in CTAs ("View all →"), `·` middle
dots as visual separators in meta rows ("success · video-to-video · via
livepeer-go-cli"), `⌘K` for the search shortcut.

**Status / activity glyphs.** A static colored dot or a `<StatusDot>` (dot +
animated halo) — never a Lucide `CircleDot`. Pulsing dots use the `breathe`
keyframe; halo dots use `statusHalo`.

---

## CAVEATS

- **Geist Mono** OTF was not in the upload set — the dashboard production
  uses `geist/font/mono`. This kit falls back to `ui-monospace, "SF Mono"`,
  which is visually close but not identical (cell width + Latin glyphs match,
  punctuation reads slightly different). **Drop the GeistMono OTF set into
  `fonts/` and the system will pick it up automatically.**
- **Black-on-light logo SVG** was not provided — the kit currently relies on
  `currentColor` swapping inside the white SVGs. A dedicated black variant
  would be more robust for partner / press use.
- **Marketing visual system** (Favorit Pro, gradient hero, ImageMask,
  scanline) is intentionally out of scope — this is dashboard-only per the
  user's spec. If you also want a marketing kit, ping me and I'll add a
  parallel `ui_kits/marketing/`.
- **Real backend data** — every demo number in this kit is mocked from
  `lib/dashboard/mock-data.ts` patterns. Don't ship them as real metrics.
