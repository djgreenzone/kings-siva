import Image from "next/image";
import EntryForm from "./EntryForm";

function PrizeCard({
  badge,
  title,
  lines,
}: {
  badge: string;
  title: string;
  lines: string[];
}) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 680,
        margin: "0 auto",
        background: "rgba(6,24,27,0.72)",
        border: "1px solid rgba(76,212,230,0.35)",
        borderLeft: "5px solid var(--gold)",
        borderRadius: 12,
        padding: "22px 26px",
        backdropFilter: "blur(2px)",
      }}
    >
      <span
        className="display"
        style={{
          display: "inline-block",
          fontSize: "0.85rem",
          letterSpacing: "1.5px",
          color: "var(--gold)",
          marginBottom: 8,
        }}
      >
        {badge}
      </span>
      <h3 className="display" style={{ fontSize: "1.5rem", color: "var(--cream)", marginBottom: 10 }}>
        {title}
      </h3>
      <ul style={{ listStyle: "none", display: "grid", gap: 6 }}>
        {lines.map((l) => (
          <li key={l} style={{ fontSize: "0.98rem", color: "var(--cream)", opacity: 0.92 }}>
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
      {/* ---- Bright Samoa beach background (fixed = parallax feel) ---- */}
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
      {/* Lighter overlay so the turquoise stays bright */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(10,70,96,0.45) 0%, rgba(8,42,52,0.68) 55%, rgba(6,26,34,0.82) 100%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 80, paddingBottom: 90 }}>
        {/* ---- Poster-style heading ---- */}
        <div style={{ textAlign: "center", marginBottom: 34, textShadow: "0 3px 16px rgba(0,0,0,0.55)" }}>
          <h2
            className="display"
            style={{ fontSize: "clamp(3rem, 13vw, 8rem)", color: "var(--cream)", lineHeight: 0.92 }}
          >
            Win a Trip to
          </h2>
          <div style={{ marginTop: 10 }}>
            <Image
              src="/beautiful-samoa.png"
              alt="Beautiful Samoa"
              width={520}
              height={300}
              style={{ width: "min(520px, 82vw)", height: "auto", margin: "0 auto", display: "block" }}
              priority
            />
          </div>
        </div>

        {/* ---- Prize boxes, stacked ---- */}
        <div style={{ display: "grid", gap: 16, marginBottom: 36 }}>
          <PrizeCard
            badge="1st Prize"
            title="Flights + 3 Nights in Samoa"
            lines={[
              "1 return flight to Samoa via Fiji Airways",
              "3 nights accommodation at Samoa Beach Resort",
            ]}
          />
          <PrizeCard
            badge="2nd Prize — 2 Winners"
            title="4 Nights at Samoa Beach Resort"
            lines={[
              "Two winners — four nights accommodation each",
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
        <p style={{ textAlign: "center", fontSize: "0.82rem", opacity: 0.85, marginBottom: 54 }}>
          Entries open 21 November and close 29 November 2026. Winner drawn 30
          November.{" "}
          <a href="/terms" className="text-cyan" style={{ textDecoration: "underline" }}>
            Full T&amp;Cs
          </a>
          .
        </p>

        {/* ---- Partners ---- */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", opacity: 0.75, marginBottom: 14 }}>
            In partnership with
          </p>
          <Image
            src="/partnership-lockup.png"
            alt="King's Siva Academy × Beautiful Samoa"
            width={320}
            height={178}
            style={{ width: "min(300px, 70vw)", height: "auto", margin: "0 auto", filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.4))" }}
          />
          <p style={{ fontSize: "0.78rem", opacity: 0.8, marginTop: 14 }}>
            Prizes provided by Samoa Beach Resort &amp; Fiji Airways.
          </p>
        </div>

        {/* ---- Entry form (posts to /api/subscribe -> Mailchimp) ---- */}
        <div
          id="giveaway"
          style={{
            maxWidth: 560,
            margin: "0 auto",
            background: "rgba(6,24,27,0.82)",
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
