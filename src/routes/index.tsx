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

      {/* ABOUT TRACK ONE */}
      <section className="bg-white px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <div className="gold-label">WHAT IS TRACK ONE</div>
                <h2
                  className="mt-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0D1E2C", fontSize: 42, lineHeight: 1.2 }}
                >
                  Not a course.<br />
                  <span style={{ color: "#1DB8A0" }}>A proving ground.</span>
                </h2>
                <div className="mt-8 space-y-4" style={{ fontWeight: 300, color: "#111", fontSize: 17, lineHeight: 1.8 }}>
                  <p>
                    Track One is where African professionals stop learning <strong>about</strong> building products and start actually <strong>building them</strong>.
                  </p>
                  <p>
                    Over 6 intense weeks, you join 99 other driven professionals to create a real product in your industry — one that gets pitched to <strong>real buyers</strong> at the end.
                  </p>
                  <p>
                    No fluff. No certificates that collect dust. Just <strong>real output, real feedback, and real growth</strong> in a competitive cohort built for the African market.
                  </p>
                </div>
              </Reveal>
            </div>
            <div>
              <Reveal delay={200}>
                <div className="relative" style={{ background: "#E6F7F5", borderRadius: 16, padding: "2rem", border: "1px solid #D4EDEA" }}>
                  <div style={{ borderTop: "3px solid #1DB8A0", position: "absolute", top: 0, left: 0, right: 0 }} />
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, color: "#0D1E2C", marginBottom: "1.5rem" }}>
                    🏆 What Makes Track One Different
                  </h3>
                  <ul className="space-y-3" style={{ listStyle: "none", padding: 0 }}>
                    {[
                      "You build a real, deployable product — not a capstone project",
                      "Competitive cohort: 100 builders, 5 industries, one outcome",
                      "Industry experts review your work every week",
                      "Buyer demo day at the end — your product goes live",
                      "Peer accountability built into the structure",
                      "Designed specifically for the African market and context"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3" style={{ fontSize: 15, color: "#4A6670", lineHeight: 1.6 }}>
                        <span style={{ color: "#1DB8A0", fontWeight: 700, flexShrink: 0 }}>→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div 
                    style={{
                      position: "absolute",
                      bottom: -20,
                      right: -20,
                      background: "#1DB8A0",
                      color: "#fff",
                      borderRadius: "50%",
                      width: 100,
                      height: 100,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 14,
                      textAlign: "center",
                      lineHeight: 1.2,
                      boxShadow: "0 8px 30px rgba(29, 184, 160, 0.4)"
                    }}
                  >
                    ONLY<br />100<br />SPOTS
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ background: "#E6F7F5", padding: "80px 0" }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <div className="text-center">
              <div className="gold-label">5 INDUSTRIES</div>
              <h2
                className="mx-auto mt-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "#0D1E2C",
                  fontSize: 42,
                  lineHeight: 1.15,
                }}
              >
                Choose your<br />
                <span style={{ color: "#1DB8A0" }}>battlefield</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: "💊", name: "Health", desc: "Digital health, telemedicine, wellness products" },
              { icon: "🎓", name: "Education", desc: "EdTech, learning tools, skills platforms" },
              { icon: "💰", name: "Finance", desc: "Fintech, payments, financial access" },
              { icon: "🌾", name: "Agriculture", desc: "AgriTech, food systems, supply chains" },
              { icon: "🏗️", name: "Infrastructure", desc: "Logistics, housing, utilities, mobility" }
            ].map((industry, i) => (
              <Reveal key={i} delay={i * 100}>
                <div 
                  className="text-center p-6 transition-all duration-300 hover:bg-white"
                  style={{ 
                    background: "#E6F7F5",
                    borderRadius: 12,
                    border: "1px solid #D4EDEA",
                    cursor: "pointer"
                  }}
                >
                  <div style={{ fontSize: 40, marginBottom: "1rem" }}>{industry.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "#0D1E2C", marginBottom: "0.5rem" }}>
                    {industry.name}
                  </div>
                  <div style={{ fontSize: 13, color: "#4A6670", lineHeight: 1.5 }}>
                    {industry.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[800px]">
          <Reveal>
            <div className="text-center">
              <div className="gold-label">THE 6-WEEK JOURNEY</div>
              <h2
                className="mt-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0D1E2C", fontSize: 42, lineHeight: 1.2 }}
              >
                How Track One<br />
                <span style={{ color: "#1DB8A0" }}>works</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 space-y-12">
            {[
              {
                week: "Week 1–2",
                title: "Problem Discovery & Team Formation",
                desc: "Identify a real, unsolved problem in your chosen industry. Form cross-functional teams. Validate the problem with actual potential users in your market."
              },
              {
                week: "Week 3",
                title: "Solution Design & Prototyping",
                desc: "Design your product solution. Build your first working prototype. Get brutally honest feedback from your cohort and industry mentors."
              },
              {
                week: "Week 4",
                title: "Build Sprint",
                desc: "The full build week. No distractions. Your team ships a functional version of the product. Industry experts check in daily."
              },
              {
                week: "Week 5",
                title: "Market Testing & Iteration",
                desc: "Take your product to real users. Collect data. Iterate fast. This week determines your ranking in the cohort."
              },
              {
                week: "Week 6",
                title: "Buyer Demo Day",
                desc: "Present your finished product to a panel of real industry buyers, investors, and partners. The best products get distribution deals."
              }
            ].map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex gap-6">
                  <div 
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: i === 0 ? "#1DB8A0" : "#E6F7F5",
                      border: `2px solid ${i === 0 ? "#1DB8A0" : "#D4EDEA"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontSize: 24,
                      fontWeight: 700,
                      color: i === 0 ? "#fff" : "#1DB8A0",
                      flexShrink: 0
                    }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="gold-label" style={{ fontSize: 11 }}>{step.week}</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "#0D1E2C", marginTop: "0.5rem", marginBottom: "0.75rem" }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: 15, color: "#4A6670", lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section style={{ background: "#E6F7F5", padding: "80px 0" }}>
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <Reveal>
            <div className="text-center">
              <div className="gold-label">ELIGIBILITY</div>
              <h2
                className="mx-auto mt-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "#0D1E2C",
                  fontSize: 42,
                  lineHeight: 1.15,
                }}
              >
                Who should<br />
                <span style={{ color: "#1DB8A0" }}>apply?</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: "💼", title: "Working Professionals", desc: "You're employed in any of the 5 industries and want to create real impact beyond your job description." },
              { icon: "🚀", title: "Early Entrepreneurs", desc: "You have a business idea but haven't built a product yet. Track One is your structured launchpad." },
              { icon: "🎓", title: "Recent Graduates", desc: "You have the knowledge but lack real-world product experience. This gives you the portfolio proof." },
              { icon: "🔄", title: "Career Switchers", desc: "Moving into a new industry? Build credibility fast by shipping something real in that space." },
              { icon: "🌍", title: "Pan-African Talent", desc: "Open to professionals across all African countries. Remote-first structure means location doesn't limit you." },
              { icon: "⚡", title: "Action-Takers", desc: "You don't just talk about ideas — you execute. We want builders, not observers." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div 
                  className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ 
                    background: "#fff",
                    borderRadius: 12,
                    border: "1px solid #D4EDEA"
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: "1rem" }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 17, color: "#0D1E2C", marginBottom: "0.75rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#4A6670", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-white px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="text-center">
              <div className="gold-label">BENEFITS</div>
              <h2
                className="mt-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0D1E2C", fontSize: 42, lineHeight: 1.2 }}
              >
                What you<br />
                <span style={{ color: "#1DB8A0" }}>walk away with</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              { icon: "🏗️", title: "A Real, Shipped Product", desc: "Not a concept deck. Not a mockup. A functional product you built, tested, and presented to actual buyers." },
              { icon: "🤝", title: "Industry Network", desc: "99 builders in your cohort, mentors from leading African companies, and buyers actively looking for solutions." },
              { icon: "📈", title: "Builder Portfolio", desc: "A verified, documented build journey that proves your capabilities to future employers, investors, or clients." },
              { icon: "🎯", title: "Market Access", desc: "Top teams get introductions to distribution partners, buyers, and investors at Demo Day — no cold outreach needed." },
              { icon: "🧠", title: "Expert Mentorship", desc: "Weekly sessions with industry practitioners who have actually built and sold products in the African market." },
              { icon: "🏆", title: "Skillyme Certification", desc: "A Track One completion credential backed by real output — not just attendance hours." }
            ].map((perk, i) => (
              <Reveal key={i} delay={i * 100}>
                <div 
                  className="flex gap-4 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ 
                    background: "#E6F7F5",
                    borderRadius: 12,
                    border: "1px solid #D4EDEA"
                  }}
                >
                  <div 
                    style={{
                      width: 52,
                      height: 52,
                      background: "rgba(29, 184, 160, 0.15)",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      flexShrink: 0
                    }}
                  >
                    {perk.icon}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0D1E2C", marginBottom: "0.5rem" }}>
                      {perk.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "#4A6670", lineHeight: 1.6 }}>
                      {perk.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
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

      {/* FINAL CTA */}
      <section className="bg-white px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal>
            <h2
              className="mt-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0D1E2C", fontSize: 48, lineHeight: 1.2 }}
            >
              Your spot is<br />
              <span style={{ color: "#1DB8A0" }}>waiting.</span>
            </h2>
            <p className="mt-6 mx-auto" style={{ fontWeight: 300, color: "#4A6670", fontSize: 16, lineHeight: 1.7, maxWidth: 600 }}>
              Applications close May 14, 2026. 100 spots total.
            </p>
            <div className="mt-12 flex justify-center gap-4">
              <Link to="/apply" className="btn-gold">Apply Now — Free</Link>
              <Link to="/about" className="btn-dark">Learn More</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
