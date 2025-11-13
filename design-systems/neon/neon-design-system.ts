export const neonDesignSystem = {
  colors: {
    brand: {
      primary: '#00E699', // Neon signature green
      primaryDark: '#00CC88',
      primaryLight: '#33EBAD',
    },
    background: {
      outside: '#FFFFFF',
      inside: '#FAFAFA',
      dark: '#0D0D0D',
      darkInside: '#1A1A1A',
    },
    border: {
      main: '#E5E5E5',
      interactive: '#D1D1D1',
      dark: '#2A2A2A',
    },
    text: {
      primary: '#121212',
      primaryDark: '#FFFFFF',
      secondary: '#4A4A4A',
      tertiary: '#6B6B6B',
      quaternary: '#8A8A8A',
      disabled: '#AAAAAA',
      success: '#00E699',
      error: '#FF4444',
      warning: '#FFA726',
      info: '#42A5F5',
    },
    interactive: {
      hover: '#F5F5F5',
      pressed: '#E5E5E5',
      hoverDark: '#2A2A2A',
      pressedDark: '#333333',
    },
  },
  buttons: {
    primary: {
      backgroundColor: '#00E699',
      color: '#0D0D0D',
      border: {
        color: '#00E699',
        style: 'solid',
        width: '1px',
      },
      padding: {
        vertical: '12px',
        horizontal: '20px',
      },
      borderRadius: '6px',
      gap: '8px',
      shadow: {
        outer: '0px 2px 8px 0px rgba(0, 230, 153, 0.15)',
        inset: 'none',
      },
      typography: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontWeight: 600, // Semibold
        fontSize: '14px',
        lineHeight: '1.2',
        letterSpacing: '-0.01em',
      },
      states: {
        hover: {
          backgroundColor: '#33EBAD',
          color: '#0D0D0D',
        },
        active: {
          backgroundColor: '#00CC88',
          color: '#0D0D0D',
        },
      },
    },
    secondary: {
      backgroundColor: '#FFFFFF',
      color: '#121212',
      border: {
        color: '#E5E5E5',
        style: 'solid',
        width: '1px',
      },
      padding: {
        vertical: '12px',
        horizontal: '20px',
      },
      borderRadius: '6px',
      gap: '8px',
      shadow: {
        outer: 'none',
        inset: 'none',
      },
      typography: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontWeight: 600, // Semibold
        fontSize: '14px',
        lineHeight: '1.2',
        letterSpacing: '-0.01em',
      },
      states: {
        hover: {
          backgroundColor: '#F5F5F5',
          color: '#121212',
        },
        active: {
          backgroundColor: '#E5E5E5',
          color: '#121212',
        },
      },
    },
    tertiary: {
      backgroundColor: 'transparent',
      color: '#4A4A4A',
      border: {
        color: 'transparent',
        style: 'solid',
        width: '0px',
      },
      padding: {
        vertical: '12px',
        horizontal: '20px',
      },
      borderRadius: '6px',
      gap: '8px',
      typography: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontWeight: 600, // Semibold
        fontSize: '14px',
        lineHeight: '1.2',
        letterSpacing: '-0.01em',
      },
      states: {
        hover: {
          backgroundColor: '#F5F5F5',
          color: '#121212',
        },
        active: {
          backgroundColor: '#E5E5E5',
          color: '#121212',
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '36px',
      fontWeight: 600, // Semibold
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
      color: '#121212',
    },
    h2: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '28px',
      fontWeight: 600, // Semibold
      lineHeight: '1.3',
      letterSpacing: '-0.015em',
      color: '#121212',
    },
    h3: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '22px',
      fontWeight: 600, // Semibold
      lineHeight: '1.3',
      letterSpacing: '-0.01em',
      color: '#121212',
    },
    h4: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '18px',
      fontWeight: 600, // Semibold
      lineHeight: '1.4',
      letterSpacing: '-0.01em',
      color: '#121212',
    },
    body: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '15px',
      fontWeight: 400, // Regular
      lineHeight: '1.6',
      letterSpacing: '0',
      color: '#4A4A4A',
    },
    bodyLarge: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '16px',
      fontWeight: 400, // Regular
      lineHeight: '1.6',
      letterSpacing: '0',
      color: '#4A4A4A',
    },
    bodySmall: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '14px',
      fontWeight: 400, // Regular
      lineHeight: '1.5',
      letterSpacing: '0',
      color: '#4A4A4A',
    },
    bodyStrong: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '15px',
      fontWeight: 600, // Semibold
      lineHeight: '1.6',
      letterSpacing: '0',
      color: '#121212',
    },
    caption: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '13px',
      fontWeight: 400, // Regular
      lineHeight: '1.5',
      letterSpacing: '0',
      color: '#6B6B6B',
    },
    captionStrong: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '13px',
      fontWeight: 600, // Semibold
      lineHeight: '1.5',
      letterSpacing: '0',
      color: '#4A4A4A',
    },
    tiny: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '11px',
      fontWeight: 400, // Regular
      lineHeight: '1.4',
      letterSpacing: '0',
      color: '#8A8A8A',
    },
    code: {
      fontFamily: 'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Liberation Mono", Menlo, Courier, monospace',
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: '1.6',
      letterSpacing: '0',
      color: '#4A4A4A',
      backgroundColor: '#F5F5F5',
      padding: '2px 6px',
      borderRadius: '4px',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  radius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
  },
  card: {
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#FAFAFA',
    border: {
      color: '#E5E5E5',
      style: 'solid',
      width: '1px',
    },
    borderRadius: '8px',
    padding: '24px',
    gap: {
      outer: '16px',
      content: '20px',
      buttons: '12px',
    },
    shadow: {
      default: '0px 1px 3px 0px rgba(0, 0, 0, 0.04)',
      hover: '0px 4px 12px 0px rgba(0, 0, 0, 0.08)',
    },
  },
  modal: {
    backgroundColor: '#FFFFFF',
    border: {
      color: '#E5E5E5',
      style: 'solid',
      width: '1px',
    },
    borderRadius: '12px',
    padding: '24px',
    gap: {
      outer: '16px',
      content: '24px',
      buttons: '12px',
    },
    shadow: {
      default: '0px 8px 32px 0px rgba(0, 0, 0, 0.12)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  },
  table: {
    header: {
      backgroundColor: '#FAFAFA',
      color: '#6B6B6B',
      fontWeight: 600,
      fontSize: '13px',
      padding: {
        vertical: '12px',
        horizontal: '16px',
      },
    },
    cell: {
      backgroundColor: '#FFFFFF',
      color: '#4A4A4A',
      fontWeight: 400,
      fontSize: '14px',
      padding: {
        vertical: '12px',
        horizontal: '16px',
      },
      border: {
        color: '#E5E5E5',
        style: 'solid',
        width: '1px',
      },
    },
    row: {
      hoverBackgroundColor: '#FAFAFA',
    },
  },
  badge: {
    success: {
      backgroundColor: 'rgba(0, 230, 153, 0.1)',
      color: '#00A870',
      border: {
        color: 'rgba(0, 230, 153, 0.2)',
        style: 'solid',
        width: '1px',
      },
    },
    error: {
      backgroundColor: 'rgba(255, 68, 68, 0.1)',
      color: '#D63030',
      border: {
        color: 'rgba(255, 68, 68, 0.2)',
        style: 'solid',
        width: '1px',
      },
    },
    warning: {
      backgroundColor: 'rgba(255, 167, 38, 0.1)',
      color: '#E68A00',
      border: {
        color: 'rgba(255, 167, 38, 0.2)',
        style: 'solid',
        width: '1px',
      },
    },
    info: {
      backgroundColor: 'rgba(66, 165, 245, 0.1)',
      color: '#2E8BC0',
      border: {
        color: 'rgba(66, 165, 245, 0.2)',
        style: 'solid',
        width: '1px',
      },
    },
    neutral: {
      backgroundColor: '#F5F5F5',
      color: '#4A4A4A',
      border: {
        color: '#E5E5E5',
        style: 'solid',
        width: '1px',
      },
    },
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: '#121212',
    border: {
      color: '#E5E5E5',
      style: 'solid',
      width: '1px',
    },
    borderRadius: '6px',
    padding: {
      vertical: '10px',
      horizontal: '12px',
    },
    typography: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '1.5',
      letterSpacing: '0',
    },
    placeholder: {
      color: '#AAAAAA',
    },
    states: {
      focus: {
        borderColor: '#00E699',
        outline: 'none',
        boxShadow: '0px 0px 0px 3px rgba(0, 230, 153, 0.1)',
      },
      error: {
        borderColor: '#FF4444',
        boxShadow: '0px 0px 0px 3px rgba(255, 68, 68, 0.1)',
      },
      disabled: {
        backgroundColor: '#F5F5F5',
        color: '#AAAAAA',
        cursor: 'not-allowed',
      },
    },
    label: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '13px',
      fontWeight: 600, // Semibold
      lineHeight: '1.4',
      letterSpacing: '0',
      color: '#4A4A4A',
      marginBottom: '6px',
    },
    helper: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '1.4',
      letterSpacing: '0',
      color: '#6B6B6B',
      marginTop: '4px',
    },
    error: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '1.4',
      letterSpacing: '0',
      color: '#FF4444',
      marginTop: '4px',
    },
  },
  logo: {
    wordmark: {
      light: '/static/neon-wordmark-light.png',
      width: 120,
      height: 'auto',
    },
    icon: {
      default: '/static/neon-logo.png',
      width: 32,
      height: 32,
    },
  },
  assets: {
    instantBranching: '/static/instant-branching.png',
    usageChart: '/static/neon-usage-84-percent.png',
  },
} as const;

