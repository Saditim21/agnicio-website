# Agnicio Design System

**Strategic Design System (SDS) for Agnicio.com**

A modern, accessible, and purpose-driven design system built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React** - Component library
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework

## Core Principles

### 1. Accessibility First (WCAG AA Compliant)
- All color combinations meet WCAG AA contrast requirements (minimum 4.5:1)
- Focus indicators with 3:1 contrast ratio
- Keyboard navigation required for all interactive elements

### 2. Purpose-Driven Animations
- All animations serve a functional purpose (feedback, state transition, or attention direction)
- Strict duration constraint: **100ms - 300ms**
- Default duration: **250ms**

### 3. Restricted Accent Color Usage
- Accent color (#373e98) is **restricted to interactive elements only**
- Prohibited contexts: backgrounds, large surfaces, decorative elements, body text
- Required contexts: primary buttons, active links, form focus states, interactive icons

## Design Tokens

### Colors

#### Primary Palette
```typescript
primary: {
  base: '#373e98',      // Electric Blue
  hover: '#2d3279',     // Darken by 15%
  active: '#23275a',    // Darken by 30%
  light: '#5a62b8',
  lighter: '#8f95d4',
  lightest: '#e8e9f5'
}
```

#### Neutrals
```typescript
neutrals: {
  background: '#F5F5F5',
  surface: '#FFFFFF',
  text_primary: '#202020',
  text_secondary: '#4A4A4A',
  text_tertiary: '#737373',
  border: '#E0E0E0',
  border_hover: '#BDBDBD'
}
```

#### Semantic Colors
```typescript
semantic: {
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6'
}
```

### Typography

#### Font Families
- **Headings (H1-H6)**: Inter (sans-serif)
- **Body Text**: Lora (serif)
- **Monospace**: Consolas, Monaco, Courier New

#### Font Sizes
- H1: 3rem (48px)
- H2: 2.25rem (36px)
- H3: 1.875rem (30px)
- H4: 1.5rem (24px)
- H5: 1.25rem (20px)
- H6: 1.125rem (18px)
- Body Large: 1.125rem (18px)
- Body: 1rem (16px)
- Body Small: 0.875rem (14px)
- Caption: 0.75rem (12px)

### Animation

#### Duration Constraints
- **Minimum**: 100ms
- **Maximum**: 300ms
- **Default**: 250ms (mandatory for all components)

#### Timing Functions
- `ease-in`: cubic-bezier(0.4, 0, 1, 1)
- `ease-out`: cubic-bezier(0, 0, 0.2, 1)
- `ease-in-out`: cubic-bezier(0.4, 0, 0.2, 1) ← Default
- `sharp`: cubic-bezier(0.4, 0, 0.6, 1)

### Spacing
- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)
- 3xl: 4rem (64px)
- 4xl: 6rem (96px)

## Usage

### Importing Design Tokens

```typescript
import { DESIGN_TOKENS, COMPONENT_CONSTRAINTS } from '@/design-system';

// Access colors
const primaryColor = DESIGN_TOKENS.colors.primary.base;

// Validate animation duration
import { validateAnimationDuration, getDefaultAnimationDuration } from '@/design-system';

const isValid = validateAnimationDuration(250); // true
const defaultDuration = getDefaultAnimationDuration(); // 250
```

### Using Tailwind Classes

```tsx
// Primary button with accent color (correct usage)
<button className="bg-primary hover:bg-primary-hover active:bg-primary-active transition-default">
  Click Me
</button>

// Typography
<h1 className="font-heading text-h1 font-bold">Heading</h1>
<p className="font-body text-body text-neutral-text-secondary">Body text</p>

// Animations
<div className="animate-fade-in">Fades in with 250ms duration</div>
<div className="animate-slide-in">Slides in from bottom</div>
<div className="animate-scale-in">Scales up from 95% to 100%</div>
```

### Component Props

All components must extend `BaseComponentProps`:

```typescript
import { BaseComponentProps } from '@/design-system';

interface MyComponentProps extends BaseComponentProps {
  title: string;
  // animationDuration is inherited (default: 250ms)
}

function MyComponent({
  title,
  animationDuration = 250,  // Always default to 250ms
  className
}: MyComponentProps) {
  // Component implementation
}
```

## Component Variants

### Buttons
- `primary` - Electric blue background (accent color)
- `secondary` - Neutral background
- `outline` - Transparent with border
- `ghost` - Minimal styling

### Inputs
- `default` - Standard input style
- `error` - Error state styling
- `success` - Success state styling

### Cards
- `default` - Standard card
- `elevated` - With shadow
- `outlined` - With border

## Accessibility Guidelines

### Focus Indicators
All interactive elements must have visible focus indicators:
```css
*:focus-visible {
  outline: none;
  ring: 2px solid primary;
  ring-offset: 2px;
}
```

### Keyboard Navigation
- All buttons, links, and form controls must be keyboard accessible
- Use semantic HTML elements
- Provide appropriate ARIA labels when necessary

### Color Contrast
- Primary text on background: minimum 4.5:1
- Accent color on surface: minimum 4.5:1
- Focus indicators: minimum 3:1

## File Structure

```
src/design-system/
├── README.md           # This file
├── index.ts            # Central export
├── tokens.ts           # Design token constants
└── types.ts            # TypeScript type definitions
```

## Animation Rules (Strict Enforcement)

1. **Mandatory Prop**: All components must include `animationDuration` prop
2. **Default Value**: Always 250ms
3. **Allowed Range**: 100ms - 300ms only
4. **Purpose**: Animations must serve functional purposes:
   - User feedback (button click, form submission)
   - State transitions (loading, success, error)
   - Attention direction (new content, notifications)

## Accent Color Rules (Strict Enforcement)

### ✅ Allowed Contexts
- Primary buttons
- Active/hover states on links
- Form focus states
- Interactive icons
- Selected states

### ❌ Prohibited Contexts
- Large background surfaces
- Decorative elements
- Body text
- Non-interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

When adding new design tokens or components:

1. Ensure WCAG AA compliance
2. Follow animation duration constraints (100-300ms)
3. Restrict accent color to interactive elements only
4. Update TypeScript types accordingly
5. Document usage examples

---

**Version**: 1.0.0
**Last Updated**: 2025-10-05
**Maintained by**: Agnicio Team
