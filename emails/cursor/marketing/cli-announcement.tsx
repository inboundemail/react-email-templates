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
import { cursorDesignSystem } from '../../../design-systems/cursor/cursor-design-system';
import { CursorEmailFooter } from '../components/CursorEmailFooter';

interface CursorCliAnnouncementEmailProps {
  firstName?: string;
  theme?: 'light' | 'dark';
  logoLightUrl?: string;
  logoDarkUrl?: string;
  cliImageUrl?: string;
  installUrl?: string;
  companyAddress?: string;
  supportEmail?: string;
  unsubscribeUrl?: string;
}

export const CursorCliAnnouncementEmail = ({
  firstName = '',
  theme = 'light',
  logoLightUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8DcdHq7HqXcX7IZuF2Sbl0cy6iEO5QAWfwCThsp4',
  logoDarkUrl = 'https://0o4pg1fpby.ufs.sh/f/RSbfEU0J8Dcd0IAm4ipXUAepfRY8WhTLzKS95uwHV47Jiavg',
  cliImageUrl = 'https://cursor.com/assets/images/cli-shipped.png',
  installUrl = 'https://cursor.com/install',
  companyAddress = 'Cursor, San Francisco',
  supportEmail = 'support@cursor.com',
  unsubscribeUrl = 'https://cursor.com/unsubscribe',
}: CursorCliAnnouncementEmailProps) => {
  const ds = cursorDesignSystem;
  const previewText = 'Use Cursor Agent from the CLI or headless anywhere.';
  const logoSrc = theme === 'dark' ? logoDarkUrl : logoLightUrl;

  return (
    <Html>
      <Head>
        <Font
          fontFamily="CursorGothic"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: ds.fonts.cursorGothic.urls.regularWoff2,
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="CursorGothic"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: ds.fonts.cursorGothic.urls.boldWoff2,
            format: 'woff2',
          }}
          fontWeight={700}
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body
          className="mx-auto my-auto px-2"
          style={{
            backgroundColor: ds.colors.background.outside,
            fontFamily:
              'CursorGothic, "CursorGothic Fallback", system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
          }}
        >
          <Container className="mx-auto my-[24px] max-w-[600px]">
            <Section
              className="rounded-[8px]"
              style={{
                backgroundColor: ds.card.backgroundColor,
                border: '1px solid #EDECE9',
              }}
            >
              <Section
                className="p-[18px]"
                style={{
                  fontFamily:
                    'CursorGothic, "CursorGothic Fallback", system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
                }}
              >
                <Section className="mb-[20px] text-center">
                  <Img
                    src={logoLightUrl}
                    width={150}
                    alt="Cursor logo"
                    className="mx-auto block"
                    style={{ display: 'block', height: 'auto' }}
                  />
                </Section>

                <Text className="m-0 mb-[12px] text-[14px]" style={{ color: ds.colors.text.primary }}>
                  {firstName ? `Hi ${firstName},` : 'Hi,'}
                </Text>

                <Text className="mt-0 mb-[12px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.secondary }}>
                  You can now use Cursor Agent from the CLI or headless in any environment.
                </Text>

                <Section
                  className="mb-[14px] rounded-[6px] border border-solid"
                  style={{
                    backgroundColor: ds.colors.card.hover,
                    borderColor: ds.colors.card.base,
                  }}
                >
                  <Text className="m-0 p-[12px] text-[12px] leading-[1.5]" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', color: ds.colors.text.primary }}>
                    curl https://cursor.com/install -fsS | bash
                  </Text>
                </Section>

                <Text className="mt-0 mb-[12px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.secondary }}>
                  If you're using Neovim, JetBrains, or other IDEs, you can now use the full power of Cursor Agent alongside your favorite tools.
                </Text>

                <Text className="mt-0 mb-[12px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.secondary }}>
                  The CLI works with any model as part of your Cursor subscription. You can now choose to use Cursor agent in the editor, or have multiple agents run in parallel in the terminal or remotely.
                </Text>

                <Section className="mb-[10px]">
                  <Img
                    src={cliImageUrl}
                    width={564}
                    alt="Cursor CLI interface"
                    className="mx-auto block rounded-[6px]"
                    style={{ display: 'block', height: 'auto' }}
                  />
                  <Text className="m-0 mt-[6px] text-center text-[12px]" style={{ color: ds.colors.text.secondary }}>
                    Cursor CLI interface
                  </Text>
                </Section>

                <Heading className="m-0 mb-[8px] text-[16px] font-semibold" style={{ color: ds.colors.text.primary }}>
                  What Cursor CLI can do:
                </Heading>
                <ul
                  style={{
                    paddingLeft: '18px',
                    marginTop: '0px',
                    marginBottom: '12px',
                    color: ds.colors.text.secondary,
                    fontSize: '14px',
                    lineHeight: '1.6',
                  }}
                >
                  <li>Choose from any top AI model or use Auto for speed and efficiency</li>
                  <li>Work with the same rules and context as the Cursor IDE</li>
                  <li>Connect external tools via MCP (Model Context Protocol)</li>
                  <li>Run headless in scripts to automate code reviews, generate docs, and more</li>
                  <li>Run it anywhere: GitHub Actions, scripts, other IDEs, or any CI system</li>
                </ul>

                <Text className="mt-0 mb-[12px] text-[14px] leading-[1.6]" style={{ color: ds.colors.text.secondary }}>
                  Try the CLI and let us know what features we should add.
                </Text>

                <Hr className="mx-0 my-[16px] w-full border border-solid" style={{ borderColor: ds.colors.card.base }} />

                <table role="presentation" style={{ width: 'auto', marginBottom: '8px' }}>
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: 'middle', paddingRight: '12px' }}>
                        <Img
                          src="https://www.cursor.com/cursor-logo.png"
                          width={32}
                          alt="Cursor logo"
                          style={{ display: 'block', height: 'auto' }}
                        />
                      </td>
                      <td style={{ verticalAlign: 'middle' }}>
                        <Text className="m-0 p-0 text-[13px] font-semibold" style={{ color: ds.colors.text.secondary }}>
                          Cursor
                        </Text>
                        <Text className="m-0 p-0 text-[12px]" style={{ color: 'rgba(38, 37, 30, 0.6)' }}>
                          The AI code editor
                        </Text>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <CursorEmailFooter
                  companyAddress={companyAddress}
                  supportEmail={supportEmail}
                  unsubscribeUrl={unsubscribeUrl}
                />
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

CursorCliAnnouncementEmail.PreviewProps = {
  firstName: 'Ava',
  theme: 'light',
} as CursorCliAnnouncementEmailProps;

export default CursorCliAnnouncementEmail;


