import Image from "next/image";
import EntryForm from "./EntryForm";

function PrizeCard({
  badge,
  lines,
}: {
  badge: string;
  lines: string[];
}) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 640,
        margin: "0 auto",
        background: "rgba(6,24,27,0.55)",
        border: "1px solid rgba(76,212,230,0.3)",
        borderRadius: 14,
        padding: "22px 22px 24px",
        backdropFilter: "blur(2px)",
      }}
    >
      <span
        className="gold-banner"
        style={{ fontSize: "0.82rem", marginBottom: 14 }}
      >
        {badge}
      </span>
      <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
        {lines.map((l) => (
          <div
            key={l}
            className="display"
            style={{
              background: "rgba(6,24,27,0.85)",
              borderLeft: "4px solid var(--gold)",
              borderRadius: 8,
              padding: "12px 16px",
              fontSize: "clamp(0.95rem, 2.6vw, 1.15rem)",
              letterSpacing: "0.5px",
              color: "var(--cream)",
            }}
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Giveaway() {
  return (
    <section id="prizes" style={{ position: "relative", overflow: "hidden" }}>
      {/* ---- Bright Samoa beach background ---- */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: "url(/bg-samoa-trip.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay: dark at top (flows out of the hero) -> bright in the middle -> dark for the form */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(6,24,27,0.94) 0%, rgba(10,70,96,0.40) 26%, rgba(10,70,96,0.42) 52%, rgba(6,26,34,0.88) 100%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 70, paddingBottom: 90 }}>
        {/* ---- Text heading ---- */}
        <div style={{ textAlign: "center", marginBottom: 40, textShadow: "0 3px 16px rgba(0,0,0,0.6)" }}>
          <h2
            className="display"
            style={{ fontSize: "clamp(1.8rem, 7vw, 4rem)", color: "var(--cream)", lineHeight: 0.95 }}
          >
            Win a Trip to
          </h2>
          <h2
            className="display gold-metallic"
            style={{ fontSize: "clamp(4rem, 17vw, 10rem)", lineHeight: 0.9, marginTop: 2 }}
          >
            Samoa
          </h2>
        </div>

        {/* ---- Packages ---- */}
        <p
          className="display"
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            letterSpacing: "3px",
            color: "var(--cyan)",
            marginBottom: 22,
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          Packages Available
        </p>
        <div style={{ display: "grid", gap: 18, marginBottom: 40 }}>
          <PrizeCard
            badge="One Winner"
            lines={[
              "1 return flight to Samoa",
              "3 nights accommodation at Samoa Beach Resort",
            ]}
          />
          <PrizeCard
            badge="2 Winners"
            lines={[
              "4 nights accommodation at Samoa Beach Resort",
              "Deluxe Oceanview room for 2 adults",
              "Breakfast, Wi-Fi & welcome drink included",
            ]}
          />
        </div>

        {/* ---- Primary CTA ---- */}
        <div style={{ textAlign: "center", marginBottom: 14 }}>
          <a
            href="#giveaway"
            className="btn btn-gold"
            style={{ fontSize: "clamp(1.4rem, 5vw, 2rem)", padding: "22px 60px" }}
          >
            Enter to Win
          </a>
        </div>
        <p style={{ textAlign: "center", fontSize: "0.82rem", opacity: 0.9, marginBottom: 56 }}>
          Entries open 21 November and close 29 November 2026. Winner drawn 30
          November.{" "}
          <a href="/terms" className="text-cyan" style={{ textDecoration: "underline" }}>
            Full T&amp;Cs
          </a>
          .
        </p>

        {/* ---- Partners (smaller) ---- */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "2px", textTransform: "uppercase", opacity: 0.75, marginBottom: 12 }}>
            In partnership with
          </p>
          <Image
            src="/partnership-lockup.png"
            alt="King's Siva Academy × Beautiful Samoa"
            width={220}
            height={122}
            style={{ width: "min(190px, 52vw)", height: "auto", margin: "0 auto", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}
          />
          <p style={{ fontSize: "0.74rem", opacity: 0.8, marginTop: 12 }}>
            Prizes provided by Samoa Beach Resort &amp; Fiji Airways.
          </p>
        </div>

        {/* ---- Entry form (posts to /api/subscribe -> Mailchimp) ---- */}
        <div
          id="giveaway"
          style={{
            maxWidth: 560,
            margin: "0 auto",
            background: "rgba(6,24,27,0.85)",
            border: "2px solid var(--gold)",
            borderRadius: 16,
            padding: "32px 26px",
          }}
        >
          <h3
            className="display"
            style={{ fontSize: "1.8rem", textAlign: "center", color: "var(--cream)", marginBottom: 6 }}
          >
            Enter the Giveaway
          </h3>
          <p style={{ textAlign: "center", fontSize: "0.9rem", opacity: 0.85, marginBottom: 22 }}>
            One entry per person. Open to Brisbane residents 18+.
          </p>
          <EntryForm />
        </div>
      </div>
    </section>
  );
}
