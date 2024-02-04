const THEME = {
    colors: {
        primaryBlack: '#000000',
        primaryGray: '#D9D9D9',
        primaryBlue: '#0057FF'
    },
    size: {
        xs: '400px', // for small screen mobile
        sm: '600px', // for mobile screen
        md: '900px', // for tablets
        lg: '1280px', // for laptops
        xl: '1440px', // for desktop / monitors
        xxl: '1920px', // for big screens
      },
}

export const DEVICES = {
    xs: `(max-width: ${THEME.size.xs})`,
    sm: `(max-width: ${THEME.size.sm})`,
    md: `(max-width: ${THEME.size.md})`,
    lg: `(max-width: ${THEME.size.lg})`,
    xl: `(max-width: ${THEME.size.xl})`,
    xxl: `(max-width: ${THEME.size.xxl})`,
  }

export default THEME;