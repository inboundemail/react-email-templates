import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { autumnDesignSystem } from '../../../design-systems/autumn/autumn-design-system';
import { AutumnEmailButton } from '../components/AutumnEmailButton';
import { LogoCard } from '../components/LogoCard';
import { AutumnEmailFooter } from '../components/AutumnEmailFooter';
import { FounderSignature } from '../components/FounderSignature';

interface AutumnWelcomeMarketingEmailProps {
  firstName?: string;
  getStartedUrl?: string;
  ycUrl?: string;
  docsUrl?: string;
  productName?: string;
  companyAddress?: string;
  logoUrl?: string;
  founderOneImageUrl?: string;
  founderTwoImageUrl?: string;
}

export const AutumnWelcomeMarketingEmail = ({
  firstName = 'there',
  getStartedUrl = 'https://useautumn.com',
  ycUrl = 'https://www.ycombinator.com/companies/autumn',
  docsUrl = 'https://useautumn.com',
  productName = 'Autumn',
  companyAddress = 'Autumn Inc., San Francisco & London',
  logoUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdVXk0YCQ7XSBOxG7iDblvLCYsMPyIZ24aNd5H',
  founderOneImageUrl = 'https://bookface-images.s3.us-west-2.amazonaws.com/avatars/13e89b8bec41e23c6c5a11beaaee3ae6e1a0314e.jpg',
  founderTwoImageUrl = 'https://bookface-images.s3.us-west-2.amazonaws.com/avatars/5c3d1f5a6499857bb99566c84abe1f3e8190bfc4.jpg',
}: AutumnWelcomeMarketingEmailProps) => {
  const ds = autumnDesignSystem;
  const previewText = `Welcome to ${productName} — billing infrastructure for AI`;

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
                  Welcome to {productName}
                </Heading>

                <Text className="mt-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  Hi {firstName}, thanks for checking out {productName}. We’re building billing infrastructure for AI — flexible pricing, usage, credits and subscriptions — all modeled once and reused as you grow.
                </Text>

                <div className="h-[12px]" />

                <Text className="m-0 mb-[8px] text-[15px] font-semibold" style={{ color: ds.colors.text.secondary }}>
                  Why {productName}
                </Text>
                <Text className="m-0 mb-[8px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  Billing infrastructure gets complex fast — it’s not just payments. You also need permissions, metering, usage limits with cron jobs, and clean handling of upgrades, downgrades, cancellations and failed payments.
                </Text>
                <Text className="m-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  Billing and app logic should be decoupled — companies iterate pricing often. With {productName}, you can raise prices, experiment with credits, or charge for new features without heavy DB migrations or rebuilding flows.
                </Text>

                <Text className="m-0 mb-[6px] text-[15px] font-semibold" style={{ color: ds.colors.text.secondary }}>
                  How it works
                </Text>
                <Text className="m-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  Model products and plans in the dashboard. We support usage and overage, credits, seat‑based pricing, and pay‑upfront models — all configurable without migrations.
                </Text>

                <div className="h-[12px]" />
                <FounderSignature name="Ayush Rodrigues" imageUrl={founderOneImageUrl} imageSize={36} />

                <Text className="mt-[8px] mb-0 text-[12px]" style={{ color: ds.typography.tiny.color }}>
                  See more on our YC page:{' '}
                  <Link href={ycUrl} className="no-underline" style={{ color: ds.colors.text.info }}>
                    ycombinator.com/companies/autumn
                  </Link>
                  .
                </Text>

                <Section className="mt-[16px] mb-[12px]">
                  <AutumnEmailButton href={getStartedUrl} variant="primary" paddingVertical="8px" paddingHorizontal="14px">
                    Get started
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

AutumnWelcomeMarketingEmail.PreviewProps = {
  firstName: 'Ava',
  getStartedUrl: 'https://useautumn.com',
  ycUrl: 'https://www.ycombinator.com/companies/autumn',
  docsUrl: 'https://useautumn.com',
  productName: 'Autumn',
  companyAddress: 'Autumn Inc., San Francisco & London',
} as AutumnWelcomeMarketingEmailProps;

export default AutumnWelcomeMarketingEmail;


