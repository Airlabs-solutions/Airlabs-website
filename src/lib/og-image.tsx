import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function shareImage(title: string) {
  const titleSize = title.length > 42 ? 58 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A1F2E",
          color: "#FAFAFA",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              background: "#429AD6",
              marginRight: 16,
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 3,
              color: "#B3D7EF",
            }}
          >
            AIRLABS SOLUTIONS
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: titleSize,
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: -1.5,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#81BCE4" }}>
          airlabss.com
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
