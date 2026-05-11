import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — Skillyme Africa Track One" },
      {
        name: "description",
        content:
          "Apply to Skillyme Africa Track One. 10–15 minutes. Ksh 5,000 paid only after acceptance. Applications close May 14, 2026.",
      },
      { property: "og:title", content: "Apply — Skillyme Africa Track One" },
      { property: "og:description", content: "Selective. Fast. Honest. 100 spots. Closes May 14, 2026." },
    ],
  }),
  component: ApplyPage,
});

function Step({ n, title, detail }: { n: string; title: string; detail: string }) {
  return (
    <div className="flex-1 px-4 text-center md:px-6">
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#1DB8A0", opacity: 0.6, fontSize: 28 }}>
        {n}
      </div>
      <div className="mt-2" style={{ color: "#fff", fontWeight: 500, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {title}
      </div>
      <div className="mt-2" style={{ color: "#E8F4F2", fontWeight: 300, fontSize: 13, lineHeight: 1.6 }}>
        {detail}
      </div>
    </div>
  );
}

function ApplyPage() {
  const [iframeFailed, setIframeFailed] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Load Tally embed script
    const w = "https://tally.so/widgets/embed.js";
    const v = () => {
      const t = (window as any).Tally;
      if (typeof t !== "undefined") {
        t.loadEmbeds();
      } else {
        document.querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]").forEach((e) => {
          if (e.dataset.tallySrc) e.src = e.dataset.tallySrc;
        });
      }
    };
    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (!document.querySelector(`script[src="${w}"]`)) {
      const s = document.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = () => {
        setIframeFailed(true);
        v();
      };
      document.body.appendChild(s);
    }

    // Deep link to form
    if (window.location.hash === "#apply-form" && wrapperRef.current) {
      setTimeout(() => wrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
    }
  }, []);

  const scrollToForm = () => {
    wrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* CONVICTION HERO */}
      <section className="city-section city-overlay-72" style={{ padding: "160px 24px 100px", textAlign: "center" }}>
        <div className="mx-auto max-w-[900px]">
          <div className="anim-fade-in gold-label city-text">YOUR APPLICATION</div>
          <h1
            className="anim-slide-up delay-100 city-heading mt-6"
            style={{
              fontFamily: "var(--font-display)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "clamp(52px, 7vw, 72px)",
              lineHeight: 1.05,
            }}
          >
            Selective. Fast. Honest.
          </h1>
          <p
            className="anim-slide-up delay-400 city-text mx-auto mt-6"
            style={{ color: "#E8F4F2", fontWeight: 300, fontSize: 18, maxWidth: 560, lineHeight: 1.6 }}
          >
            The form takes 10–15 minutes. Answer honestly — we are looking for accurate, not impressive.
            You only pay after you are accepted.
          </p>

          {/* Inline stats */}
          <div className="anim-fade-in delay-600 mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {[
              { n: "10–15 min", l: "TO COMPLETE" },
              { n: "Ksh 5,000", l: "PAID AFTER ACCEPTANCE" },
              { n: "May 14", l: "APPLICATION DEADLINE" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#1DB8A0", fontSize: 36 }}>
                  {s.n}
                </div>
                <div
                  className="mt-1"
                  style={{ color: "#E8F4F2", fontWeight: 300, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12" style={{ height: 1, width: 80, background: "rgba(29, 184, 160,0.4)" }} />

          {/* Process steps */}
          <div className="mt-12">
            {/* Desktop horizontal */}
            <div className="hidden items-stretch md:flex">
              <Step n="01" title="APPLY" detail="Complete this form. 10–15 minutes." />
              <div style={{ alignSelf: "center", color: "#1DB8A0", opacity: 0.5, fontSize: 24, fontFamily: "var(--font-display)" }}>→</div>
              <Step n="02" title="STAGE 1" detail="20-min interview. May 18–21." />
              <div style={{ alignSelf: "center", color: "#1DB8A0", opacity: 0.5, fontSize: 24, fontFamily: "var(--font-display)" }}>→</div>
              <Step n="03" title="STAGE 2" detail="15-min founder call. May 22–23." />
              <div style={{ alignSelf: "center", color: "#1DB8A0", opacity: 0.5, fontSize: 24, fontFamily: "var(--font-display)" }}>→</div>
              <Step n="04" title="BEGIN" detail="Pay Ksh 5,000. Sprint starts May 25." />
            </div>
            {/* Mobile vertical */}
            <div className="md:hidden">
              {[
                { n: "01", t: "APPLY", d: "Complete this form. 10–15 minutes." },
                { n: "02", t: "STAGE 1", d: "20-min interview. May 18–21." },
                { n: "03", t: "STAGE 2", d: "15-min founder call. May 22–23." },
                { n: "04", t: "BEGIN", d: "Pay Ksh 5,000. Sprint starts May 25." },
              ].map((s, i, arr) => (
                <div key={s.n} className="py-5" style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(29, 184, 160,0.3)" : "none" }}>
                  <Step n={s.n} title={s.t} detail={s.d} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EMBEDDED FORM */}
      <section className="bg-white" style={{ padding: "80px 0 0 0" }}>
        <div className="mx-auto max-w-[860px] px-6 md:px-10">
          <div className="text-center" style={{ color: "#4A6670", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            APPLICATION FORM — TRACK ONE, MAY 2026
          </div>
          <div className="mx-auto mt-8" style={{ height: 1, background: "rgba(29, 184, 160,0.2)" }} />

          <div
            id="apply-form"
            ref={wrapperRef}
            className="tally-embed-wrapper mt-10"
            style={{
              background: "#fff",
              border: "1px solid #D4EDEA",
              borderRadius: 0,
              overflow: "hidden",
              minHeight: 800,
            }}
          >
            {iframeFailed ? (
              <div className="text-center" style={{ padding: 60, color: "#4A6670", fontWeight: 300, fontSize: 16 }}>
                The form is temporarily unavailable. Please email info@skillyme.africa or open the form directly.
                <div className="mt-6">
                  <a className="btn-gold" href="https://tally.so/r/Y5oNK6" target="_blank" rel="noopener noreferrer">
                    Open Form →
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                data-tally-src="https://tally.so/embed/Y5oNK6?alignLeft=0&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height={800}
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="Skillyme Africa — Track One Application"
                style={{ border: "none", minHeight: 800, width: "100%" }}
              />
            )}
          </div>

          {/* Reassurance strip */}
          <div
            className="mt-0 flex flex-col gap-3 py-8 md:flex-row md:items-center md:justify-between"
            style={{ borderTop: "1px solid #D4EDEA" }}
          >
            <div style={{ color: "#4A6670", fontWeight: 300, fontSize: 14, fontStyle: "italic" }}>
              You will not be charged until you receive an acceptance email and confirm your spot.
            </div>
            <div style={{ color: "#4A6670", fontWeight: 300, fontSize: 13 }}>
              Questions? Email info@skillyme.africa
            </div>
          </div>
        </div>
      </section>

      {/* KEY DATES */}
      <section className="px-6 py-24 md:px-10" style={{ background: "#D4EDEA" }}>
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <div className="gold-label">KEY DATES</div>
            <h2 className="mt-4" style={{ fontFamily: "var(--font-display)", color: "#0D1E2C", fontWeight: 600, fontSize: 38 }}>
              Write these down. They do not move.
            </h2>
          </Reveal>

          <div className="relative mt-12 pl-8" style={{ borderLeft: "1px solid #1DB8A0" }}>
            {[
              { d: "May 14, 2026", t: "Applications close" },
              { d: "May 18 – May 21", t: "Stage 1 interviews" },
              { d: "May 22 – May 23", t: "Stage 2 founder calls" },
              { d: "May 24", t: "Acceptance + payment confirmation" },
              { d: "May 25, 2026", t: "Track One sprint begins" },
              { d: "July 3, 2026", t: "Skillyme Africa Gala — judges and buyers in the room" },
            ].map((e) => (
              <Reveal key={e.d}>
                <div className="relative mb-8">
                  <div
                    className="absolute"
                    style={{ left: -39, top: 8, width: 12, height: 12, background: "#1DB8A0" }}
                  />
                  <div className="gold-label" style={{ color: "#0D1E2C" }}>{e.d}</div>
                  <div className="mt-1" style={{ color: "#111", fontSize: 18, fontWeight: 400 }}>{e.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="city-light" style={{ padding: "100px 24px", textAlign: "center" }}>
        <h3
          style={{ fontFamily: "var(--font-display)", color: "#0D1E2C", fontWeight: 700, fontSize: 40 }}
        >
          Applications close May 14, 2026.
        </h3>
        <p className="mt-3" style={{ color: "#4A6670", fontWeight: 300, fontSize: 18 }}>
          100 spots. Not 101.
        </p>
        <button
          onClick={scrollToForm}
          className="mt-8"
          style={{
            background: "transparent",
            border: "none",
            color: "#1DB8A0",
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          ↑ Back to the form
        </button>
      </section>
    </>
  );
}
