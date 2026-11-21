import Image from "next/image";
import EntryForm from "./EntryForm";

function PrizeCard({ badge, lines }: { badge: string; lines: string[] }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 580,
        margin: "0 auto",
        background: "linear-gradient(165deg, rgba(11,46,52,0.96), rgba(4,16,19,0.96))",
        border: "1px solid rgba(232,198,90,0.45)",
        borderRadius: 20,
        padding: "30px 26px 28px",
        boxShadow: "0 14px 44px rgba(0,0,0,0.45)",
        textAlign: "center",
      }}
    >
      <span
        className="display"
        style={{
          display: "inline-block",
          background: "linear-gradient(180deg, var(--gold-light), var(--gold-deep))",
          color: "var(--ink)",
          padding: "9px 26px",
          borderRadius: 999,
          fontSize: "1rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
          boxShadow: "0 4px 16px rgba(200,151,46,0.4)",
        }}
      >
        {badge}
      </span>
      <ul style={{ listStyle: "none", display: "grid", gap: 14, marginTop: 22 }}>
        {lines.map((l) => (
          <li
            key={l}
            className="display"
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
              letterSpacing: "0.5px",
              color: "var(--cream)",
              lineHeight: 1.15,
            }}
          >
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Giveaway() {
  return (
    <section id="prizes" style={{ position: "relative", overflow: "hidden" }}>
      {/* ---- Parallax Samoa beach background ---- */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: "url(/bg-samoa-trip.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.32) 0%, rgba(10,74,84,0.40) 46%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 76, paddingBottom: 90 }}>
        {/* ---- Heading ---- */}
        <div style={{ textAlign: "center", marginBottom: 26, textShadow: "0 3px 16px rgba(0,0,0,0.6)" }}>
          <h2 className="display" style={{ fontSize: "clamp(1.8rem, 7vw, 4rem)", color: "var(--cream)", lineHeight: 0.95 }}>
            Win a Trip to
          </h2>
          <h2 className="display gold-metallic" style={{ fontSize: "clamp(4rem, 17vw, 10rem)", lineHeight: 0.9, marginTop: 2 }}>
            Samoa
          </h2>
        </div>

        {/* ---- Partners (under the heading) ---- */}
        <div style={{ textAlign: "center", marginBottom: 46 }}>
          <p style={{ fontSize: "0.66rem", letterSpacing: "2px", textTransform: "uppercase", opacity: 0.8, marginBottom: 12 }}>
            In partnership with
          </p>
          <Image
            src="/partnership-lockup.png"
            alt="King's Siva Academy × Beautiful Samoa"
            width={220}
            height={122}
            style={{ width: "min(190px, 52vw)", height: "auto", margin: "0 auto", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}
          />
        </div>

        {/* ---- Packages ---- */}
        <p
          className="display"
          style={{ textAlign: "center", fontSize: "0.9rem", letterSpacing: "3px", color: "var(--cyan)", marginBottom: 22, textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
        >
          Packages Available
        </p>
        <div style={{ display: "grid", gap: 20, marginBottom: 44 }}>
          <PrizeCard
            badge="One Winner"
            lines={["1 return flight to Samoa", "3 nights at Samoa Beach Resort"]}
          />
          <PrizeCard
            badge="2 Winners"
            lines={[
              "4 nights at Samoa Beach Resort",
              "Deluxe Oceanview room for 2 adults",
              "Breakfast, Wi-Fi & welcome drink included",
            ]}
          />
        </div>

        {/* ---- CTA + Beautiful Samoa logo ---- */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <a href="#giveaway" className="btn btn-gold" style={{ fontSize: "clamp(1.4rem, 5vw, 2rem)", padding: "22px 60px" }}>
            Enter to Win
          </a>
          <div style={{ marginTop: 20 }}>
            <Image
              src="/beautiful-samoa.png"
              alt="Beautiful Samoa"
              width={200}
              height={116}
              style={{ width: "min(150px, 42vw)", height: "auto", margin: "0 auto", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.45))" }}
            />
          </div>
        </div>

        {/* ---- Entry form (posts to /api/subscribe -> Mailchimp) ---- */}
        <div
          id="giveaway"
          style={{
            maxWidth: 560,
            margin: "0 auto",
            background: "rgba(6,24,27,0.86)",
            border: "2px solid var(--gold)",
            borderRadius: 24,
            padding: "36px 30px",
          }}
        >
          <h3 className="display" style={{ fontSize: "1.8rem", textAlign: "center", color: "var(--cream)", marginBottom: 6 }}>
            Enter the Giveaway
          </h3>
          <p style={{ textAlign: "center", fontSize: "0.9rem", opacity: 0.85, marginBottom: 6 }}>
            One entry per person. Open to Brisbane residents 18+.
          </p>
          <p style={{ textAlign: "center", fontSize: "0.82rem", opacity: 0.75, marginBottom: 22 }}>
            Entries open 21 November and close 29 November 2026. Winner drawn 30
            November.{" "}
            <a href="/terms" className="text-cyan" style={{ textDecoration: "underline" }}>
              Full T&amp;Cs
            </a>
            .
          </p>
          <EntryForm />
        </div>
      </div>
    </section>
  );
}
