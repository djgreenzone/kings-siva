const YT_ID = "ZVBJbkWvWfw";
const YT_WATCH = "https://youtube.com/live/ZVBJbkWvWfw?feature=share";

export default function LiveStream() {
  return (
    <section
      id="livestream"
      style={{ position: "relative", background: "#000", overflow: "hidden", padding: "80px 0" }}
    >
      {/* White tatau pattern, faint, shown only in the middle (fades to black at the edges) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: "url(/pattern-tatau-white.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
          WebkitMaskImage: "radial-gradient(ellipse 72% 62% at center, black 18%, transparent 78%)",
          maskImage: "radial-gradient(ellipse 72% 62% at center, black 18%, transparent 78%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 960 }}>
        <div style={{ textAlign: "center", marginBottom: 26 }}>
          <h2 className="display" style={{ fontSize: "clamp(2rem, 7vw, 3.6rem)", color: "var(--cream)" }}>
            Watch <span className="gold-metallic">FIAFIA 26</span> Live
          </h2>
          <p style={{ opacity: 0.8, marginTop: 8 }}>
            King&rsquo;s Siva Academy — proudly presented by Samoa Tourism Authority.
          </p>
        </div>

        {/* Responsive 16:9 YouTube embed */}
        <div
          style={{
            position: "relative",
            paddingTop: "56.25%",
            borderRadius: 14,
            overflow: "hidden",
            border: "2px solid var(--gold)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
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
