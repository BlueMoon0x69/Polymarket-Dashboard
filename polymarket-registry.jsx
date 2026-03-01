import { useState } from "react";

const EARN_STRATEGIES = [
  {
    id: 1,
    icon: "💰",
    title: "Earn 4% APY",
    level: "Beginner",
    levelColor: "#4ade80",
    description: "Deposit USDC on Polymarket and earn 4% APY passively. No trading required — your funds work for you while you hold.",
    author: "Polymarket",
    version: "v2.1.0",
    stars: 48,
    installs: 12430,
    link: "https://polymarket.com/predictions/earn-4",
    tag: "OFFICIAL",
  },
  {
    id: 2,
    icon: "⚡",
    title: "Earn & Trade Loop",
    level: "Advanced",
    levelColor: "#f97316",
    description: "Combine 4% APY deposits with active market trading. Maximize yield by recycling earned interest into high-conviction positions.",
    author: "Polymarket",
    version: "v1.3.2",
    stars: 32,
    installs: 5840,
    link: "https://polymarket.com/predictions/earn-4",
    tag: "OFFICIAL",
  },
  {
    id: 3,
    icon: "🌊",
    title: "Liquidity Provider Earn",
    level: "Intermediate",
    levelColor: "#818cf8",
    description: "Provide liquidity to active prediction markets and stack 4% base yield on top of LP fees. Best for high-volume markets.",
    author: "Polymarket",
    version: "v1.0.5",
    stars: 19,
    installs: 3215,
    link: "https://polymarket.com/predictions/earn-4",
    tag: "OFFICIAL",
  },
  {
    id: 4,
    icon: "🛡️",
    title: "Safe Yield Strategy",
    level: "Beginner",
    levelColor: "#4ade80",
    description: "Park idle USDC at 4% APY between trades. Avoid slippage and timing risk — earn while waiting for the right market opportunity.",
    author: "Polymarket",
    version: "v1.1.0",
    stars: 11,
    installs: 2874,
    link: "https://polymarket.com/predictions/earn-4",
    tag: "OFFICIAL",
  },
  {
    id: 5,
    icon: "📈",
    title: "Compound Earn",
    level: "Intermediate",
    levelColor: "#818cf8",
    description: "Auto-reinvest your 4% APY earnings daily to compound returns over time. Set it and forget it — full automation via Simmer API.",
    author: "Simmer",
    version: "v2.0.1",
    stars: 7,
    installs: 1190,
    link: "https://polymarket.com/predictions/earn-4",
    tag: null,
  },
  {
    id: 6,
    icon: "🔁",
    title: "Earn + Hedge",
    level: "Advanced",
    levelColor: "#f97316",
    description: "Earn 4% APY while hedging directional market exposure. Maintains delta-neutral stance with passive income layer.",
    author: "Simmer",
    version: "v1.0.3",
    stars: 3,
    installs: 672,
    link: "https://polymarket.com/predictions/earn-4",
    tag: null,
  },
];

const REWARDS_STRATEGIES = [
  {
    id: 7,
    icon: "🏆",
    title: "Daily Rewards Sniper",
    level: "Advanced",
    levelColor: "#f97316",
    description: "Maximize daily reward earnings by targeting competitive markets with high reward multipliers. Uses competitiveness score to rank opportunities.",
    author: "Polymarket",
    version: "v3.0.1",
    stars: 64,
    installs: 18920,
    link: "https://polymarket.com/rewards?id=competitiveness&desc=true",
    tag: "OFFICIAL",
  },
  {
    id: 8,
    icon: "🎯",
    title: "Competitiveness Tracker",
    level: "Beginner",
    levelColor: "#4ade80",
    description: "Track your daily competitiveness score and leaderboard rank. Get alerts when high-reward windows open. Simple setup for new traders.",
    author: "Polymarket",
    version: "v1.6.0",
    stars: 41,
    installs: 9310,
    link: "https://polymarket.com/rewards?id=competitiveness&desc=true",
    tag: "OFFICIAL",
  },
  {
    id: 9,
    icon: "⚔️",
    title: "Reward Farm Loop",
    level: "Intermediate",
    levelColor: "#818cf8",
    description: "Systematically farm daily rewards by rotating positions across top competitive markets. Identifies the best reward-to-risk ratio daily.",
    author: "Polymarket",
    version: "v2.2.3",
    stars: 28,
    installs: 6450,
    link: "https://polymarket.com/rewards?id=competitiveness&desc=true",
    tag: "OFFICIAL",
  },
  {
    id: 10,
    icon: "📊",
    title: "Reward Leaderboard Bot",
    level: "Intermediate",
    levelColor: "#818cf8",
    description: "Auto-track daily leaderboard movements. Alerts on rank changes, competitor activity and reward pool fluctuations in real time.",
    author: "Simmer",
    version: "v1.2.7",
    stars: 15,
    installs: 3870,
    link: "https://polymarket.com/rewards?id=competitiveness&desc=true",
    tag: null,
  },
  {
    id: 11,
    icon: "💡",
    title: "Signal + Reward Stack",
    level: "Advanced",
    levelColor: "#f97316",
    description: "Layer external signal sources on top of reward farming to double-dip: earn prediction rewards AND edge-based P&L simultaneously.",
    author: "Simmer",
    version: "v1.0.9",
    stars: 9,
    installs: 2140,
    link: "https://polymarket.com/rewards?id=competitiveness&desc=true",
    tag: null,
  },
  {
    id: 12,
    icon: "🔥",
    title: "Hot Market Reward Seeker",
    level: "Beginner",
    levelColor: "#4ade80",
    description: "Find markets with the highest daily reward pools and lowest competition. Perfect entry point for new traders starting their reward journey.",
    author: "Simmer",
    version: "v1.1.2",
    stars: 5,
    installs: 987,
    link: "https://polymarket.com/rewards?id=competitiveness&desc=true",
    tag: null,
  },
];

const TABS = ["All", "Earn 4%", "Daily Rewards", "Beginner", "Advanced"];
const SORT_OPTIONS = ["Most installs", "Most stars", "Newest"];

function SkillCard({ card, idx }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={card.link}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        background: hovered ? "#1a1f2e" : "#111520",
        border: `1px solid ${hovered ? "#2e3650" : "#1e2438"}`,
        borderRadius: 8,
        padding: "18px 20px 16px",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.18s ease",
        transform: hovered ? "translateY(-1px)" : "none",
        boxShadow: hovered ? "0 4px 20px rgba(0,0,0,0.4)" : "none",
        animation: `fadeUp 0.4s ease ${idx * 40}ms both`,
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontSize: 22 }}>{card.icon}</span>
        <span style={{
          fontSize: 10,
          fontFamily: "'Space Mono', monospace",
          color: card.levelColor,
          display: "flex",
          alignItems: "center",
          gap: 5,
          fontWeight: 700,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: card.levelColor, display: "inline-block" }} />
          {card.level}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: 15,
        fontWeight: 700,
        color: "#f0f4ff",
        fontFamily: "'Space Mono', monospace",
        marginBottom: 8,
        lineHeight: 1.3,
      }}>{card.title}</h3>

      {/* Description */}
      <p style={{
        fontSize: 12,
        color: "#6b7a99",
        lineHeight: 1.6,
        marginBottom: 16,
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        fontFamily: "'Space Mono', monospace",
      }}>{card.description}</p>

      {/* Footer */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid #1e2438",
        paddingTop: 12,
      }}>
        <span style={{ fontSize: 11, color: "#4a5578", fontFamily: "'Space Mono', monospace" }}>
          by <span style={{ color: "#6b7a99" }}>{card.author}</span>{" "}
          <span style={{ color: "#2e3650" }}>{card.version}</span>
        </span>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {card.stars > 0 && (
            <span style={{ fontSize: 11, color: "#4a5578", fontFamily: "'Space Mono', monospace", display: "flex", alignItems: "center", gap: 3 }}>
              ☆ {card.stars}
            </span>
          )}
          <span style={{ fontSize: 11, color: "#4a5578", fontFamily: "'Space Mono', monospace", display: "flex", alignItems: "center", gap: 3 }}>
            ↓ {card.installs.toLocaleString()}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function SkillsRegistry() {
  const [activeTab, setActiveTab] = useState("All");
  const [sort, setSort] = useState("Most installs");

  const allCards = [...EARN_STRATEGIES, ...REWARDS_STRATEGIES];

  let filtered = allCards;
  if (activeTab === "Earn 4%") filtered = EARN_STRATEGIES;
  else if (activeTab === "Daily Rewards") filtered = REWARDS_STRATEGIES;
  else if (activeTab === "Beginner") filtered = allCards.filter(c => c.level === "Beginner");
  else if (activeTab === "Advanced") filtered = allCards.filter(c => c.level === "Advanced");

  if (sort === "Most installs") filtered = [...filtered].sort((a, b) => b.installs - a.installs);
  else if (sort === "Most stars") filtered = [...filtered].sort((a, b) => b.stars - a.stars);

  const official = filtered.filter(c => c.tag === "OFFICIAL");
  const community = filtered.filter(c => !c.tag);

  return (
    <div style={{
      background: "#0b0e1a",
      minHeight: "100vh",
      color: "#e2e8f0",
      fontFamily: "'Space Mono', monospace",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0b0e1a; }
        ::-webkit-scrollbar-thumb { background: #1e2438; border-radius: 2px; }
        select { appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7a99' d='M6 8L1 3h10z'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 10px center; }
      `}</style>

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "48px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: 12, animation: "fadeUp 0.4s ease both" }}>
          <h1 style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "#f0f4ff",
            marginBottom: 12,
          }}>POLYMARKET_STRATEGIES</h1>
          <p style={{ fontSize: 12, color: "#6b7a99", lineHeight: 1.7, maxWidth: 680 }}>
            Supercharge your trading with Polymarket strategies. Templates are remixable —{" "}
            <span style={{ color: "#818cf8" }}>install, then make it yours.</span>
          </p>
        </div>

        {/* Filters */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 36,
          marginTop: 28,
          flexWrap: "wrap",
          gap: 12,
          animation: "fadeUp 0.4s ease 0.05s both",
        }}>
          <div style={{ display: "flex", gap: 8 }}>
            {TABS.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                background: activeTab === tab ? "#818cf8" : "transparent",
                border: `1px solid ${activeTab === tab ? "#818cf8" : "#1e2438"}`,
                color: activeTab === tab ? "#0b0e1a" : "#6b7a99",
                padding: "6px 16px",
                borderRadius: 4,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "'Space Mono', monospace",
                cursor: "pointer",
                transition: "all 0.15s",
              }}>{tab}</button>
            ))}
          </div>

          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            style={{
              background: "#111520",
              border: "1px solid #1e2438",
              color: "#6b7a99",
              padding: "6px 32px 6px 12px",
              borderRadius: 4,
              fontSize: 12,
              fontFamily: "'Space Mono', monospace",
              cursor: "pointer",
              outline: "none",
            }}
          >
            {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>

        {/* Official Section */}
        {official.length > 0 && (
          <div style={{ marginBottom: 40, animation: "fadeUp 0.4s ease 0.1s both" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: "#4a5578", letterSpacing: "0.08em", fontWeight: 700 }}>OFFICIAL</span>
              <button style={{
                background: "transparent",
                border: "1px solid #1e2438",
                color: "#6b7a99",
                padding: "6px 14px",
                borderRadius: 4,
                fontSize: 11,
                fontFamily: "'Space Mono', monospace",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}>
                <span>⊕</span> Install all
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 12 }}>
              {official.map((card, i) => <SkillCard key={card.id} card={card} idx={i} />)}
            </div>
          </div>
        )}

        {/* Community Section */}
        {community.length > 0 && (
          <div style={{ animation: "fadeUp 0.4s ease 0.15s both" }}>
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: "#4a5578", letterSpacing: "0.08em", fontWeight: 700 }}>COMMUNITY</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 12 }}>
              {community.map((card, i) => <SkillCard key={card.id} card={card} idx={i} />)}
            </div>
          </div>
        )}

        {/* Footer links */}
        <div style={{
          marginTop: 48,
          paddingTop: 24,
          borderTop: "1px solid #1e2438",
          display: "flex",
          gap: 24,
          animation: "fadeUp 0.4s ease 0.2s both",
        }}>
          <a href="https://polymarket.com/predictions/earn-4" target="_blank" rel="noreferrer"
            style={{ fontSize: 11, color: "#4a5578", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ color: "#4ade80" }}>●</span> Earn 4% APY on Polymarket →
          </a>
          <a href="https://polymarket.com/rewards?id=competitiveness&desc=true&q=&page=18" target="_blank" rel="noreferrer"
            style={{ fontSize: 11, color: "#4a5578", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ color: "#818cf8" }}>●</span> Daily Rewards Leaderboard →
          </a>
        </div>
      </div>
    </div>
  );
}
