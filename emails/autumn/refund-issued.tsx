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

interface RefundIssuedEmailProps {
  firstName?: string;
  refundAmount?: string;
  currency?: string;
  productOrPeriod?: string; // e.g., "November billing period"
  expectedTimeline?: string; // e.g., "5–10 business days"
  detailsUrl?: string;
  supportUrl?: string;
  productName?: string;
  companyAddress?: string;
  logoUrl?: string;
}

export const RefundIssuedEmail = ({
  firstName = 'there',
  refundAmount = '49.00',
  currency = 'USD',
  productOrPeriod = 'the last billing period',
  expectedTimeline = '5–10 business days',
  detailsUrl = 'https://useautumn.com/billing/refund/abc',
  supportUrl = 'https://useautumn.com/support',
  productName = 'Autumn',
  companyAddress = 'Autumn Inc., San Francisco & London',
  logoUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdVXk0YCQ7XSBOxG7iDblvLCYsMPyIZ24aNd5H',
}: RefundIssuedEmailProps) => {
  const ds = autumnDesignSystem;
  const previewText = `Your refund is on the way`;

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
                  Your refund is on the way
                </Heading>

                <Text className="mt-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  Hi {firstName}, a refund of{' '}
                  <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>
                    {refundAmount} {currency}
                  </span>{' '}
                  for {productOrPeriod} was issued. Funds typically arrive within {expectedTimeline}.
                </Text>

                <Section className="mt-[16px] mb-[8px]">
                  <AutumnEmailButton href={detailsUrl} variant="secondary" paddingVertical="8px" paddingHorizontal="14px">
                    View refund details
                  </AutumnEmailButton>
                </Section>

                <Text className="mt-[4px] mb-0 text-[12px]" style={{ color: ds.typography.tiny.color }}>
                  Need help?{' '}
                  <Link href={supportUrl} className="no-underline" style={{ color: ds.colors.text.info }}>
                    Contact support
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

RefundIssuedEmail.PreviewProps = {
  firstName: 'Ava',
  refundAmount: '49.00',
  currency: 'USD',
  productOrPeriod: 'the last billing period',
  expectedTimeline: '5–10 business days',
  detailsUrl: 'https://useautumn.com/billing/refund/abc',
  supportUrl: 'https://useautumn.com/support',
  productName: 'Autumn',
  companyAddress: 'Autumn Inc., San Francisco & London',
} as RefundIssuedEmailProps;

export default RefundIssuedEmail;


