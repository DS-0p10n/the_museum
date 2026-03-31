import React from "react";

const scatterElements = [
  { symbol: "🌸", top: "5%", left: "10%", rotation: 12, size: "3rem" },
  { symbol: "🌿", top: "15%", left: "80%", rotation: -25, size: "4rem" },
  { symbol: "🌷", top: "40%", left: "5%", rotation: -10, size: "2.5rem" },
  { symbol: "🌼", top: "60%", left: "85%", rotation: 45, size: "3.5rem" },
  { symbol: "🌺", top: "80%", left: "12%", rotation: -15, size: "4rem" },
  { symbol: "🌿", top: "35%", left: "90%", rotation: 15, size: "3rem" },
  { symbol: "💮", top: "10%", left: "25%", rotation: 5, size: "2rem" },
  { symbol: "🌻", top: "85%", left: "75%", rotation: -30, size: "4.5rem" },
  { symbol: "🍂", top: "5%", left: "60%", rotation: 40, size: "2.5rem" },
  { symbol: "🌸", top: "75%", left: "30%", rotation: -5, size: "2.5rem" },
  { symbol: "🌷", top: "25%", left: "15%", rotation: 20, size: "3.5rem" },
  { symbol: "🌿", top: "90%", left: "50%", rotation: 60, size: "3rem" },
  { symbol: "🌼", top: "45%", left: "75%", rotation: -15, size: "2rem" },
  { symbol: "💮", top: "70%", left: "90%", rotation: -8, size: "2.5rem" },
  { symbol: "🌺", top: "20%", left: "70%", rotation: 35, size: "3.5rem" },
  { symbol: "🌸", top: "55%", left: "20%", rotation: 10, size: "3rem" },
  { symbol: "🍂", top: "40%", left: "35%", rotation: -20, size: "2rem" },
  { symbol: "🌷", top: "95%", left: "85%", rotation: 5, size: "2.5rem" },
  { symbol: "🌿", top: "65%", left: "5%", rotation: -45, size: "4rem" },
  { symbol: "🌻", top: "15%", left: "45%", rotation: 18, size: "3rem" },
];

export default function FlowerScatter() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden", // ensures they don't cause scrollbars
        zIndex: 0,
        opacity: 0.65, // Soften the entire array so they blend like pressed paper
      }}
    >
      {scatterElements.map((el, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: el.top,
            left: el.left,
            fontSize: el.size,
            transform: `rotate(${el.rotation}deg)`,
            userSelect: "none",
            filter: "saturate(0.55) contrast(0.85) sepia(0.2)",
            opacity: 0.6 + (i % 3) * 0.15, // Pseudo-random to avoid hydration mismatch
          }}
        >
          {el.symbol}
        </span>
      ))}
    </div>
  );
}
