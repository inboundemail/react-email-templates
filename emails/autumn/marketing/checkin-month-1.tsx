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
import { autumnDesignSystem } from '../../../design-systems/autumn/autumn-design-system';
import { AutumnEmailButton } from '../components/AutumnEmailButton';
import { LogoCard } from '../components/LogoCard';
import { AutumnEmailFooter } from '../components/AutumnEmailFooter';
import { FounderSignature } from '../components/FounderSignature';

interface AutumnMonthOneCheckinEmailProps {
  firstName?: string;
  consultLink?: string;
  docsUrl?: string;
  ycUrl?: string;
  productName?: string;
  companyAddress?: string;
  logoUrl?: string;
}

export const AutumnMonthOneCheckinEmail = ({
  firstName = 'there',
  consultLink = 'https://useautumn.com',
  docsUrl = 'https://useautumn.com',
  ycUrl = 'https://www.ycombinator.com/companies/autumn',
  productName = 'Autumn',
  companyAddress = 'Autumn Inc., San Francisco & London',
  logoUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdVXk0YCQ7XSBOxG7iDblvLCYsMPyIZ24aNd5H',
}: AutumnMonthOneCheckinEmailProps) => {
  const ds = autumnDesignSystem;
  const previewText = `One month in — unlock more with ${productName}`;

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
                  One month in — what’s next?
                </Heading>

                <Text className="mt-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  Teams often add new pricing models around now. With {productName} you can launch usage‑based billing, credits, rollovers, or custom enterprise plans without migrations — just update your config and go.
                </Text>

                <div className="h-[12px]" />
                <Text className="m-0 mb-[6px] text-[15px] font-semibold" style={{ color: ds.colors.text.secondary }}>
                  From Ayush — ideas to explore
                </Text>
                <Text className="m-0 mb-[6px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  • Add credits alongside subscriptions to unlock trials or pay‑as‑you‑go.
                </Text>
                <Text className="m-0 mb-[6px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  • Enable rollovers for unused usage to improve retention.
                </Text>
                <Text className="m-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  • Ship custom enterprise pricing without DB migrations.
                </Text>

                <Text className="mt-[4px] mb-0 text-[12px]" style={{ color: ds.typography.tiny.color }}>
                  Learn more on our YC page:{' '}
                  <Link href={ycUrl} className="no-underline" style={{ color: ds.colors.text.info }}>
                    ycombinator.com/companies/autumn
                  </Link>
                  .
                </Text>

                <FounderSignature
                  name="Ayush Rodrigues"
                  imageUrl="https://bookface-images.s3.us-west-2.amazonaws.com/avatars/13e89b8bec41e23c6c5a11beaaee3ae6e1a0314e.jpg"
                  imageSize={36}
                />

                <Section className="mt-[16px] mb-[12px]">
                  <AutumnEmailButton href={consultLink} variant="primary" paddingVertical="8px" paddingHorizontal="14px">
                    Plan a pricing update
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

AutumnMonthOneCheckinEmail.PreviewProps = {
  firstName: 'Ava',
  consultLink: 'https://useautumn.com',
  docsUrl: 'https://useautumn.com',
  ycUrl: 'https://www.ycombinator.com/companies/autumn',
  productName: 'Autumn',
  companyAddress: 'Autumn Inc., San Francisco & London',
} as AutumnMonthOneCheckinEmailProps;

export default AutumnMonthOneCheckinEmail;


