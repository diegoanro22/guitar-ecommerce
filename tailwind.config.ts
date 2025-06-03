import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background_light: 'var(--background)',
        title: 'var(--title-color)',
        text: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-be-vietnam-pro)'],
      },
    },
  },
  plugins: [],
};

export default config;
