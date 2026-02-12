# Technical Specification: Professional AI Agent Agency
## Core Tech: Next.js (JavaScript), Tailwind CSS, Supabase, Lucide-React

### 1. Visual Design System (The "Anti-AI" Look)
To avoid looking like a generic template, we use a **"Bento-Grid"** layout with high-end "Cyber-Professional" styling.

* **Color Palette:**
    * **Base:** `#050505` (True Black) for high-end contrast.
    * **Surface:** `#0F0F0F` (Raised panels/cards).
    * **Accent:** `#00F0FF` (Electric Cyan) used *only* for highlights and active states.
    * **Border:** `rgba(255, 255, 255, 0.08)` (Subtle borders create depth without clutter).
* **Typography:**
    * **Headings:** 'Geist Sans' or 'Inter' (Extra Bold, tight letter-spacing).
    * **Body:** 'Geist Mono' for technical details (provides a "developer-built" feel).
* **Effects:**
    * **Glassmorphism:** Use `backdrop-blur-xl` on navbars and modal overlays.
    * **Mesh Gradients:** Subtle, dark animated gradients in the background to add "movement."

### 2. Component Design Logic
* **The "Memory Engine" Component:**
    * Design this as a visual "Node Map" or a "Database Stream." 
    * Show "Embeddings" as floating data points that resolve into text.
* **The Bento Grid:**
    * Avoid equal-sized boxes. Use a 3-column grid where some boxes span 2 columns or 2 rows.
    * Each grid item should have a `hover:border-cyan-500/50` transition.
* **Interactive Demo:**
    * A "Terminal" window style chat interface.
    * Include a "Memory Log" side-panel that updates in real-time as the AI "recalls" info.

### 3. Implementation Checklist (Next.js + JS)
- [ ] **Next.js App Router:** Standard directory structure.
- [ ] **Client Components:** Use `'use client'` strictly for interactive UI (chat, logic).
- [ ] **Animations:** Use `framer-motion` for "Spring" transitions (avoid linear animations).
- [ ] **Performance:** Implement `next/font` for zero layout shift.