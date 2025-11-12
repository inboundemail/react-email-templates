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
import { autumnDesignSystem } from '../../../autumn-design-system';
import { AutumnEmailButton } from '../components/AutumnEmailButton';
import { LogoCard } from '../components/LogoCard';
import { AutumnEmailFooter } from '../components/AutumnEmailFooter';
import { FounderSignature } from '../components/FounderSignature';

interface AutumnWeekOneCheckinEmailProps {
  firstName?: string;
  scheduleLink?: string;
  docsUrl?: string;
  ycUrl?: string;
  productName?: string;
  companyAddress?: string;
  logoUrl?: string;
}

export const AutumnWeekOneCheckinEmail = ({
  firstName = 'there',
  scheduleLink = 'https://useautumn.com',
  docsUrl = 'https://useautumn.com',
  ycUrl = 'https://www.ycombinator.com/companies/autumn',
  productName = 'Autumn',
  companyAddress = 'Autumn Inc., San Francisco & London',
  logoUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdVXk0YCQ7XSBOxG7iDblvLCYsMPyIZ24aNd5H',
}: AutumnWeekOneCheckinEmailProps) => {
  const ds = autumnDesignSystem;
  const previewText = `How’s your first week with ${productName}?`;

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
                  One week in — how’s it going?
                </Heading>

                <Text className="mt-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  Hi {firstName}, quick check-in. Most teams start by wiring{' '}
                  <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>/checkout</span>, then{' '}
                  <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>/track</span> usage events, and finally use{' '}
                  <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>/check</span> for feature access. If you’d like, we can review your setup together.
                </Text>

                <div className="h-[12px]" />
                <Text className="m-0 mb-[6px] text-[15px] font-semibold" style={{ color: ds.colors.text.secondary }}>
                  From John — try these next
                </Text>
                <Text className="m-0 mb-[6px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  • Wire <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>/attach</span> to handle purchases and upgrades.
                </Text>
                <Text className="m-0 mb-[6px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  • Add <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>/track</span> where usage happens.
                </Text>
                <Text className="m-0 mb-[12px] text-[13px] leading-[1.6]" style={{ color: ds.colors.text.tertiary }}>
                  • Gate features with <span className="font-semibold" style={{ color: ds.colors.text.secondary }}>/check</span>.
                </Text>

                <Text className="mt-[4px] mb-0 text-[12px]" style={{ color: ds.typography.tiny.color }}>
                  See what we’re about on YC:{' '}
                  <Link href={ycUrl} className="no-underline" style={{ color: ds.colors.text.info }}>
                    ycombinator.com/companies/autumn
                  </Link>
                  .
                </Text>

                <FounderSignature
                  name="John Yeo"
                  imageUrl="https://bookface-images.s3.us-west-2.amazonaws.com/avatars/5c3d1f5a6499857bb99566c84abe1f3e8190bfc4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQC4NIECAIANSGKE6%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T223928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFh1V1uJN2Vj0r32hrsRYPPpsJVYNFJ4XPQIPcgIpPcYAiEAoVtWM6eIVvQBzEiUHT42EpzsSIESUULM%2FTsvs73LuCoq5QMIPxAAGgwwMDYyMDE4MTEwNzIiDIEWpJkFBJFk7JAm6SrCA0Wt%2F70AkueGiWsrODk5eHP1us8FibDXaNeCGTqbIIdDDN%2FKs610nHH8rKGhdJkbkyMARAfl9mvlABiGCcSp%2FzVQu6Lb0tEt4LoZpKCJmeR8Jp%2BHaMxuTsx43QSeJq6MjdLaIXOWQHxoCqG3%2FVRM1sXG5PdAbpRS6n%2BAtj136ROtNbDafsrGcDJUzhX9E6Aq0efcZt4UqKV9iu2%2Fi%2FtkY4pAc%2BDzPmpqoSOTVI7y7j5vslYMfbDEQn5AUzGJgb2J%2FgZ%2F%2FpjTlj1hjZPbLfNX0NOdZRDdAW7ofVrJJ9ImrxQNmRKkyYyj60ddPK5x2mAB2BWL0i52zDx2tfwGqS8fXUZTlZXC%2Fo0tGQfmPqji1ggdrAkTawOavrhHvcr2HwyQdBwvKv73vhxWanZPAMzYSdQ6PUbEuFd8hQb%2Fw%2BdpB%2BjUcEMcaCPRJRpQ9BSc5lIN1s6hDDHDj6e9w85w%2FgTAFORnks5kPUGwuTEpZ9k9zQ4dzVAP6OumjnhIlydSS1nM%2F8dIpO8z6JKR6xxEuWT8RiedONQLB4dS%2B5f7QnGd8QT8j%2BdIy%2Fc1xsvcqLRJ%2Bw7I3Ayp8WUATFyBnUjtp1reksaq8jC4hNTIBjqlAaICqYlxy3ADwqOsEXvBh3orXkVmNTFcIxe3FlOtTBkQY%2F%2F5oip%2F1k9M0BIa28UGbfXPG2m7Qzu9RP96SSSZPQ8jM8ncPq%2B8uo6kqWQMw7OowzYB3iumCneK2DUG7JCxDYMI0x2C5T%2FQEjRLyR4eIKyA1Gl66tB4JD9pRgcwUi%2F%2Bju6WmowkqEU%2Blrezc%2FR%2BTWSKKiuCBTy2wC3y%2BQunjOxZeTdntg%3D%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=c52e78e30ea2e487e7fe3ddc5e5347e8880ee8016d96e8ae1996a4549d5682dd"
                  imageSize={36}
                />

                <Section className="mt-[16px] mb-[12px]">
                  <AutumnEmailButton href={scheduleLink} variant="primary" paddingVertical="8px" paddingHorizontal="14px">
                    Book a 15‑min check‑in
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

AutumnWeekOneCheckinEmail.PreviewProps = {
  firstName: 'Ava',
  scheduleLink: 'https://useautumn.com',
  docsUrl: 'https://useautumn.com',
  ycUrl: 'https://www.ycombinator.com/companies/autumn',
  productName: 'Autumn',
  companyAddress: 'Autumn Inc., San Francisco & London',
} as AutumnWeekOneCheckinEmailProps;

export default AutumnWeekOneCheckinEmail;


