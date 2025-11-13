import { Link, Text } from '@react-email/components';
import { CSSProperties } from 'react';
import { cursorDesignSystem } from '../../../design-systems/cursor/cursor-design-system';

interface CursorEmailFooterProps {
  companyAddress?: string;
  unsubscribeUrl?: string;
  supportEmail?: string;
  className?: string;
  style?: CSSProperties;
}

export const CursorEmailFooter = ({
  companyAddress = 'Cursor, San Francisco',
  unsubscribeUrl = 'https://cursor.com/unsubscribe',
  supportEmail = 'support@cursor.com',
  className,
  style,
}: CursorEmailFooterProps) => {
  const ds = cursorDesignSystem;
  return (
    <Text
      className={className ?? 'mt-0 mb-0 text-[11px]'}
      style={{ color: 'rgba(38, 37, 30, 0.6)', ...(style ?? {}) }}
    >
      {companyAddress} ·{' '}
      <Link href={`mailto:${supportEmail}`} className="no-underline" style={{ color: ds.colors.text.primary }}>
        {supportEmail}
      </Link>{' '}
      ·{' '}
      <Link href={unsubscribeUrl} className="no-underline" style={{ color: ds.colors.text.primary }}>
        Unsubscribe
      </Link>
    </Text>
  );
};

export default CursorEmailFooter;


