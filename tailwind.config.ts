import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { secondaryColor: '#f43f5e' },
      fontFamily: {
        sans: ['var(--font-geist-sans)']
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: '0.2' },
          '20%': { opacity: '1' },
          '100%': { opacity: '0.2' }
        },
        sparkle: {
          '0%': {
            opacity: '0.7',
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)'
          },
          '50%': {
            opacity: '1',
            boxShadow: '0 0 15px rgba(255, 255, 255, 1)'
          },
          '100%': {
            opacity: '0.7',
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)'
          }
        },
        shine: {
          '0%': {
            transform: 'translateX(-20%) scaleX(0)'
          },
          '50%': {
            transform: 'translateX(70%) scaleX(1) '
          },
          '100%': {
            transform: 'translateX(100%) scaleX(0)'
          }
        },
        subtleBounce: {
          '0%': {
            transform: 'translateY(0) ' // Starting at no rotation
          },
          '30%': {
            transform: 'translateY(-4px) ' // Slight bounce and left rotation
          },
          '50%': {
            transform: 'translateY(0) ' // Back to center with no rotation
          },
          '70%': {
            transform: 'translateY(-2px) ' // Slight bounce and right rotation
          },
          '100%': {
            transform: 'translateY(0) ' // Back to original position
          }
        }
      },
      animation: {
        sparkle: 'sparkle 3s linear infinite',
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        shine: 'shine 3s infinite',
        subtleBounce: 'subtleBounce  1.2s ease-in-out infinite, sparkle 3s linear infinite '
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};

export default config;
