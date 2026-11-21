/**
 * Gold V-pattern down the left & right edges — the dominant motif from the
 * FIAFIA 26 posters. Mirrored so each side angles inward.
 */
export default function PatternBands({
  width = "clamp(34px, 9vw, 90px)",
  opacity = 0.5,
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
    backgroundImage: "url(/pattern-v-gold.png)",
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
