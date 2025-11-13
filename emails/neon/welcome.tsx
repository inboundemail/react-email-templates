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
import { neonDesignSystem } from '../../design-systems/neon/neon-design-system';
import { NeonEmailButton } from './components/NeonEmailButton';
import { NeonEmailFooter } from './components/NeonEmailFooter';

interface WelcomeEmailProps {
  firstName?: string;
  projectName?: string;
  consoleUrl?: string;
  docsUrl?: string;
  communityUrl?: string;
  companyAddress?: string;
  supportEmail?: string;
  instantBranchingImageUrl?: string;
}

export const WelcomeEmail = ({
  firstName = 'there',
  projectName = 'my-first-project',
  consoleUrl = 'https://console.neon.tech/app/projects',
  docsUrl = 'https://neon.tech/docs',
  communityUrl = 'https://discord.gg/neon',
  companyAddress = 'Neon, Inc.',
  supportEmail = 'support@neon.tech',
  instantBranchingImageUrl = '/static/instant-branching.png',
}: WelcomeEmailProps) => {
  const ds = neonDesignSystem;
  const previewText = `Welcome to Neon — your serverless Postgres is ready`;

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
            backgroundColor: ds.colors.background.outside,
            fontFamily: ds.typography.body.fontFamily,
          }}
        >
          <Container className="mx-auto my-[32px] max-w-[600px]">
            <Section
              className="rounded-[20px] border border-solid bg-white p-[24px]"
              style={{ 
                borderColor: ds.colors.border.main,
                borderRadius: '20px',
              }}
            >
              {/* Logo */}
              <Img
                src="/static/neon-wordmark-light.png"
                alt="Neon"
                width="100"
                height="auto"
                className="mb-[24px]"
              />

              {/* Heading */}
              <Heading 
                className="mt-0 mb-[8px] p-0 text-[22px] font-semibold leading-[1.3]"
                style={{ 
                  color: ds.colors.text.primary,
                  letterSpacing: '-0.01em',
                }}
              >
                Welcome to Neon
              </Heading>

              {/* Intro text */}
              <Text 
                className="mt-0 mb-[20px] text-[15px] leading-[1.6]" 
                style={{ color: ds.colors.text.secondary }}
              >
                Hi {firstName}, thanks for signing up! Your serverless Postgres database{' '}
                <span className="font-semibold" style={{ color: ds.colors.text.primary }}>
                  {projectName}
                </span>{' '}
                is ready to use. Let's get you started with the power of instant branching.
              </Text>

              {/* Instant Branching Image */}
              <Section className="mb-[20px]">
                <Img
                  src={instantBranchingImageUrl}
                  alt="Instant Branching"
                  width="552"
                  height="auto"
                  className="rounded-[20px] w-full"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '20px',
                  }}
                />
              </Section>

              {/* Feature Highlights */}
              <Text 
                className="mt-0 mb-[16px] text-[15px] font-semibold"
                style={{ color: ds.colors.text.primary }}
              >
                What makes Neon special:
              </Text>

              {/* Feature 1 */}
              <Section 
                className="rounded-[20px] border border-solid p-[16px] mb-[12px]"
                style={{ 
                  borderColor: ds.colors.border.main,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                }}
              >
                <Text 
                  className="mt-0 mb-[6px] text-[14px] font-semibold"
                  style={{ color: ds.colors.text.primary }}
                >
                  Instant branching
                </Text>
                <Text 
                  className="mt-0 mb-0 text-[14px] leading-[1.6]"
                  style={{ color: ds.colors.text.secondary }}
                >
                  Create database branches in seconds for development, testing, and previews.
                </Text>
              </Section>

              {/* Feature 2 */}
              <Section 
                className="rounded-[20px] border border-solid p-[16px] mb-[12px]"
                style={{ 
                  borderColor: ds.colors.border.main,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                }}
              >
                <Text 
                  className="mt-0 mb-[6px] text-[14px] font-semibold"
                  style={{ color: ds.colors.text.primary }}
                >
                  Autoscaling
                </Text>
                <Text 
                  className="mt-0 mb-0 text-[14px] leading-[1.6]"
                  style={{ color: ds.colors.text.secondary }}
                >
                  Automatically scale compute resources based on your application's demand.
                </Text>
              </Section>

              {/* Feature 3 */}
              <Section 
                className="rounded-[20px] border border-solid p-[16px] mb-[20px]"
                style={{ 
                  borderColor: ds.colors.border.main,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                }}
              >
                <Text 
                  className="mt-0 mb-[6px] text-[14px] font-semibold"
                  style={{ color: ds.colors.text.primary }}
                >
                  Scale to zero
                </Text>
                <Text 
                  className="mt-0 mb-0 text-[14px] leading-[1.6]"
                  style={{ color: ds.colors.text.secondary }}
                >
                  Pay only for what you use. Your database automatically pauses when inactive.
                </Text>
              </Section>

              {/* Quick Start Card */}
              <Text 
                className="mt-0 mb-[12px] text-[15px] font-semibold"
                style={{ color: ds.colors.text.primary }}
              >
                Quick start guide:
              </Text>

              <table style={{ width: '100%', marginBottom: '20px' }}>
                <tbody>
                  <tr>
                    <td style={{ verticalAlign: 'top', paddingRight: '12px', width: '24px' }}>
                      <Text 
                        className="mt-0 mb-0 text-[14px] font-semibold"
                        style={{ color: ds.colors.brand.primary }}
                      >
                        1.
                      </Text>
                    </td>
                    <td style={{ verticalAlign: 'top', paddingBottom: '12px' }}>
                      <Text 
                        className="mt-0 mb-0 text-[14px] leading-[1.6]"
                        style={{ color: ds.colors.text.secondary }}
                      >
                        Connect to your database using the connection string in your console
                      </Text>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: 'top', paddingRight: '12px', width: '24px' }}>
                      <Text 
                        className="mt-0 mb-0 text-[14px] font-semibold"
                        style={{ color: ds.colors.brand.primary }}
                      >
                        2.
                      </Text>
                    </td>
                    <td style={{ verticalAlign: 'top', paddingBottom: '12px' }}>
                      <Text 
                        className="mt-0 mb-0 text-[14px] leading-[1.6]"
                        style={{ color: ds.colors.text.secondary }}
                      >
                        Create your first branch for development
                      </Text>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: 'top', paddingRight: '12px', width: '24px' }}>
                      <Text 
                        className="mt-0 mb-0 text-[14px] font-semibold"
                        style={{ color: ds.colors.brand.primary }}
                      >
                        3.
                      </Text>
                    </td>
                    <td style={{ verticalAlign: 'top' }}>
                      <Text 
                        className="mt-0 mb-0 text-[14px] leading-[1.6]"
                        style={{ color: ds.colors.text.secondary }}
                      >
                        Explore our integrations with Vercel, GitHub Actions, and more
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* CTA Buttons */}
              <Section className="mb-[16px]">
                <NeonEmailButton 
                  href={consoleUrl} 
                  variant="primary"
                  paddingVertical="12px"
                  paddingHorizontal="24px"
                >
                  Go to Console
                </NeonEmailButton>
                
                <span style={{ display: 'inline-block', width: '12px' }}></span>
                
                <NeonEmailButton 
                  href={docsUrl} 
                  variant="secondary"
                  paddingVertical="12px"
                  paddingHorizontal="24px"
                >
                  Read the docs
                </NeonEmailButton>
              </Section>

              {/* Help text */}
              <Text 
                className="mt-0 mb-[20px] text-[13px] leading-[1.6]" 
                style={{ color: ds.colors.text.tertiary }}
              >
                Need help getting started?{' '}
                <Link 
                  href={docsUrl}
                  style={{ 
                    color: ds.colors.brand.primary,
                    textDecoration: 'none',
                  }}
                >
                  Check our docs
                </Link>
                {' '}or join our{' '}
                <Link 
                  href={communityUrl}
                  style={{ 
                    color: ds.colors.brand.primary,
                    textDecoration: 'none',
                  }}
                >
                  Discord community
                </Link>
                .
              </Text>

              <Hr 
                className="mx-0 my-[20px] w-full border border-solid" 
                style={{ borderColor: ds.colors.border.main }} 
              />

              <NeonEmailFooter 
                companyAddress={companyAddress}
                supportEmail={supportEmail}
              />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

WelcomeEmail.PreviewProps = {
  firstName: 'Alex',
  projectName: 'my-first-project',
  consoleUrl: 'https://console.neon.tech/app/projects',
  docsUrl: 'https://neon.tech/docs',
  communityUrl: 'https://discord.gg/neon',
  companyAddress: 'Neon, Inc.',
  supportEmail: 'support@neon.tech',
  instantBranchingImageUrl: '/static/instant-branching.png',
} as WelcomeEmailProps;

export default WelcomeEmail;

