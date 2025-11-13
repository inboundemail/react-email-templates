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

interface CursorBillionTokensAwardEmailProps {
  firstName?: string;
  tokenCount?: string;
  dashboardUrl?: string;
  logoLightUrl?: string;
  companyAddress?: string;
  supportEmail?: string;
  unsubscribeUrl?: string;
}

export const CursorBillionTokensAwardEmail = ({
  firstName = '',
  tokenCount = '1,000,000,000',
  dashboardUrl = 'https://cursor.com/dashboard',
  logoLightUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdHq7HqXcX7IZuF2Sbl0cy6iEO5QAWfwCThsp4',
  companyAddress = 'Cursor, San Francisco',
  supportEmail = 'support@cursor.com',
  unsubscribeUrl = 'https://cursor.com/unsubscribe',
}: CursorBillionTokensAwardEmailProps) => {
  const ds = cursorDesignSystem;
  const previewText = `You've hit ${tokenCount} tokens!`;

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
                  Congratulations! You've reached an incredible milestone — 1 billion tokens generated with Cursor.
                </Text>

                <Section
                  className="my-[16px] rounded-[8px] border border-solid p-[20px]"
                  style={{
                    backgroundColor: ds.colors.background.outside,
                    borderColor: '#EDECE9',
                  }}
                >
                  <Heading
                    className="m-0 mb-[6px] text-[36px] font-bold leading-[1.1]"
                    style={{ color: ds.colors.text.primary }}
                  >
                    1,000,000,000
                  </Heading>
                  <Text className="m-0 text-[14px]" style={{ color: ds.colors.text.secondary }}>
                    tokens generated
                  </Text>
                </Section>

                <Text className="mt-0 mb-[12px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.secondary }}>
                  This represents countless lines of code written, bugs fixed, and features shipped. You're part of a
                  community pushing the boundaries of what's possible with AI-assisted development.
                </Text>

                <Text className="mt-0 mb-[16px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.secondary }}>
                  Keep building, keep shipping, and keep pushing the limits of what you can create.
                </Text>

                <Section className="mt-[6px] mb-[4px]">
                  <CursorEmailButton href={dashboardUrl} variant="primary" paddingVertical="8px" paddingHorizontal="12px">
                    View your stats
                  </CursorEmailButton>
                </Section>

                <Hr className="mx-0 my-[16px] w-full border border-solid" style={{ borderColor: ds.colors.card.base }} />

                <table role="presentation" style={{ width: 'auto', marginBottom: '8px' }}>
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: 'middle', paddingRight: '12px' }}>
                        <Img
                          src="https://www.cursor.com/cursor-logo.png"
                          width={32}
                          alt="Cursor logo"
                          style={{ display: 'block', height: 'auto' }}
                        />
                      </td>
                      <td style={{ verticalAlign: 'middle' }}>
                        <Text className="m-0 p-0 text-[13px] font-semibold" style={{ color: ds.colors.text.secondary }}>
                          Cursor
                        </Text>
                        <Text className="m-0 p-0 text-[12px]" style={{ color: 'rgba(38, 37, 30, 0.6)' }}>
                          The AI code editor
                        </Text>
                      </td>
                    </tr>
                  </tbody>
                </table>

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

CursorBillionTokensAwardEmail.PreviewProps = {
  firstName: 'Ava',
  tokenCount: '1,000,000,000',
  dashboardUrl: 'https://cursor.com/dashboard',
} as CursorBillionTokensAwardEmailProps;

export default CursorBillionTokensAwardEmail;

