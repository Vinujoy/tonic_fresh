// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#007D3C',
            'secondary': '#ffed4a',
            'danger': '#e3342f',
           }),                    
    },
    variants: {
      extend: {},
    },
    plugins: [        
        require('@tailwindcss/forms'),
      ]
  }