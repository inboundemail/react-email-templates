import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { betterAuthDesignSystem } from '../../design-systems/better-auth/better-auth-design-system';

interface BetterAuthVerifyEmailProps {
  verificationCode?: string;
  userEmail?: string;
  appName?: string;
  expirationMinutes?: number;
  logoUrl?: string;
}

export const BetterAuthVerifyEmail = ({
  verificationCode = '920441',
  userEmail = 'user@example.com',
  appName = 'slackbound',
  expirationMinutes = 10,
  logoUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdtpRbOh6sAUj3N86LXf57JKBqdoixIRQHecMu',
}: BetterAuthVerifyEmailProps) => {
  const ds = betterAuthDesignSystem;
  const previewText = `Your verification code is ${verificationCode}`;

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrX2B4qb1w2wX7DPI.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrX2B4qb1w2wX7DPI.woff2',
            format: 'woff2',
          }}
          fontWeight={600}
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body
          className="mx-auto my-auto px-2"
          style={{
            backgroundColor: '#F5F5F4',
            fontFamily: ds.typography.fontFamily.sans,
          }}
        >
          <Container className="mx-auto my-[40px] max-w-[600px]">
            <Section
              className="border border-solid"
              style={{
                backgroundColor: ds.card.backgroundColor,
                borderColor: ds.colors.border.main,
                borderRadius: ds.card.borderRadius,
              }}
            >
              <Section className="p-[32px]">
                <Section className="mb-[32px] text-center">
                  <Img
                    src={logoUrl}
                    width={48}
                    alt="Logo"
                    className="mx-auto block"
                    style={{ display: 'block', height: 'auto' }}
                  />
                </Section>

                <Heading
                  className="m-0 mb-[20px] text-[24px] font-semibold leading-[1.3]"
                  style={{ color: ds.colors.text.primary, letterSpacing: '-0.01em' }}
                >
                  Verify your email
                </Heading>

                <Text className="mt-0 mb-[20px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.primary }}>
                  We need to verify your email address{' '}
                  <span style={{ color: '#6366F1' }}>{userEmail}</span> before you can access your account. Enter the
                  code below in your open browser window.
                </Text>

                <Section
                  className="my-[32px] border border-solid p-[24px]"
                  style={{
                    backgroundColor: '#FAFAFA',
                    borderColor: ds.colors.border.main,
                  }}
                >
                  <Text
                    className="m-0 text-center text-[36px] font-semibold tracking-[0.2em]"
                    style={{ color: ds.colors.text.primary, letterSpacing: '0.2em' }}
                  >
                    {verificationCode}
                  </Text>
                </Section>

                <Hr className="mx-0 my-[24px] w-full border border-solid" style={{ borderColor: ds.colors.border.main }} />

                <Text className="mt-0 mb-[12px] text-[12px] leading-[1.5]" style={{ color: ds.colors.text.tertiary }}>
                  This code expires in {expirationMinutes} minutes. Email sent by {appName}.
                </Text>

                <Text className="mt-[12px] mb-[16px] text-[12px] leading-[1.5]" style={{ color: ds.colors.text.tertiary }}>
                  If you didn't sign up for {appName}, you can safely ignore this email. Someone else might have typed
                  your email address by mistake.
                </Text>

                <Text className="mt-0 mb-0 text-center text-[11px]" style={{ color: ds.colors.text.quaternary }}>
                  Powered by{' '}
                  <Link href="https://better-auth.com" style={{ color: ds.colors.text.quaternary, textDecoration: 'underline' }}>
                    better-auth
                  </Link>
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

BetterAuthVerifyEmail.PreviewProps = {
  verificationCode: '920441',
  userEmail: 'ryan@mandarin3d.com',
  appName: 'slackbound',
  expirationMinutes: 10,
} as BetterAuthVerifyEmailProps;

export default BetterAuthVerifyEmail;

