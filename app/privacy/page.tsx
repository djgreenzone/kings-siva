import type { Metadata } from "next";
import { LegalPage, Clause, Todo } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Privacy Policy — King's Siva Academy",
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How King's Siva Academy collects, uses and protects your information."
    >
      <Clause n="1" h="Who we are">
        King&rsquo;s Siva Academy (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
        &ldquo;our&rdquo;) is based in Queensland, Australia. We are committed to
        protecting your privacy in accordance with the Privacy Act 1988 (Cth) and
        the Australian Privacy Principles (APPs). Contact us at{" "}
        <a href="mailto:info@kingsivaacademy.com" className="text-cyan">
          info@kingsivaacademy.com
        </a>
        .
      </Clause>

      <Clause n="2" h="Information we collect">
        We collect personal information you provide directly, including your name,
        email address and (optionally) your mobile number when you enter our
        giveaway or subscribe to our mailing list. When you use our website, we
        may also collect technical data such as your IP address, browser type and
        pages visited through standard analytics and cookies.
      </Clause>

      <Clause n="3" h="How we use your information">
        We use your information to administer and run the &ldquo;Win a Trip to
        Samoa&rdquo; giveaway, to contact winners, to send you news, offers and
        updates about King&rsquo;s Siva Academy (where you have opted in), and to
        improve our website and services. We will not use your information for a
        purpose unrelated to those for which it was collected without your
        consent.
      </Clause>

      <Clause n="4" h="Mailchimp & third-party services">
        Our mailing list and entry form are operated through Mailchimp (Intuit
        Inc.). When you submit the form, your details are stored in and processed
        by Mailchimp on our behalf. Mailchimp may store data outside Australia
        (including in the United States). By entering, you consent to this
        transfer. Mailchimp&rsquo;s handling of data is governed by its own
        privacy policy.
      </Clause>

      <Clause n="5" h="Disclosure">
        We do not sell your personal information. We may share limited details
        with our prize partner, Samoa Beach Resort, only as needed to fulfil a
        prize, and with service providers who help us operate the website and
        mailing list. We may disclose information where required by law.
      </Clause>

      <Clause n="6" h="Cookies">
        Our website may use cookies and similar technologies to remember
        preferences and measure traffic. You can disable cookies in your browser
        settings, though some features may not function as intended.
      </Clause>

      <Clause n="7" h="Security & retention">
        We take reasonable steps to protect your information from misuse, loss and
        unauthorised access. We retain personal information only for as long as
        needed for the purposes described, or as required by law.
      </Clause>

      <Clause n="8" h="Your rights">
        You may request access to, or correction of, the personal information we
        hold about you, and you may unsubscribe from our emails at any time using
        the link in any email or by contacting us. To make a request or a privacy
        complaint, contact us at{" "}
        <a href="mailto:info@kingsivaacademy.com" className="text-cyan">
          info@kingsivaacademy.com
        </a>
        . If you are not satisfied, you
        may contact the Office of the Australian Information Commissioner (OAIC).
      </Clause>

      <Clause n="9" h="Changes">
        We may update this Privacy Policy from time to time. The current version
        will always be available on this page with its &ldquo;last updated&rdquo;
        date.
      </Clause>
    </LegalPage>
  );
}
