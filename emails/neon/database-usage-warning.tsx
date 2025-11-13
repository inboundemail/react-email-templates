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

interface DatabaseUsageWarningEmailProps {
  firstName?: string;
  usagePercentage?: number;
  projectName?: string;
  currentStorage?: string;
  storageLimit?: string;
  currentComputeHours?: string;
  computeLimit?: string;
  upgradeUrl?: string;
  dashboardUrl?: string;
  companyAddress?: string;
  supportEmail?: string;
  usageChartUrl?: string;
}

export const DatabaseUsageWarningEmail = ({
  firstName = 'there',
  usagePercentage = 84,
  projectName = 'production-db',
  currentStorage = '8.4 GB',
  storageLimit = '10 GB',
  currentComputeHours = '168',
  computeLimit = '200',
  upgradeUrl = 'https://console.neon.tech/app/projects/upgrade',
  dashboardUrl = 'https://console.neon.tech/app/projects',
  companyAddress = 'Neon, Inc.',
  supportEmail = 'support@neon.tech',
  usageChartUrl = '/static/neon-usage-84-percent.png',
}: DatabaseUsageWarningEmailProps) => {
  const ds = neonDesignSystem;
  const previewText = `Your database usage is at ${usagePercentage}% — action may be needed`;

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

              {/* Usage Chart Image */}
              <Section className="mb-[20px]">
                <Img
                  src={usageChartUrl}
                  alt={`Database usage at ${usagePercentage}%`}
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

              {/* Heading */}
              <Heading 
                className="mt-0 mb-[8px] p-0 text-[22px] font-semibold leading-[1.3]"
                style={{ 
                  color: ds.colors.text.primary,
                  letterSpacing: '-0.01em',
                }}
              >
                Your database usage is at {usagePercentage}%
              </Heading>

              {/* Intro text */}
              <Text 
                className="mt-0 mb-[20px] text-[15px] leading-[1.6]" 
                style={{ color: ds.colors.text.secondary }}
              >
                Hi {firstName}, your project{' '}
                <span className="font-semibold" style={{ color: ds.colors.text.primary }}>
                  {projectName}
                </span>{' '}
                is approaching its usage limits. To avoid service interruptions, consider upgrading your plan.
              </Text>

              {/* Usage Details */}
              <Text 
                className="mt-0 mb-[12px] text-[15px] font-semibold"
                style={{ color: ds.colors.text.primary }}
              >
                Current usage breakdown:
              </Text>

              <table style={{ width: '100%', borderSpacing: 0, marginBottom: '20px' }}>
                <tbody>
                  <tr style={{ borderBottom: `1px solid ${ds.colors.border.main}` }}>
                    <td style={{ paddingBottom: '12px', paddingTop: '12px' }}>
                      <Text 
                        className="mt-0 mb-0 text-[14px]"
                        style={{ color: ds.colors.text.secondary }}
                      >
                        Storage
                      </Text>
                    </td>
                    <td style={{ paddingBottom: '12px', paddingTop: '12px', textAlign: 'right' }}>
                      <Text 
                        className="mt-0 mb-0 text-[14px] font-semibold"
                        style={{ color: ds.colors.text.primary }}
                      >
                        {currentStorage} / {storageLimit}
                      </Text>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBottom: '12px', paddingTop: '12px' }}>
                      <Text 
                        className="mt-0 mb-0 text-[14px]"
                        style={{ color: ds.colors.text.secondary }}
                      >
                        Compute hours
                      </Text>
                    </td>
                    <td style={{ paddingBottom: '12px', paddingTop: '12px', textAlign: 'right' }}>
                      <Text 
                        className="mt-0 mb-0 text-[14px] font-semibold"
                        style={{ color: ds.colors.text.primary }}
                      >
                        {currentComputeHours} / {computeLimit}
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* CTA Buttons */}
              <Section className="mb-[16px]">
                <NeonEmailButton 
                  href={upgradeUrl} 
                  variant="primary"
                  paddingVertical="12px"
                  paddingHorizontal="24px"
                >
                  Upgrade your plan
                </NeonEmailButton>
                
                <span style={{ display: 'inline-block', width: '12px' }}></span>
                
                <NeonEmailButton 
                  href={dashboardUrl} 
                  variant="secondary"
                  paddingVertical="12px"
                  paddingHorizontal="24px"
                >
                  View dashboard
                </NeonEmailButton>
              </Section>

              {/* Help text */}
              <Text 
                className="mt-0 mb-[20px] text-[13px] leading-[1.6]" 
                style={{ color: ds.colors.text.tertiary }}
              >
                Need help choosing the right plan?{' '}
                <Link 
                  href="https://neon.tech/pricing"
                  style={{ 
                    color: ds.colors.brand.primary,
                    textDecoration: 'none',
                  }}
                >
                  View pricing
                </Link>
                {' '}or{' '}
                <Link 
                  href={`mailto:${supportEmail}`}
                  style={{ 
                    color: ds.colors.brand.primary,
                    textDecoration: 'none',
                  }}
                >
                  contact support
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

DatabaseUsageWarningEmail.PreviewProps = {
  firstName: 'Alex',
  usagePercentage: 84,
  projectName: 'production-db',
  currentStorage: '8.4 GB',
  storageLimit: '10 GB',
  currentComputeHours: '168',
  computeLimit: '200',
  upgradeUrl: 'https://console.neon.tech/app/projects/upgrade',
  dashboardUrl: 'https://console.neon.tech/app/projects',
  companyAddress: 'Neon, Inc.',
  supportEmail: 'support@neon.tech',
  usageChartUrl: '/static/neon-usage-84-percent.png',
} as DatabaseUsageWarningEmailProps;

export default DatabaseUsageWarningEmail;

