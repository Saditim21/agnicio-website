/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#373e98',
          base: '#373e98',
          hover: '#2d3279',
          active: '#23275a',
          light: '#5a62b8',
          lighter: '#8f95d4',
          lightest: '#e8e9f5',
        },
        neutral: {
          background: '#F5F5F5',
          surface: '#FFFFFF',
          text: {
            primary: '#202020',
            secondary: '#4A4A4A',
            tertiary: '#737373',
          },
          border: {
            DEFAULT: '#E0E0E0',
            hover: '#BDBDBD',
          },
        },
        accent: {
          blue: '#373e98',
        },
        semantic: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Lora', 'serif'],
        mono: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        'h1': '3rem',
        'h2': '2.25rem',
        'h3': '1.875rem',
        'h4': '1.5rem',
        'h5': '1.25rem',
        'h6': '1.125rem',
        'body-lg': '1.125rem',
        'body': '1rem',
        'body-sm': '0.875rem',
        'caption': '0.75rem',
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      lineHeight: {
        tight: '1.2',
        normal: '1.5',
        relaxed: '1.75',
        loose: '2',
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
      },
      transitionDuration: {
        '100': '100ms',
        '250': '250ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'sharp': 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
