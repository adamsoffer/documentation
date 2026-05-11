# Livepeer Design System — Skill

You are designing for **Livepeer's Developer Dashboard** — the console for browsing
GPU-powered video AI capabilities, managing API keys, and watching runs/spend on
the open network.

## Always start here
1. Read `colors_and_type.css` (single source of truth for tokens) and `README.md` (foundations + voice).
2. Inspect `ui_kits/dashboard/index.html` for live examples of every component pattern.
3. Use Lucide icons (CDN: `https://unpkg.com/lucide@latest`) at `stroke-width: 1.5`.

## Non-negotiables
- **Dark default.** Surfaces step `#070707 → #121212 → #181818 → #1E1E1E`. No gradients on dashboard surfaces.
- **Geist sans** for everything; **mono** (Geist Mono → ui-monospace fallback) for numbers, IDs, hashes, prices, latencies, eyebrows, pills, kbd. Mono carries the dashboard's signature.
- **Density.** Body 13.5px, tracking −0.005em. Card padding 16/24px. Buttons 28–32px.
- **Radii ≤ 12px.** `xs 3` (pills/kbd) · `sm 4` (buttons) · `md 6` (cards/inputs) · `lg 8` (search) · `xl 12` (rare).
- **Cards have no shadow.** Elevation = surface step. Hairline border (1px, .06 alpha).
- **Focus** = 1px ring `green-bright/30`. Not border-only.
- **Hover** = `-1px translateY` on cards · `bg-hover` (.04) on rows/buttons · never glows.

## Voice
Confident, technical, no-nonsense. Title Case page/section titles, sentence case body,
**ALL CAPS mono** for eyebrows/labels, **lowercase mono** for pills + statuses.
Honest about constraints (~100 GPUs, ~90–95% uptime, no SLAs). Numbers always tabular.

**Required terms:** the network · solutions · GPU providers · capability · run.
**Banned:** platform · decentralized (as a sell) · revolutionary · 10x · emoji · lorem ipsum.

## Common patterns (copy from `ui_kits/dashboard/`)
- **KPI strip** — 4-col grid, hairline-separated cells, mono value + delta below.
- **Capability card** — 16:10 thumb (cool/green-tinted, low-sat) + backdrop-blur category chip + 3-col mono stat footer.
- **Pills** — mono lowercase 10.5px, optional pulsing dot for `live`. Tones: live/warm/cold/queued/fail.
- **Runs table** — dense rows, mono IDs and numbers, pill in status column, faint timestamps right-aligned.
- **Sidebar** — flush left at `--shell` (#070707), 232px expanded / 56px collapsed, hairline right divider.

## Don't
- Don't invent new colors — pull from the token file.
- Don't add box-shadow to cards.
- Don't use `animate-ping`; use the `breathe` / `statusHalo` keyframes.
- Don't use emoji or web3 vocabulary.
- Don't show real-looking metrics — flag mock data as such.
