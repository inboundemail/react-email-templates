import { Button } from '@react-email/components';
import { CSSProperties, ReactNode } from 'react';
import { autumnDesignSystem } from '../../../design-systems/autumn/autumn-design-system';

type ButtonVariant = 'primary' | 'secondary' | 'destructive';

interface AutumnEmailButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  paddingVertical?: string; // e.g., '8px'
  paddingHorizontal?: string; // e.g., '14px'
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const AutumnEmailButton = ({
  href,
  children,
  variant = 'primary',
  paddingVertical = '8px',
  paddingHorizontal = '14px',
  fullWidth = false,
  className,
  style,
}: AutumnEmailButtonProps) => {
  const ds = autumnDesignSystem;

  const shared: CSSProperties = {
    lineHeight: '100%',
    fontWeight: ds.buttons.primary.typography.fontWeight,
    fontSize: ds.buttons.primary.typography.fontSize,
    letterSpacing: ds.buttons.primary.typography.letterSpacing,
    paddingTop: paddingVertical,
    paddingBottom: paddingVertical,
    paddingLeft: paddingHorizontal,
    paddingRight: paddingHorizontal,
    borderRadius: ds.buttons.primary.borderRadius,
    display: fullWidth ? 'block' : 'inline-block',
    width: fullWidth ? '100%' : undefined,
    textDecoration: 'none',
    textAlign: 'center',
  };

  const variantStyles: Record<ButtonVariant, CSSProperties> = {
    primary: {
      backgroundColor: ds.buttons.primary.backgroundColor,
      color: ds.buttons.primary.color,
    },
    secondary: {
      backgroundColor: ds.buttons.secondary.backgroundColor,
      color: ds.buttons.secondary.color,
      border: `${ds.buttons.secondary?.border?.width ?? '1px'} ${ds.buttons.secondary?.border?.style ?? 'solid'} ${ds.buttons.secondary?.border?.color ?? ds.colors.border.interactive}`,
    },
    destructive: {
      backgroundColor: ds.buttons.destructive.backgroundColor,
      color: ds.buttons.destructive.color,
    },
  };

  return (
    <Button
      href={href}
      className={className ?? 'inline-block rounded-[6px] text-center no-underline'}
      style={{ ...shared, ...variantStyles[variant], ...(style ?? {}) }}
    >
      {children}
    </Button>
  );
};

export default AutumnEmailButton;


