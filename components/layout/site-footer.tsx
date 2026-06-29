import { footerAssurance, footerLinks } from "@/config/home";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Paragraph } from "@/components/ui/paragraph";
import { TextLink } from "@/components/ui/text-link";

function SiteFooter() {
  return (
    <footer className="bg-surface py-64" aria-label="LUMERIA footer">
      <Container size="wide" className="space-y-40">
        <div className="grid gap-40 lg:grid-cols-[1.2fr_2fr]">
          <div className="space-y-16">
            <p className="font-serif text-4xl leading-none text-foreground">LUMERIA</p>
            <Paragraph tone="muted" className="max-w-[28rem]">
              Every Light Has A Story. Jewelry made for moments that stay.
            </Paragraph>
          </div>
          <div className="grid gap-32 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-16">
                <h2 className="font-sans text-xs font-medium uppercase tracking-[0.08em] text-foreground">
                  {group.title}
                </h2>
                <ul className="space-y-10">
                  {group.links.map((link) => (
                    <li key={link}>
                      <TextLink href="#">{link}</TextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-24 lg:flex-row lg:items-center lg:justify-between">
          <ul className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
            {footerAssurance.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-8 text-muted-foreground">
                <Icon aria-hidden="true" className="size-16" strokeWidth={1.4} />
                <span className="font-sans text-xs uppercase tracking-[0.08em]">{label}</span>
              </li>
            ))}
          </ul>
          <Paragraph size="caption" tone="muted">
            © 2026 LUMERIA. All rights reserved.
          </Paragraph>
        </div>
      </Container>
    </footer>
  );
}

export { SiteFooter };
