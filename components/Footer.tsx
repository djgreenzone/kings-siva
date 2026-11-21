import Image from "next/image";

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
        <div
          style={{
            marginTop: 30,
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "0.75rem", opacity: 0.5, maxWidth: 560 }}>
            © {new Date().getFullYear()} King&rsquo;s Siva Academy. Prizes provided
            in partnership with Samoa Beach Resort &amp; Fiji Airways. Promotion
            open to Brisbane, QLD residents 18+.
          </p>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <a
              href="https://www.instagram.com/kingssivaacademy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="King's Siva Academy on Instagram"
              className="text-cyan"
              style={{ display: "inline-flex" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.67.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.34 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.38 5.86 5.86 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0z" />
                <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4z" />
                <circle cx="18.41" cy="5.59" r="1.44" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/kingssivaacademy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="King's Siva Academy on Facebook"
              className="text-cyan"
              style={{ display: "inline-flex" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
