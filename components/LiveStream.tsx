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
          <a
            href={YT_WATCH}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ background: "#FF0000", color: "#fff", display: "inline-flex", alignItems: "center", gap: 12 }}
          >
            <svg width="30" height="21" viewBox="0 0 28 20" fill="none" aria-hidden="true">
              <path
                d="M27.4 3.12a3.5 3.5 0 0 0-2.46-2.48C22.77 0 14 0 14 0S5.23 0 3.06.64A3.5 3.5 0 0 0 .6 3.12 36.8 36.8 0 0 0 0 10a36.8 36.8 0 0 0 .6 6.88 3.5 3.5 0 0 0 2.46 2.48C5.23 20 14 20 14 20s8.77 0 10.94-.64a3.5 3.5 0 0 0 2.46-2.48A36.8 36.8 0 0 0 28 10a36.8 36.8 0 0 0-.6-6.88Z"
                fill="#fff"
              />
              <path d="M11.2 14.29 18.52 10 11.2 5.71v8.58Z" fill="#FF0000" />
            </svg>
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
