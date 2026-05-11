import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";

const APPLY_URL = "https://tally.so/r/Y5oNK6";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "The Five Projects — Skillyme Africa" },
      {
        name: "description",
        content:
          "Five real African industries. Five real problems. Your team builds the solution. Real estate, logistics, SME finance, agriculture, and informal workforce.",
      },
      { property: "og:title", content: "The Five Projects — Skillyme Africa Track One" },
      {
        property: "og:description",
        content: "Five industries. Five real problems. Your team builds the solution.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  n: string;
  industry: string;
  title: string;
  problem: string;
  why: string;
  buyers: string;
  technical: string;
  nonTechnical: string;
};

const projects: Project[] = [
  {
    n: "01",
    industry: "REAL ESTATE",
    title: "Real Estate Management",
    problem:
      "African property managers are running Ksh 50 million portfolios on WhatsApp and paper. Rent collection is manual. Maintenance requests are lost. Tenant records do not exist. Every month, landlords chase payments they should never have to chase.",
    why: "The African real estate sector manages over 50,000 formal and informal property portfolios — almost entirely without digital infrastructure. A property manager handling 20 units spends an average of 3 hours per week on tasks a well-built system would eliminate in minutes.",
    buyers:
      "Property developers, real estate agencies, individual landlords managing 5+ units, PropTech investors.",
    technical: "Developers, product designers, database architects.",
    nonTechnical: "Real estate agents, property managers, finance professionals, sales leads.",
  },
  {
    n: "02",
    industry: "LOGISTICS",
    title: "Logistics & Supply Chain",
    problem:
      "A truck leaves Mombasa. Nobody knows where it is. The cargo is late. The client is calling. The paperwork is missing. African logistics runs on phone calls, WhatsApp, and trust — and it breaks down constantly.",
    why: "East Africa moves over $30 billion worth of goods annually across road networks that serve five landlocked countries. The industry's biggest problem is not infrastructure — it is information. Nobody knows where anything is until it is late.",
    buyers:
      "Logistics companies, freight operators, fleet managers, supply chain directors, shipping firms.",
    technical: "Developers, systems architects, mobile engineers.",
    nonTechnical: "Logistics coordinators, supply chain professionals, operations managers, sales leads.",
  },
  {
    n: "03",
    industry: "SME FINANCE",
    title: "SME Financial Management & Credit Access",
    problem:
      "Africa has 44 million small businesses. Most of them cannot get a loan because they have no financial records. They earn every day and record nothing. When they need capital to grow, the bank says no — not because the business is bad, but because it is invisible.",
    why: "The credit gap for African SMEs is estimated at over $330 billion. The product this team builds does not need to be a bank. It needs to give an SME owner the financial identity they currently lack — clean records, organised cashflow, and a credit-readiness profile that opens the door to formal finance.",
    buyers:
      "SME owners, microfinance institutions, fintech lenders, commercial banks, savings and credit cooperatives.",
    technical: "Fintech developers, data engineers, mobile money integrators.",
    nonTechnical:
      "Accountants, financial analysts, SME advisors, sales and business development professionals.",
  },
  {
    n: "04",
    industry: "AGRICULTURE",
    title: "Agriculture & Smallholder Farmer Market Access",
    problem:
      "A farmer in Kisumu harvests two tonnes of maize and has no idea who will buy it or at what price. A buyer in Nairobi cannot find reliable supply. Both exist. Neither can find the other. The middleman in between takes 40% and adds nothing.",
    why: "33 million smallholder farmers across Africa produce the majority of the continent's food — and most of them sell at a loss because they have no market access, no price information, and no direct route to buyers.",
    buyers:
      "Agricultural buyers and food processors, commodity traders, farmer cooperatives, agri-tech investors, government food agencies.",
    technical: "Developers, GIS or mapping engineers, mobile-first builders.",
    nonTechnical: "Agronomists, agricultural economists, supply chain professionals, rural finance experts.",
  },
  {
    n: "05",
    industry: "WORKFORCE",
    title: "Informal Workforce Management",
    problem:
      "A construction firm in Nairobi needs 30 casual workers by 6am tomorrow. Right now, that is done through phone calls, middlemen, and cash in envelopes. Workers show up late or not at all. Payment disputes happen daily. Nobody has a record of anything.",
    why: "Over 400 million Africans work in the informal economy — and the businesses that employ them lose money every single week to no-shows, payment disputes, and the inability to find verified workers quickly.",
    buyers:
      "Construction companies, cleaning service firms, event management businesses, hospitality employers, security companies.",
    technical: "Platform developers, mobile engineers, payment integration specialists.",
    nonTechnical: "HR professionals, operations managers, workforce coordinators, sales leads.",
  },
];

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-[160px_1fr] md:gap-6">
      <div
        style={{
          color: "#1DB8A0",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          paddingTop: 2,
        }}
      >
        {label}
      </div>
      <div style={{ color: "#111", fontWeight: 300, fontSize: 15.5, lineHeight: 1.7 }}>{value}</div>
    </div>
  );
}

function ProjectBlock({ p }: { p: Project }) {
  return (
    <article
      className="px-6 py-20 md:px-10"
      style={{ borderTop: "1px solid #E0E0E0", background: "#fff" }}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              color: "#1DB8A0",
              fontWeight: 700,
              fontSize: 56,
              lineHeight: 1,
            }}
          >
            {p.n}
          </div>
          <div className="gold-label mt-4">{p.industry}</div>
          <h2
            className="mt-3"
            style={{
              fontFamily: "var(--font-display)",
              color: "#0D1E2C",
              fontWeight: 600,
              fontSize: 28,
              lineHeight: 1.2,
            }}
          >
            {p.title}
          </h2>
        </div>

        <div className="space-y-8">
          <div>
            <div
              style={{
                color: "#0D1E2C",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              The problem
            </div>
            <p
              className="mt-3"
              style={{ color: "#111", fontWeight: 300, fontSize: 17, lineHeight: 1.8 }}
            >
              {p.problem}
            </p>
          </div>

          <div>
            <div
              style={{
                color: "#0D1E2C",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Why it matters
            </div>
            <p
              className="mt-3"
              style={{ color: "#111", fontWeight: 300, fontSize: 16, lineHeight: 1.8 }}
            >
              {p.why}
            </p>
          </div>

          <div className="space-y-5 pt-2" style={{ borderTop: "1px solid #E8F4F2" }}>
            <div className="pt-5">
              <FieldRow label="Who buys this" value={p.buyers} />
            </div>
            <FieldRow label="Technical roles" value={p.technical} />
            <FieldRow label="Non-technical roles" value={p.nonTechnical} />
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectsPage() {
  return (
    <>
      {/* HERO */}
      <section className="city-section relative" style={{ padding: "160px 24px 100px" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="anim-fade-in gold-label city-text">THE FIVE PROJECTS</div>
          <h1
            className="anim-slide-up delay-100 city-heading mt-6"
            style={{
              fontFamily: "var(--font-display)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "clamp(40px, 6vw, 60px)",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Five industries. Five real problems. Your team builds the solution.
          </h1>
          <p
            className="anim-slide-up delay-400 city-text mt-8"
            style={{ color: "#E8F4F2", fontWeight: 300, fontSize: 18, maxWidth: 760, lineHeight: 1.75 }}
          >
            Every project in Track One targets a specific, documented pain experienced by real businesses
            and real people across Africa today. These are not case studies. They are not simulations. They
            are problems that cost real money, every single day — and your team's product is the solution
            that fixes them.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <div className="bg-white">
        {projects.map((p, i) => (
          <Reveal key={p.n} delay={i * 60}>
            <ProjectBlock p={p} />
          </Reveal>
        ))}
      </div>

      {/* TEAM ASSIGNMENT */}
      <section className="px-6 py-24 md:px-10" style={{ background: "#F7FAF9" }}>
        <Reveal>
          <div className="mx-auto max-w-[860px]">
            <div className="gold-label">TEAM ASSIGNMENT</div>
            <h2
              className="mt-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "#0D1E2C",
                fontWeight: 600,
                fontSize: 36,
                lineHeight: 1.2,
              }}
            >
              How you are placed on a team
            </h2>
            <div
              className="mt-8 space-y-6"
              style={{ color: "#111", fontWeight: 300, fontSize: 17, lineHeight: 1.8 }}
            >
              <p>
                You do not choose your team. You indicate your top two project preferences on the application
                form — and your background, your skills, and your industry experience. Skillyme Africa makes
                the final assignment based on where you can contribute most and what each team needs to be
                competitive.
              </p>
              <p>
                Teams are not built on friendship. They are built on balance — the right mix of technical and
                non-technical builders who can take a real problem all the way to a product a buyer will pay
                for.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-28 md:px-10 text-center">
        <Reveal>
          <div className="mx-auto max-w-[760px]">
            <div className="gold-label" style={{ justifyContent: "center", display: "inline-flex" }}>
              APPLY NOW
            </div>
            <h2
              className="mt-5"
              style={{
                fontFamily: "var(--font-display)",
                color: "#0D1E2C",
                fontWeight: 700,
                fontSize: "clamp(34px, 5vw, 48px)",
                lineHeight: 1.15,
              }}
            >
              Applications close May 30, 2026
            </h2>
            <p
              className="mx-auto mt-6"
              style={{ color: "#4A6670", fontWeight: 300, fontSize: 17, lineHeight: 1.7, maxWidth: 640 }}
            >
              100 spots. 5 industry tracks. The team that builds the best product presents at the Gala in
              front of buyers who can act on it that same evening.
            </p>
            <div className="mt-10 flex justify-center">
              <a href={APPLY_URL} target="_blank" rel="noreferrer" className="btn-gold">
                Apply for Track One →
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
