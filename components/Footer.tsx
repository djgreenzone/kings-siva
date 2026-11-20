export default function Footer() {
  return (
    <footer style={{ background: "var(--teal-dark)", padding: "48px 0 36px" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 18,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p className="display" style={{ fontSize: "1.2rem", color: "var(--cream)" }}>
            King&rsquo;s Siva Academy
          </p>
          <p style={{ fontSize: "0.85rem", opacity: 0.7, maxWidth: 420 }}>
            Teaching, inspiring &amp; empowering the next generation of Samoans in
            Australia.
          </p>
        </div>
        <nav style={{ display: "flex", gap: 18, fontSize: "0.9rem", flexWrap: "wrap" }}>
          <a href="#prizes" className="text-cyan">Prizes</a>
          <a href="#giveaway" className="text-cyan">Enter</a>
          <a href="/terms" className="text-cyan">Competition Terms</a>
          <a href="/privacy" className="text-cyan">Privacy</a>
          <a href="/terms-of-use" className="text-cyan">Terms of Use</a>
        </nav>
      </div>
      <div className="container" style={{ marginTop: 28 }}>
        <p style={{ fontSize: "0.75rem", opacity: 0.5 }}>
          © {new Date().getFullYear()} King&rsquo;s Siva Academy. Prizes provided
          in partnership with Samoa Beach Resort. Promotion open to Brisbane,
          QLD residents 18+.
        </p>
      </div>
    </footer>
  );
}
