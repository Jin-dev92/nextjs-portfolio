/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'steam-background': "url('/images/steam/bg_steam.png')",
        'steam-value-logo': "url('/images/steam/footer_logo_value.png')",
        'steam-logo-footer': "url('/images/steam/logo_steam_footer.png')",
      },
      colors: {
        'steam-primary': '#67c1f5',
        'steam-secondary': '#acdbf5',
        'steam-grey': '#8F98A0',
        'steam-white': '#C6D4DF',

        white: '#ffffff',
        black: '#000000',
        'black-rgb': '0, 0, 0',
        'gray-1': '#111111',
        'gray-2': '#232323',
        'gray-4': '#4c4c4c',
        'gray-4-rgb': 'rgb(76, 76, 76)',
        'gray-7': '#767676',
        'gray-8': '#8c8c8c',
        'gray-9': '#999999',
        'gray-a': '#aaaaaa',
        'gray-c': '#cccccc',
        'gray-d': '#dddddd',
        'gray-e': '#eeeeee',
        'gray-f': '#f6f6f6',
        bg: '#f6f6f6',
        blue: '#0071f0',
        'blue-dark': '#0053b3',
        red: '#eb0d00',
        'red-rgb': 'rgb(235, 13, 0)',
        orange: '#ff9500',
        yellow: '#ffcc00',
        green: '#26873e',
        teal: '#5ac8fa',
        indigo: '#5856d6',
        purple: '#af52de',
        pink: '#ff2d55',
        em: '#ff59e3',
      },
    },
  },
  plugins: [],
};
