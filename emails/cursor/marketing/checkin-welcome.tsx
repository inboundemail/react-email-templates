import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { cursorDesignSystem } from '../../../design-systems/cursor/cursor-design-system';
import { CursorEmailButton } from '../components/CursorEmailButton';
import { CursorEmailFooter } from '../components/CursorEmailFooter';

interface CursorWelcomeFromMichaelEmailProps {
  firstName?: string;
  getStartedUrl?: string;
  logoLightUrl?: string;
  michaelPhotoUrl?: string;
  companyAddress?: string;
  supportEmail?: string;
  unsubscribeUrl?: string;
}

export const CursorWelcomeFromMichaelEmail = ({
  firstName = '',
  getStartedUrl = 'https://cursor.com',
  logoLightUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdHq7HqXcX7IZuF2Sbl0cy6iEO5QAWfwCThsp4',
  michaelPhotoUrl = 'https://pbs.twimg.com/profile_images/1887065642261737472/QdLiAFfD_400x400.jpg',
  companyAddress = 'Cursor, San Francisco',
  supportEmail = 'support@cursor.com',
  unsubscribeUrl = 'https://cursor.com/unsubscribe',
}: CursorWelcomeFromMichaelEmailProps) => {
  const ds = cursorDesignSystem;
  const previewText = 'Welcome to Cursor';

  return (
    <Html>
      <Head>
        <Font
          fontFamily="CursorGothic"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: ds.fonts.cursorGothic.urls.regularWoff2,
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="CursorGothic"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: ds.fonts.cursorGothic.urls.boldWoff2,
            format: 'woff2',
          }}
          fontWeight={700}
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body
          className="mx-auto my-auto px-2"
          style={{
            backgroundColor: ds.colors.background.outside,
            fontFamily:
              'CursorGothic, "CursorGothic Fallback", system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
          }}
        >
          <Container className="mx-auto my-[24px] max-w-[600px]">
            <Section
              className="rounded-[8px]"
              style={{
                backgroundColor: ds.card.backgroundColor,
                border: '1px solid #EDECE9',
              }}
            >
              <Section
                className="p-[18px]"
                style={{
                  fontFamily:
                    'CursorGothic, "CursorGothic Fallback", system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
                }}
              >
                <Section className="mb-[20px] text-center">
                  <Img
                    src={logoLightUrl}
                    width={150}
                    alt="Cursor logo"
                    className="mx-auto block"
                    style={{ display: 'block', height: 'auto' }}
                  />
                </Section>

                <Text className="m-0 mb-[12px] text-[14px]" style={{ color: ds.colors.text.primary }}>
                  {firstName ? `Hi ${firstName},` : 'Hi,'}
                </Text>

                <Text className="mt-0 mb-[12px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.secondary }}>
                  Welcome to Cursor! I'm Michael, one of the co-founders.
                </Text>

                <Text className="mt-0 mb-[12px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.secondary }}>
                  We built Cursor because we believe AI should make you a better developer, not replace you. Whether
                  you're debugging a tricky issue, refactoring code, or building something new — Cursor is here to help
                  you move faster.
                </Text>

                <Text className="mt-0 mb-[16px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.secondary }}>
                  If you have any questions or feedback, feel free to reach out. We read every message.
                </Text>

                <table role="presentation" style={{ width: 'auto', marginBottom: '16px' }}>
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: 'middle', paddingRight: '12px' }}>
                        <Img
                          src={michaelPhotoUrl}
                          width={44}
                          alt="Michael Truell"
                          style={{ display: 'block', height: 'auto', borderRadius: '50%' }}
                        />
                      </td>
                      <td style={{ verticalAlign: 'middle' }}>
                        <Text className="m-0 p-0 text-[13px] font-semibold" style={{ color: ds.colors.text.secondary }}>
                          Michael Truell
                        </Text>
                        <Text className="m-0 p-0 text-[12px]" style={{ color: 'rgba(38, 37, 30, 0.6)' }}>
                          Co-founder, Cursor
                        </Text>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <Section className="mt-[6px] mb-[4px]">
                  <CursorEmailButton href={getStartedUrl} variant="primary" paddingVertical="8px" paddingHorizontal="12px">
                    Get started
                  </CursorEmailButton>
                </Section>

                <Hr className="mx-0 my-[16px] w-full border border-solid" style={{ borderColor: ds.colors.card.base }} />

                <CursorEmailFooter
                  companyAddress={companyAddress}
                  supportEmail={supportEmail}
                  unsubscribeUrl={unsubscribeUrl}
                />
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

CursorWelcomeFromMichaelEmail.PreviewProps = {
  firstName: 'Ava',
  getStartedUrl: 'https://cursor.com',
} as CursorWelcomeFromMichaelEmailProps;

export default CursorWelcomeFromMichaelEmail;

