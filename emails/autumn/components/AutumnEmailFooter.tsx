import { Link, Text } from '@react-email/components';
import { CSSProperties } from 'react';
import { autumnDesignSystem } from '../../../autumn-design-system';

interface AutumnEmailFooterProps {
  companyAddress: string;
  supportEmail?: string;
  className?: string;
  style?: CSSProperties;
}

export const AutumnEmailFooter = ({
  companyAddress,
  supportEmail = 'support@useautumn.com',
  className,
  style,
}: AutumnEmailFooterProps) => {
  const ds = autumnDesignSystem;
  return (
    <Text
      className={className ?? 'mt-0 mb-0 text-[11px]'}
      style={{ color: ds.colors.text.disabled, ...(style ?? {}) }}
    >
      {companyAddress} ·{' '}
      <Link
        href={`mailto:${supportEmail}`}
        className="no-underline"
        style={{ color: ds.colors.text.info }}
      >
        {supportEmail}
      </Link>
    </Text>
  );
};

export default AutumnEmailFooter;


