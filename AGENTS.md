<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Frontend Design Rules & Guidelines

These rules are borrowed from the `hallmark` and `taste-skill` frameworks to maintain extreme visual polish, layout robustness, and zero code slop:

### 1. The 8-State Component Discipline
Every interactive component (buttons, inputs, links) must support all **8 interactive states** in CSS/Tailwind:
1. **Default**: Static visual presentation.
2. **Hover**: Smooth transitions when hovered (using `hover:` utility).
3. **Focus**: Distinct styling using `focus-visible:` utility (no default browser outline).
4. **Active**: Slightly compressed style or scale down (`active:scale-98`) to confirm press.
5. **Disabled**: Reduced opacity, `pointer-events-none`, and greyed out.
6. **Loading**: Displaying a spinner/skeleton, disabling pointer events.
7. **Error**: Red/orange outline/border indicating failure.
8. **Success**: Green/emerald outline/border indicating completion.

### 2. Viewport Spacing & Safe-Wrap
* The application is **strictly mobile-first**, centered at a max width of `420px`.
* Ensure that no visual elements trigger horizontal scrollbars. Always use `overflow-x: clip` on root shells.
* Enforce word wrapping on displays and headings using `overflow-wrap: anywhere` and `min-width: 0` to prevent layout breaks on ultra-narrow viewports (e.g. 320px).
* Avoid double-line wrap of important navigation links or CTAs.

### 3. Locked Tokens — No Inline improvisations
* Do not inline OKLCH, hex, or rgb color codes inside Tailwind utility overrides or components.
* All colors, border radii, and typography mappings must strictly reference CSS variables defined in `src/app/globals.css`.

