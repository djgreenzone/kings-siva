import Image from "next/image";

const YT_ID = "ZVBJbkWvWfw";
const YT_WATCH = "https://youtube.com/live/ZVBJbkWvWfw?feature=share";

export default function LiveStream() {
  return (
    <section
      id="livestream"
      style={{ position: "relative", background: "var(--teal-dark)", overflow: "hidden" }}
    >
      {/* subtle tatau texture behind */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: "url(/pattern-tatau-gold.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 960 }}>
        <div style={{ textAlign: "center", marginBottom: 26 }}>
          <span className="gold-banner" style={{ marginBottom: 14 }}>
            Live Now
          </span>
          <h2
            className="display"
            style={{ fontSize: "clamp(2rem, 7vw, 3.6rem)", color: "var(--cream)", marginTop: 14 }}
          >
            Watch <span className="text-gold">FIAFIA 26</span> Live
          </h2>
          <p style={{ opacity: 0.85, marginTop: 8 }}>
            King&rsquo;s Siva Academy — proudly presented by Samoa Tourism Authority.
          </p>
        </div>

        {/* Banner */}
        <Image
          src="/livestream-banner.jpg"
          alt="King's Siva Academy FIAFIA 26 Live Stream"
          width={1280}
          height={720}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 14,
            marginBottom: 22,
            border: "1px solid rgba(76,212,230,0.25)",
          }}
        />

        {/* Responsive 16:9 YouTube embed */}
        <div
          style={{
            position: "relative",
            paddingTop: "56.25%",
            borderRadius: 14,
            overflow: "hidden",
            border: "2px solid var(--gold)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${YT_ID}`}
            title="King's Siva Academy FIAFIA 26 Live Stream"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div style={{ textAlign: "center", marginTop: 24 }}>
          <a href={YT_WATCH} target="_blank" rel="noopener noreferrer" className="btn btn-cyan">
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
