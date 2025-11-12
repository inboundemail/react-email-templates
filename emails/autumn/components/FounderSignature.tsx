import { Img, Text } from '@react-email/components';
import { CSSProperties } from 'react';
import { autumnDesignSystem } from '../../../autumn-design-system';

interface FounderSignatureProps {
  name: string;
  imageUrl: string;
  imageSize?: number; // px
  className?: string;
  style?: CSSProperties;
}

export const FounderSignature = ({
  name,
  imageUrl,
  imageSize = 44,
  className,
  style,
}: FounderSignatureProps) => {
  const ds = autumnDesignSystem;
  return (
    <table
      role="presentation"
      className={className}
      style={{ width: 'auto', ...(style ?? {}) }}
    >
      <tbody>
        <tr>
          <td style={{ verticalAlign: 'middle', paddingRight: '8px' }}>
            <Img
              src={imageUrl}
              width={imageSize}
              height={imageSize}
              alt={`${name} photo`}
              style={{ borderRadius: '9999px', display: 'block' }}
            />
          </td>
          <td style={{ verticalAlign: 'middle' }}>
            <Text className="m-0 p-0 text-[13px] font-semibold" style={{ color: ds.colors.text.secondary }}>
              {name}
            </Text>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default FounderSignature;


