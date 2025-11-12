import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { autumnDesignSystem } from '../../autumn-design-system';
import { AutumnEmailButton } from './components/AutumnEmailButton';
import { LogoCard } from './components/LogoCard';
import { AutumnEmailFooter } from './components/AutumnEmailFooter';

interface SubscriptionCreatedEmailProps {
  firstName?: string;
  planName?: string;
  billingInterval?: string; // monthly, yearly
  dashboardUrl?: string;
  billingPortalUrl?: string;
  productName?: string;
  companyAddress?: string;
  logoUrl?: string;
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

export const SubscriptionCreatedEmail = ({
  firstName = 'there',
  planName = 'Pro',
  billingInterval = 'monthly',
  dashboardUrl = 'https://useautumn.com',
  billingPortalUrl = 'https://useautumn.com/billing',
  productName = 'Autumn',
  companyAddress = 'Autumn Inc., San Francisco & London',
  logoUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdVXk0YCQ7XSBOxG7iDblvLCYsMPyIZ24aNd5H',
}: SubscriptionCreatedEmailProps) => {
  const ds = autumnDesignSystem;
  const previewText = `Your subscription has started`;

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
          fontWeight={500}
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
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, Arial, sans-serif',
          }}
        >
          <Container className="mx-auto my-[24px] max-w-[600px]">
            <Section
              className="rounded-[12px] border border-solid bg-white"
              style={{ borderColor: ds.colors.border.main }}
            >
              <Section className="p-[16px]">
                <LogoCard src={logoUrl} alt={`${productName} logo`} />

                <Heading className="mt-[12px] mb-[8px] p-0 text-[17px] font-semibold" style={{ color: ds.colors.text.primary }}>
                  Your subscription has started
                </Heading>

                <Text className="mt-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  Hi {firstName}, thanks for subscribing to {productName}. You’re now on the{' '}
                  <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>
                    {planName}
                  </span>{' '}
                  plan billed {billingInterval}.
                </Text>

                <Section className="mt-[16px] mb-[8px]">
                  <AutumnEmailButton href={dashboardUrl} variant="primary" paddingVertical="8px" paddingHorizontal="14px">
                    Go to your dashboard
                  </AutumnEmailButton>
                </Section>

                <Text className="mt-[4px] mb-0 text-[12px]" style={{ color: ds.typography.tiny.color }}>
                  Manage billing anytime in your{' '}
                  <Link href={billingPortalUrl} className="no-underline" style={{ color: ds.colors.text.info }}>
                    billing portal
                  </Link>
                  .
                </Text>

                <Hr className="mx-0 my-[16px] w-full border border-solid" style={{ borderColor: ds.colors.border.main }} />

                <AutumnEmailFooter companyAddress={companyAddress} />
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

SubscriptionCreatedEmail.PreviewProps = {
  firstName: 'Ava',
  planName: 'Pro',
  billingInterval: 'monthly',
  dashboardUrl: 'https://useautumn.com',
  billingPortalUrl: 'https://useautumn.com/billing',
  productName: 'Autumn',
  companyAddress: 'Autumn Inc., San Francisco & London',
} as SubscriptionCreatedEmailProps;

export default SubscriptionCreatedEmail;


