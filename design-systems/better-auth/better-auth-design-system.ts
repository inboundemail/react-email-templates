export const betterAuthDesignSystem = {
  colors: {
    background: {
      outside: '#FFFFFF',
      inside: '#FFFFFF',
    },
    card: {
      base: '#FFFFFF',
      hover: '#FAFAFA',
    },
    border: {
      main: '#E7E5E4',
      interactive: '#E7E5E4',
    },
    text: {
      primary: '#121212',
      secondary: '#444444',
      tertiary: '#666666',
      quaternary: '#767676',
      disabled: '#AAAAAA',
    },
    button: {
      primary: {
        text: '#FFFFFF',
        background: '#121212',
        hoverBackground: '#2A2A2A',
        border: '#121212',
      },
      secondary: {
        text: '#121212',
        background: '#FFFFFF',
        hoverBackground: '#FAFAFA',
        border: '#E7E5E4',
      },
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  radius: {
    none: '0px',
    sm: '0px',
    md: '0px',
    lg: '0px',
  },
  typography: {
    fontFamily: {
      sans: 'Gesit, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      fallback: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    heading: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '1.3',
      letterSpacing: '-0.01em',
      color: '#121212',
    },
    body: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '1.6',
      letterSpacing: '0',
      color: '#444444',
    },
    bodyStrong: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '1.6',
      letterSpacing: '0',
      color: '#121212',
    },
    small: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0',
      color: '#666666',
    },
    tiny: {
      fontSize: '11px',
      fontWeight: 400,
      lineHeight: '1.4',
      letterSpacing: '0',
      color: '#767676',
    },
  },
  buttons: {
    primary: {
      backgroundColor: '#121212',
      color: '#FFFFFF',
      border: {
        color: '#121212',
        style: 'solid',
        width: '1px',
      },
      padding: {
        vertical: '10px',
        horizontal: '16px',
      },
      borderRadius: '0px',
      typography: {
        fontFamily: 'Gesit, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '1',
        letterSpacing: '0',
      },
      states: {
        hover: {
          backgroundColor: '#2A2A2A',
          color: '#FFFFFF',
        },
        active: {
          backgroundColor: '#121212',
          color: '#FFFFFF',
        },
      },
    },
    secondary: {
      backgroundColor: '#FFFFFF',
      color: '#121212',
      border: {
        color: '#E7E5E4',
        style: 'solid',
        width: '1px',
      },
      padding: {
        vertical: '10px',
        horizontal: '16px',
      },
      borderRadius: '0px',
      typography: {
        fontFamily: 'Gesit, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '1',
        letterSpacing: '0',
      },
      states: {
        hover: {
          backgroundColor: '#FAFAFA',
          color: '#121212',
        },
        active: {
          backgroundColor: '#FFFFFF',
          color: '#121212',
        },
      },
    },
  },
  card: {
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#FAFAFA',
    border: {
      color: '#E7E5E4',
      style: 'solid',
      width: '1px',
    },
    borderRadius: '0px',
    padding: '20px',
    gap: {
      outer: '16px',
      content: '20px',
    },
  },
  logo: {
    url: 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdtpRbOh6sAUj3N86LXf57JKBqdoixIRQHecMu',
    width: 150,
    height: 'auto',
  },
  fonts: {
    gesit: {
      // Note: Add actual Gesit font URLs when available
      urls: {
        regularWoff2: '',
        boldWoff2: '',
      },
    },
  },
} as const;

