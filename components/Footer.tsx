import Link from "next/link";

const footerLinks = {
  Product: [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/for-diners", label: "For Diners" },
    { href: "/for-restaurants", label: "For Restaurants" },
    { href: "/download", label: "Download App" },
  ],
  Company: [
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
  ],
  Support: [
    { href: "/help", label: "Help Centre" },
    { href: "/contact", label: "Contact Us" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A2E35] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-5">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A6B5C] shadow-lg shadow-black/20">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.869 15.429 6 11.613 6 8a6 6 0 0 1 12 0z" />
                  <line x1="12" y1="13" x2="12" y2="15" />
                  <path d="M12 2v2" />
                  <path d="M12 18v4" />
                  <path d="M4.93 4.93l1.41 1.41" />
                  <path d="M17.66 17.66l1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="M6.34 17.66l-1.41 1.41" />
                  <path d="M19.07 4.93l-1.41 1.41" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">deekup</span>
            </Link>
            <p className="mt-6 max-w-xs text-base leading-relaxed text-white/50">
              Fine dining. Your price. <br />
              Connecting food lovers with premium restaurant experiences at exclusive off-peak rates.
            </p>
            {/* Social links */}
            <div className="mt-8 flex gap-5">
              <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all hover:bg-[#1A6B5C] hover:text-white hover:shadow-lg hover:shadow-[#1A6B5C]/20">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="TikTok" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all hover:bg-[#1A6B5C] hover:text-white hover:shadow-lg hover:shadow-[#1A6B5C]/20">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.27 8.27 0 004.84 1.55V6.84a4.85 4.85 0 01-1.07-.15z"/></svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#E8913A]">{group}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-medium text-white/50 transition-colors hover:text-[#1A6B5C]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 text-xs font-medium text-white/30 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Deekup Pty Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <span>ABN 12 345 678 910</span>
            <span>Made with care in Australia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
