import { Button } from '@react-email/components';
import { CSSProperties, ReactNode } from 'react';
import { temboDesignSystem } from '../../../design-systems/tembo/tembo-design-system';

type ButtonVariant = 'tertiary';

interface TemboEmailButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  paddingVertical?: string;
  paddingHorizontal?: string;
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const TemboEmailButton = ({
  href,
  children,
  variant = 'tertiary',
  paddingVertical,
  paddingHorizontal,
  fullWidth = false,
  className,
  style,
}: TemboEmailButtonProps) => {
  const ds = temboDesignSystem;
  const spec = ds.buttons.tertiary;

  const pv = paddingVertical ?? spec.padding.vertical;
  const ph = paddingHorizontal ?? spec.padding.horizontal;

  const shared: CSSProperties = {
    lineHeight: spec.typography.lineHeight,
    fontWeight: spec.typography.fontWeight as unknown as number,
    fontSize: spec.typography.fontSize,
    letterSpacing: spec.typography.letterSpacing,
    fontFamily: spec.typography.fontFamily,
    paddingTop: pv,
    paddingBottom: pv,
    paddingLeft: ph,
    paddingRight: ph,
    borderRadius: spec.borderRadius,
    display: fullWidth ? 'block' : 'inline-block',
    width: fullWidth ? '100%' : undefined,
    textDecoration: 'none',
    textAlign: 'center',
    backgroundColor: spec.backgroundColor,
    color: spec.color,
    border:
      spec.border.width !== '0px'
        ? `${spec.border.width} ${spec.border.style} ${spec.border.color}`
        : 'none',
  };

  return (
    <Button
      href={href}
      className={className ?? 'inline-block text-center no-underline rounded-lg'}
      style={{ ...shared, ...(style ?? {}) }}
    >
      {children}
    </Button>
  );
};

export default TemboEmailButton;


