# Time Surfers

Time Surfers is an AI-assisted tour platform for moving through recorded history. A guide supplies songs, movies, games, paintings, commercials, archived websites, and the idea connecting them. The system helps turn those pieces into a coherent, skippable program in which every stop explains why it belongs after the one before it.

The first product is a digital drive-in: one continuous tour, a clear timeline, source attribution, transitions, skip controls, guide commentary, and limited sponsor breaks. Time Surfers travels only through the past because its raw material is recorded media and preserved culture—not predictions presented as fact.

## First release

- working index and tour player
- search across tour title, guide, era, and media type
- guide profile and application/business-plan intake
- first tour: **Signals, Pipes & Princesses**
- official-source and Internet Archive links
- clearly labeled sponsor placement between stops
- future Infinity wallet entry point (interface only)

## Production flow

1. A person submits a theme, audience, source links, and business plan.
2. AI checks links and flags availability or rights concerns.
3. AI improves the theme, orders the stops, and writes each bridge.
4. The guide reviews the route and attribution.
5. The system publishes a skippable tour and indexes the guide.

AI review should improve most good-faith submissions. It must not claim ownership of a plan, invent permissions, imply that embedding grants commercial reuse rights, or republish protected files.

## Media and rights

Time Surfers links to or embeds media only through a source's supported player and terms. Movies, music, games, and artwork remain with their owners. Internet Archive availability is not proof of commercial reuse permission. Each stop should store its source URL, source type, rights note, restrictions when known, and last verification date. Broken sources must pause cleanly and offer a verified replacement instead of overlapping the next player.

## Advertising

The advertising product is a labeled sponsor break between compatible stops, with guide/platform revenue sharing after contracts, payment processing, tax handling, brand-safety review, and rights clearance exist. The first interface is ad-ready inventory, not an active ad-network agreement. Future options can include direct sponsorships and eligible VAST/VMAP or Google ad products.

## Next milestone

Add persistent accounts and applications, an authenticated guide dashboard, source-health checks, moderation, real wallet-ledger integration, sponsor inventory, analytics, and rights-aware publishing.

## Development

```bash
npm run dev
```

The app uses Vinext/React. Main files: `app/page.tsx`, `app/globals.css`, and `app/layout.tsx`.
