import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Skillyme Africa" },
      {
        name: "description",
        content:
          "Skillyme Africa exists because talented African professionals have never had a room where the stakes were real. Track One is that room.",
      },
      { property: "og:title", content: "About Skillyme Africa — Built for the builders Africa keeps overlooking." },
      { property: "og:description", content: "Why Track One exists, who it's for, and what makes it different." },
    ],
  }),
  component: AboutPage,
});

function CompareRow({ left, right }: { left: string; right: string }) {
  return (
    <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2 md:gap-12" style={{ borderBottom: "1px solid #D4EDEA" }}>
      <div style={{ color: "#4A6670", fontWeight: 300, fontSize: 16, fontStyle: "italic" }}>{left}</div>
      <div style={{ color: "#0D1E2C", fontWeight: 500, fontSize: 17 }}>{right}</div>
    </div>
  );
}

function ProfileBlock({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div
      className="bg-white p-10 transition-colors duration-200 hover:bg-[var(--pale)]"
      style={{ background: "#fff" }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#D4EDEA")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#fff")}
    >
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#1DB8A0", fontSize: 40, lineHeight: 1 }}>
        {n}
      </div>
      <h3 className="mt-4" style={{ fontFamily: "var(--font-display)", color: "#0D1E2C", fontSize: 26, fontWeight: 600 }}>
        {title}
      </h3>
      <p className="mt-3" style={{ color: "#4A6670", fontWeight: 300, fontSize: 15, lineHeight: 1.7 }}>
        {body}
      </p>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      {/* SPLIT HERO */}
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-[55fr_45fr]">
        <div className="city-section flex items-center" style={{ padding: "120px 40px 80px", minHeight: "100vh" }}>
          <div>
            <div className="gold-label city-text">ABOUT SKILLYME AFRICA</div>
            <h1
              className="city-heading mt-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: 54, lineHeight: 1.1 }}
            >
              Built for the builders Africa keeps overlooking.
            </h1>
            <p className="city-text mt-8" style={{ color: "#E8F4F2", fontWeight: 300, fontSize: 17, lineHeight: 1.9, maxWidth: 520 }}>
              Skillyme Africa was built because talented African professionals have never had a room where
              the stakes were real. Where what they built could actually be sold. Where they could earn from it.
            </p>
            <p className="city-text mt-4" style={{ color: "#fff", fontWeight: 500, fontSize: 18 }}>
              Track One is that room.
            </p>
            <div className="mt-10" style={{ height: 1, width: 40, background: "#1DB8A0" }} />
          </div>
        </div>

        <div className="flex items-center bg-white" style={{ padding: "120px 40px 80px" }}>
          <div className="w-full">
            <div className="gold-label">WHAT MAKES THIS DIFFERENT</div>
            <h2 className="mt-6" style={{ fontFamily: "var(--font-display)", color: "#0D1E2C", fontWeight: 600, fontSize: 32 }}>
              Most programs grade your effort. We judge your output.
            </h2>
            <div className="mt-10">
              <CompareRow left="Teaches you skills" right="Puts your skills under commercial pressure" />
              <CompareRow left="Gives you a certificate" right="Gives you a product and a potential income" />
              <CompareRow left="Grades your effort" right="Judges your output against a buyer's standard" />
            </div>
          </div>
        </div>
      </section>

      {/* WHO APPLIES */}
      <section className="bg-white px-6 py-28 md:px-20">
        <Reveal>
          <div className="mx-auto max-w-[1200px]">
            <div className="gold-label">WHO APPLIES</div>
            <h2 className="mt-4" style={{ fontFamily: "var(--font-display)", color: "#0D1E2C", fontWeight: 600, fontSize: 42, lineHeight: 1.15 }}>
              Four builders. One room. The same hunger.
            </h2>
          </div>
        </Reveal>

        <div
          className="mx-auto mt-16 grid max-w-[1200px] grid-cols-1 md:grid-cols-2"
          style={{ background: "#0D1E2C", gap: 2 }}
        >
          <ProfileBlock
            n="01"
            title="The skilled professional"
            body="You already deliver in your role. You want a place where your craft competes against the best, not against a syllabus."
          />
          <ProfileBlock
            n="02"
            title="The early-career builder"
            body="You finished your degree or your first internship. You want to build something real before another year of waiting passes."
          />
          <ProfileBlock
            n="03"
            title="The industry expert"
            body="You know one of these five sectors deeply. You join a team to anchor it in reality and earn from what you help create."
          />
          <ProfileBlock
            n="04"
            title="The job seeker"
            body="The market does not see you yet. Walk out with a product, a network, and a result you can name."
          />
        </div>
      </section>

      {/* GOLD CALLOUT BAR */}
      <section
        className="flex flex-col items-start justify-between gap-6 px-6 py-6 md:flex-row md:items-center md:px-20"
        style={{ background: "#1DB8A0" }}
      >
        <div style={{ color: "#0D1E2C", fontWeight: 500, fontSize: 17, maxWidth: 760 }}>
          You do not need to be a developer to apply. Every team has 5 technical and 5 non-technical builders.
        </div>
        <Link to="/apply" className="btn-dark">Apply Now →</Link>
      </section>
    </>
  );
}
