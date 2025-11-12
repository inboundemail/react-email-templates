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

interface PaymentMethodRequiredEmailProps {
  firstName?: string;
  reason?: string;
  fixUrl?: string;
  cancelWarning?: string; // e.g., "Failure may cancel your subscription"
  productName?: string;
  companyAddress?: string;
  logoUrl?: string;
}

export const PaymentMethodRequiredEmail = ({
  firstName = 'there',
  reason = 'Your card was declined',
  fixUrl = 'https://useautumn.com/billing/payment-method',
  cancelWarning = 'If not fixed, your subscription may be canceled.',
  productName = 'Autumn',
  companyAddress = 'Autumn Inc., San Francisco & London',
  logoUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdVXk0YCQ7XSBOxG7iDblvLCYsMPyIZ24aNd5H',
}: PaymentMethodRequiredEmailProps) => {
  const ds = autumnDesignSystem;
  const previewText = `Action required — your payment method needs to be updated`;

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
                  Action required — update your payment method
                </Heading>

                <Text className="mt-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  Hi {firstName}, we couldn’t charge your card. Reason: {reason}. Please update your payment details to keep your access to {productName}.
                </Text>

                <Section className="mt-[16px] mb-[8px]">
                  <AutumnEmailButton href={fixUrl} variant="destructive" paddingVertical="8px" paddingHorizontal="14px">
                    Fix payment details
                  </AutumnEmailButton>
                </Section>

                <Text className="mt-[4px] mb-0 text-[12px]" style={{ color: ds.colors.text.error }}>
                  {cancelWarning}
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

PaymentMethodRequiredEmail.PreviewProps = {
  firstName: 'Ava',
  reason: 'Your card expired',
  fixUrl: 'https://useautumn.com/billing/payment-method',
  cancelWarning: 'If not fixed, your subscription may be canceled.',
  productName: 'Autumn',
  companyAddress: 'Autumn Inc., San Francisco & London',
} as PaymentMethodRequiredEmailProps;

export default PaymentMethodRequiredEmail;


