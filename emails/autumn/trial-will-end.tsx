import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { autumnDesignSystem } from '../../design-systems/autumn/autumn-design-system';
import { AutumnEmailButton } from './components/AutumnEmailButton';
import { LogoCard } from './components/LogoCard';
import { AutumnEmailFooter } from './components/AutumnEmailFooter';

interface TrialWillEndEmailProps {
  firstName?: string;
  daysLeft?: number;
  billingAmount?: string;
  currency?: string;
  upgradeUrl?: string;
  productName?: string;
  companyAddress?: string;
  logoUrl?: string;
}

export const TrialWillEndEmail = ({
  firstName = 'there',
  daysLeft = 3,
  billingAmount = '49.00',
  currency = 'USD',
  upgradeUrl = 'https://useautumn.com/upgrade',
  productName = 'Autumn',
  companyAddress = 'Autumn Inc., San Francisco & London',
  logoUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdVXk0YCQ7XSBOxG7iDblvLCYsMPyIZ24aNd5H',
}: TrialWillEndEmailProps) => {
  const ds = autumnDesignSystem;
  const previewText = `Your trial ends in ${daysLeft} days`;

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
                  Your trial ends in {daysLeft} {daysLeft === 1 ? 'day' : 'days'}
                </Heading>

                <Text className="mt-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  Hi {firstName}, when your trial ends, you’ll be billed{' '}
                  <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>
                    {billingAmount} {currency}
                  </span>{' '}
                  unless you upgrade or cancel.
                </Text>

                <Section className="mt-[16px] mb-[8px]">
                  <AutumnEmailButton href={upgradeUrl} variant="primary" paddingVertical="8px" paddingHorizontal="14px">
                    Upgrade now
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

TrialWillEndEmail.PreviewProps = {
  firstName: 'Ava',
  daysLeft: 3,
  billingAmount: '49.00',
  currency: 'USD',
  upgradeUrl: 'https://useautumn.com/upgrade',
  productName: 'Autumn',
  companyAddress: 'Autumn Inc., San Francisco & London',
} as TrialWillEndEmailProps;

export default TrialWillEndEmail;


