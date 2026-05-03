import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/apply", label: "Apply" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: 64,
          background: scrolled ? "#1B4332" : "rgba(10, 20, 14, 0.55)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(212,175,55,0.3)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 md:px-10">
          <Link to="/" aria-label="Skillyme Africa — Home" className="flex items-center">
            <img
              src="/assets/skillyme-logo.png"
              alt="Skillyme Africa"
              style={{ height: 36, width: "auto", verticalAlign: "middle", display: "block", mixBlendMode: "lighten" }}
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-[14px] transition-colors duration-200"
                  style={{
                    color: active ? "#D4AF37" : "#fff",
                    letterSpacing: "0.05em",
                    borderBottom: active ? "2px solid #D4AF37" : "2px solid transparent",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "#D4AF37"; }}
                  onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <Link to="/apply" className="hidden md:inline-flex btn-gold btn-gold-sm">
            Apply Now
          </Link>

          <button
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            style={{ color: "#D4AF37" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 md:hidden"
          style={{
            background: "rgba(10, 20, 14, 0.97)",
            backdropFilter: "blur(20px)",
          }}
        >
          <button
            className="absolute right-6 top-6"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            style={{ color: "#D4AF37" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            src="/assets/skillyme-logo.png"
            alt="Skillyme Africa"
            style={{ height: 48, width: "auto", marginBottom: 32, display: "block", mixBlendMode: "lighten" }}
          />
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[36px]"
              style={{ fontFamily: "var(--font-display)", color: "#fff", fontWeight: 600 }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/apply" className="btn-gold mt-4">
            Apply Now
          </Link>
        </div>
      )}
    </>
  );
}
