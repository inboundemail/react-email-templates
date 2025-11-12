export const autumnDesignSystem = {
  colors: {
    brand: {
      primary: '#8838FF',
      primary50: '#C39BFF',
    },
    interactive: {
      destructive: '#E40000',
      secondaryHover: '#FCFAFF',
      mutedHoverPressed: '#F2EBFF',
    },
    background: {
      inside: '#FAFAF9',
      outside: '#F5F5F4',
    },
    border: {
      main: '#E5E5E5',
      interactive: '#D1D1D1',
    },
    text: {
      primary: '#121212',
      primaryDark: '#FFFFFF',
      secondary: '#444444',
      tertiary: '#666666',
      quaternary: '#767676',
      disabled: '#AAAAAA',
      error: '#C80000',
      success: '#009E37',
      info: '#007FDA',
    },
  },
  buttons: {
    primary: {
      backgroundColor: '#8838FF', // brand-primary
      color: '#FFFFFF', // text-primary-dark
      padding: {
        vertical: '4px',
        horizontal: '6px',
      },
      borderRadius: '6px',
      gap: '4px', // gap between icon and text
      shadow: {
        outer: '0px 4px 4px 0px rgba(0, 0, 0, 0.04)',
        inset: '0px -3px 4px 0px inset rgba(0, 0, 0, 0.04)',
      },
      typography: {
        fontFamily: 'Inter',
        fontWeight: 500, // Medium
        fontSize: '13px',
        lineHeight: '100%', // normal
        letterSpacing: '-0.039px',
      },
    },
    secondary: {
      backgroundColor: '#FFFFFF', // white
      color: '#444444', // text-secondary
      border: {
        color: '#D1D1D1', // border-interactive
        style: 'solid',
        width: '1px',
      },
      padding: {
        vertical: '4px',
        horizontal: '6px',
      },
      borderRadius: '6px',
      gap: '4px', // gap between icon and text
      shadow: {
        inset: '0px -3px 4px 0px inset rgba(0, 0, 0, 0.04)',
      },
      typography: {
        fontFamily: 'Inter',
        fontWeight: 500, // Medium
        fontSize: '13px',
        lineHeight: '100%', // normal
        letterSpacing: '-0.039px',
      },
    },
    destructive: {
      backgroundColor: '#E40000', // interactive-destructive
      color: '#FFFFFF', // text-primary-dark
      padding: {
        vertical: '4px',
        horizontal: '6px',
      },
      borderRadius: '6px',
      gap: '4px', // gap between icon and text
      shadow: {
        outer: '0px 4px 4px 0px rgba(0, 0, 0, 0.04)',
        inset: '0px -3px 4px 0px inset rgba(0, 0, 0, 0.06)',
      },
      typography: {
        fontFamily: 'Inter',
        fontWeight: 500, // Medium
        fontSize: '13px',
        lineHeight: '100%', // normal
        letterSpacing: '-0.039px',
      },
    },
  },
  typography: {
    giga: {
      fontFamily: 'Inter',
      fontSize: '23px',
      fontWeight: 600, // Semibold
      lineHeight: '100%',
      letterSpacing: '-0.069px',
      color: '#121212', // text-primary
    },
    main: {
      fontFamily: 'Inter',
      fontSize: '17px',
      fontWeight: 600, // Semibold
      lineHeight: '100%',
      letterSpacing: '-0.051px',
      color: '#121212', // text-primary
    },
    mainSec: {
      fontFamily: 'Inter',
      fontSize: '17px',
      fontWeight: 500, // Medium
      lineHeight: '100%',
      letterSpacing: '-0.051px',
      color: '#121212', // text-primary
    },
    sub: {
      fontFamily: 'Inter',
      fontSize: '15px',
      fontWeight: 600, // Semibold
      lineHeight: '100%',
      letterSpacing: '-0.045px',
      color: '#444444', // text-secondary
    },
    body: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 500, // Medium
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#444444', // text-secondary
    },
    bodyHighlight: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 600, // Semibold
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#444444', // text-secondary
    },
    bodySecondary: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 500, // Medium
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#666666', // text-tertiary
    },
    bodySecParagraph: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 500, // Medium
      lineHeight: '1.6',
      letterSpacing: '-0.039px',
      color: '#666666', // text-tertiary
    },
    tiny: {
      fontFamily: 'Inter',
      fontSize: '11px',
      fontWeight: 500, // Medium
      lineHeight: '100%',
      letterSpacing: '-0.033px',
      color: '#767676', // text-quaternary
    },
    bodyMono: {
      fontFamily: 'JetBrains Mono',
      fontSize: '13px',
      fontWeight: 500, // Medium
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#444444', // text-secondary
    },
    bodyMonoHighlight: {
      fontFamily: 'JetBrains Mono',
      fontSize: '13px',
      fontWeight: 800, // Extrabold
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#444444', // text-secondary
    },
    tinyMono: {
      fontFamily: 'JetBrains Mono',
      fontSize: '11px',
      fontWeight: 500, // Medium
      lineHeight: '100%',
      letterSpacing: '-0.033px',
      color: '#666666', // text-tertiary
    },
    checkboxRadioLabel: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 600, // Semibold
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#444444', // text-secondary
    },
    checkboxRadioDescr: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 600, // Semibold
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#666666', // text-tertiary
    },
    checkboxRadioDisabled: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 600, // Semibold
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#AAAAAA', // text-disabled
    },
    formLabel: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 500, // Medium
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#767676', // text-quaternary
    },
    formText: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 500, // Medium
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#444444', // text-secondary
    },
    formPlaceholder: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 500, // Medium
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#AAAAAA', // text-disabled
    },
    formError: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 500, // Medium
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#C80000', // text-error
    },
    formSuccess: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 500, // Medium
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#009E37', // text-success
    },
    formInfo: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 500, // Medium
      lineHeight: '100%',
      letterSpacing: '-0.039px',
      color: '#007FDA', // text-info
    },
  },
  modal: {
    backgroundColor: '#FAFAF9', // background-inside
    border: {
      color: '#E5E5E5', // border-main
      style: 'solid',
      width: '1px',
    },
    borderRadius: '12px',
    padding: '16px',
    gap: {
      outer: '12px', // gap between container and content
      content: '24px', // gap between content sections (title/body and buttons)
      buttons: '8px', // gap between buttons
    },
    content: {
      title: {
        // Uses typography.main
        fontFamily: 'Inter',
        fontSize: '17px',
        fontWeight: 600, // Semibold
        lineHeight: '100%',
        letterSpacing: '-0.051px',
        color: '#121212', // text-primary
      },
      body: {
        // Uses typography.bodySecParagraph with text-secondary color
        fontFamily: 'Inter',
        fontSize: '13px',
        fontWeight: 500, // Medium
        lineHeight: '1.6',
        letterSpacing: '-0.039px',
        color: '#444444', // text-secondary
      },
    },
  },
  card: {
    backgroundColor: '#FAFAF9', // background-inside
    border: {
      color: '#E5E5E5', // border-main
      style: 'solid',
      width: '1px',
    },
    borderRadius: '12px',
    padding: '16px',
    gap: {
      outer: '12px', // gap between container and content
      content: '24px', // gap between content sections
      buttons: '8px', // gap between buttons
    },
  },
  optionsPanel: {
    padding: {
      top: '0px',
      bottom: '20px',
      horizontal: '0px',
    },
    gap: {
      sections: '20px', // gap between panel sections
      header: '16px', // gap between section header and options
      option: '16px', // gap between box radio and label/description
      label: '4px', // gap between label and description
    },
    section: {
      header: {
        // Uses typography.sub
        fontFamily: 'Inter',
        fontSize: '15px',
        fontWeight: 600, // Semibold
        lineHeight: '100%',
        letterSpacing: '-0.045px',
        color: '#444444', // text-secondary
      },
    },
    boxRadio: {
      width: '120px',
      height: '60px',
      borderRadius: '8px',
      border: {
        width: '2px',
        style: 'solid',
        color: '#D1D1D1', // border-interactive
      },
      padding: {
        vertical: '0px',
        horizontal: '10px',
      },
      shadow: {
        inset: '0px -8px 22px 0px inset rgba(0, 0, 0, 0.04)',
      },
      states: {
        selected: {
          backgroundColor: '#FCFAFF', // interactive-secondaryHover
          iconBackground: '#F2EBFF', // interactive-mutedHoverPressed
        },
        unselected: {
          backgroundColor: '#FFFFFF', // white
          iconBackground: '#F3F3F3',
        },
      },
    },
    option: {
      label: {
        // Uses typography.bodyHighlight
        fontFamily: 'Inter',
        fontSize: '13px',
        fontWeight: 600, // Semibold
        lineHeight: '100%',
        letterSpacing: '-0.039px',
        color: '#444444', // text-secondary
      },
      description: {
        // Uses typography.bodySecParagraph
        fontFamily: 'Inter',
        fontSize: '13px',
        fontWeight: 500, // Medium
        lineHeight: '1.6',
        letterSpacing: '-0.039px',
        color: '#666666', // text-tertiary
      },
    },
  },
} as const;

