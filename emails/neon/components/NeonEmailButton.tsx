import { Button } from '@react-email/components';
import { CSSProperties, ReactNode } from 'react';
import { neonDesignSystem } from '../../../design-systems/neon/neon-design-system';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface NeonEmailButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  paddingVertical?: string;
  paddingHorizontal?: string;
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const NeonEmailButton = ({
  href,
  children,
  variant = 'primary',
  paddingVertical,
  paddingHorizontal,
  fullWidth = false,
  className,
  style,
}: NeonEmailButtonProps) => {
  const ds = neonDesignSystem;
  const buttonStyle = ds.buttons[variant];

  const pv = paddingVertical ?? buttonStyle.padding.vertical;
  const ph = paddingHorizontal ?? buttonStyle.padding.horizontal;

  const shared: CSSProperties = {
    lineHeight: buttonStyle.typography.lineHeight,
    fontWeight: buttonStyle.typography.fontWeight,
    fontSize: buttonStyle.typography.fontSize,
    letterSpacing: buttonStyle.typography.letterSpacing,
    fontFamily: buttonStyle.typography.fontFamily,
    paddingTop: pv,
    paddingBottom: pv,
    paddingLeft: ph,
    paddingRight: ph,
    borderRadius: buttonStyle.borderRadius,
    display: fullWidth ? 'block' : 'inline-block',
    width: fullWidth ? '100%' : undefined,
    textDecoration: 'none',
    textAlign: 'center',
    backgroundColor: buttonStyle.backgroundColor,
    color: buttonStyle.color,
    border: buttonStyle.border.width !== '0px' 
      ? `${buttonStyle.border.width} ${buttonStyle.border.style} ${buttonStyle.border.color}`
      : 'none',
  };

  return (
    <Button
      href={href}
      className={className ?? 'inline-block text-center no-underline'}
      style={{ ...shared, ...(style ?? {}) }}
    >
      {children}
    </Button>
  );
};

export default NeonEmailButton;

