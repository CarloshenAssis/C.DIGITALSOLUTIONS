import { ImageResponse } from "next/og";
import { brand } from "@/config/brand";

export const alt = `${brand.fullName} — ${brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OG image gerada no build. Mesma gramática do site: off-white, régua,
 * terminal azul e o símbolo em arcos. Sem foto, sem gradiente.
 */
export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4F2ED",
          color: "#161616",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="56" height="56" viewBox="0 0 100 100">
            <g fill="none" strokeLinecap="round">
              <circle cx="50" cy="50" r="40" stroke="#111318" strokeWidth="11"
                      strokeDasharray="201 51.3" transform="rotate(36 50 50)" />
              <circle cx="50" cy="50" r="27.5" stroke="#1E3A8A" strokeWidth="9"
                      strokeDasharray="124.4 48.4" transform="rotate(50 50 50)" />
              <circle cx="50" cy="50" r="16" stroke="#2F6FED" strokeWidth="7.5"
                      strokeDasharray="64.3 36.2" transform="rotate(64 50 50)" />
            </g>
            <rect x="74.5" y="19" width="16" height="16" rx="3.5" fill="#2F6FED"
                  transform="rotate(-12 82.5 27)" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: -1 }}>C.</span>
            <span style={{ fontSize: 13, letterSpacing: 4, color: "#5C5C5A" }}>
              DIGITAL SOLUTIONS
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3 }}>
            Tecnologia que resolve
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -3,
              color: "#5C5C5A",
            }}
          >
            problemas de negócio.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 10, height: 10, background: "#2457D6", borderRadius: 2 }} />
          <span style={{ fontSize: 17, letterSpacing: 3, color: "#5C5C5A" }}>
            PROBLEM FIRST. SOLUTION SECOND.
          </span>
        </div>
      </div>
    ),
    size,
  );
}
