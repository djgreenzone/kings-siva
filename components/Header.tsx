import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        padding: "18px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Replace /logo.png in /public with the King's Siva Academy logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src="/logo.png"
            alt="King's Siva Academy"
            width={54}
            height={54}
            priority
          />
          <span
            className="display"
            style={{ fontSize: "1.05rem", color: "var(--cream)" }}
          >
            King&rsquo;s Siva Academy
          </span>
        </a>
        <a href="#giveaway" className="btn btn-cyan" style={{ fontSize: "0.95rem", padding: "12px 22px" }}>
          Enter Now
        </a>
      </div>
    </header>
  );
}
