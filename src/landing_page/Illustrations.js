import React from "react";

/* ==========================================================================
   Illustration system — every visual in the app is drawn here, no raster
   images anywhere. Keeps one consistent hand-drawn "terminal" language:
   a framed panel with a mono header + a chart/graphic body.
   ========================================================================== */

const TONES = {
  accent: "var(--accent)",
  coral: "var(--accent-2)",
};

function Frame({ label, tone = "accent", height = 220, children }) {
  const color = TONES[tone] || tone;
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: "3px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.7rem 1rem",
          borderBottom: "1px solid var(--line)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--text-faint)",
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: color, display: "inline-block" }} />
        {label}
      </div>
      <svg viewBox={`0 0 400 ${height}`} width="100%" height={height} preserveAspectRatio="none">
        {children}
      </svg>
    </div>
  );
}

/* Candlestick datasets — a few fixed variants selected by seed */
const CANDLE_SETS = [
  [40,60,35,70,50,80,45,90,65,95,55,100,70,110,60,120,80,115,90,130],
  [90,70,100,60,110,55,95,75,120,65,105,85,130,80,115,100,125,95,140,110],
  [50,80,45,95,60,85,75,105,70,120,90,100,110,95,125,115,105,130,120,140],
];

export function CandlePanel({ label = "MARKET", tone = "accent", seed = 0, height = 220 }) {
  const data = CANDLE_SETS[seed % CANDLE_SETS.length];
  const color = TONES[tone] || tone;
  const w = 400 / data.length;
  const max = Math.max(...data);
  const scale = (height - 40) / max;

  return (
    <Frame label={label} tone={tone} height={height}>
      {data.map((v, i) => {
        const barH = v * scale;
        const x = i * w + w * 0.25;
        const y = height - 20 - barH;
        const up = i % 3 !== 0;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={w * 0.5}
            height={Math.max(barH, 3)}
            fill={up ? color : "var(--text-faint)"}
            opacity={up ? 0.9 : 0.5}
            rx="1"
          />
        );
      })}
    </Frame>
  );
}

const AREA_SETS = [
  "M0,160 C40,150 80,140 120,120 C160,100 200,110 240,80 C280,55 320,60 360,30 L400,20",
  "M0,140 C50,130 90,150 130,110 C170,80 210,95 250,60 C290,40 330,50 360,20 L400,10",
];

export function AreaPanel({ label = "GROWTH", tone = "accent", seed = 0, height = 220 }) {
  const d = AREA_SETS[seed % AREA_SETS.length];
  const color = TONES[tone] || tone;
  return (
    <Frame label={label} tone={tone} height={height}>
      <defs>
        <linearGradient id={`grad-${seed}-${tone}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L400,${height} L0,${height} Z`} fill={`url(#grad-${seed}-${tone})`} />
      <path d={d} fill="none" stroke={color} strokeWidth="2.5" />
    </Frame>
  );
}

export function DonutPanel({ label = "ALLOCATION", tone = "accent", height = 220, values = [40, 30, 20, 10] }) {
  const color = TONES[tone] || tone;
  const palette = [color, "var(--accent-2)", "var(--text-dim)", "var(--text-faint)"];
  const total = values.reduce((a, b) => a + b, 0);
  const r = 60, cx = 200, cy = height / 2 + 5;
  let angle = -90;
  const arcs = values.map((v, i) => {
    const sweep = (v / total) * 360;
    const start = angle;
    const end = angle + sweep;
    angle = end;
    const large = sweep > 180 ? 1 : 0;
    const x1 = cx + r * Math.cos((Math.PI * start) / 180);
    const y1 = cy + r * Math.sin((Math.PI * start) / 180);
    const x2 = cx + r * Math.cos((Math.PI * end) / 180);
    const y2 = cy + r * Math.sin((Math.PI * end) / 180);
    return (
      <path
        key={i}
        d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} Z`}
        fill={palette[i % palette.length]}
        opacity={i === 0 ? 1 : 0.75}
      />
    );
  });
  return (
    <Frame label={label} tone={tone} height={height}>
      {arcs}
      <circle cx={cx} cy={cy} r={r * 0.55} fill="var(--surface)" />
    </Frame>
  );
}

const CODE_LINES = [
  [["POST", "coral"], ["/v1/orders", "text"]],
  [["  symbol:", "faint"], [' "FLX50"', "accent"]],
  [["  side:", "faint"], [' "buy"', "accent"]],
  [["  qty:", "faint"], [" 25", "text"]],
  [["200 OK", "accent"], [" order_id: 8841", "faint"]],
];

export function CodePanel({ label = "API", height = 220 }) {
  return (
    <Frame label={label} tone="accent" height={height}>
      <foreignObject x="0" y="0" width="400" height={height}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            padding: "18px 20px",
            lineHeight: 1.9,
          }}
        >
          {CODE_LINES.map((line, i) => (
            <div key={i}>
              {line.map(([txt, tone], j) => (
                <span
                  key={j}
                  style={{
                    color:
                      tone === "coral" ? "var(--accent-2)" :
                      tone === "accent" ? "var(--accent)" :
                      tone === "faint" ? "var(--text-faint)" : "var(--text-dim)",
                  }}
                >
                  {txt}
                </span>
              ))}
            </div>
          ))}
        </div>
      </foreignObject>
    </Frame>
  );
}

export function BarPanel({ label = "PROGRESS", tone = "accent", height = 220, values = [30, 55, 40, 70, 50, 85] }) {
  const color = TONES[tone] || tone;
  const w = 400 / values.length;
  const max = Math.max(...values, 100);
  return (
    <Frame label={label} tone={tone} height={height}>
      {values.map((v, i) => {
        const barH = (v / max) * (height - 40);
        return (
          <rect
            key={i}
            x={i * w + w * 0.2}
            y={height - 20 - barH}
            width={w * 0.6}
            height={barH}
            fill={color}
            opacity={0.35 + (i / values.length) * 0.6}
            rx="2"
          />
        );
      })}
    </Frame>
  );
}

/* Composite dashboard mock for the main home hero */
export function DashboardMock() {
  return (
    <div className="row g-3">
      <div className="col-12 col-md-7">
        <CandlePanel label="FLX50 // LIVE" tone="accent" seed={0} height={260} />
      </div>
      <div className="col-12 col-md-5">
        <DonutPanel label="PORTFOLIO" tone="coral" height={260} />
      </div>
    </div>
  );
}

/* Monogram avatar — replaces team photos */
export function Monogram({ name, tone = "accent", size = 160 }) {
  const color = TONES[tone] || tone;
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} style={{ borderRadius: "3px" }}>
      <rect width="160" height="160" fill="var(--surface-2)" stroke="var(--line)" />
      <rect x="0" y="0" width="160" height="4" fill={color} />
      <text
        x="80"
        y="96"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize="52"
        fill={color}
      >
        {initials}
      </text>
    </svg>
  );
}

/* Small network mark — replaces partner logos */
export function NetworkMark({ tone = "accent", size = 64 }) {
  const color = TONES[tone] || tone;
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <circle cx="32" cy="14" r="5" fill={color} />
      <circle cx="14" cy="46" r="5" fill="var(--text-faint)" />
      <circle cx="50" cy="46" r="5" fill="var(--text-faint)" />
      <line x1="32" y1="14" x2="14" y2="46" stroke="var(--line)" strokeWidth="2" />
      <line x1="32" y1="14" x2="50" y2="46" stroke="var(--line)" strokeWidth="2" />
      <line x1="14" y1="46" x2="50" y2="46" stroke="var(--line)" strokeWidth="2" />
    </svg>
  );
}

/* Plain text-based download buttons — no trademarked store badges */
export function StoreButton({ platform }) {
  return (
    <span className="btn-flux-outline btn-flux-sm" style={{ cursor: "default" }}>
      <i className={platform === "ios" ? "fa-brands fa-apple" : "fa-brands fa-google-play"} aria-hidden="true"></i>
      {platform === "ios" ? "iOS" : "Android"}
    </span>
  );
}
