import type { Metadata } from "next";
import { LegalPage, Clause, Todo } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Competition Terms & Conditions",
  description:
    "Official terms and conditions for the Kings Siva Academy “Win a Trip to Samoa” giveaway: eligibility, entry, prizes and how the winner is drawn.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Competition Terms & Conditions | Kings Siva Academy",
    description:
      "Official terms for the Kings Siva Academy “Win a Trip to Samoa” giveaway.",
    url: "/terms",
    type: "article",
  },
};

export default function Terms() {
  return (
    <LegalPage
      title="Competition Terms & Conditions"
      subtitle={"King’s Siva Academy — “Win a Trip to Samoa” Giveaway"}
    >
      <Clause n="1" h="The Promoter">
        This promotion is run by King&rsquo;s Siva Academy (the
        &ldquo;Promoter&rdquo;), based in Queensland, Australia. Contact:{" "}
        <a href="mailto:info@kingsivaacademy.com" className="text-cyan">
          info@kingsivaacademy.com
        </a>
        .
      </Clause>

      <Clause n="2" h="How to Enter">
        To enter, complete the official entry form on this website with your name,
        email address and required details, and confirm you accept these terms.
        Entry is free. No purchase is necessary. Entries are collected via the
        Promoter&rsquo;s mailing list (Mailchimp). Only entries submitted through
        the official form will be accepted.
      </Clause>

      <Clause n="3" h="Entry Period">
        Entries open on 21 November 2026 and close at 11:59 PM AEST on 29 November
        2026. Entries received after the closing time will not be accepted.
      </Clause>

      <Clause n="4" h="Eligibility">
        The promotion is open only to residents of Brisbane, Queensland,
        Australia, who are 18 years of age or older at the time of entry.
        Employees, contractors and immediate family members of the Promoter,
        Samoa Beach Resort, and associated agencies are not eligible. One (1)
        entry per person; duplicate or automated entries will be disqualified.
      </Clause>

      <Clause n="5" h="Prizes">
        <strong className="text-gold">First Prize (1 winner):</strong> One (1)
        return flight to Samoa via Fiji Airways, plus three (3) nights&rsquo;
        accommodation at Samoa Beach Resort.
        <br />
        <br />
        <strong className="text-gold">Second Prize (2 winners):</strong> Each
        winner receives a complimentary four (4) night stay at Samoa Beach Resort
        in a Deluxe Oceanview King/Double/Twin room for two (2) adults.
        Inclusions: breakfast for up to 2 adults, Wi-Fi, a welcome coconut drink
        and use of non-motorized water equipment. Check-in 3:00 PM, check-out
        12:00 PM.
      </Clause>

      <Clause n="6" h="Prize Conditions">
        The prize must be booked and travel completed (the stay taken) by 31
        March 2027; accommodation vouchers are valid until that date. Vouchers are
        not redeemable for cash, are non-transferable, and resale is prohibited.
        An extra person is chargeable at AUD $80 per room, per night, payable by
        the winner. Lost, stolen or destroyed vouchers, or vouchers used without
        permission, will not be replaced. Flights, accommodation and travel dates
        are subject to availability and must be booked and taken within the
        validity period. Winners are responsible for all costs not expressly
        included in the prize (including transfers, meals other than those stated,
        travel insurance, visas and incidentals). Second-prize accommodation is
        redeemed by emailing{" "}
        <a href="mailto:Sales.Events@samoabeachresort.com" className="text-cyan">
          Sales.Events@samoabeachresort.com
        </a>
        .
      </Clause>

      <Clause n="7" h="The Draw">
        Winners will be drawn at random from all valid entries on 30 November
        2026 at a King&rsquo;s Siva Academy event.
      </Clause>

      <Clause n="8" h="Winner Notification">
        Winners will be notified by text message (SMS) or email using the details
        provided at entry, and may be announced at the event and on King&rsquo;s
        Siva Academy social channels.
      </Clause>

      <Clause n="9" h="Privacy">
        By entering, you consent to King&rsquo;s Siva Academy collecting and
        storing your details and adding you to its mailing list, as described in
        our{" "}
        <a href="/privacy" className="text-cyan" style={{ textDecoration: "underline" }}>
          Privacy Policy
        </a>
        . You may unsubscribe at any time.
      </Clause>

      <Clause n="10" h="General">
        The Promoter&rsquo;s decision is final and no correspondence will be
        entered into. The Promoter reserves the right to verify the validity of
        entries and to disqualify any entrant who tampers with the entry process
        or breaches these terms. If a prize is unavailable, the Promoter may
        substitute a prize of equal or greater value. To the extent permitted by
        law, the Promoter is not liable for any loss or damage arising from this
        promotion or the use of a prize. This promotion is not administered by or
        associated with Mailchimp, Meta, Instagram or Facebook. As the Promoter is
        based in Queensland, no trade-promotion permit is required.
      </Clause>
    </LegalPage>
  );
}
