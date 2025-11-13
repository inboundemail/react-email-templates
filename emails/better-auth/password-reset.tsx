import {
  Body,
  Button,
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

interface BetterAuthPasswordResetProps {
  resetLink?: string;
  userEmail?: string;
  appName?: string;
  expirationMinutes?: number;
  logoUrl?: string;
}

export const BetterAuthPasswordReset = ({
  resetLink = 'https://app.example.com/auth/reset-password?token=abc123',
  userEmail = 'user@example.com',
  appName = 'slackbound',
  expirationMinutes = 60,
  logoUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdtpRbOh6sAUj3N86LXf57JKBqdoixIRQHecMu',
}: BetterAuthPasswordResetProps) => {
  const ds = betterAuthDesignSystem;
  const previewText = 'Reset your password';

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
                  Reset your password
                </Heading>

                <Text className="mt-0 mb-[20px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.primary }}>
                  We received a request to reset the password for your account{' '}
                  <span style={{ color: '#6366F1' }}>{userEmail}</span>.
                </Text>

                <Section className="my-[24px]">
                  <Button
                    href={resetLink}
                    className="inline-block text-center no-underline"
                    style={{
                      backgroundColor: ds.buttons.primary.backgroundColor,
                      color: ds.buttons.primary.color,
                      padding: '12px 24px',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '1',
                      textDecoration: 'none',
                      borderRadius: ds.buttons.primary.borderRadius,
                      border: `1px solid ${ds.buttons.primary.border.color}`,
                    }}
                  >
                    Reset password
                  </Button>
                </Section>

                <Text className="mt-[20px] mb-[12px] text-[12px] leading-[1.5]" style={{ color: ds.colors.text.tertiary }}>
                  Or copy and paste this URL into your browser:
                </Text>

                <Text
                  className="mt-0 mb-[20px] break-all text-[12px] leading-[1.5]"
                  style={{ color: '#6366F1', wordBreak: 'break-all' }}
                >
                  {resetLink}
                </Text>

                <Hr className="mx-0 my-[24px] w-full border border-solid" style={{ borderColor: ds.colors.border.main }} />

                <Text className="mt-0 mb-[12px] text-[12px] leading-[1.5]" style={{ color: ds.colors.text.tertiary }}>
                  This link expires in {expirationMinutes} minutes. Email sent by {appName}.
                </Text>

                <Text className="mt-[12px] mb-[16px] text-[12px] leading-[1.5]" style={{ color: ds.colors.text.tertiary }}>
                  If you didn't request a password reset, you can safely ignore this email. Your password will remain
                  unchanged.
                </Text>

                <Text className="mt-0 mb-0 text-center text-[11px]" style={{ color: ds.colors.text.quaternary }}>
                  Powered by{' '}
                  <Link
                    href="https://better-auth.com"
                    style={{ color: ds.colors.text.quaternary, textDecoration: 'underline' }}
                  >
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

BetterAuthPasswordReset.PreviewProps = {
  resetLink: 'https://app.slackbound.com/auth/reset-password?token=abc123def456',
  userEmail: 'ryan@mandarin3d.com',
  appName: 'slackbound',
  expirationMinutes: 60,
} as BetterAuthPasswordResetProps;

export default BetterAuthPasswordReset;

