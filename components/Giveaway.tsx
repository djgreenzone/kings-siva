import Image from "next/image";
import EntryForm from "./EntryForm";

type IconName = "gift" | "plane" | "bed" | "key" | "coffee";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { flexShrink: 0 },
    "aria-hidden": true,
  };
  switch (name) {
    case "gift":
      return (
        <svg {...p}>
          <rect x="3" y="8" width="18" height="4" rx="1" />
          <path d="M12 8v13" />
          <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8" />
          <path d="M16.5 8a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8" />
        </svg>
      );
    case "plane":
      return (
        <svg {...p}>
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
      );
    case "bed":
      return (
        <svg {...p}>
          <path d="M2 4v16" />
          <path d="M2 8h18a2 2 0 0 1 2 2v10" />
          <path d="M2 17h20" />
          <path d="M6 8v9" />
        </svg>
      );
    case "key":
      return (
        <svg {...p}>
          <circle cx="7.5" cy="15.5" r="5.5" />
          <path d="m21 2-9.6 9.6" />
          <path d="m15.5 7.5 3 3L22 7l-3-3" />
        </svg>
      );
    case "coffee":
      return (
        <svg {...p}>
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      );
  }
}

function PkgCol({ badge, items }: { badge: string; items: { icon: IconName; text: string }[] }) {
  return (
    <div className="pkg-col">
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <Icon name="gift" size={34} />
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "0.78rem",
          letterSpacing: "3.5px",
          textTransform: "uppercase",
          color: "var(--gold)",
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        {badge}
      </p>
      <ul style={{ listStyle: "none", display: "grid", gap: 18 }}>
        {items.map((it) => (
          <li key={it.text} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
            <span style={{ marginTop: 1 }}>
              <Icon name={it.icon} />
            </span>
            <span
              style={{ fontFamily: "var(--font-body)", fontSize: "1.02rem", color: "var(--cream)", lineHeight: 1.45 }}
            >
              {it.text}
            </span>
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
          <h2
            className="display"
            style={{ fontSize: "clamp(5rem, 23vw, 10rem)", lineHeight: 0.9, marginTop: 2, color: "var(--gold)" }}
          >
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
        <div className="pkg-panel">
          <PkgCol
            badge="One Winner"
            items={[
              { icon: "plane", text: "1 return flight to Samoa" },
              { icon: "bed", text: "3 nights at Samoa Beach Resort" },
              { icon: "key", text: "Deluxe Oceanview room for 2 adults" },
              { icon: "coffee", text: "Breakfast, Wi-Fi & welcome drink included" },
            ]}
          />
          <PkgCol
            badge="2 Winners"
            items={[
              { icon: "bed", text: "4 nights at Samoa Beach Resort" },
              { icon: "key", text: "Deluxe Oceanview room for 2 adults" },
              { icon: "coffee", text: "Breakfast, Wi-Fi & welcome drink included" },
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
