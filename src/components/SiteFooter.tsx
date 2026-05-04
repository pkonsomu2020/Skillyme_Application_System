import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer
      className="city-section city-overlay-deep"
      style={{
        borderTop: "1px solid rgba(29, 184, 160,0.25)",
        padding: "40px 24px",
      }}
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-3">
        <div>
          <img
            src="/assets/skillyme-logo.png"
            alt="Skillyme Africa"
            style={{ height: 48, width: "auto", marginBottom: 10, display: "block", imageRendering: "auto" }}
          />
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#1DB8A0", fontSize: 13 }}>
            Track One — 2026
          </div>
          <p className="mt-3 text-[14px]" style={{ color: "#E8F4F2", fontWeight: 300, lineHeight: 1.7 }}>
            A 6-week competitive builder program for African professionals. Track One launches May 2026.
          </p>
        </div>

        <div>
          <div className="gold-label mb-4">Navigate</div>
          <ul className="space-y-2 text-[14px]" style={{ color: "#E8F4F2", fontWeight: 300 }}>
            <li><Link to="/" className="story-link">Home</Link></li>
            <li><Link to="/about" className="story-link">About</Link></li>
            <li><Link to="/projects" className="story-link">Projects</Link></li>
            <li><Link to="/apply" className="story-link">Apply</Link></li>
            <li><Link to="/contact" className="story-link">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="gold-label mb-4">Contact</div>
          <p className="text-[14px]" style={{ color: "#E8F4F2", fontWeight: 300, lineHeight: 1.8 }}>
            africaskillyme@gmail.com<br />
            +254 745 266 526<br />
            Nairobi, Kenya<br />
            Mon–Fri · 9:00 – 18:00 EAT
          </p>
        </div>
      </div>

      <div
        className="mx-auto mt-12 flex max-w-[1400px] flex-col items-start justify-between gap-3 border-t pt-6 md:flex-row md:items-center"
        style={{ borderColor: "rgba(29, 184, 160,0.2)" }}
      >
        <div className="text-[12px]" style={{ color: "#E8F4F2", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} SKILLYME AFRICA · ALL RIGHTS RESERVED
        </div>
        <div className="text-[12px]" style={{ color: "#E8F4F2", fontStyle: "italic", fontWeight: 300 }}>
          The work speaks for itself.
        </div>
      </div>
    </footer>
  );
}
