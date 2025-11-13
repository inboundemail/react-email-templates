import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { temboDesignSystem } from "../../design-systems/tembo/tembo-design-system";
import { TemboEmailButton } from "./components/TemboEmailButton";
import { TemboEmailFooter } from "./components/TemboEmailFooter";

interface WeeklyReportProps {
  periodLabel?: string; // e.g. "Nov 3 — Nov 9"
  dashboardUrl?: string;
  automationsUrl?: string;
  companyAddress?: string;
  supportEmail?: string;
  ceoName?: string;
  ceoImageUrl?: string;
  ceoIntro?: string; // paragraph before charts
  ceoPostPara1?: string; // first paragraph after charts
  ceoPostPara2?: string; // second paragraph after charts
  insightsText?: string; // auto-generated if not provided
  metrics?: {
    agentsCreated: number;
    tasksCreated: number;
    prsOpened: number;
    automationsUsed: number;
  };
}

export const WeeklyReport = ({
  periodLabel = "This past week",
  dashboardUrl = "https://app.tembo.io/dashboard",
  automationsUrl = "https://app.tembo.io/automations",
  companyAddress = "Tembo, Inc.",
  supportEmail = "support@tembo.io",
  ceoName = "Ry Walker",
  ceoImageUrl = "https://pbs.twimg.com/profile_images/855914435994628097/_Fqg53Ck_400x400.jpg",
  ceoIntro = `Thanks for building with Tembo. We're seeing great momentum from teams using agents and automations to unblock workflows and ship faster.`,
  ceoPostPara1 = `If you are experimenting with new agent flows, we would love to hear how we can make the experience smoother—especially around task orchestration and PR workflows.`,
  ceoPostPara2 = `Your feedback directly shapes our roadmap. Keep it coming and we’ll keep removing the friction between ideas and production.`,
  insightsText,
  metrics = {
    agentsCreated: 7,
    tasksCreated: 128,
    prsOpened: 23,
    automationsUsed: 56,
  },
}: WeeklyReportProps) => {
  const ds = temboDesignSystem;
  const previewText = `Weekly Report · ${metrics.agentsCreated} agents · ${metrics.tasksCreated} tasks · ${metrics.prsOpened} PRs`;
  const computedInsights =
    insightsText ??
    `Insights about your usage: you created ${metrics.agentsCreated} agents and ${metrics.tasksCreated} tasks, opened ${metrics.prsOpened} PRs, and ran ${metrics.automationsUsed} automations.`;

  return (
    <Html>
      <Head>
        {/* Geist regular */}
        <Font
          fontFamily="Geist"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://assets.vercel.com/raw/upload/v1689188138/front/fonts/geist/Geist-Regular.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        {/* Geist semibold */}
        <Font
          fontFamily="Geist"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://assets.vercel.com/raw/upload/v1689188138/front/fonts/geist/Geist-SemiBold.woff2",
            format: "woff2",
          }}
          fontWeight={600}
          fontStyle="normal"
        />
        {/* Inter fallback regular */}
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrX2B4qb1w2wX7DPI.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        {/* Inter fallback semibold */}
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrX2B4qb1w2wX7DPI.woff2",
            format: "woff2",
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
            fontFamily: ds.fonts.sans,
          }}
        >
          <Container className="my-[32px] max-w-[600px]">
            {/* Parent card */}
            <Section
              className="border border-solid p-[16px]"
              style={{
                backgroundColor: ds.parentCard.backgroundColor,
                borderColor: ds.parentCard.border.color,
                borderRadius: ds.parentCard.borderRadius,
              }}
            >
              {/* Inner card */}
              <Section
                className="rounded-[10px] border border-solid bg-white p-[24px]"
                style={{
                  borderColor: ds.card.border.color,
                  borderRadius: ds.card.borderRadius,
                }}
              >
                {/* Logo */}
                <Img
                  src={ds.logo.wordmark.light}
                  alt="Tembo"
                  width={ds.logo.wordmark.width}
                  height="auto"
                  className="mb-[16px]"
                />

                {/* Title */}
                <Heading
                  className="mt-0 mb-[4px] p-0 text-[20px] font-semibold leading-[1.3]"
                  style={{ color: ds.colors.text.primary }}
                >
                  Weekly Report
                </Heading>
                <Text
                  className="mt-0 mb-[20px] text-[13px] leading-[1.6]"
                  style={{ color: ds.colors.text.default }}
                >
                  {periodLabel}
                </Text>

                {/* Insights paragraph */}
                <Text
                  className="mt-0 mb-[16px] text-[13px] leading-[1.6]"
                  style={{ color: ds.colors.text.default }}
                >
                  {computedInsights}
                </Text>

                {/* Metrics grid (2x2 using table for email compatibility) */}
                <table
                  style={{
                    width: "100%",
                    borderSpacing: 0,
                    borderCollapse: "separate",
                    marginBottom: 16,
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          width: "50%",
                          paddingRight: "12px",
                          paddingBottom: "12px",
                        }}
                      >
                        <Section
                          className="rounded-[10px] border border-solid bg-white p-[16px] text-center"
                          style={{ borderColor: ds.card.border.color }}
                        >
                          <Text
                            className="m-0 text-[22px] font-semibold leading-[1.2]"
                            style={{ color: ds.colors.text.primary }}
                          >
                            {metrics.agentsCreated}
                          </Text>
                          <Text
                            className="mt-[4px] mb-0 text-[13px] leading-[1.5]"
                            style={{ color: ds.colors.text.default }}
                          >
                            Agents created
                          </Text>
                        </Section>
                      </td>
                      <td
                        style={{
                          width: "50%",
                          paddingLeft: "12px",
                          paddingBottom: "12px",
                        }}
                      >
                        <Section
                          className="rounded-[10px] border border-solid bg-white p-[16px] text-center"
                          style={{ borderColor: ds.card.border.color }}
                        >
                          <Text
                            className="m-0 text-[22px] font-semibold leading-[1.2]"
                            style={{ color: ds.colors.text.primary }}
                          >
                            {metrics.tasksCreated}
                          </Text>
                          <Text
                            className="mt-[4px] mb-0 text-[13px] leading-[1.5]"
                            style={{ color: ds.colors.text.default }}
                          >
                            Tasks created
                          </Text>
                        </Section>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          width: "50%",
                          paddingRight: "12px",
                          paddingTop: "12px",
                        }}
                      >
                        <Section
                          className="rounded-[10px] border border-solid bg-white p-[16px] text-center"
                          style={{ borderColor: ds.card.border.color }}
                        >
                          <Text
                            className="m-0 text-[22px] font-semibold leading-[1.2]"
                            style={{ color: ds.colors.text.primary }}
                          >
                            {metrics.prsOpened}
                          </Text>
                          <Text
                            className="mt-[4px] mb-0 text-[13px] leading-[1.5]"
                            style={{ color: ds.colors.text.default }}
                          >
                            PRs opened
                          </Text>
                        </Section>
                      </td>
                      <td
                        style={{
                          width: "50%",
                          paddingLeft: "12px",
                          paddingTop: "12px",
                        }}
                      >
                        <Section
                          className="rounded-[10px] border border-solid bg-white p-[16px] text-center"
                          style={{ borderColor: ds.card.border.color }}
                        >
                          <Text
                            className="m-0 text-[22px] font-semibold leading-[1.2]"
                            style={{ color: ds.colors.text.primary }}
                          >
                            {metrics.automationsUsed}
                          </Text>
                          <Text
                            className="mt-[4px] mb-0 text-[13px] leading-[1.5]"
                            style={{ color: ds.colors.text.default }}
                          >
                            Automations used
                          </Text>
                        </Section>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Post-metrics CEO notes moved to bottom */}
                <Text
                  className="mt-[12px] mb-[12px] text-[13px] leading-[1.6]"
                  style={{ color: ds.colors.text.default }}
                >
                  {ceoPostPara1}
                </Text>
                <Text
                  className="mt-0 mb-[20px] text-[13px] leading-[1.6]"
                  style={{ color: ds.colors.text.default }}
                >
                  {ceoPostPara2}
                </Text>

                {/* CEO signature below paragraphs, above buttons */}
                <table
                  style={{
                    width: "100%",
                    marginTop: 12,
                    marginBottom: 12,
                    borderSpacing: 0,
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: "40px", verticalAlign: "top" }}>
                        <Img
                          src={ceoImageUrl}
                          alt="CEO portrait"
                          width="36"
                          height="36"
                          style={{
                            borderRadius: "9999px",
                            display: "block",
                          }}
                        />
                      </td>
                      <td style={{ paddingLeft: "8px", verticalAlign: "top" }}>
                        <Text
                          className="m-0 text-[13px] font-semibold leading-[1.4]"
                          style={{ color: ds.colors.text.primary }}
                        >
                          Message from the CEO
                        </Text>
                        <Text
                          className="m-0 text-[13px] leading-[1.6]"
                          style={{ color: ds.colors.text.default }}
                        >
                          {ceoIntro} <br />
                          <span
                            className="font-semibold"
                            style={{ color: ds.colors.text.primary }}
                          >
                            — {ceoName}, CEO
                          </span>
                        </Text>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* CTA buttons centered at bottom */}
                <Section
                  className="mt-[20px] mb-[12px]"
                  style={{ textAlign: "center" }}
                >
                  <TemboEmailButton
                    href={dashboardUrl}
                    variant="tertiary"
                    paddingVertical="8px"
                    paddingHorizontal="12px"
                  >
                    View dashboard
                  </TemboEmailButton>
                  <span
                    style={{ display: "inline-block", width: "12px" }}
                  ></span>
                  <TemboEmailButton
                    href={automationsUrl}
                    variant="tertiary"
                    paddingVertical="8px"
                    paddingHorizontal="12px"
                  >
                    Manage automations
                  </TemboEmailButton>
                </Section>

                {/* Footer */}
                <TemboEmailFooter
                  companyAddress={companyAddress}
                  supportEmail={supportEmail}
                  className="mt-[28px] mb-0 text-[11px]"
                />
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

WeeklyReport.PreviewProps = {
  periodLabel: "Nov 3 — Nov 9",
  dashboardUrl: "https://app.tembo.io/dashboard",
  automationsUrl: "https://app.tembo.io/automations",
  companyAddress: "Tembo, Inc.",
  supportEmail: "support@tembo.io",
  ceoName: "Ry Walker",
  ceoImageUrl:
    "https://pbs.twimg.com/profile_images/855914435994628097/_Fqg53Ck_400x400.jpg",
  ceoIntro:
    "Thanks for building with Tembo. We're seeing great momentum from teams using agents and automations to unblock workflows and ship faster.",
  ceoPostPara1:
    "If you are experimenting with new agent flows, we would love to hear how we can make the experience smoother—especially around task orchestration and PR workflows.",
  ceoPostPara2:
    "Your feedback directly shapes our roadmap. Keep it coming and we’ll keep removing the friction between ideas and production.",
  metrics: {
    agentsCreated: 7,
    tasksCreated: 128,
    prsOpened: 23,
    automationsUsed: 56,
  },
} as WeeklyReportProps;

export default WeeklyReport;
