import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Deekup",
  description:
    "Download the Deekup app on iOS and Android. Free to download, free to use. Discover premium restaurant experiences at exclusive off-peak prices.",
};

const appFeatures = [
  "Browse premium restaurants near you",
  "Book exclusive off-peak dining slots",
  "Pay with the Deekup Card — discounts applied automatically",
  "Push notifications when new offers go live",
  "Full booking history and receipts",
  "Works in Melbourne, Sydney, and more cities launching soon",
];

const QRCodeSVG = ({ size = 160 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="white"/>
    <rect x="10" y="10" width="20" height="20" stroke="#1A2E35" strokeWidth="4" fill="none"/>
    <rect x="15" y="15" width="10" height="10" fill="#1A2E35"/>
    <rect x="70" y="10" width="20" height="20" stroke="#1A2E35" strokeWidth="4" fill="none"/>
    <rect x="75" y="15" width="10" height="10" fill="#1A2E35"/>
    <rect x="10" y="70" width="20" height="20" stroke="#1A2E35" strokeWidth="4" fill="none"/>
    <rect x="15" y="75" width="10" height="10" fill="#1A2E35"/>
    {/* Random bits */}
    <rect x="40" y="10" width="5" height="5" fill="#1A2E35"/>
    <rect x="50" y="20" width="10" height="5" fill="#1A2E35"/>
    <rect x="10" y="40" width="5" height="10" fill="#1A2E35"/>
    <rect x="25" y="40" width="15" height="5" fill="#1A2E35"/>
    <rect x="50" y="50" width="20" height="20" fill="#1A6B5C" fillOpacity="0.2"/>
    {/* Center logo placeholder */}
    <rect x="40" y="40" width="20" height="20" rx="4" fill="#1A6B5C"/>
    <path d="M45 50L55 50M50 45L50 55" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <rect x="70" y="40" width="10" height="5" fill="#1A2E35"/>
    <rect x="85" y="70" width="5" height="5" fill="#1A2E35"/>
    <rect x="40" y="80" width="20" height="5" fill="#1A2E35"/>
  </svg>
);

const PhoneMockup = ({ variant = "primary" }: { variant?: "primary" | "secondary" }) => (
  <svg width="240" height="480" viewBox="0 0 240 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
    <rect x="4" y="4" width="232" height="472" rx="36" fill="#1A2E35" stroke="#334155" strokeWidth="8"/>
    <rect x="80" y="20" width="80" height="24" rx="12" fill="black"/> {/* Notch */}
    
    {/* Screen Content */}
    <rect x="16" y="56" width="208" height="408" rx="24" fill={variant === "primary" ? "#F1ECDA" : "#1A6B5C"} fillOpacity={variant === "primary" ? 1 : 0.05}/>
    
    {variant === "primary" ? (
      <>
        <text x="32" y="88" fill="#1A2E35" fontSize="14" fontWeight="700">Explore</text>
        <rect x="32" y="104" width="176" height="120" rx="12" fill="white" shadow-sm="true"/>
        <rect x="32" y="104" width="176" height="80" rx="12" fill="#e5e7eb"/>
        <text x="44" y="200" fill="#1A2E35" fontSize="10" fontWeight="600">The Oak Room</text>
        <rect x="160" y="190" width="36" height="16" rx="8" fill="#1A6B5C"/>
        <text x="166" y="201" fill="white" fontSize="8" fontWeight="700">-40%</text>
        
        <rect x="32" y="240" width="176" height="120" rx="12" fill="white"/>
        <rect x="32" y="240" width="176" height="80" rx="12" fill="#e5e7eb"/>
        <text x="44" y="336" fill="#1A2E35" fontSize="10" fontWeight="600">Rosemary & Salt</text>
        <rect x="160" y="326" width="36" height="16" rx="8" fill="#E8913A"/>
        <text x="166" y="337" fill="white" fontSize="8" fontWeight="700">-30%</text>
      </>
    ) : (
      <>
        <rect x="40" y="100" width="160" height="100" rx="12" fill="#1A6B5C"/>
        <text x="56" y="130" fill="white" fontSize="12" fontWeight="700">Deekup Card</text>
        <text x="56" y="170" fill="white" fillOpacity="0.5" fontSize="8">•••• 4829</text>
        <circle cx="120" cy="300" r="40" fill="#1A6B5C" fillOpacity="0.1"/>
        <path d="M105 300L115 310L135 290" stroke="#1A6B5C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="80" y="360" fill="#1A6B5C" fontSize="10" fontWeight="600" textAnchor="middle">Payment Success</text>
      </>
    )}
    
    {/* Tab bar */}
    <rect x="16" y="420" width="208" height="44" fill="white" fillOpacity="0.9"/>
    <circle cx="50" cy="442" r="8" fill="#1A6B5C"/>
    <circle cx="120" cy="442" r="8" fill="#94a3b8"/>
    <circle cx="190" cy="442" r="8" fill="#94a3b8"/>
  </svg>
);

export default function DownloadPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[color:var(--color-cream)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h1 className="text-5xl font-medium tracking-wide text-[color:var(--color-text)] leading-tight">
                Download Deekup.
                <br />
                <span className="text-[color:var(--color-primary)]">Eat better tonight.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-text-muted)]">
                Free on iOS and Android. Set up your account, discover restaurants near you, and book your first discounted table — all in under 3 minutes.
              </p>
              <ul className="mt-8 space-y-3">
                {appFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[color:var(--color-text)]">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary)]">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                {/* App Store button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-3 rounded-2xl bg-[#1A2E35] px-6 py-4 text-white transition-all hover:bg-black hover:scale-105"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>
                    <div className="text-[10px] text-white/70">Download on the</div>
                    <div className="text-base font-semibold">App Store</div>
                  </span>
                </a>
                {/* Google Play button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-3 rounded-2xl bg-[#1A2E35] px-6 py-4 text-white transition-all hover:bg-black hover:scale-105"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.37.2.8.19 1.22-.06l11.9-6.87-2.52-2.52-10.6 9.45zm-1.1-20.52C2 3.6 2 3.97 2 4.35v15.3c0 .38.08.75.08.75l11.06-10.4L2.08 3.24zM20.55 10.3l-2.6-1.5-2.84 2.67 2.84 2.67 2.62-1.52c.74-.43.74-1.88-.02-2.32zM4.4.3C4 .06 3.55.06 3.18.3L14 10.4 16.52 7.87 4.4.3z"/>
                  </svg>
                  <span>
                    <div className="text-[10px] text-white/70">Get it on</div>
                    <div className="text-base font-semibold">Google Play</div>
                  </span>
                </a>
              </div>
              <p className="mt-4 text-sm text-[color:var(--color-text-muted)]">iOS 16+ and Android 10+ required. Free to download.</p>
            </div>

            {/* Phone mockups */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="relative z-10">
                  <PhoneMockup variant="primary" />
                </div>
                <div className="absolute -right-16 top-20 z-0 opacity-80 md:opacity-100">
                  <PhoneMockup variant="secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR code section */}
      <section className="bg-[#1A2E35] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-medium">Scan to download</h2>
          <p className="mt-3 text-white/60">Point your phone camera at the QR code to open the app store directly.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-2xl bg-white p-3 shadow-2xl">
                <QRCodeSVG />
              </div>
              <div className="text-sm font-medium text-white/70">iOS — App Store</div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-2xl bg-white p-3 shadow-2xl">
                <QRCodeSVG />
              </div>
              <div className="text-sm font-medium text-white/70">Android — Google Play</div>
            </div>
          </div>
        </div>
      </section>

      {/* For restaurants CTA */}
      <section className="bg-[color:var(--color-cream)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[color:var(--color-accent)]">Are you a restaurant?</div>
          <h2 className="text-3xl font-medium text-[color:var(--color-text)]">Partner with Deekup</h2>
          <p className="mt-4 text-[color:var(--color-text-muted)]">
            List your restaurant on Deekup and fill off-peak tables with motivated food lovers. No setup fee, no monthly subscription.
          </p>
          <div className="mt-8">
            <Link
              href="/for-restaurants"
              className="inline-flex items-center gap-2 rounded-full bg-[#1A2E35] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--color-primary)]"
            >
              Learn about partnering &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
