import PatternBands from "./PatternBands";

export default function Hero() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* ---- Background video ---- */}
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

      {/* Teal gradient overlay for legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(8,42,46,0.72) 0%, rgba(14,94,99,0.55) 45%, rgba(6,24,27,0.96) 100%)",
        }}
      />

      {/* Gold tatau pattern bands down both edges (poster framing) */}
      <PatternBands />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: 110,
          paddingBottom: 70,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          className="display gold-metallic"
          style={{
            fontSize: "clamp(2.8rem, 12vw, 7rem)",
            maxWidth: 1000,
          }}
        >
          King&rsquo;s Siva Academy
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 3.5vw, 1.45rem)",
            maxWidth: 620,
            marginTop: 18,
            marginBottom: 38,
            color: "var(--cream)",
          }}
        >
          To teach, inspire &amp; empower the next generation of Samoans in
          Australia.
        </p>
        <a
          href="#giveaway"
          className="btn btn-gold"
          style={{ fontSize: "clamp(1.1rem, 4vw, 1.5rem)", padding: "22px 52px" }}
        >
          Win a Trip to Samoa
        </a>
      </div>
    </div>
  );
}
