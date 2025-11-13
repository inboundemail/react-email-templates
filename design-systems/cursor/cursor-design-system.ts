export const cursorDesignSystem = {
  colors: {
    background: {
      outside: '#F7F7F4',
      inside: '#F7F7F4',
    },
    accent: {
      orange: '#f54e00',
    },
    card: {
      base: '#F2F1ED',
      hover: '#EBEAE5',
    },
    button: {
      text: '#F7F7F4',
      background: '#26251E',
      hoverText: '#F7F7F4',
      hoverBackground: '#3B3A33',
      border: '#3B3A33',
    },
    text: {
      primary: '#26251E',
      secondary: 'rgba(38, 37, 30, 0.6)', // color-mix(#26251e 60%, transparent)
    },
    border: {
      main: 'transparent',
      interactive: '#3B3A33',
    },
    radius: {
      xs: '4px',
      full: '9999px',
    },
  },
  spacing: {
    g1: '0.625rem', // 10rem/16
    v2: '2.8rem', // 1rem * 1.4 * 2
    gridGap: '0.8rem', // 12rem/15
  },
  fonts: {
    cursorGothic: {
      family: 'CursorGothic',
      urls: {
        regularWoff2:
          'https://cursor.com/marketing-static/_next/static/media/d3293b264284c7e4-s.p.woff2',
        italicWoff2:
          'https://cursor.com/marketing-static/_next/static/media/4d47f1cf2188c753-s.p.woff2',
        boldWoff2:
          'https://cursor.com/marketing-static/_next/static/media/da0a7633fc8b7288-s.p.woff2',
        boldItalicWoff2:
          'https://cursor.com/marketing-static/_next/static/media/89358bea2c069d9d-s.p.woff2',
      },
    },
    berkeleyMono: {
      family: 'berkeleyMono',
      urls: {
        regularWoff2:
          'https://cursor.com/marketing-static/_next/static/media/c0b22bcfa1a173f2.p.woff2',
        italicWoff2:
          'https://cursor.com/marketing-static/_next/static/media/006940878f5e6885.p.woff2',
      },
    },
  },
  buttons: {
    primary: {
      backgroundColor: '#26251E',
      color: '#F7F7F4',
      border: {
        color: '#3B3A33',
        style: 'solid',
        width: '1px',
      },
      padding: {
        vertical: '0.79em',
        horizontal: '1.35em',
      },
      borderRadius: '9999px',
      gap: '6px',
      shadow: {
        outer: 'none',
        inset: 'none',
      },
      typography: {
        fontFamily:
          'CursorGothic, "CursorGothic Fallback", system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
      states: {
        hover: {
          backgroundColor: '#3B3A33',
          color: '#F7F7F4',
        },
        active: {
          backgroundColor: '#26251E',
          color: '#F7F7F4',
        },
        focusVisible: {
          outline: '1px solid red',
          outlineOffset: '0.3ch',
        },
      },
    },
    accent: {
      backgroundColor: '#f54e00',
      color: '#F7F7F4',
      border: {
        color: '#f54e00',
        style: 'solid',
        width: '1px',
      },
      padding: {
        vertical: '0.79em',
        horizontal: '1.35em',
      },
      borderRadius: '9999px',
      gap: '6px',
      shadow: {
        outer: 'none',
        inset: 'none',
      },
      typography: {
        fontFamily:
          'CursorGothic, "CursorGothic Fallback", system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1',
        letterSpacing: '0',
      },
      states: {
        hover: {
          backgroundColor: '#ff5a12', // slightly lighter hover
          color: '#F7F7F4',
        },
        active: {
          backgroundColor: '#f54e00',
          color: '#F7F7F4',
        },
        focusVisible: {
          outline: '1px solid red',
          outlineOffset: '0.3ch',
        },
      },
    },
  },
  typography: {
    main: {
      fontFamily:
        'CursorGothic, "CursorGothic Fallback", system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0.005em',
      color: '#26251E',
    },
    body: {
      fontFamily:
        'CursorGothic, "CursorGothic Fallback", system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0.005em',
      color: '#26251E',
    },
    bodySecondary: {
      fontFamily:
        'CursorGothic, "CursorGothic Fallback", system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      color: 'rgba(38, 37, 30, 0.6)',
    },
    tiny: {
      fontFamily:
        'CursorGothic, "CursorGothic Fallback", system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: '11px',
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      color: 'rgba(38, 37, 30, 0.6)',
    },
  },
  card: {
    backgroundColor: '#F2F1ED',
    hoverBackgroundColor: '#EBEAE5',
    border: {
      color: 'transparent',
      style: 'solid',
      width: '0px',
    },
    borderRadius: '4px',
    padding: '16px',
    gap: {
      outer: '12px',
      content: '16px',
    },
    media: {
      objectFit: 'cover',
      radius: '4px',
    },
    focusVisible: {
      outline: '1px solid red',
      outlineOffset: '0.3ch',
    },
  },
} as const;


