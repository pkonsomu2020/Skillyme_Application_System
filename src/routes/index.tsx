import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skillyme Africa — Track One | Apply Now" },
      {
        name: "description",
        content:
          "A 6-week sprint where African professionals build real products for real buyers. 100 spots. Applications close May 30, 2026.",
      },
      { property: "og:title", content: "Skillyme Africa — Where African talent stops preparing and starts building." },
      {
        property: "og:description",
        content: "Track One · June 2026 · 100 spots. 5 industries. 6 weeks. One Gala in July.",
      },
    ],
  }),
  component: Index,
});

const APPLY_URL = "https://tally.so/r/Y5oNK6";

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

function IndustryCard({
  num,
  tag,
  title,
  body,
}: {
  num: string;
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <div
      className="industry-card"
      style={{
        border: "1px solid #D4EDEA",
        background: "#fff",
        padding: "40px 36px",
        transition: "all 200ms ease",
      }}
    >
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#1DB8A0", fontSize: 14, letterSpacing: "0.1em" }}>
        {num}
      </div>
      <div className="mt-2" style={{ color: "#4A6670", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>
        {tag}
      </div>
      <div style={{ height: 1, background: "#1DB8A0", opacity: 0.3, margin: "16px 0" }} />
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0D1E2C", fontSize: 22, lineHeight: 1.2 }}>
        {title}
      </h3>
      <p className="mt-3" style={{ fontWeight: 300, color: "#4A6670", fontSize: 15, lineHeight: 1.8 }}>
        {body}
      </p>
    </div>
  );
}

function OutcomeBlock({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div
      className="outcome-block"
      style={{ background: "#fff", padding: "48px 40px", transition: "background 200ms ease" }}
    >
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#1DB8A0", fontSize: 48, opacity: 0.25, lineHeight: 1 }}>
        {num}
      </div>
      <h3 className="mt-2" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0D1E2C", fontSize: 22, lineHeight: 1.2 }}>
        {title}
      </h3>
      <p className="mt-3" style={{ fontWeight: 300, color: "#4A6670", fontSize: 15, lineHeight: 1.8 }}>
        {body}
      </p>
    </div>
  );
}

function ProfileBlock({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div
      className="profile-block"
      style={{ background: "#fff", padding: "48px 40px", transition: "background 200ms ease" }}
    >
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#1DB8A0", fontSize: 48, opacity: 0.2, lineHeight: 1 }}>
        {num}
      </div>
      <h3 className="mt-2" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0D1E2C", fontSize: 22, lineHeight: 1.2 }}>
        {title}
      </h3>
      <p className="mt-3" style={{ fontWeight: 300, color: "#4A6670", fontSize: 15, lineHeight: 1.8 }}>
        {body}
      </p>
    </div>
  );
}

function Step({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="flex-1 px-6 text-center" style={{ minWidth: 200 }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#1DB8A0", fontSize: 32, opacity: 0.5, lineHeight: 1 }}>
        {num}
      </div>
      <div
        className="mt-3"
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 500,
          color: "#0D1E2C",
          fontSize: 15,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {title}
      </div>
      <p className="mt-2" style={{ fontWeight: 300, color: "#4A6670", fontSize: 14, lineHeight: 1.7 }}>
        {body}
      </p>
    </div>
  );
}

function Arrow() {
  return (
    <div
      className="hidden md:flex items-center justify-center"
      style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "#1DB8A0", opacity: 0.5 }}
    >
      →
    </div>
  );
}

function Compare({ left, right }: { left: string; right: string }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-y-2 md:gap-x-6 items-center"
      style={{ borderBottom: "1px solid rgba(29,184,160,0.2)", padding: "20px 0" }}
    >
      <div style={{ fontWeight: 300, fontStyle: "italic", color: "#D8F3DC", fontSize: 15 }}>{left}</div>
      <div className="hidden md:block" style={{ height: 24, background: "rgba(29,184,160,0.3)" }} />
      <div style={{ fontWeight: 500, color: "#fff", fontSize: 15 }}>{right}</div>
    </div>
  );
}

function Index() {
  return (
    <>
      {/* HERO */}
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
              fontSize: "clamp(56px, 7.5vw, 88px)",
              lineHeight: 1.05,
              maxWidth: 720,
            }}
          >
            Where African talent stops preparing and starts building.
          </h1>

          <p
            className="anim-fade-in delay-600 city-text mt-6"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              color: "#D8F3DC",
              fontSize: 18,
              maxWidth: 520,
              lineHeight: 1.7,
            }}
          >
            A 6-week sprint where African professionals build real products for real buyers. Not a course. Not a certificate. A product with your name on it — and a share of what it earns.
          </p>

          <div className="anim-fade-in delay-800 mt-10">
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Apply Now →
            </a>
          </div>

          <p
            className="anim-fade-in delay-800 city-text mt-4"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#D8F3DC",
              fontSize: 14,
              maxWidth: 560,
            }}
          >
            Applications close May 30, 2026. 100 spots. Selection is by interview — not first come first served.
          </p>

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
              The work speaks for itself. — Skillyme Africa Gala, July 9-10, 2026
            </p>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section
        className="bg-white"
        style={{ borderTop: "1px solid #E6F7F5", borderBottom: "1px solid #E6F7F5", padding: "40px 0" }}
      >
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center divide-x" style={{ borderColor: "#E6F7F5" }}>
          <Reveal delay={0}><Stat n="100" label="Builder Spots" /></Reveal>
          <Reveal delay={100}><Stat n="5" label="African Industries" /></Reveal>
          <Reveal delay={200}><Stat n="6" label="Weeks to Build" /></Reveal>
          <Reveal delay={300}><Stat n="1" label="Gala in July" /></Reveal>
        </div>
      </section>

      {/* WHAT IS SKILLYME AFRICA */}
      <section className="bg-white" style={{ padding: "100px 24px" }}>
        <div className="mx-auto" style={{ maxWidth: 860, padding: "0 0" }}>
          <Reveal>
            <div className="text-center">
              <div className="gold-label">WHAT IS SKILLYME AFRICA</div>
              <h2
                className="mt-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0D1E2C", fontSize: 46, lineHeight: 1.15 }}
              >
                Built for the builders Africa keeps overlooking.
              </h2>
            </div>
            <div className="mx-auto" style={{ maxWidth: 720, marginTop: 28 }}>
              <p style={{ fontWeight: 300, color: "#0D1E2C", fontSize: 18, lineHeight: 1.85 }}>
                Skillyme Africa exists because talented African professionals have always had the skills — but never had the room. A room where what they built could actually be sold. Where they could earn from it. Where the pressure was real and the outcome was real.
              </p>
              <p className="mt-6" style={{ fontWeight: 300, color: "#0D1E2C", fontSize: 18, lineHeight: 1.85 }}>
                Track One is that room. Six weeks. Five industries. One hundred builders. One Gala in July where the work speaks for itself.
              </p>
            </div>
            <div className="flex justify-end" style={{ marginTop: 40 }}>
              <Link to="/about" className="arrow-cta" style={{ fontSize: 14 }}>Learn who we are →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE PROVING GROUND */}
      <section className="city-section relative" style={{ padding: "100px 0" }}>
        <div className="mx-auto px-6 md:px-20" style={{ maxWidth: 1100 }}>
          <Reveal>
            <div className="gold-label">TRACK ONE — WHAT THIS IS</div>
            <h2
              className="mt-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "#fff",
                fontSize: 54,
                lineHeight: 1.1,
                maxWidth: 700,
              }}
            >
              Not a lecture. Not a workshop. A proving ground.
            </h2>
            <div className="mt-12" style={{ maxWidth: 720 }}>
              <Compare left="Theory about building" right="Six weeks of actually building" />
              <Compare left="A certificate that collects dust" right="A product with your name on it" />
              <Compare left="Grades on your effort" right="Buyers judging your output" />
            </div>
            <p
              className="mt-12"
              style={{ fontWeight: 300, color: "#D8F3DC", fontSize: 17, lineHeight: 1.9, maxWidth: 680 }}
            >
              You join a team of 10. You are assigned one of five African industries. You spend six weeks researching, building, and validating a real product. At the Gala in July — your product stands in front of external judges and industry buyers who can purchase it, distribute it, or hire the people who built it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT YOU EARN */}
      <section className="bg-white px-6 md:px-20" style={{ padding: "100px 0" }}>
        <div className="mx-auto" style={{ maxWidth: 1000 }}>
          <Reveal>
            <div className="text-center">
              <div className="gold-label">WHAT YOU EARN</div>
              <h2
                className="mt-4 mx-auto"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0D1E2C", fontSize: 46, lineHeight: 1.15, maxWidth: 820 }}
              >
                Every builder walks away with something. The best builders earn from what they build.
              </h2>
            </div>
          </Reveal>
          <div
            className="mt-14 grid grid-cols-1 md:grid-cols-2"
            style={{ background: "#0D1E2C", gap: 2 }}
          >
            <OutcomeBlock num="01" title="70% of every shilling your product earns" body="If your team's product is purchased or licensed at the Gala, your team keeps 70% of all revenue it generates — split equally among every builder who completed the sprint." />
            <OutcomeBlock num="02" title="Even the losing team walks away earning" body="This is not winner-takes-all. Every team that builds and presents at the Gala earns a share. The best product wins 70%. Every other completing team shares 5%. No one who finishes leaves empty-handed." />
            <OutcomeBlock num="03" title="Buyers at the Gala can hire you directly" body="When an industry buyer or client attends the Gala and is impressed by what your team built — they can approach builders directly. No CV. No cold applications. Just your work speaking for itself in a room with people who have the budget to employ it." />
            <OutcomeBlock num="04" title="A real product with your name on it" body="Not a case study. Not a portfolio piece. A working product that was built, tested, and presented to real buyers. The proof of work that no course or certificate can give you." />
          </div>
        </div>
      </section>

      {/* 5 INDUSTRIES */}
      <section style={{ background: "#E6F7F5", padding: "100px 0" }}>
        <div className="mx-auto px-6 md:px-20" style={{ maxWidth: 1200 }}>
          <Reveal>
            <div className="text-center">
              <div className="gold-label">5 INDUSTRIES</div>
              <h2
                className="mt-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0D1E2C", fontSize: 48, lineHeight: 1.15 }}
              >
                Choose your battlefield.
              </h2>
              <p
                className="mx-auto"
                style={{ fontWeight: 300, color: "#4A6670", fontSize: 17, maxWidth: 560, margin: "16px auto 56px" }}
              >
                Every team works on a real unsolved problem inside one of five African industries. Read each one. You will know which one is yours.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Reveal><IndustryCard num="01" tag="REAL ESTATE" title="Real Estate Management" body="Property managers are running multi-million shilling portfolios on WhatsApp. Rent goes uncollected. Maintenance requests disappear. This team builds the digital infrastructure the sector has never had." /></Reveal>
            <Reveal delay={80}><IndustryCard num="02" tag="LOGISTICS" title="Logistics & Supply Chain" body="A truck leaves Mombasa. Nobody knows where it is. East Africa moves billions in goods every year almost entirely without digital tools. This team builds the coordination system that changes that." /></Reveal>
            <Reveal delay={160}><IndustryCard num="03" tag="SME FINANCE" title="SME Financial Management" body="African SMEs earn every day and record almost nothing. When they need a loan, the bank says no — not because the business is bad, but because it is invisible. This team builds the tool that changes that." /></Reveal>
            <Reveal delay={240}><IndustryCard num="04" tag="AGRICULTURE" title="Agriculture & Market Access" body="A farmer harvests two tonnes with no idea who will buy it. A buyer cannot find reliable supply. Both exist. Neither can reach the other. The middleman takes 40% and adds nothing. This team builds the connection." /></Reveal>
            <Reveal delay={320}><IndustryCard num="05" tag="WORKFORCE" title="Informal Workforce Management" body="A firm needs 30 casual workers by 6am. Right now that is phone calls, middlemen, and cash in envelopes. Over 400 million Africans work informally. This team builds the system that serves them." /></Reveal>
          </div>
          <div className="mt-12 text-center">
            <Link to="/projects" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#1DB8A0", fontSize: 14 }}>
              Read the full project briefs →
            </Link>
          </div>
        </div>
      </section>

      {/* TEAM - CREATIVE DESIGN */}
      <section style={{ background: "linear-gradient(135deg, #0D1E2C 0%, #1A2E3C 100%)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
        {/* Decorative Elements */}
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(29, 184, 160, 0.15) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-15%", left: "-8%", width: 500, height: 500, background: "radial-gradient(circle, rgba(29, 184, 160, 0.1) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        
        <div className="mx-auto max-w-[1200px] px-6 md:px-20" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <div className="text-center">
              <div style={{ display: "inline-block", background: "rgba(29, 184, 160, 0.15)", border: "1px solid rgba(29, 184, 160, 0.3)", color: "#1DB8A0", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "8px 24px", borderRadius: 50, marginBottom: 24 }}>
                THE ARCHITECTS
              </div>
              <h2
                style={{ 
                  fontFamily: "var(--font-display)", 
                  fontWeight: 700, 
                  color: "#fff", 
                  fontSize: "clamp(38px, 5vw, 56px)", 
                  lineHeight: 1.1,
                  marginBottom: 16
                }}
              >
                Built by builders who've been there.
              </h2>
              <p style={{ color: "#E8F4F2", fontWeight: 300, fontSize: 17, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
                Track One isn't theory. It's designed by people who've built, shipped, and sold products in the African market.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Fredrick Ochieng */}
            <Reveal delay={100}>
              <div className="group relative" style={{ perspective: 1000 }}>
                {/* Card Container */}
                <div 
                  className="relative transition-all duration-500"
                  style={{ 
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(29, 184, 160, 0.2)",
                    borderRadius: 20,
                    padding: 40,
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(29, 184, 160, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(29, 184, 160, 0.2)";
                  }}
                >
                  
                  {/* Photo with Creative Frame */}
                  <div className="relative mx-auto" style={{ width: 200, height: 200, marginBottom: 32 }}>
                    {/* Photo Container */}
                    <div
                      style={{
                        position: "relative",
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "5px solid #1DB8A0",
                        background: "#E6F7F5",
                        zIndex: 1
                      }}
                    >
                      <img
                        src="/fred_ochieng.jpeg"
                        alt="Fredrick Ochieng"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        color: "#fff",
                        fontSize: 28,
                        marginBottom: 8
                      }}
                    >
                      Fredrick Ochieng
                    </h3>
                    <div
                      style={{
                        color: "#1DB8A0",
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase"
                      }}
                    >
                      CEO & Track Architect
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Peter Onsomu */}
            <Reveal delay={200}>
              <div className="group relative" style={{ perspective: 1000 }}>
                {/* Card Container */}
                <div 
                  className="relative transition-all duration-500"
                  style={{ 
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(29, 184, 160, 0.2)",
                    borderRadius: 20,
                    padding: 40,
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(29, 184, 160, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(29, 184, 160, 0.2)";
                  }}
                >
                  
                  {/* Photo with Creative Frame */}
                  <div className="relative mx-auto" style={{ width: 200, height: 200, marginBottom: 32 }}>
                    {/* Photo Container */}
                    <div
                      style={{
                        position: "relative",
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "5px solid #1DB8A0",
                        background: "#E6F7F5",
                        zIndex: 1
                      }}
                    >
                      <img
                        src="/Peter_Onsomu.jpg"
                        alt="Peter Onsomu"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        color: "#fff",
                        fontSize: 28,
                        marginBottom: 8
                      }}
                    >
                      Peter Onsomu
                    </h3>
                    <div
                      style={{
                        color: "#1DB8A0",
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase"
                      }}
                    >
                      CTO
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="city-section city-overlay-deep relative text-center" style={{ padding: "120px 0" }}>
        <div className="mx-auto px-6 md:px-20" style={{ maxWidth: 900 }}>
          <h2
            className="city-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "#fff",
              fontSize: "clamp(48px, 6vw, 68px)",
              lineHeight: 1.1,
            }}
          >
            Your spot is waiting.
          </h2>
          <p
            className="city-text mt-4 mx-auto"
            style={{ fontWeight: 300, color: "#D8F3DC", fontSize: 18, maxWidth: 560 }}
          >
            Applications close May 30, 2026. 100 spots. Not 101.
          </p>
          <div className="mt-12">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: "18px 48px", fontSize: 17 }}
            >
              Apply Now →
            </a>
          </div>
          <p
            className="city-text mt-12"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#D8F3DC",
              fontSize: 14,
            }}
          >
            The work speaks for itself. — Skillyme Africa Gala, July 9-10, 2026
          </p>
        </div>
      </section>
    </>
  );
}
