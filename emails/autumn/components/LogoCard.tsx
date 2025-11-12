import { Img } from '@react-email/components';
import { CSSProperties } from 'react';
import { autumnDesignSystem } from '../../../autumn-design-system';

interface LogoCardProps {
  src: string;
  alt?: string;
  size?: number; // outer square size in px
  padding?: number; // inner padding in px
  iconSize?: number; // icon width/height in px
  style?: CSSProperties;
}

export const LogoCard = ({
  src,
  alt = 'Logo',
  size = 36,
  padding = 4,
  iconSize = 24,
  style,
}: LogoCardProps) => {
  const ds = autumnDesignSystem;
  return (
    <table
      role="presentation"
      style={{
        backgroundColor: ds.colors.background.inside,
        border: `1px solid ${ds.colors.border.main}`,
        borderRadius: '8px',
        borderCollapse: 'separate',
        borderSpacing: 0,
        width: `${size}px`,
        height: `${size}px`,
        ...(style ?? {}),
      }}
    >
      <tbody>
        <tr>
          <td align="center" style={{ padding: `${padding}px`, verticalAlign: 'middle' }}>
            <Img className="block" src={src} width={iconSize} height={iconSize} alt={alt} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LogoCard;


