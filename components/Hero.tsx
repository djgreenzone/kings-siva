import Image from "next/image";

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
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay: clear top -> teal hint -> deep black bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(10,74,84,0.34) 44%, rgba(0,0,0,0.97) 100%)",
        }}
      />

      {/* Gold V angling up from the bottom-center, fading seamlessly into the black */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "72%",
          zIndex: 1,
          backgroundImage: "url(/pattern-v-gold.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          opacity: 0.55,
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 22%, transparent 72%)",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 22%, transparent 72%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{ position: "relative", zIndex: 2, paddingTop: 110, paddingBottom: 70, display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* Logo as the hero mark */}
        <Image
          src="/logo.png"
          alt="King's Siva Academy"
          width={460}
          height={460}
          priority
          style={{ width: "min(360px, 80vw)", height: "auto" }}
        />
        <p
          style={{
            fontSize: "clamp(0.85rem, 2.4vw, 1.05rem)",
            maxWidth: 520,
            marginTop: 16,
            marginBottom: 34,
            color: "var(--cream)",
            opacity: 0.92,
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
