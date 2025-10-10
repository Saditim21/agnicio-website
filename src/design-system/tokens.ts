/**
 * Agnicio Design System Tokens
 * Strategic Design System (SDS) for Agnicio.com
 * Technology Stack: React/TypeScript/TailwindCSS
 */

export const DESIGN_TOKENS = {
  project_name: 'Agnicio Replatforming',
  tech_stack: 'React/TypeScript/TailwindCSS',

  colors: {
    primary: {
      base: '#373e98',
      hover: '#2d3279',
      active: '#23275a',
      light: '#5a62b8',
      lighter: '#8f95d4',
      lightest: '#e8e9f5',
    },
    neutrals: {
      background: '#F5F5F5',
      surface: '#FFFFFF',
      text_primary: '#202020',
      text_secondary: '#4A4A4A',
      text_tertiary: '#737373',
      border: '#E0E0E0',
      border_hover: '#BDBDBD',
    },
    accent: {
      electric_blue: '#373e98',
      usage: 'interactive_elements_only' as const,
      allowed_contexts: [
        'buttons',
        'links',
        'form_controls',
        'icons_interactive',
        'focus_states',
      ] as const,
    },
    semantic: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
    },
  },

  typography: {
    font_families: {
      headings: 'Inter, sans-serif',
      body: 'Lora, serif',
      mono: "Consolas, Monaco, 'Courier New', monospace",
    },
    font_sizes: {
      h1: '3rem',
      h2: '2.25rem',
      h3: '1.875rem',
      h4: '1.5rem',
      h5: '1.25rem',
      h6: '1.125rem',
      body_lg: '1.125rem',
      body: '1rem',
      body_sm: '0.875rem',
      caption: '0.75rem',
    },
    font_weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    line_heights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },

  animation: {
    duration_min_ms: 100,
    duration_max_ms: 300,
    duration_default_ms: 250,
    timing_function: 'cubic-bezier(0.4, 0, 0.2, 1)',
    timing_presets: {
      ease_in: 'cubic-bezier(0.4, 0, 1, 1)',
      ease_out: 'cubic-bezier(0, 0, 0.2, 1)',
      ease_in_out: 'cubic-bezier(0.4, 0, 0.2, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },

  borders: {
    radius: {
      none: '0',
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      full: '9999px',
    },
    width: {
      thin: '1px',
      medium: '2px',
      thick: '4px',
    },
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
} as const;

export const COMPONENT_CONSTRAINTS = {
  component_library: 'React Bits (TS-TW variant)',

  animation_rules: {
    mandatory_prop: 'animationDuration',
    default_value_ms: 250,
    allowed_range: [100, 300] as const,
    enforcement: 'strict' as const,
    purpose:
      'All animations must serve a functional purpose (feedback, state transition, or attention direction)',
  },

  accent_color_rules: {
    primary_usage: 'Interactive elements only',
    prohibited_contexts: [
      'backgrounds',
      'large_surfaces',
      'decorative_elements',
      'body_text',
    ] as const,
    required_contexts: [
      'primary_buttons',
      'active_links',
      'form_focus_states',
      'interactive_icons',
    ] as const,
    hover_behavior: 'Darken by 15% (#2d3279)',
    active_behavior: 'Darken by 30% (#23275a)',
  },

  accessibility: {
    wcag_level: 'AA' as const,
    contrast_ratios: {
      primary_text_on_background: 'minimum 4.5:1',
      accent_on_surface: 'minimum 4.5:1',
      focus_indicators: 'minimum 3:1',
    },
    focus_visible: '2px solid accent color with 2px offset',
    keyboard_navigation: 'required for all interactive elements',
  },

  responsive_breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  component_variants: {
    buttons: ['primary', 'secondary', 'outline', 'ghost'] as const,
    inputs: ['default', 'error', 'success'] as const,
    cards: ['default', 'elevated', 'outlined'] as const,
  },
} as const;

// Helper function to validate animation duration
export function validateAnimationDuration(duration: number): boolean {
  return (
    duration >= COMPONENT_CONSTRAINTS.animation_rules.allowed_range[0] &&
    duration <= COMPONENT_CONSTRAINTS.animation_rules.allowed_range[1]
  );
}

// Helper function to get default animation duration
export function getDefaultAnimationDuration(): number {
  return COMPONENT_CONSTRAINTS.animation_rules.default_value_ms;
}
