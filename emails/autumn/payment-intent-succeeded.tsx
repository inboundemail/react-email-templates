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
import { autumnDesignSystem } from '../../autumn-design-system';
import { AutumnEmailButton } from './components/AutumnEmailButton';
import { AutumnEmailFooter } from './components/AutumnEmailFooter';

interface PaymentSuccessEmailProps {
  firstName?: string;
  amount?: string; // e.g., "49.00"
  currency?: string; // e.g., "USD"
  planName?: string; // e.g., "Pro"
  dashboardUrl?: string;
  receiptUrl?: string;
  supportUrl?: string;
  productName?: string; // e.g., "Autumn"
  companyAddress?: string; // footer compliance text
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

export const PaymentIntentSucceededEmail = ({
  firstName = 'there',
  amount = '49.00',
  currency = 'USD',
  planName = 'Pro',
  dashboardUrl = 'https://app.example.com',
  receiptUrl = 'https://billing.example.com/receipt/123',
  supportUrl = 'https://support.example.com',
  productName = 'Autumn',
  companyAddress = 'Autumn Inc., 123 Main St, Springfield, USA',
}: PaymentSuccessEmailProps) => {
  const ds = autumnDesignSystem;

  const previewText = `Payment successful — your ${planName} plan is active`;

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
              style={{
                borderColor: ds.colors.border.main,
              }}
            >
              <Section className="p-[16px]">
                <div>
                  <table
                    role="presentation"
                    style={{
                      backgroundColor: ds.colors.background.inside,
                      border: `1px solid ${ds.colors.border.main}`,
                      borderRadius: '8px',
                      borderCollapse: 'separate',
                      borderSpacing: 0,
                      width: '36px',
                      height: '36px',
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          style={{ padding: '4px', verticalAlign: 'middle' }}
                        >
                          <Img
                            className="block"
                            src={`https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdVXk0YCQ7XSBOxG7iDblvLCYsMPyIZ24aNd5H`}
                            width="24"
                            height="24"
                            alt={`${productName} logo`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Heading
                  className="mt-[12px] mb-[8px] p-0 text-[17px] font-semibold"
                  style={{ color: ds.colors.text.primary }}
                >
                  Payment successful — welcome{firstName ? `, ${firstName}` : ''}!
                </Heading>

                <Text
                  className="mt-0 mb-[12px] text-[13px] leading-[1.6]"
                  style={{ color: ds.colors.text.tertiary }}
                >
                  We received your payment of{' '}
                  <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>
                    {amount} {currency}
                  </span>{' '}
                  for the{' '}
                  <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>
                    {planName}
                  </span>{' '}
                  plan. Your access to {productName} is now active.
                </Text>

                <Section className="mt-[16px] mb-[8px]">
                  <AutumnEmailButton
                    href={dashboardUrl}
                    variant="primary"
                    paddingVertical="8px"
                    paddingHorizontal="14px"
                  >
                    Go to your dashboard
                  </AutumnEmailButton>
                </Section>

                {receiptUrl ? (
                  <Text className="mt-[4px] mb-0 text-[12px]" style={{ color: ds.typography.tiny.color }}>
                    Need a copy?{' '}
                    <Link
                      href={receiptUrl}
                      className="no-underline"
                      style={{ color: ds.colors.text.info }}
                    >
                      View your receipt
                    </Link>
                    .
                  </Text>
                ) : null}

                <Hr
                  className="mx-0 my-[16px] w-full border border-solid"
                  style={{ borderColor: ds.colors.border.main }}
                />

                <Text className="mt-0 mb-[8px] text-[12px] leading-[1.6]" style={{ color: ds.typography.tiny.color }}>
                  Questions?{' '}
                  <Link href={supportUrl} className="no-underline" style={{ color: ds.colors.text.info }}>
                    Contact support
                  </Link>
                  .
                </Text>
                <AutumnEmailFooter companyAddress={companyAddress} />
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

PaymentIntentSucceededEmail.PreviewProps = {
  firstName: 'Ava',
  amount: '49.00',
  currency: 'USD',
  planName: 'Pro',
  dashboardUrl: 'https://useautumn.com',
  receiptUrl: 'https://useautumn.com/receipt/123',
  supportUrl: 'https://useautumn.com/support',
  productName: 'Autumn',
  companyAddress: 'Autumn Inc., San Francisco & London',
} as PaymentSuccessEmailProps;

export default PaymentIntentSucceededEmail;


