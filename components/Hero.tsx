export default function Hero() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* ---- Background video ----
          Drop your file at /public/hero.mp4 (and optional /public/hero-poster.jpg).
          Muted + playsInline + loop so it autoplays on mobile. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Teal gradient overlay for text legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(8,42,46,0.75) 0%, rgba(14,94,99,0.6) 45%, rgba(6,24,27,0.92) 100%)",
        }}
      />

      <div
        className="container"
        style={{ position: "relative", zIndex: 2, paddingTop: 90, paddingBottom: 60 }}
      >
        <p
          className="script"
          style={{ fontSize: "clamp(1.6rem, 6vw, 2.6rem)", marginBottom: 6 }}
        >
          Beautiful Samoa
        </p>
        <h1
          className="display"
          style={{
            fontSize: "clamp(2.8rem, 12vw, 6.5rem)",
            color: "var(--cream)",
            maxWidth: 900,
          }}
        >
          King&rsquo;s Siva <span className="text-gold">Academy</span>
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 3.5vw, 1.4rem)",
            maxWidth: 620,
            marginTop: 18,
            marginBottom: 34,
            color: "var(--cream)",
          }}
        >
          To teach, inspire &amp; empower the next generation of Samoans in
          Australia.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="#giveaway" className="btn btn-gold">
            Win a Trip to Samoa
          </a>
          <a
            href="#prizes"
            className="btn"
            style={{
              background: "transparent",
              border: "2px solid var(--cyan)",
              color: "var(--cyan)",
            }}
          >
            See the Prizes
          </a>
        </div>
      </div>
    </div>
  );
}
