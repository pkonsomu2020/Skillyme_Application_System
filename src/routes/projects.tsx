import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "The Five Projects — Skillyme Africa" },
      {
        name: "description",
        content:
          "Five real African industries. Five real problems. Ten competing teams. Choose the project that matches your background and apply.",
      },
      { property: "og:title", content: "The Five Projects — Skillyme Africa Track One" },
      { property: "og:description", content: "Agriculture. Logistics. Health. Energy. Finance. Pick yours." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    n: "01",
    industry: "REAL ESTATE",
    title: "Real Estate Management",
    hook: "Build the system that finally organises African property.",
    description:
      "Property managers are running multi-million shilling portfolios on WhatsApp. Rent goes uncollected. Maintenance requests disappear. This team builds the digital infrastructure the sector has never had.",
    outcomes: [
      "Direct exposure to property developers and PropTech investors at the Gala",
      "A documented commercial track record in a high-value industry",
      "Revenue share if a buyer purchases the winning product",
    ],
  },
  {
    n: "02",
    industry: "LOGISTICS",
    title: "Logistics & Supply Chain",
    hook: "Give African logistics the visibility it has never had.",
    description:
      "A truck leaves Mombasa. Nobody knows where it is. East Africa moves billions in goods every year almost entirely without digital tools. This team builds the coordination system that changes that.",
    outcomes: [
      "Exposure to freight operators and supply chain directors at the Gala",
      "Commercial engagement with one of East Africa's most active industries",
      "Revenue share if a buyer purchases the winning product",
    ],
  },
  {
    n: "03",
    industry: "SME FINANCE",
    title: "SME Financial Management",
    hook: "Give Africa's 44 million small businesses a financial identity.",
    description:
      "African SMEs earn every day and record almost nothing. When they need a loan, the bank says no — not because the business is bad, but because it is invisible. This team builds the tool that changes that.",
    outcomes: [
      "Access to microfinance institutions and fintech lenders at the Gala",
      "Portfolio of real SME user research and commercial demos",
      "Revenue share if a buyer purchases the winning product",
    ],
  },
  {
    n: "04",
    industry: "AGRICULTURE",
    title: "Agriculture & Market Access",
    hook: "Connect the farmer who has produce to the buyer who needs it.",
    description:
      "A farmer harvests two tonnes with no idea who will buy it. A buyer cannot find reliable supply. Both exist. Neither can reach the other. The middleman takes 40% and adds nothing. This team builds the connection.",
    outcomes: [
      "Exposure to agricultural buyers, food processors and agritech investors",
      "Documented farmer and buyer engagement in your portfolio",
      "Revenue share if a buyer purchases the winning product",
    ],
  },
  {
    n: "05",
    industry: "WORKFORCE",
    title: "Informal Workforce Management",
    hook: "Turn the most chaotic part of African employment into a system that works.",
    description:
      "A firm needs 30 casual workers by 6am. Right now that is phone calls, middlemen, and cash in envelopes. Over 400 million Africans work informally. This team builds the system that serves them.",
    outcomes: [
      "Access to construction firms, hospitality and events businesses at Gala",
      "Real employer and worker journey research in your portfolio",
      "Revenue share if a buyer purchases the winning product",
    ],
  },
];

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <div
      className="group flex flex-col transition-all duration-200"
      style={{
        border: "1px solid #E0E0E0",
        background: "#fff",
        padding: "40px 36px",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#D4AF37";
        el.style.boxShadow = "0 0 0 1px #D4AF37";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#E0E0E0";
        el.style.boxShadow = "none";
      }}
    >
      <div className="flex items-baseline justify-between">
        <div className="gold-label">{p.industry}</div>
        <div style={{ fontFamily: "var(--font-display)", color: "#D4AF37", fontWeight: 700, fontSize: 36, lineHeight: 1 }}>
          {p.n}
        </div>
      </div>
      <h3
        className="mt-6"
        style={{ fontFamily: "var(--font-display)", color: "#1B4332", fontWeight: 600, fontSize: 28, lineHeight: 1.2 }}
      >
        {p.title}
      </h3>
      <p
        className="mt-4"
        style={{ fontFamily: "var(--font-display)", color: "#1B4332", fontStyle: "italic", fontWeight: 600, fontSize: 18, lineHeight: 1.4 }}
      >
        {p.hook}
      </p>
      <p className="mt-4" style={{ color: "#111", fontWeight: 300, fontSize: 15.5, lineHeight: 1.7 }}>
        {p.description}
      </p>
      <ul className="mt-6 grow space-y-3">
        {p.outcomes.map((o) => (
          <li key={o} className="flex gap-3" style={{ color: "#111", fontWeight: 300, fontSize: 14.5, lineHeight: 1.6 }}>
            <span style={{ color: "#D4AF37", fontWeight: 700, lineHeight: 1.6 }}>•</span>
            <span>{o}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-end">
        <Link to="/apply" className="arrow-cta arrow-cta-dark" style={{ color: "#1B4332" }}>
          Choose this project →
        </Link>
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <>
      {/* HERO */}
      <section className="city-section relative" style={{ padding: "160px 24px 100px" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="anim-fade-in gold-label city-text">THE FIVE PROJECTS</div>
          <h1
            className="anim-slide-up delay-100 city-heading mt-6"
            style={{
              fontFamily: "var(--font-display)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "clamp(44px, 6vw, 64px)",
              lineHeight: 1.05,
              maxWidth: 760,
            }}
          >
            Five real problems. Five African industries. Ten competing teams.
          </h1>
          <p
            className="anim-slide-up delay-400 city-text mt-6"
            style={{ color: "#D8F3DC", fontWeight: 300, fontSize: 18, maxWidth: 640, lineHeight: 1.6 }}
          >
            Read each project. Choose the one that matches your background and your network.
            You will indicate your first and second preference when you apply.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-white px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA BAR */}
      <section
        className="city-section flex flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-20"
        style={{ minHeight: 180, padding: "60px 40px" }}
      >
        <h3
          className="city-heading"
          style={{ fontFamily: "var(--font-display)", color: "#fff", fontWeight: 600, fontSize: 30 }}
        >
          Found your project? Apply now.
        </h3>
        <Link to="/apply" className="btn-gold">Apply Now →</Link>
      </section>
    </>
  );
}
