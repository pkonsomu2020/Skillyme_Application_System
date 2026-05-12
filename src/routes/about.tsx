import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";

const APPLY_URL = "https://tally.so/r/Y5oNK6";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Skillyme Africa" },
      {
        name: "description",
        content:
          "We are not here to teach you. We are here to give you the room. Why Skillyme Africa exists, who built it, and what makes Track One different.",
      },
      { property: "og:title", content: "About Skillyme Africa — We are here to give you the room." },
      {
        property: "og:description",
        content:
          "Why Track One exists, the team behind it, and what makes this program different from anything else in African talent development.",
      },
    ],
  }),
  component: AboutPage,
});

function DifferenceItem({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="flex gap-6 py-8" style={{ borderTop: "1px solid #E0E0E0" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          color: "#1DB8A0",
          fontSize: 28,
          lineHeight: 1,
          minWidth: 48,
        }}
      >
        {n}
      </div>
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            color: "#0D1E2C",
            fontWeight: 600,
            fontSize: 22,
            lineHeight: 1.25,
          }}
        >
          {title}
        </h3>
        <p className="mt-3" style={{ color: "#111", fontWeight: 300, fontSize: 16, lineHeight: 1.75 }}>
          {body}
        </p>
      </div>
    </div>
  );
}

function TeamCard({
  name,
  role,
  bio,
  photo,
  linkedin,
}: {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
}) {
  return (
    <div
      className="group relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
      style={{
        borderRadius: 12,
        background: "#1a1a1a",
        maxWidth: 320,
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Photo Section */}
      <div
        style={{
          width: "100%",
          aspectRatio: "4 / 5",
          background: "#D4EDEA",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {photo ? (
          <img
            src={photo}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1DB8A0",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Photo
          </div>
        )}
      </div>

      {/* Dark Overlay Section */}
      <div
        style={{
          background: "#1a1a1a",
          padding: "20px 18px",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 20,
            lineHeight: 1.2,
            marginBottom: 4,
          }}
        >
          {name}
        </h3>
        <div
          style={{
            color: "#1DB8A0",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          {role}
        </div>
        
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors"
            style={{ color: "#1DB8A0", fontSize: 12, textDecoration: "none" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#1DB8A0")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="city-section relative" style={{ padding: "160px 24px 110px" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="anim-fade-in gold-label city-text">ABOUT SKILLYME AFRICA</div>
          <h1
            className="anim-slide-up delay-100 city-heading mt-6"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "#fff",
              fontSize: "clamp(40px, 6vw, 64px)",
              lineHeight: 1.05,
              maxWidth: 920,
            }}
          >
            We are not here to teach you. We are here to give you the room.
          </h1>
        </div>
      </section>

      {/* WHY THIS EXISTS */}
      <section className="bg-white px-6 py-24 md:px-10">
        <Reveal>
          <div className="mx-auto max-w-[820px]">
            <div className="gold-label">WHY THIS EXISTS</div>
            <h2
              className="mt-5"
              style={{
                fontFamily: "var(--font-display)",
                color: "#0D1E2C",
                fontWeight: 600,
                fontSize: 36,
                lineHeight: 1.2,
              }}
            >
              The gap between what Africans know and what the market sees.
            </h2>

            <div
              className="mt-10 space-y-6"
              style={{ color: "#111", fontWeight: 300, fontSize: 17, lineHeight: 1.85 }}
            >
              <p>
                Every year, thousands of Africans graduate with real skills and real knowledge — and walk
                straight into invisibility. Not because they are not capable. Because the market has no way
                to see what they can do. Our education system was never built to produce proof. It was built
                to produce certificates. And the gap between those two things is where African talent goes to
                waste.
              </p>
              <p>
                I have watched professionals with years of experience get overlooked because they could not
                point to something they built. I have watched developers spend years in tutorial hell —
                building and building and building — with nothing to show a buyer. I have watched domain
                experts who know their industries better than anyone spend their careers serving someone
                else's platform, invisible to the market that should be paying them.
              </p>
              <p>
                Nobody was fixing this. Programs were teaching people to build — which is good. But building
                without commercialisation is a hobby, not a career. Nobody was putting African professionals
                in front of real buyers. Nobody was mixing the people who know the technology with the people
                who know the problem. Nobody was creating the high-stakes, commercially serious environment
                where African talent could finally be evaluated on its own terms.
              </p>
              <p style={{ color: "#0D1E2C", fontWeight: 500 }}>
                That is what Skillyme Africa is. Not a course. Not a fellowship. A room where what you
                already know finally gets tested against a real problem, a real competitor, and a real buyer.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div style={{ width: 40, height: 1, background: "#1DB8A0" }} />
              <div style={{ color: "#0D1E2C", fontWeight: 500, fontSize: 15 }}>
                Fredrick Ochieng · Founder
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TEAM */}
      <section className="px-6 py-24 md:px-10" style={{ background: "#F7FAF9" }}>
        <Reveal>
          <div className="mx-auto max-w-[1200px]">
            <div className="gold-label">THE TEAM</div>
            <h2
              className="mt-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "#0D1E2C",
                fontWeight: 600,
                fontSize: 38,
                lineHeight: 1.2,
              }}
            >
              The people building the room.
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-5 md:grid-cols-3">
          <TeamCard
            name="Fredrick Ochieng"
            role="Founder & CEO"
            bio="Fredrick founded Skillyme Africa to build the commercial proving ground he wished existed for African professionals. Track One is his answer to the gap between what Africans know and what the market sees."
            photo="/fred_ochieng.jpeg"
            linkedin="https://www.linkedin.com/in/fredrick-ochieng-99724a378"
          />
          <TeamCard
            name="Peter Onsomu"
            role="CTO"
            bio="Peter leads the technical architecture of Track One, ensuring that every team has the infrastructure and support needed to build, test, and ship real products in six weeks."
            photo="/Peter_Onsomu.jpg"
            linkedin="https://www.linkedin.com/in/peter-onsomu-695593264/"
          />
          <TeamCard
            name="Dancun Santiago"
            role="Operations Lead"
            bio="Bio coming soon."
            linkedin="https://www.linkedin.com/in/dan-k-290359182"
          />
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section className="bg-white px-6 py-24 md:px-10">
        <Reveal>
          <div className="mx-auto max-w-[900px]">
            <div className="gold-label">WHAT MAKES THIS DIFFERENT</div>
            <h2
              className="mt-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "#0D1E2C",
                fontWeight: 600,
                fontSize: 38,
                lineHeight: 1.2,
              }}
            >
              We are not going to tell you this program is transformative. We are going to tell you what it
              actually does.
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 max-w-[900px]">
          <DifferenceItem
            n="01"
            title="We select carefully."
            body="Every participant goes through a 2-stage interview. We are not building a large cohort — we are building a serious room. 100 builders, selected on one criterion: whether they have something to contribute and whether they are ready to show up."
          />
          <DifferenceItem
            n="02"
            title="We do not teach. We test."
            body="Africans are not lacking knowledge. They are lacking the environment to apply it. There are no lectures here. No modules to complete. No YouTube playlists. You come with what you know and you use it — against a real problem, with a real team, under real conditions."
          />
          <DifferenceItem
            n="03"
            title="We mix the people who build with the people who know."
            body="Every team has 5 technical builders and 5 non-technical builders — domain experts, sales leads, financial analysts, strategists, and operations professionals. Because the best product is never built by developers alone."
          />
          <DifferenceItem
            n="04"
            title="We put your work in front of real buyers."
            body="At the Gala on July 9-10, industry buyers, investors, and employers evaluate what your team built. Commercial agreements are signed on the spot. You are not presenting to a panel of lecturers. You are presenting to people who can pay for what you built."
          />
          <DifferenceItem
            n="05"
            title="We reward everyone — including the team that loses."
            body="The winning team earns 70% of commercial revenue. The team that places second earns 5%. Both teams present at the Gala. Both teams leave with a product, a track record, and visibility. Losing here still puts you ahead of where you were before you applied."
          />
          <DifferenceItem
            n="06"
            title="We do not care about your degree."
            body="We care about one thing: whether you are willing to do the work. The education system has already failed enough African professionals. We are not going to continue that."
          />
        </div>
      </section>

      {/* WHAT WE HAVE ALREADY BUILT */}
      <section className="px-6 py-24 md:px-10" style={{ background: "#0D1E2C" }}>
        <Reveal>
          <div className="mx-auto max-w-[900px]">
            <div className="gold-label" style={{ color: "#1DB8A0" }}>
              WHAT WE HAVE ALREADY BUILT
            </div>
            <h2
              className="mt-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 38,
                lineHeight: 1.2,
              }}
            >
              Track One is not the beginning.
            </h2>

            <div
              className="mt-8 space-y-6"
              style={{ color: "#E8F4F2", fontWeight: 300, fontSize: 17, lineHeight: 1.85 }}
            >
              <p>
                Before this program existed in its current form, we ran a builder program with 60
                participants — 30 with legal backgrounds, 30 technical builders.
              </p>
              <p>
                Two real products were built and shipped to market in 7 weeks. One was an office hire
                management system for a corporate client. The second was a complete pharmacy management
                system — designed, built, and deployed for a real pharmacy operation.
              </p>
              <p>
                What we learned from that program built this one. The gap we saw was clear: when every person
                on a team is technical, nobody truly owns the domain. Developers were spending weeks
                researching problems that a logistics professional or a finance expert could have defined in
                an hour. That is the waste we eliminated. That is why every Track One team has both — the
                people who build and the people who know.
              </p>
              <p>
                We also learned that people build better under pressure than they learn in lectures. Every
                participant from that cohort said the same thing: they grew more in those 7 weeks of active
                building than in any course they had ever taken. Track One is what you get when you take that
                skeleton and give it real commercial infrastructure, a competitive model, and a Gala where
                buyers show up to act on what they see.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { k: "60", v: "Participants in our pilot" },
                { k: "2", v: "Products shipped to market" },
                { k: "7 wks", v: "From idea to deployment" },
              ].map((s) => (
                <div
                  key={s.v}
                  style={{ borderTop: "1px solid #1DB8A0", paddingTop: 20 }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 44,
                      lineHeight: 1,
                    }}
                  >
                    {s.k}
                  </div>
                  <div className="mt-2" style={{ color: "#E8F4F2", fontSize: 14, fontWeight: 300 }}>
                    {s.v}
                  </div>
                </div>
              ))}
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
              style={{ color: "#4A6670", fontWeight: 300, fontSize: 17, lineHeight: 1.7, maxWidth: 620 }}
            >
              100 spots. 5 industries. One Gala in Nairobi where what you built is evaluated by people who
              can act on it.
            </p>
            <div className="mt-10 flex justify-center">
              <a href={APPLY_URL} target="_blank" rel="noreferrer" className="btn-gold">
                Apply for Track One →
              </a>
            </div>
            <div
              className="mt-6 space-y-1"
              style={{ color: "#4A6670", fontSize: 14, fontWeight: 400 }}
            >
              <div>Sprint: June 2 – July 8, 2026</div>
              <div>Gala: July 9-10, 2026, Nairobi</div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
