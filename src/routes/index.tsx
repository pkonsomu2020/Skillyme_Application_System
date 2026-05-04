import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";

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
          color: "#0D1E2C",
          fontSize: 56,
          lineHeight: 1,
        }}
      >
        {n}
      </div>
      <div
        className="mt-2"
        style={{ color: "#4A6670", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}
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
      <section className="city-section kenburns relative flex min-h-screen items-center justify-center text-center">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-6 pt-32 pb-20 md:px-10">
          <div className="anim-fade-in gold-label city-text">TRACK ONE · MAY 2026 · 100 SPOTS</div>

          <h1
            className="anim-slide-up delay-100 city-heading mt-6"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "#fff",
              fontSize: "clamp(48px, 7.5vw, 84px)",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Where African talent stops preparing and starts building.
          </h1>

          <p
            className="anim-slide-up delay-400 city-text mt-6"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              color: "#E8F4F2",
              fontSize: 18,
              maxWidth: 620,
              lineHeight: 1.7,
            }}
          >
            A 6-week competitive sprint for African professionals. Real product. Real buyers. Real stakes.
          </p>

          <div className="anim-fade-in delay-600 mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/apply" className="btn-gold">Apply Now →</Link>
            <Link to="/projects" className="btn-ghost">See the Projects</Link>
          </div>

          <div className="anim-fade-in delay-800 mt-16 flex flex-col items-center">
            <div style={{ height: 1, background: "rgba(29, 184, 160,0.4)", width: 280 }} />
            <p
              className="mt-4 city-text"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#E8F4F2",
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
          borderTop: "1px solid #D4EDEA",
          borderBottom: "1px solid #D4EDEA",
          padding: "40px 0",
        }}
      >
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center divide-x" style={{ borderColor: "#D4EDEA" }}>
          <Reveal delay={0}><Stat n="100" label="Builder Spots" /></Reveal>
          <Reveal delay={100}><Stat n="5" label="African Industries" /></Reveal>
          <Reveal delay={200}><Stat n="6" label="Weeks to Build" /></Reveal>
          <Reveal delay={300}><Stat n="1" label="Gala in July" /></Reveal>
        </div>
      </section>

      {/* PROGRAM STATEMENT */}
      <section className="bg-white px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal>
            <div className="gold-label">THE PROGRAM</div>
            <h2
              className="mt-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0D1E2C", fontSize: 42, lineHeight: 1.2 }}
            >
              This is not a course. There are no lectures.
            </h2>
            <p className="mt-8 mx-auto" style={{ fontWeight: 300, color: "#111", fontSize: 18, lineHeight: 1.8, maxWidth: 700 }}>
              You join a team of 10. You spend 6 weeks building a real product for a real African industry.
              At the Gala in July, your product is evaluated by external judges and industry buyers.
              The best product wins. The winning team earns 70% of any revenue it generates.
            </p>
            <p className="mt-6 mx-auto" style={{ fontWeight: 300, color: "#111", fontSize: 18, lineHeight: 1.8, maxWidth: 700 }}>
              Every builder who completes the program walks away with something no course gives you —
              a product with their name on it, shown to people who can pay for it.
            </p>
            <div className="mt-12 flex justify-center">
              <Link to="/about" className="arrow-cta">Read about the program →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#E6F7F5", padding: "80px 0" }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <div className="text-center">
              <div className="gold-label">WHAT BUILDERS SAY</div>
              <h2
                className="mx-auto mt-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "#0D1E2C",
                  fontSize: 42,
                  lineHeight: 1.15,
                  maxWidth: 720,
                }}
              >
                Hear from our previous cohort
              </h2>
              <p
                className="mx-auto mt-4"
                style={{
                  fontWeight: 300,
                  color: "#4A6670",
                  fontSize: 17,
                  lineHeight: 1.7,
                  maxWidth: 640,
                }}
              >
                Real builders. Real results. Real testimonials from those who completed the program.
              </p>
            </div>
          </Reveal>

          <div className="mt-16">
            <Reveal delay={200}>
              <TestimonialsCarousel />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
