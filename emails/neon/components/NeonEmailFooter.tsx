import { Link, Text } from '@react-email/components';
import { CSSProperties } from 'react';
import { neonDesignSystem } from '../../../design-systems/neon/neon-design-system';

interface NeonEmailFooterProps {
  companyAddress?: string;
  supportEmail?: string;
  unsubscribeUrl?: string;
  className?: string;
  style?: CSSProperties;
}

export const NeonEmailFooter = ({
  companyAddress = 'Neon, Inc.',
  supportEmail = 'support@neon.tech',
  unsubscribeUrl,
  className,
  style,
}: NeonEmailFooterProps) => {
  const ds = neonDesignSystem;
  
  return (
    <Text
      className={className ?? 'mt-0 mb-0 text-[11px]'}
      style={{ 
        color: ds.colors.text.quaternary,
        lineHeight: '1.5',
        ...(style ?? {}) 
      }}
    >
      {companyAddress} ·{' '}
      <Link
        href={`mailto:${supportEmail}`}
        className="no-underline"
        style={{ color: ds.colors.brand.primary }}
      >
        {supportEmail}
      </Link>
      {unsubscribeUrl && (
        <>
          {' '}·{' '}
          <Link
            href={unsubscribeUrl}
            className="no-underline"
            style={{ color: ds.colors.text.quaternary }}
          >
            Unsubscribe
          </Link>
        </>
      )}
    </Text>
  );
};

export default NeonEmailFooter;

