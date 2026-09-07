tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper:  '#FBFAFE',
        roxo:   '#5E3A94',
        roxod:  '#4A2C77',
        roxol:  '#7A54B4',
        verde:  '#39C377',
        verded: '#2BA863',
        verdel: '#E5F7EE',
        lilas:  '#F3EFFA',
        edge:   '#E6DEF3',
        ink:    { DEFAULT: '#241832', 70: '#5C5170', 40: '#9990A8' },
      },
      fontFamily: { 
        display: ['Montserrat', 'sans-serif'], 
        body: ['Montserrat', 'sans-serif'] 
      },
      boxShadow: {
        phone: '0 40px 80px -20px rgba(36,24,50,.6), 0 0 0 1px rgba(94,58,148,.08)',
        card:  '0 1px 2px rgba(94,58,148,.05), 0 10px 26px -14px rgba(94,58,148,.28)',
      }
    }
  }
}