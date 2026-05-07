import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl" style={{ fontFamily: "var(--font-display)", color: "#0D1E2C" }}>404</h1>
        <h2 className="mt-4 text-xl">Page not found</h2>
        <p className="mt-2 text-sm" style={{ color: "#4A6670" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-gold btn-gold-sm">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Skillyme Africa — Track One | Apply Now" },
      {
        name: "description",
        content:
          "A 6-week competitive builder program for African professionals. 100 spots. 5 industries. Real product. Real buyers. Applications close May 14, 2026.",
      },
      { name: "author", content: "Skillyme Africa" },
      { property: "og:title", content: "Skillyme Africa — Track One | Apply Now" },
      {
        property: "og:description",
        content:
          "A 6-week competitive builder program for African professionals. 100 spots. 5 industries. Real product. Real buyers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Skillyme Africa — Track One | Apply Now" },
      { name: "description", content: "Skillyme Launchpad builds a premium, multi-page website for Skillyme Africa's competitive builder program." },
      { property: "og:description", content: "Skillyme Launchpad builds a premium, multi-page website for Skillyme Africa's competitive builder program." },
      { name: "twitter:description", content: "Skillyme Launchpad builds a premium, multi-page website for Skillyme Africa's competitive builder program." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f0582b0d-f952-4689-9983-bd352b0ab4bc/id-preview-e4256eec--694e6488-1e38-4a2a-8a7f-2c71a8db7d59.lovable.app-1777632502541.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f0582b0d-f952-4689-9983-bd352b0ab4bc/id-preview-e4256eec--694e6488-1e38-4a2a-8a7f-2c71a8db7d59.lovable.app-1777632502541.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        type: "image/svg+xml",
        href:
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%230D1E2C'/><text x='50%25' y='54%25' text-anchor='middle' dominant-baseline='middle' font-family='Georgia,serif' font-size='22' font-weight='700' fill='%231DB8A0'>S</text></svg>",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteNav />
      <main style={{ paddingTop: 0 }}>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
