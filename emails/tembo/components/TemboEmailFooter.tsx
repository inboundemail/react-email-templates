import { Link, Text } from '@react-email/components';
import { CSSProperties } from 'react';
import { temboDesignSystem } from '../../../design-systems/tembo/tembo-design-system';

interface TemboEmailFooterProps {
  companyAddress?: string;
  supportEmail?: string;
  unsubscribeUrl?: string;
  className?: string;
  style?: CSSProperties;
}

export const TemboEmailFooter = ({
  companyAddress = 'Tembo, Inc.',
  supportEmail = 'support@tembo.io',
  unsubscribeUrl,
  className,
  style,
}: TemboEmailFooterProps) => {
  const ds = temboDesignSystem;
  return (
    <Text
      className={className ?? 'mt-0 mb-0 text-[11px]'}
      style={{
        color: ds.colors.text.muted,
        lineHeight: '1.5',
        ...(style ?? {}),
      }}
    >
      {companyAddress} ·{' '}
      <Link
        href={`mailto:${supportEmail}`}
        className="no-underline"
        style={{ color: ds.colors.text.default }}
      >
        {supportEmail}
      </Link>
      {unsubscribeUrl && (
        <>
          {' '}·{' '}
          <Link
            href={unsubscribeUrl}
            className="no-underline"
            style={{ color: ds.colors.text.muted }}
          >
            Unsubscribe
          </Link>
        </>
      )}
    </Text>
  );
};

export default TemboEmailFooter;


