export function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main style={{ background: "var(--teal-dark)", minHeight: "100vh", padding: "60px 0" }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <a href="/" className="text-cyan" style={{ fontSize: "0.9rem" }}>
          &larr; Back to home
        </a>
        <h1
          className="display"
          style={{ fontSize: "clamp(2rem,7vw,3rem)", color: "var(--gold)", margin: "18px 0 6px" }}
        >
          {title}
        </h1>
        {subtitle && <p style={{ opacity: 0.7, marginBottom: 32 }}>{subtitle}</p>}
        <div style={{ display: "grid", gap: 22, fontSize: "0.98rem", opacity: 0.95 }}>
          {children}
        </div>
        <p style={{ marginTop: 40, fontSize: "0.8rem", opacity: 0.55 }}>
          Last updated:{" "}
          {new Date().toLocaleDateString("en-AU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          . Items highlighted in gold require confirmation before publishing.
        </p>
      </div>
    </main>
  );
}

export function Clause({
  n,
  h,
  children,
}: {
  n: string;
  h: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: 0 }}>
      <h2 className="display" style={{ fontSize: "1.2rem", color: "var(--cream)", marginBottom: 6 }}>
        {n}. {h}
      </h2>
      <div style={{ opacity: 0.9 }}>{children}</div>
    </section>
  );
}

export function Todo({ children }: { children: React.ReactNode }) {
  return (
    <mark
      style={{
        background: "rgba(232,198,90,0.18)",
        color: "var(--gold-light)",
        padding: "1px 6px",
        borderRadius: 4,
        fontStyle: "italic",
      }}
    >
      {children}
    </mark>
  );
}
