# Digital Twin Bina Marga — Dashboard

Frontend slicing assignment for Digital Twin Bina Marga, a road and bridge infrastructure monitoring system.

## 🔗 Links
- **Live Demo:** https://digital-twin-bina-marga.vercel.app/

## 🛠 Tech Stack
- **Next.js 15** — App Router
- **Tailwind CSS v4** — utility-first styling with custom design tokens
- **TypeScript** — type safety
- **React Leaflet** — interactive map
- **Lucide React** — icon library

## 📁 Project Structure
```
app/
  layout.tsx          # Root layout with ThemeProvider
  page.tsx            # Dashboard page
  globals.css         # Design tokens & global styles
components/
  atoms/              # StatusBadge, TypeTag, StatIcon, NavItem
  molecules/          # StatCard, AssetListItem, Sidebar
  organisms/          # DashboardNavbar, StatCardGrid, MapSection, AssetTable
  templates/          # DashboardLayout
contexts/
  ThemeContext.tsx    # Dark mode state management
data/
  mockData.ts         # Mock infrastructure data
hooks/
  useLeafletMap.ts    # Custom hook for Leaflet map initialization
types/
  index.ts            # Shared TypeScript interfaces
constants/
  index.ts            # Design system constants
```

## 🎨 Design System

Design tokens defined in `globals.css` via Tailwind v4 `@theme`:

- **Primary:** `#3B67F6` (base), `#1E378A` (darker), `#93ACFD` (light)
- **Neutral:** `#1A1A1A` → `#F5F5F5`
- **System:** Green / Yellow / Red for status indicators
- **Typography:** h2 (28px/700) → caption (12px)
- **Shadows:** sm / md / lg

## 🧱 Component Architecture

Follows **Atomic Design** methodology:

- **Atoms** — smallest reusable units (badges, icons, tags, nav items)
- **Molecules** — combinations of atoms (stat card, asset list item, sidebar)
- **Organisms** — complex UI sections (map section, asset table, stat grid)
- **Templates** — page-level layout (dashboard layout with sidebar)

## ✨ Features

- **Infrastructure Map** — interactive Leaflet map with custom shape markers (Road=▬, Bridge=◆, Sensor=●)
- **Asset Table** — scrollable list of 10 infrastructure assets with status badges
- **Stat Cards** — 4 key metrics with semantic color coding
- **Dark Mode** — full dark mode support via ThemeContext
- **Responsive** — mobile (1 col), tablet (2 col), desktop (4 col + side-by-side layout)
- **Sidebar** — collapsible navigation with desktop collapse toggle and mobile drawer

## 🚀 Getting Started
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🤖 AI Usage

AI was used as a pair programming tool for generating component boilerplate and debugging. All design decisions, UX reasoning, and architectural choices were evaluated and decided independently.
