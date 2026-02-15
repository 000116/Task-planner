/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        pastel: {
          bg: '#EDF1F7',       
          card: '#F6F8FC',      
          blue: {
            DEFAULT: '#8ABCE6', 
            light: '#D3E6F7',   
            dark: '#5A7C9C'    
          },
          gray: {
            light: '#E6EBF2',  
            DEFAULT: '#BCC6D6', 
            dark: '#7A8BA6'    
          },
          red: {
            light: '#FAD7D7',   
            DEFAULT: '#E68A8A' 
          }
        }
      },
      boxShadow: {

        'soft': '0 10px 30px -10px rgba(138, 188, 230, 0.4)',
        'soft-sm': '0 4px 12px -4px rgba(138, 188, 230, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem', 
      }
    },
  },
  plugins: [],
}