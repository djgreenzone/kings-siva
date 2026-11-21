import type { Metadata } from "next";
import { LegalPage, Clause, Todo } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Website Terms of Use",
  description:
    "The terms that govern your use of the Kings Siva Academy website.",
  alternates: { canonical: "/terms-of-use" },
  robots: { index: false, follow: true },
};

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Website Terms of Use"
      subtitle="The terms that govern your use of this website."
    >
      <Clause n="1" h="Acceptance">
        By accessing or using this website, you agree to these Terms of Use. If
        you do not agree, please do not use the site. This website is operated by
        King&rsquo;s Siva Academy, based in Queensland, Australia.
      </Clause>

      <Clause n="2" h="Use of the site">
        You may use this website for lawful personal purposes only. You agree not
        to misuse the site, attempt to gain unauthorised access, introduce
        malicious code, or interfere with its normal operation or security.
      </Clause>

      <Clause n="3" h="Intellectual property">
        All content on this website — including logos, text, graphics, imagery and
        the King&rsquo;s Siva Academy and Beautiful Samoa (Samoa Tourism
        Authority) brand marks — is owned by King&rsquo;s Siva Academy or its
        partners and is protected by copyright and trademark law. You may not
        copy, reproduce or redistribute it without prior written permission.
      </Clause>

      <Clause n="4" h="The giveaway">
        Our &ldquo;Win a Trip to Samoa&rdquo; giveaway is governed by its own{" "}
        <a href="/terms" className="text-cyan" style={{ textDecoration: "underline" }}>
          Competition Terms &amp; Conditions
        </a>
        , which apply in addition to these Terms of Use.
      </Clause>

      <Clause n="5" h="Third-party links & services">
        This website may link to or integrate third-party services (including
        Mailchimp and our prize partner, Samoa Beach Resort). We are not
        responsible for the content, policies or practices of third-party
        websites or services.
      </Clause>

      <Clause n="6" h="Disclaimer">
        This website is provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis. To the extent permitted by law, we make no
        warranties about the accuracy, completeness or availability of the site
        and exclude liability for any loss or damage arising from its use. Nothing
        in these terms excludes rights you have under the Australian Consumer Law.
      </Clause>

      <Clause n="7" h="Privacy">
        Your use of the site is also governed by our{" "}
        <a href="/privacy" className="text-cyan" style={{ textDecoration: "underline" }}>
          Privacy Policy
        </a>
        .
      </Clause>

      <Clause n="8" h="Changes & governing law">
        We may update these Terms of Use at any time; the current version will
        always appear on this page. These terms are governed by the laws of
        Queensland, Australia. Contact us at{" "}
        <a href="mailto:info@kingsivaacademy.com" className="text-cyan">
          info@kingsivaacademy.com
        </a>
        .
      </Clause>
    </LegalPage>
  );
}
