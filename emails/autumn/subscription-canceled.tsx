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

interface SubscriptionCanceledEmailProps {
  firstName?: string;
  accessEndDate?: string;
  reactivateUrl?: string;
  productName?: string;
  companyAddress?: string;
  logoUrl?: string;
}

export const SubscriptionCanceledEmail = ({
  firstName = 'there',
  accessEndDate = 'Dec 31, 2025',
  reactivateUrl = 'https://useautumn.com/reactivate',
  productName = 'Autumn',
  companyAddress = 'Autumn Inc., San Francisco & London',
  logoUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdVXk0YCQ7XSBOxG7iDblvLCYsMPyIZ24aNd5H',
}: SubscriptionCanceledEmailProps) => {
  const ds = autumnDesignSystem;
  const previewText = `Your subscription has been canceled`;

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
                  Your subscription has been canceled
                </Heading>

                <Text className="mt-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  Hi {firstName}, your access will remain active until{' '}
                  <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>
                    {accessEndDate}
                  </span>
                  . We’re sad to see you go.
                </Text>

                <Section className="mt-[16px] mb-[8px]">
                  <AutumnEmailButton href={reactivateUrl} variant="secondary" paddingVertical="8px" paddingHorizontal="14px">
                    Reactivate subscription
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

SubscriptionCanceledEmail.PreviewProps = {
  firstName: 'Ava',
  accessEndDate: 'Dec 31, 2025',
  reactivateUrl: 'https://useautumn.com/reactivate',
  productName: 'Autumn',
  companyAddress: 'Autumn Inc., San Francisco & London',
} as SubscriptionCanceledEmailProps;

export default SubscriptionCanceledEmail;


