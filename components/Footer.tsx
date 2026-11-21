import Image from "next/image";
import PatternBands from "./PatternBands";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, var(--teal-dark) 0%, #020a0c 100%)",
        padding: "56px clamp(20px, 5vw, 64px) 40px",
      }}
    >
      {/* Gold V-pattern edges */}
      <PatternBands opacity={0.45} />

      <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Image src="/logo.png" alt="King's Siva Academy" width={72} height={72} style={{ width: 64, height: "auto" }} />
            <p style={{ fontSize: "0.85rem", opacity: 0.7, maxWidth: 380 }}>
              Teaching, inspiring &amp; empowering the next generation of Samoans
              in Australia.
            </p>
          </div>
          <nav style={{ display: "flex", gap: 18, fontSize: "0.9rem", flexWrap: "wrap" }}>
            <a href="/#livestream" className="text-cyan">Live Stream</a>
            <a href="/#prizes" className="text-cyan">Prizes</a>
            <a href="/#giveaway" className="text-cyan">Enter</a>
            <a href="/terms" className="text-cyan">Competition Terms</a>
            <a href="/privacy" className="text-cyan">Privacy</a>
            <a href="/terms-of-use" className="text-cyan">Terms of Use</a>
          </nav>
        </div>
        <div style={{ marginTop: 30 }}>
          <p style={{ fontSize: "0.75rem", opacity: 0.5 }}>
            © {new Date().getFullYear()} King&rsquo;s Siva Academy. Prizes provided
            in partnership with Samoa Beach Resort &amp; Fiji Airways. Promotion
            open to Brisbane, QLD residents 18+.
          </p>
        </div>
      </div>
    </footer>
  );
}
