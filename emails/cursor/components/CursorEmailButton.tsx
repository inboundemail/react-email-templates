import { Button } from '@react-email/components';
import { CSSProperties, ReactNode } from 'react';
import { cursorDesignSystem } from '../../../design-systems/cursor/cursor-design-system';

type ButtonVariant = 'primary' | 'accent';

interface CursorEmailButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  paddingVertical?: string;
  paddingHorizontal?: string;
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const CursorEmailButton = ({
  href,
  children,
  variant = 'primary',
  paddingVertical,
  paddingHorizontal,
  fullWidth = false,
  className,
  style,
}: CursorEmailButtonProps) => {
  const ds = cursorDesignSystem;

  const baseTokens = variant === 'accent' ? ds.buttons.accent : ds.buttons.primary;

  const shared: CSSProperties = {
    lineHeight: baseTokens.typography.lineHeight,
    fontWeight: baseTokens.typography.fontWeight,
    fontSize: paddingVertical || paddingHorizontal ? '14px' : baseTokens.typography.fontSize,
    letterSpacing: baseTokens.typography.letterSpacing,
    paddingTop: paddingVertical ?? baseTokens.padding.vertical,
    paddingBottom: paddingVertical ?? baseTokens.padding.vertical,
    paddingLeft: paddingHorizontal ?? baseTokens.padding.horizontal,
    paddingRight: paddingHorizontal ?? baseTokens.padding.horizontal,
    borderRadius: baseTokens.borderRadius,
    display: fullWidth ? 'block' : 'inline-block',
    width: fullWidth ? '100%' : undefined,
    textDecoration: 'none',
    textAlign: 'center',
    border:
      baseTokens.border?.width && baseTokens.border?.style && baseTokens.border?.color
        ? `${baseTokens.border.width} ${baseTokens.border.style} ${baseTokens.border.color}`
        : undefined,
  };

  const variantStyles: Record<ButtonVariant, CSSProperties> = {
    primary: {
      backgroundColor: ds.buttons.primary.backgroundColor,
      color: ds.buttons.primary.color,
    },
    accent: {
      backgroundColor: ds.buttons.accent.backgroundColor,
      color: ds.buttons.accent.color,
    },
  };

  return (
    <Button
      href={href}
      className={className ?? 'inline-block rounded-full text-center no-underline'}
      style={{ ...shared, ...variantStyles[variant], ...(style ?? {}) }}
    >
      {children}
    </Button>
  );
};

export default CursorEmailButton;


