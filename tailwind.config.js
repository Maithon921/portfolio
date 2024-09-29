/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
       poppins : ['"Poppins"', "sans-serif"],
      },

      animation: {
       
        ani1: 'progress 2s ease-in-out forwards',
        ani2: 'progress1 2s ease-in-out forwards',
        ani3: 'progress2 2s ease-in-out forwards',
        ani4: 'progress3 2s ease-in-out forwards',
        ani5: 'progress4 2s ease-in-out forwards',
        typing: "typing 3s steps(20) infinite alternate",
       

      },
      keyframes: {
      
        progress: {
          '0%' :{width: '0%'},
          
          '100%' : {width:'90%'}, 
        },
        progress1: {
          '0%' :{width: '0%'},
          
          '100%' : {width:'70%'}, 
        },
        progress2: {
          '0%' :{width: '0%'},
          
          '100%' : {width:'90%'}, 
        },
        progress3: {
          '0%' :{width: '0%'},
          
          '100%' : {width:'85%'}, 
        },
        progress4: {
          '0%' :{width: '0%'},
          
          '100%' : {width:'90%'}, 
        },

        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "105%"
          }  
        },
   
      
      },
    },
  },
  plugins: [],
}

