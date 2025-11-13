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

interface BetterAuthEmailChangedProps {
  oldEmail?: string;
  newEmail?: string;
  revertLink?: string;
  appName?: string;
  supportEmail?: string;
  logoUrl?: string;
}

export const BetterAuthEmailChanged = ({
  oldEmail = 'old@example.com',
  newEmail = 'new@example.com',
  revertLink = 'https://app.example.com/auth/revert-email?token=abc123',
  appName = 'slackbound',
  supportEmail = 'support@example.com',
  logoUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdtpRbOh6sAUj3N86LXf57JKBqdoixIRQHecMu',
}: BetterAuthEmailChangedProps) => {
  const ds = betterAuthDesignSystem;
  const previewText = 'Your email address has been changed';

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
                  Email address changed
                </Heading>

                <Text className="mt-0 mb-[20px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.primary }}>
                  The email address for your {appName} account has been changed.
                </Text>

                <Section
                  className="my-[24px] border border-solid p-[16px]"
                  style={{
                    backgroundColor: '#FAFAFA',
                    borderColor: ds.colors.border.main,
                  }}
                >
                  <Text className="m-0 mb-[8px] text-[12px] leading-[1.5]" style={{ color: ds.colors.text.tertiary }}>
                    Previous email:
                  </Text>
                  <Text className="m-0 mb-[16px] text-[14px] font-semibold" style={{ color: ds.colors.text.primary }}>
                    {oldEmail}
                  </Text>
                  <Text className="m-0 mb-[8px] text-[12px] leading-[1.5]" style={{ color: ds.colors.text.tertiary }}>
                    New email:
                  </Text>
                  <Text className="m-0 text-[14px] font-semibold" style={{ color: '#6366F1' }}>
                    {newEmail}
                  </Text>
                </Section>

                <Text className="mt-0 mb-[20px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.primary }}>
                  If you made this change, you can safely ignore this email.
                </Text>

                <Section className="my-[24px]">
                  <Button
                    href={revertLink}
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
                    I didn't make this change
                  </Button>
                </Section>

                <Hr className="mx-0 my-[24px] w-full border border-solid" style={{ borderColor: ds.colors.border.main }} />

                <Text className="mt-0 mb-[12px] text-[12px] leading-[1.5]" style={{ color: ds.colors.text.tertiary }}>
                  Email sent by {appName}.
                </Text>

                <Text className="mt-[12px] mb-[16px] text-[12px] leading-[1.5]" style={{ color: ds.colors.text.tertiary }}>
                  If you didn't authorize this change, please contact support immediately at{' '}
                  <Link href={`mailto:${supportEmail}`} style={{ color: '#6366F1', textDecoration: 'underline' }}>
                    {supportEmail}
                  </Link>
                  .
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

BetterAuthEmailChanged.PreviewProps = {
  oldEmail: 'old@mandarin3d.com',
  newEmail: 'ryan@mandarin3d.com',
  revertLink: 'https://app.slackbound.com/auth/revert-email?token=abc123def456',
  appName: 'slackbound',
  supportEmail: 'support@slackbound.com',
} as BetterAuthEmailChangedProps;

export default BetterAuthEmailChanged;

