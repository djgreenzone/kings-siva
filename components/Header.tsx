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
        padding: "22px 0",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {/* Logo only — King's Siva Academy */}
        <a href="/" aria-label="King's Siva Academy">
          <Image src="/logo.png" alt="King's Siva Academy" width={64} height={64} priority />
        </a>
      </div>
    </header>
  );
}
