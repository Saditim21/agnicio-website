/**
 * Agnicio Design System Types
 * Type definitions for component props and design system constraints
 */

import { COMPONENT_CONSTRAINTS } from './tokens';

// Animation Duration Type (100-300ms)
export type AnimationDuration = 100 | 150 | 200 | 250 | 300;

// Base component props that all components should extend
export interface BaseComponentProps {
  /**
   * Animation duration in milliseconds
   * Must be between 100ms and 300ms
   * @default 250
   */
  animationDuration?: AnimationDuration;

  /**
   * Optional CSS class names
   */
  className?: string;

  /**
   * Optional data-testid for testing
   */
  testId?: string;
}

// Button variant types
export type ButtonVariant = typeof COMPONENT_CONSTRAINTS.component_variants.buttons[number];

export interface ButtonProps extends BaseComponentProps {
  /**
   * Button variant style
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Loading state
   */
  loading?: boolean;

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Button content
   */
  children: React.ReactNode;
}

// Input variant types
export type InputVariant = typeof COMPONENT_CONSTRAINTS.component_variants.inputs[number];

export interface InputProps extends BaseComponentProps {
  /**
   * Input variant style
   * @default 'default'
   */
  variant?: InputVariant;

  /**
   * Input type
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

  /**
   * Input value
   */
  value?: string;

  /**
   * Default value for uncontrolled input
   */
  defaultValue?: string;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Required field
   */
  required?: boolean;

  /**
   * Error message
   */
  error?: string;

  /**
   * Success message
   */
  success?: string;

  /**
   * Input label
   */
  label?: string;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

// Card variant types
export type CardVariant = typeof COMPONENT_CONSTRAINTS.component_variants.cards[number];

export interface CardProps extends BaseComponentProps {
  /**
   * Card variant style
   * @default 'default'
   */
  variant?: CardVariant;

  /**
   * Card content
   */
  children: React.ReactNode;

  /**
   * Hover effect enabled
   */
  hoverable?: boolean;

  /**
   * Click handler (makes card interactive)
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

// Typography types
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends BaseComponentProps {
  /**
   * Heading level
   */
  level: HeadingLevel;

  /**
   * Heading content
   */
  children: React.ReactNode;

  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right';
}

export interface TextProps extends BaseComponentProps {
  /**
   * Text content
   */
  children: React.ReactNode;

  /**
   * Text size variant
   */
  size?: 'caption' | 'body-sm' | 'body' | 'body-lg';

  /**
   * Text color variant
   */
  color?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Font weight
   */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
}

// Link types
export interface LinkProps extends BaseComponentProps {
  /**
   * Link URL
   */
  href: string;

  /**
   * Link content
   */
  children: React.ReactNode;

  /**
   * External link (opens in new tab)
   */
  external?: boolean;

  /**
   * Underline style
   */
  underline?: 'none' | 'hover' | 'always';
}

// Color constraint types
export type AccentColorContext =
  | 'buttons'
  | 'links'
  | 'form_controls'
  | 'icons_interactive'
  | 'focus_states';

export type ProhibitedAccentContext =
  | 'backgrounds'
  | 'large_surfaces'
  | 'decorative_elements'
  | 'body_text';

// Accessibility props
export interface AccessibilityProps {
  /**
   * ARIA label
   */
  'aria-label'?: string;

  /**
   * ARIA described by
   */
  'aria-describedby'?: string;

  /**
   * ARIA role
   */
  role?: string;

  /**
   * Tab index
   */
  tabIndex?: number;
}

// Animation timing presets
export type AnimationTimingPreset = 'ease-in' | 'ease-out' | 'ease-in-out' | 'sharp';
