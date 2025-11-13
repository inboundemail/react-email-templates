export const temboDesignSystem = {
  fonts: {
    sans:
      'Geist, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fallback:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  colors: {
    background: {
      outside: '#FAFAFA',
      inside: '#FFFFFF',
    },
    card: {
      base: '#FFFFFF',
      parent: '#FAFAFA',
    },
    border: {
      main: '#F0F0F0',
      parent: '#EBEBEB',
    },
    text: {
      primary: '#000000', // full black for headings
      default: '#00000099', // rgba(0,0,0,0.6)
      muted: '#0000003d', // rgba(0,0,0,0.24)
      icon: '#00000066', // rgba(0,0,0,0.4)
    },
    interactive: {
      tertiary: {
        enabled: '#0000000a',
        hover: '#00000014',
        pressed: '#0000001f',
        disabled: '#00000005',
      },
    },
    focus: {
      ringBlue: '0 0 0 1px #009eff, 0 0 0 2px #d1edff',
    },
  },
  buttons: {
    tertiary: {
      // Mirrors provided CSS snippet
      backgroundColor: '#0000000a',
      color: '#00000099',
      border: {
        color: 'transparent',
        style: 'solid',
        width: '0px',
      },
      padding: {
        vertical: '4px',
        horizontal: '6px',
      },
      borderRadius: '8px',
      gap: '2px',
      typography: {
        fontFamily:
          'Geist, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontWeight: 520,
        fontSize: '13px',
        lineHeight: '16px',
        letterSpacing: '-0.2px',
      },
      states: {
        hover: {
          backgroundColor: '#00000014',
        },
        active: {
          backgroundColor: '#0000001f',
        },
        disabled: {
          backgroundColor: '#00000005',
          color: '#0000003d',
        },
        focusVisible: {
          boxShadow: '0 0 0 1px #009eff, 0 0 0 2px #d1edff',
          outline: 'none',
        },
      },
    },
  },
  card: {
    backgroundColor: '#FFFFFF',
    border: {
      color: '#F0F0F0',
      style: 'solid',
      width: '1px',
    },
    borderRadius: '10px',
    padding: '16px',
    gap: {
      outer: '12px',
      content: '16px',
    },
  },
  parentCard: {
    backgroundColor: '#FAFAFA',
    border: {
      color: '#EBEBEB',
      style: 'solid',
      width: '1px',
    },
    borderRadius: '0px',
    padding: '16px',
  },
  logo: {
    wordmark: {
      light:
        'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdQeBoYEbGkJAfFUj1iBoTeMgNbdtZDx4VXv6h',
      width: 120,
      height: 'auto',
    },
  },
} as const;

export type TemboDesignSystem = typeof temboDesignSystem;


