import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="px-6 text-center">
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          color: "#1B4332",
          fontSize: 56,
          lineHeight: 1,
        }}
      >
        {n}
      </div>
      <div
        className="mt-2"
        style={{ color: "#555", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}
      >
        {label}
      </div>
    </div>
  );
}

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="city-section kenburns relative flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-[1400px] px-6 pt-32 pb-20 md:px-10">
          <div className="anim-fade-in gold-label city-text">TRACK ONE · MAY 2026 · 100 SPOTS</div>

          <img
            src="/assets/skillyme-logo.png"
            alt="Skillyme Africa"
            className="anim-fade-in"
            style={{ height: 56, width: "auto", opacity: 0.92, marginTop: 24, marginBottom: 0, display: "block", mixBlendMode: "lighten" }}
          />


          <h1
            className="anim-slide-up delay-100 city-heading mt-6"
            style={{
              fontFamily: "var(--font-hero)",
              fontWeight: 900,
              color: "#fff",
              fontSize: "clamp(56px, 8vw, 88px)",
              lineHeight: 1.05,
              maxWidth: 720,
            }}
          >
            Where African talent stops preparing and starts building.
          </h1>

          <p
            className="anim-slide-up delay-400 city-text mt-6"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              color: "#D8F3DC",
              fontSize: 18,
              maxWidth: 520,
              lineHeight: 1.6,
            }}
          >
            A 6-week competitive sprint for African professionals. Real product. Real buyers. Real stakes.
          </p>

          <div className="anim-fade-in delay-600 mt-10 flex flex-wrap items-center gap-4">
            <Link to="/apply" className="btn-gold">Apply Now →</Link>
            <Link to="/projects" className="btn-ghost">See the Projects</Link>
          </div>

          <div className="anim-fade-in delay-800 mt-16">
            <div style={{ height: 1, background: "rgba(212,175,55,0.4)", maxWidth: 360 }} />
            <p
              className="mt-4 city-text"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#D8F3DC",
                fontSize: 15,
              }}
            >
              The work speaks for itself. — Skillyme Africa Gala, July 3, 2026
            </p>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section
        className="bg-white"
        style={{
          borderTop: "1px solid #EDF7F0",
          borderBottom: "1px solid #EDF7F0",
          padding: "40px 0",
        }}
      >
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center divide-x" style={{ borderColor: "#EDF7F0" }}>
          <Reveal delay={0}><Stat n="100" label="Builder Spots" /></Reveal>
          <Reveal delay={100}><Stat n="5" label="African Industries" /></Reveal>
          <Reveal delay={200}><Stat n="6" label="Weeks to Build" /></Reveal>
          <Reveal delay={300}><Stat n="1" label="Gala in July" /></Reveal>
        </div>
      </section>

      {/* PROGRAM STATEMENT */}
      <section className="bg-white px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[800px]">
          <Reveal>
            <div className="gold-label">THE PROGRAM</div>
            <h2
              className="mt-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#1B4332", fontSize: 42, lineHeight: 1.15 }}
            >
              This is not a course. There are no lectures.
            </h2>
            <p className="mt-8" style={{ fontWeight: 300, color: "#111", fontSize: 18, lineHeight: 1.8 }}>
              You join a team of 10. You spend 6 weeks building a real product for a real African industry.
              At the Gala in July, your product is evaluated by external judges and industry buyers.
              The best product wins. The winning team earns 70% of any revenue it generates.
            </p>
            <p className="mt-6" style={{ fontWeight: 300, color: "#111", fontSize: 18, lineHeight: 1.8 }}>
              Every builder who completes the program walks away with something no course gives you —
              a product with their name on it, shown to people who can pay for it.
            </p>
            <div className="mt-12 flex justify-end">
              <Link to="/about" className="arrow-cta">Read about the program →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
