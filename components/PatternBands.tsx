/**
 * Vertical gold tatau pattern bands down the left & right edges —
 * the signature framing from the FIAFIA 26 / Measina posters.
 */
export default function PatternBands({
  width = "clamp(30px, 8vw, 72px)",
  opacity = 0.55,
}: {
  width?: string;
  opacity?: number;
}) {
  const band = (side: "left" | "right"): React.CSSProperties => ({
    position: "absolute",
    top: 0,
    bottom: 0,
    [side]: 0,
    width,
    backgroundImage: "url(/pattern-tatau-gold.png)",
    backgroundSize: "cover",
    backgroundPosition: side === "left" ? "left center" : "right center",
    opacity,
    zIndex: 1,
    pointerEvents: "none",
  });
  return (
    <>
      <div style={band("left")} aria-hidden="true" />
      <div style={band("right")} aria-hidden="true" />
    </>
  );
}
