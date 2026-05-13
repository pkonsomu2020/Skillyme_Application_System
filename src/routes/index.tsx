import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skillyme Africa — Track One | Apply Now" },
      {
        name: "description",
        content:
          "A 6-week competitive program where African professionals build real products for real industry buyers. 100 spots. Applications close May 30, 2026.",
      },
      { property: "og:title", content: "Skillyme Africa — You have been building for years. The market still does not know your name." },
      {
        property: "og:description",
        content: "Track One · June 2026 · 100 spots. Apply free. Pay only if accepted.",
      },
    ],
  }),
  component: Index,
});

const APPLY_URL = "https://tally.so/r/Y5oNK6";

function PayNote({ light = false }: { light?: boolean }) {
  return (
    <p
      className="mt-4"
      style={{
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        color: light ? "#FFD66E" : "#B8860B",
        fontSize: 15,
        letterSpacing: "0.02em",
      }}
    >
      You pay only after you are accepted.
    </p>
  );
}

function WalkAwayItem({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "36px 36px",
        display: "grid",
        gridTemplateColumns: "64px 1fr",
        gap: 24,
        alignItems: "start",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          color: "#1DB8A0",
          fontSize: 40,
          opacity: 0.5,
          lineHeight: 1,
        }}
      >
        {n}
      </div>
      <p style={{ fontWeight: 300, color: "#0D1E2C", fontSize: 16, lineHeight: 1.85 }}>{children}</p>
    </div>
  );
}

function ProfileCard({ n, body }: { n: string; body: string }) {
  return (
    <div style={{ background: "#fff", padding: "40px 36px", border: "1px solid #E6F7F5" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          color: "#1DB8A0",
          fontSize: 14,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Profile {n}
      </div>
      <div style={{ height: 1, background: "#1DB8A0", opacity: 0.3, margin: "16px 0" }} />
      <p style={{ fontWeight: 300, color: "#0D1E2C", fontSize: 16, lineHeight: 1.8 }}>{body}</p>
    </div>
  );
}

function TimelineStep({
  n,
  title,
  body,
  isLast,
}: {
  n: string;
  title: string;
  body: string;
  isLast?: boolean;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#1DB8A0",
            color: "#fff",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {n}
        </div>
        {!isLast && <div style={{ flex: 1, width: 2, background: "#1DB8A0", opacity: 0.3, marginTop: 8, minHeight: 40 }} />}
      </div>
      <div style={{ paddingBottom: isLast ? 0 : 48 }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            color: "#0D1E2C",
            fontSize: 24,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>
        <p className="mt-3" style={{ fontWeight: 300, color: "#4A6670", fontSize: 16, lineHeight: 1.8 }}>
          {body}
        </p>
      </div>
    </div>
  );
}

function QA({ q, a }: { q: string; a: string }) {
  return (
    <div style={{ borderBottom: "1px solid #E6F7F5", padding: "28px 0" }}>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          color: "#0D1E2C",
          fontSize: 22,
          lineHeight: 1.3,
        }}
      >
        {q}
      </h3>
      <p className="mt-3" style={{ fontWeight: 300, color: "#4A6670", fontSize: 16, lineHeight: 1.85 }}>
        {a}
      </p>
    </div>
  );
}

function Index() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="city-section kenburns relative flex min-h-screen items-center justify-center text-center">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-6 pt-32 pb-20 md:px-10">
          <div className="anim-fade-in gold-label city-text">
            TRACK ONE · JUNE 2026 · 100 SPOTS · APPLICATIONS CLOSE MAY 30
          </div>

          <h1
            className="anim-slide-up delay-100 city-heading mt-6"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "#fff",
              fontSize: "clamp(48px, 6.8vw, 80px)",
              lineHeight: 1.05,
              maxWidth: 880,
            }}
          >
            You have been building for years. The market still does not know your name.
          </h1>

          <p
            className="anim-fade-in delay-600 city-text mt-6"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              color: "#D8F3DC",
              fontSize: 18,
              maxWidth: 640,
              lineHeight: 1.7,
            }}
          >
            A 6-week competitive program where African professionals build real products for real industry buyers. Not a course. Not a certificate. A product with your name on it — and a share of what it earns.
          </p>

          <div className="anim-fade-in delay-800 mt-10">
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Apply now →
            </a>
          </div>

          <PayNote light />

          <p
            className="city-text mt-2"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#D8F3DC",
              fontSize: 14,
            }}
          >
            Applications close May 30, 2026. 100 spots.
          </p>
        </div>
      </section>

      {/* SECTION 2 — ONE-LINE PROGRAM DEFINITION */}
      <section className="bg-white" style={{ padding: "90px 24px" }}>
        <div className="mx-auto" style={{ maxWidth: 820 }}>
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "#0D1E2C",
                fontSize: "clamp(22px, 2.4vw, 28px)",
                lineHeight: 1.55,
                textAlign: "center",
              }}
            >
              Skillyme Africa is not a course. You are selected through a 2-stage interview. You join a team of 10. You build a real solution to a real industry problem. You compete. You present to buyers and investors at a live Gala in Nairobi. The certificate is real — and it is the least valuable thing you will leave with.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — WHAT YOU WALK AWAY WITH */}
      <section style={{ background: "#E6F7F5", padding: "100px 0" }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 1100 }}>
          <Reveal>
            <div className="text-center">
              <div className="gold-label">WHAT EVERY PARTICIPANT WALKS AWAY WITH</div>
              <h2
                className="mt-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "#0D1E2C",
                  fontSize: 46,
                  lineHeight: 1.15,
                }}
              >
                What every participant walks away with
              </h2>
            </div>
          </Reveal>

          <div className="mt-14" style={{ background: "#0D1E2C", display: "grid", gap: 2 }}>
            <Reveal><WalkAwayItem n="01">A real product you built. Commercially presented to industry buyers at a live event in Nairobi. Not a concept. Not a prototype on your laptop.</WalkAwayItem></Reveal>
            <Reveal><WalkAwayItem n="02">A documented commercial track record. You competed, you built, you presented. That is verifiable. That is portable. That is yours.</WalkAwayItem></Reveal>
            <Reveal><WalkAwayItem n="03">Direct access to buyers, investors, and employers at the Gala. Not panel speakers. People who attend to evaluate what teams built — and who can act on it that same evening.</WalkAwayItem></Reveal>
            <Reveal><WalkAwayItem n="04">99 professionals in your network. People you built with and competed against over six weeks. Not LinkedIn connections. Real relationships formed under real pressure.</WalkAwayItem></Reveal>
            <Reveal><WalkAwayItem n="05">A Skillyme Africa certificate tied to a real product and a real commercial outcome.</WalkAwayItem></Reveal>
          </div>

          <Reveal>
            <div
              className="mt-10"
              style={{
                background: "#0D1E2C",
                padding: "40px 40px",
                borderLeft: "4px solid #1DB8A0",
              }}
            >
              <div className="gold-label" style={{ color: "#FFD66E" }}>REVENUE SHARE</div>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  color: "#fff",
                  fontSize: 22,
                  lineHeight: 1.5,
                }}
              >
                If your team wins: <span style={{ color: "#1DB8A0" }}>70%</span> of commercial revenue your product generates. If your team places second: <span style={{ color: "#1DB8A0" }}>5%</span>. Plus everything above.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 — WHO THIS IS FOR */}
      <section className="bg-white" style={{ padding: "100px 0" }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 1200 }}>
          <Reveal>
            <div className="text-center">
              <div className="gold-label">WHO THIS IS FOR</div>
              <h2
                className="mt-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "#0D1E2C",
                  fontSize: 46,
                  lineHeight: 1.15,
                }}
              >
                This program is for one of these four people
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Reveal><ProfileCard n="1" body="You are skilled. Years of experience in engineering, product, design, finance, operations, or logistics. You have never built something commercially from scratch with your name on it. The market knows your employer. It does not know you. You are ready to change that." /></Reveal>
            <Reveal delay={80}><ProfileCard n="2" body="You finished your degree or you are early in your career. You have the skills. Every job posting wants experience you have not had the chance to earn yet. You are not looking for another course. You are looking for the opportunity to prove what you can already do." /></Reveal>
            <Reveal delay={160}><ProfileCard n="3" body="You have deep knowledge in an industry — logistics, agriculture, real estate, workforce management, or SME finance. You have spent years building inside someone else's platform. You have never had a stage of your own." /></Reveal>
            <Reveal delay={240}><ProfileCard n="4" body="You know that what gets people hired and paid in 2026 is not another certificate. It is proof of what they can build. You are ready to build something the market can evaluate." /></Reveal>
          </div>

          <Reveal>
            <div className="mt-14 text-center">
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#0D1E2C",
                  fontSize: 22,
                  lineHeight: 1.5,
                  maxWidth: 720,
                  margin: "0 auto",
                }}
              >
                If you read one of these and thought "that is me" — the application is free and takes less than ten minutes.
              </p>
              <div className="mt-8">
                <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  Apply now →
                </a>
              </div>
              <PayNote />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section style={{ background: "#F5FBFA", padding: "100px 0" }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 900 }}>
          <Reveal>
            <div className="text-center">
              <div className="gold-label">HOW IT WORKS</div>
              <h2
                className="mt-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "#0D1E2C",
                  fontSize: 46,
                  lineHeight: 1.15,
                }}
              >
                Exactly what happens, step by step
              </h2>
            </div>
          </Reveal>

          <div className="mt-16">
            <Reveal><TimelineStep n="1" title="Apply" body="The application costs nothing. Answer the questions and submit. You are not paying to apply. You are applying for a place." /></Reveal>
            <Reveal><TimelineStep n="2" title="2-stage interview" body="Shortlisted applicants go through two interviews. We are not assessing your degree or your years of experience. We are assessing how you think, what you know, and whether you are ready to build with a team." /></Reveal>
            <Reveal><TimelineStep n="3" title="Acceptance" body="If you are selected, you receive a formal acceptance from Skillyme Africa." /></Reveal>
            <Reveal><TimelineStep n="4" title="Pay (only now)" body="Ksh 5,000 — paid at acceptance, and only at acceptance. If you are not selected, you pay nothing." /></Reveal>
            <Reveal><TimelineStep n="5" title="Join your team" body="A team of 10. 5 technical, 5 non-technical professionals. Assigned to one of five industry tracks: real estate, logistics, agriculture, workforce management, or SME finance." /></Reveal>
            <Reveal><TimelineStep n="6" title="Build for 6 weeks" body="June 2 – July 8, 2026. Two check-ins per week — Wednesday and Saturday. 10–15 hours per week. Built for people with full-time jobs." /></Reveal>
            <Reveal><TimelineStep n="7" title="The Gala" body="July 9-10, Nairobi. Both teams present. Buyers, investors, and employers evaluate what you built. Commercial agreements signed on the spot." /></Reveal>
            <Reveal><TimelineStep n="8" title="Keep your share" body="70% if you win. 5% if you place second. Everything else regardless." isLast /></Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 6 — THE GALA */}
      <section className="city-section relative" style={{ padding: "120px 0" }}>
        <div className="mx-auto px-6 md:px-20" style={{ maxWidth: 1000 }}>
          <Reveal>
            <div className="gold-label">THE GALA</div>
            <h2
              className="mt-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "#fff",
                fontSize: 52,
                lineHeight: 1.1,
                maxWidth: 820,
              }}
            >
              The Skillyme Africa Gala — July 9-10, Nairobi
            </h2>
            <div className="mt-10" style={{ maxWidth: 740 }}>
              <p style={{ fontWeight: 300, color: "#D8F3DC", fontSize: 17, lineHeight: 1.9 }}>
                At the end of 6 weeks, every team presents at a live event in Nairobi. Buyers attend to assess whether a product is worth a commercial agreement. Investors attend to assess whether a team is worth backing. Employers attend to evaluate what builders have actually built.
              </p>
              <p
                className="mt-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  color: "#1DB8A0",
                  fontSize: 22,
                  lineHeight: 1.5,
                }}
              >
                Commercial agreements can be signed on the spot.
              </p>
              <p className="mt-6" style={{ fontWeight: 300, color: "#D8F3DC", fontSize: 17, lineHeight: 1.9 }}>
                You are not submitting a document. You are presenting work to people who can act on it that same evening. Whether or not your team wins, you are in that room.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 8 — SILENT OBJECTIONS */}
      <section className="bg-white" style={{ padding: "100px 0" }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 880 }}>
          <Reveal>
            <div className="text-center">
              <div className="gold-label">SILENT OBJECTIONS</div>
              <h2
                className="mt-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "#0D1E2C",
                  fontSize: 46,
                  lineHeight: 1.15,
                }}
              >
                Questions you probably have — answered directly
              </h2>
            </div>
          </Reveal>

          <div className="mt-12">
            <Reveal><QA q="Will I have time?" a="10 to 15 hours per week. Two check-ins — Wednesday and Saturday. Everything else is asynchronous. Designed for people with full-time jobs. If you can protect two hours a day for six weeks, you can complete this." /></Reveal>
            <Reveal><QA q="Am I qualified enough?" a="We are not selecting based on your degree or your years of experience. We are selecting based on whether you have something to contribute and whether you are serious about doing the work. Apply and let the interview determine the rest." /></Reveal>
            <Reveal><QA q="What if my team loses?" a="The second team earns 5% of commercial revenue and presents at the Gala alongside the winning team. You leave with a product, a track record, and Gala exposure regardless of the result. Winning earns more money. Showing up earns everything else." /></Reveal>
            <Reveal><QA q="What is the catch?" a="Not everyone who applies gets in. Not every team wins. The six weeks are real work, not content to consume. If you are not ready to compete and build, this is not the right program for you right now. If you are — the application is free and takes less than ten minutes." /></Reveal>
          </div>
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

      {/* SECTION 9 — FINAL CTA */}
      <section className="city-section city-overlay-deep relative text-center" style={{ padding: "130px 0" }}>
        <div className="mx-auto px-6 md:px-20" style={{ maxWidth: 920 }}>
          <div className="gold-label city-text">FINAL CALL</div>
          <h2
            className="city-heading mt-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "#fff",
              fontSize: "clamp(44px, 5.6vw, 64px)",
              lineHeight: 1.1,
            }}
          >
            Applications close May 30, 2026
          </h2>
          <p
            className="city-text mt-6 mx-auto"
            style={{ fontWeight: 300, color: "#D8F3DC", fontSize: 18, maxWidth: 640, lineHeight: 1.8 }}
          >
            100 spots. 5 industry tracks. One Gala in Nairobi where what you built is evaluated by people who can act on it.
          </p>
          <p
            className="city-text mt-4 mx-auto"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#fff",
              fontSize: 22,
              maxWidth: 640,
              lineHeight: 1.5,
            }}
          >
            If you have read this far, you are probably the person this program is for.
          </p>
          <div className="mt-10">
            <Link
              to="/apply"
              className="btn-gold"
              style={{ padding: "18px 48px", fontSize: 17 }}
            >
              Apply for Track One →
            </Link>
          </div>
          <PayNote light />
          <div
            className="city-text mt-10 mx-auto"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#D8F3DC",
              fontSize: 14,
              lineHeight: 2,
            }}
          >
            <div>Applications close May 30, 2026.</div>
            <div>Sprint: June 2 – July 8, 2026.</div>
            <div>Gala: July 9-10, 2026, Nairobi.</div>
          </div>
        </div>
      </section>
    </>
  );
}
