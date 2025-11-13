import {
  Body,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { cursorDesignSystem } from '../../../design-systems/cursor/cursor-design-system';
import { CursorEmailButton } from '../components/CursorEmailButton';
import { CursorEmailFooter } from '../components/CursorEmailFooter';

interface CursorCheckinMonth1EmailProps {
  firstName?: string;
  proUrl?: string;
  feedbackUrl?: string;
  logoLightUrl?: string;
  michaelPhotoUrl?: string;
  companyAddress?: string;
  supportEmail?: string;
  unsubscribeUrl?: string;
}

export const CursorCheckinMonth1Email = ({
  firstName = '',
  proUrl = 'https://cursor.com/pricing',
  feedbackUrl = 'https://cursor.com/feedback',
  logoLightUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdHq7HqXcX7IZuF2Sbl0cy6iEO5QAWfwCThsp4',
  michaelPhotoUrl = 'https://pbs.twimg.com/profile_images/1887065642261737472/QdLiAFfD_400x400.jpg',
  companyAddress = 'Cursor, San Francisco',
  supportEmail = 'support@cursor.com',
  unsubscribeUrl = 'https://cursor.com/unsubscribe',
}: CursorCheckinMonth1EmailProps) => {
  const ds = cursorDesignSystem;
  const previewText = "You've been using Cursor for a month";

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
                  It's been a month since you started using Cursor. I hope you've been shipping faster.
                </Text>

                <Text className="mt-0 mb-[12px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.secondary }}>
                  If you're finding Cursor useful, consider upgrading to Pro for unlimited AI requests, advanced
                  models, and priority support.
                </Text>

                <Text className="mt-0 mb-[12px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.secondary }}>
                  We're constantly improving Cursor based on feedback from users like you. If you have ideas or feature
                  requests,{' '}
                  <Link href={feedbackUrl} style={{ color: ds.colors.text.primary, textDecoration: 'underline' }}>
                    let us know
                  </Link>
                  .
                </Text>

                <Text className="mt-0 mb-[16px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.secondary }}>
                  Thanks for being here.
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
                  <CursorEmailButton href={proUrl} variant="primary" paddingVertical="8px" paddingHorizontal="12px">
                    Upgrade to Pro
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

CursorCheckinMonth1Email.PreviewProps = {
  firstName: 'Ava',
  proUrl: 'https://cursor.com/pricing',
  feedbackUrl: 'https://cursor.com/feedback',
} as CursorCheckinMonth1EmailProps;

export default CursorCheckinMonth1Email;

