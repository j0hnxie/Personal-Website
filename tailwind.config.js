/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'navy-blue': '#072540',
      'light-blue': '#CBF6FF',
    },
    fontSize: {
      name: ['140px', '170px'],
      pagetitle: ['80px', '97px'],
      title: ['32px', '38px'],
      projecttitle: ['28px', '34px'],
      body: ['22px', '26px'],
      tag: ['13px', '16px'],
    }
  },
  plugins: [],
}
