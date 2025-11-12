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
import { autumnDesignSystem } from '../../../design-systems/autumn/autumn-design-system';
import { LogoCard } from '../components/LogoCard';
import { AutumnEmailFooter } from '../components/AutumnEmailFooter';
import { AutumnEmailButton } from '../components/AutumnEmailButton';

interface FeatureItem {
  title: string;
  description: string;
  imageUrl: string;
  learnMoreUrl?: string;
}

interface AutumnChangelogEmailProps {
  productName?: string;
  companyAddress?: string;
  logoUrl?: string;
  ctaUrl?: string;
  features?: FeatureItem[];
}

export const AutumnChangelogEmail = ({
  productName = 'Autumn',
  companyAddress = 'Autumn Inc., San Francisco & London',
  logoUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdVXk0YCQ7XSBOxG7iDblvLCYsMPyIZ24aNd5H',
  ctaUrl = 'https://useautumn.com/changelog',
  features = [
    {
      title: 'Usage-based overage rules',
      description:
        'Set real-time usage limits and charge overages automatically. Choose reset windows and apply per-feature rules.',
      imageUrl: 'https://placehold.co/1200x540/png?text=Usage+Overage+Rules',
    },
    {
      title: 'Credits alongside subscriptions',
      description:
        'Introduce monetary or feature credits that multiple features can draw from. Great for trials and pay‑as‑you‑go.',
      imageUrl: 'https://placehold.co/1200x540/png?text=Credits+with+Subscriptions',
    },
    {
      title: 'Seat-based pricing with per-seat limits',
      description:
        'Bill customers for members and apply per-seat limits to control feature access and usage at scale.',
      imageUrl: 'https://placehold.co/1200x540/png?text=Seat-based+Pricing',
    },
    {
      title: 'Pay‑upfront packs',
      description:
        'Let users purchase fixed quantities upfront and consume them over time — perfect for predictable workloads.',
      imageUrl: 'https://placehold.co/1200x540/png?text=Pay-upfront+Packs',
    },
  ],
}: AutumnChangelogEmailProps) => {
  const ds = autumnDesignSystem;
  const previewText = `What’s new in ${productName}`;

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
                  What’s new in {productName}
                </Heading>

                <Text className="mt-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  Here are the latest improvements to help you ship pricing fast and iterate safely.
                </Text>

                {features.map((f, i) => (
                  <Section key={i} className={i === 0 ? 'mt-[8px]' : 'mt-[16px]'}>
                    <Heading className="m-0 mb-[6px] p-0 text-[15px] font-semibold" style={{ color: ds.colors.text.secondary }}>
                      {f.title}
                    </Heading>
                    <Text className="m-0 mb-[8px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                      {f.description}
                    </Text>
                    <Img
                      src={f.imageUrl}
                      alt={`${f.title} screenshot`}
                      width="100%"
                      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                    />
                    {f.learnMoreUrl ? (
                      <Text className="mt-[6px] mb-0 text-[12px]" style={{ color: ds.typography.tiny.color }}>
                        Learn more:{' '}
                        <Link href={f.learnMoreUrl} className="no-underline" style={{ color: ds.colors.text.info }}>
                          {f.learnMoreUrl}
                        </Link>
                      </Text>
                    ) : null}
                  </Section>
                ))}

                <Section className="mt-[16px] mb-[12px]">
                  <AutumnEmailButton href={ctaUrl} variant="primary" paddingVertical="8px" paddingHorizontal="14px">
                    See full changelog
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

AutumnChangelogEmail.PreviewProps = {
  productName: 'Autumn',
  companyAddress: 'Autumn Inc., San Francisco & London',
  ctaUrl: 'https://useautumn.com/changelog',
} as AutumnChangelogEmailProps;

export default AutumnChangelogEmail;


