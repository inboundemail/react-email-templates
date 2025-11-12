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
import { autumnDesignSystem } from '../../design-systems/autumn/autumn-design-system';
import { AutumnEmailButton } from './components/AutumnEmailButton';
import { LogoCard } from './components/LogoCard';
import { AutumnEmailFooter } from './components/AutumnEmailFooter';

interface InvoiceUpcomingEmailProps {
  firstName?: string;
  renewalDate?: string;
  amount?: string;
  currency?: string;
  planName?: string;
  manageUrl?: string;
  productName?: string;
  companyAddress?: string;
  logoUrl?: string;
}

export const InvoiceUpcomingEmail = ({
  firstName = 'there',
  renewalDate = 'Dec 5, 2025',
  amount = '49.00',
  currency = 'USD',
  planName = 'Pro',
  manageUrl = 'https://useautumn.com/billing',
  productName = 'Autumn',
  companyAddress = 'Autumn Inc., San Francisco & London',
  logoUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdVXk0YCQ7XSBOxG7iDblvLCYsMPyIZ24aNd5H',
}: InvoiceUpcomingEmailProps) => {
  const ds = autumnDesignSystem;
  const previewText = `Your subscription renews soon`;

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
                  Your subscription renews soon
                </Heading>

                <Text className="mt-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  Hi {firstName}, your {planName} plan will renew on{' '}
                  <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>
                    {renewalDate}
                  </span>{' '}
                  for{' '}
                  <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>
                    {amount} {currency}
                  </span>
                  .
                </Text>

                <Section className="mt-[16px] mb-[8px]">
                  <AutumnEmailButton href={manageUrl} variant="secondary" paddingVertical="8px" paddingHorizontal="14px">
                    Review plan or update billing
                  </AutumnEmailButton>
                </Section>

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

InvoiceUpcomingEmail.PreviewProps = {
  firstName: 'Ava',
  renewalDate: 'Dec 5, 2025',
  amount: '49.00',
  currency: 'USD',
  planName: 'Pro',
  manageUrl: 'https://useautumn.com/billing',
  productName: 'Autumn',
  companyAddress: 'Autumn Inc., San Francisco & London',
} as InvoiceUpcomingEmailProps;

export default InvoiceUpcomingEmail;


