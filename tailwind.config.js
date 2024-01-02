/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', 
            './node_modules/flowbite/**/*.js',
            './views/**/*{html,js}',],
  theme: {
    extend: {
      colors: {
        'primary': '#C8AD97',
      },
      fontFamily: {
        body : ['Poppins', 'sans-serif']
      },
      backgroundImage : theme => ({ 
        'hero-pattern': "url('/src/img/Wave.svg')",
      }),
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
  },
  plugins: 
  [
    require('flowbite/plugin'), 
    require('@tailwindcss/aspect-ratio'),
  ],
  },
};
