import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Do I need to be a developer or have technical skills to apply?",
    a: "No. Each team of 10 is deliberately split — 5 technical builders and 5 non-technical builders. We need product thinkers, researchers, business strategists, marketers, and domain experts just as much as we need engineers and designers. If you understand an industry and can work under pressure, you qualify.",
  },
  {
    q: "When do I pay the entry fee — and what does it cover?",
    a: "You do not pay anything to apply. The Ksh 5,000 entry fee is only charged after you pass both interview stages and receive a formal acceptance email. You will have 72 hours to pay and confirm your spot. The fee covers your 6-week sprint, access to mentors, participation in the Gala, and your share of any product revenue if your team wins.",
  },
  {
    q: "What exactly happens during the 6-week sprint?",
    a: "You join a team of 10 builders assigned to one of five industries. Over 6 weeks your team researches the problem, validates a solution with real users, builds a working product, and prepares a commercial pitch. There are no lectures. No passive learning. You build the whole time. At the end your product is evaluated at the Gala by external judges and industry buyers.",
  },
  {
    q: "What is the Gala and who attends?",
    a: "The Skillyme Africa Gala takes place on July 2–3, 2026. It is a live product showcase where all five teams present their work to an audience of industry buyers, investors, and professionals relevant to each track. Judges evaluate each product on commercial viability, execution quality, and market readiness. The winning product per industry is considered for purchase or piloting by attending buyers.",
  },
  {
    q: "What does the winning team actually earn — and how does revenue work?",
    a: "If a buyer at the Gala or through subsequent engagement purchases or licenses the winning product, the winning team earns 70% of the revenue generated. Skillyme Africa retains 30% to support operations and future tracks. Revenue share is distributed equally among all team members who completed the sprint. There is no cap on what the product can earn.",
  },
  {
    q: "Can I apply if I am outside Kenya?",
    a: "Yes. Skillyme Africa is open to professionals across the continent. The sprint itself runs online, so your location does not matter. The Gala in July will have both physical and virtual participation options. Payment of the entry fee can be made via M-Pesa or bank transfer — we will confirm accepted payment methods in your acceptance email.",
  },
  {
    q: "How competitive is the selection process — what are you looking for?",
    a: "We have 100 spots across all five industry tracks. Selection is based on two interview stages — not on your CV or credentials. We are looking for people who think clearly under pressure, understand their chosen industry, and can commit fully to 6 weeks of serious building. We are not looking for the most experienced applicant — we are looking for the most ready one.",
  },
  {
    q: "What is the weekly time commitment during the sprint?",
    a: "Expect to invest 15–20 hours per week minimum. The sprint is intense by design — this is not a side activity. Teams have structured weekly milestones, check-ins with mentors, and peer review sessions. Builders who cannot commit this time are advised to apply in a future track instead.",
  },
  {
    q: "What if my team does not win the Gala?",
    a: "Every builder who completes the sprint walks away with something most programs cannot offer — a real product they built, real user research they conducted, and a documented commercial project they can show to employers, clients, or investors. The Gala also puts every team in the same room as industry buyers, not just the winning one. The exposure is valuable regardless of the result.",
  },
  {
    q: "I have a question not answered here — how do I reach you?",
    a: "Send us an email at africaskillyme@gmail.com or WhatsApp us on +254 745 266 526, Monday to Friday, 8:00am – 5:00pm EAT. You can also use the contact form above on this page. We respond to every message within one business day. We would rather you ask and apply informed than not apply at all.",
  },
];

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number>(0);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
    <section style={{ background: "#FFFFFF", padding: "100px 80px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div className="gold-label" style={{ marginBottom: 16 }}>
          FREQUENTLY ASKED QUESTIONS
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            color: "#0D1E2C",
            fontWeight: 600,
            fontSize: 42,
            lineHeight: 1.15,
            marginBottom: 56,
          }}
        >
          Everything you need
          <br />
          to know before you apply.
        </h2>

        <div>
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            const isHover = hoverIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  borderBottom: "1px solid #D4EDEA",
                  padding: "28px 0",
                  cursor: "pointer",
                }}
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                onMouseEnter={() => setHoverIdx(idx)}
                onMouseLeave={() => setHoverIdx(null)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      color: isHover ? "#1A2E3C" : "#0D1E2C",
                      fontSize: 17,
                      lineHeight: 1.4,
                      maxWidth: "90%",
                      transition: "color 200ms ease",
                    }}
                  >
                    {item.q}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      color: "#1DB8A0",
                      fontSize: 24,
                      flexShrink: 0,
                      transition: "transform 200ms ease",
                      lineHeight: 1,
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </div>
                </div>
                <div
                  style={{
                    maxHeight: isOpen ? 600 : 0,
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 300ms ease, opacity 200ms ease",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      color: "#4A6670",
                      fontSize: 16,
                      lineHeight: 1.85,
                      paddingTop: 16,
                      maxWidth: 780,
                    }}
                  >
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 48,
            height: 1,
            width: "100%",
            background: "#1DB8A0",
            opacity: 0.2,
          }}
        />
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#4A6670",
            fontSize: 14,
            padding: "32px 0 0 0",
            textAlign: "center",
          }}
        >
          Still have a question? Use the form above or email us directly at africaskillyme@gmail.com
        </div>
      </div>
    </section>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Skillyme Africa" },
      {
        name: "description",
        content:
          "Get in touch with the Skillyme Africa team. Email africaskillyme@gmail.com or send us a message — we reply within one working day.",
      },
      { property: "og:title", content: "Contact Skillyme Africa" },
      { property: "og:description", content: "africaskillyme@gmail.com · Nairobi · Mon–Fri 9:00–18:00 EAT" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Skillyme contact — ${form.name || "New message"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:africaskillyme@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* SPLIT HERO */}
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-[45fr_55fr]">
        <div
          className="city-section city-overlay-soft flex items-center"
          style={{ padding: "120px 40px 80px" }}
        >
          <div>
            <div className="gold-label city-text">CONTACT</div>
            <h1
              className="city-heading mt-6"
              style={{ fontFamily: "var(--font-display)", color: "#fff", fontWeight: 700, fontSize: 52, lineHeight: 1.1 }}
            >
              Talk to the team behind Track One.
            </h1>
            <p className="city-text mt-8" style={{ color: "#E8F4F2", fontWeight: 300, fontSize: 17, lineHeight: 1.9 }}>
              For questions about the program, your application, partnerships, or the July Gala —
              reach out directly. We reply within one working day.
            </p>

            <div className="mt-10" style={{ height: 1, width: 40, background: "#1DB8A0" }} />

            <div className="mt-8 space-y-5" style={{ color: "#E8F4F2", fontWeight: 300, fontSize: 15 }}>
              <div>
                <div className="gold-label">EMAIL</div>
                <a href="mailto:africaskillyme@gmail.com" className="story-link mt-1 block" style={{ color: "#fff", fontSize: 17 }}>
                  africaskillyme@gmail.com
                </a>
              </div>
              <div>
                <div className="gold-label">CALL OR WHATSAPP</div>
                <a href="tel:+254745266526" className="story-link mt-1 block" style={{ color: "#fff", fontSize: 17 }}>
                  +254 745 266 526
                </a>
              </div>
              <div>
                <div className="gold-label">LOCATION</div>
                <div className="mt-1" style={{ color: "#fff", fontSize: 17 }}>Nairobi, Kenya</div>
              </div>
              <div>
                <div className="gold-label">HOURS</div>
                <div className="mt-1" style={{ color: "#fff", fontSize: 17 }}>Mon – Fri · 9:00 – 18:00 EAT</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center bg-white" style={{ padding: "120px 40px 80px" }}>
          <form onSubmit={onSubmit} className="w-full max-w-[520px]">
            <div className="gold-label">SEND A MESSAGE</div>
            <h2
              className="mt-4"
              style={{ fontFamily: "var(--font-display)", color: "#0D1E2C", fontWeight: 600, fontSize: 32 }}
            >
              We read every message.
            </h2>

            <div className="mt-8 space-y-5">
              <div>
                <label className="gold-label" style={{ color: "#4A6670" }}>NAME</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 block w-full"
                  style={{
                    border: "1px solid #D4EDEA",
                    background: "#fff",
                    padding: "12px 14px",
                    fontSize: 15,
                    color: "#111",
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <label className="gold-label" style={{ color: "#4A6670" }}>EMAIL</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 block w-full"
                  style={{
                    border: "1px solid #D4EDEA",
                    background: "#fff",
                    padding: "12px 14px",
                    fontSize: 15,
                    color: "#111",
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <label className="gold-label" style={{ color: "#4A6670" }}>MESSAGE</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 block w-full"
                  style={{
                    border: "1px solid #D4EDEA",
                    background: "#fff",
                    padding: "12px 14px",
                    fontSize: 15,
                    color: "#111",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div style={{ color: "#4A6670", fontSize: 13, fontWeight: 300, fontStyle: "italic" }}>
                We respond within 1 working day.
              </div>
              <button type="submit" className="btn-gold">Send Message →</button>
            </div>
          </form>
        </div>
      </section>

      <FaqSection />

      {/* FINAL APPLY CTA */}
      <section
        className="city-light"
        style={{ padding: "140px 24px", textAlign: "center" }}
      >
        <div className="mx-auto max-w-[900px]">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              color: "#0D1E2C",
              fontWeight: 700,
              fontSize: "clamp(40px, 5.5vw, 60px)",
              lineHeight: 1.1,
            }}
          >
            Still reading? You already know this is for you.
          </h2>
          <p className="mx-auto mt-6" style={{ color: "#4A6670", fontWeight: 300, fontSize: 18, maxWidth: 520 }}>
            100 spots. May 14 deadline. The Gala will not wait.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/apply" className="btn-gold">Apply Now →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
