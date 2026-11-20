import Image from "next/image";
import EntryForm from "./EntryForm";

function PrizeCard({
  badge,
  title,
  lines,
  highlight,
}: {
  badge: string;
  title: string;
  lines: string[];
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        flex: "1 1 320px",
        background: highlight
          ? "linear-gradient(160deg, rgba(232,198,90,0.14), rgba(14,94,99,0.4))"
          : "rgba(6,24,27,0.5)",
        border: `2px solid ${highlight ? "var(--gold)" : "rgba(76,212,230,0.35)"}`,
        borderRadius: 14,
        padding: "28px 24px",
      }}
    >
      <span
        className="display"
        style={{
          display: "inline-block",
          fontSize: "0.85rem",
          letterSpacing: "1.5px",
          color: highlight ? "var(--gold)" : "var(--cyan)",
          marginBottom: 10,
        }}
      >
        {badge}
      </span>
      <h3 className="display" style={{ fontSize: "1.9rem", color: "var(--cream)", marginBottom: 14 }}>
        {title}
      </h3>
      <ul style={{ listStyle: "none", display: "grid", gap: 8 }}>
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
    <section
      id="prizes"
      className="pattern"
      style={{
        position: "relative",
        background: "var(--teal-deep)",
        overflow: "hidden",
        borderTop: "5px solid var(--gold)",
      }}
    >
      {/* ---- Samoa background photo + teal overlay for legibility ---- */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: "url(/bg-samoa-sunset.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(8,42,46,0.80) 0%, rgba(14,94,99,0.66) 45%, rgba(6,24,27,0.95) 100%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 40, textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}>
          <p className="script" style={{ fontSize: "clamp(1.4rem,5vw,2.2rem)" }}>
            Win a Trip to
          </p>
          <h2 className="display" style={{ fontSize: "clamp(2.4rem,9vw,4.5rem)", color: "var(--gold)" }}>
            Samoa
          </h2>
          <p style={{ maxWidth: 560, margin: "14px auto 0", opacity: 0.9 }}>
            Enter below for your chance to win one of three prizes at Samoa Beach
            Resort.
          </p>

          {/* ---- Partnership lockup: King's Siva x Beautiful Samoa ---- */}
          <div style={{ marginTop: 28 }}>
            <p
              style={{
                fontSize: "0.72rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                opacity: 0.8,
                marginBottom: 12,
              }}
            >
              In partnership with
            </p>
            <div style={{ display: "inline-block" }}>
              <Image
                src="/partnership-lockup.png"
                alt="King's Siva Academy × Beautiful Samoa (Samoa Tourism Authority)"
                width={340}
                height={189}
                style={{
                  objectFit: "contain",
                  height: "auto",
                  width: "min(340px, 72vw)",
                  filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.4))",
                }}
                priority
              />
            </div>
          </div>
        </div>

        {/* ---- Prize cards ---- */}
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 56 }}>
          <PrizeCard
            highlight
            badge="1st Prize"
            title="Flights + 3 Nights in Samoa"
            lines={[
              "Return flights to Samoa",
              "3 nights at Samoa Beach Resort",
              "One lucky winner",
            ]}
          />
          <PrizeCard
            badge="2nd Prize — 2 Winners"
            title="4 Nights at Samoa Beach Resort"
            lines={[
              "Two winners — four nights each",
              "Deluxe Oceanview room for 2 adults",
              "Breakfast, Wi-Fi & welcome drink included",
            ]}
          />
        </div>

        {/* ---- Entry form (posts to /api/subscribe -> Mailchimp) ---- */}
        <div
          id="giveaway"
          style={{
            maxWidth: 560,
            margin: "0 auto",
            background: "rgba(6,24,27,0.72)",
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
