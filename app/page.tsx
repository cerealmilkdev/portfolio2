import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] flex flex-col relative overflow-hidden">
      {/* Dot grid texture */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Header */}
      <header className="flex flex-col items-center justify-center pt-8 pb-2 px-4 relative z-10">
        <h1 className="text-2xl sm:text-3xl font-mono font-semibold tracking-tight text-white mb-2 cursor-default select-none">
          cerealmilkdev
        </h1>
        <div className="text-center space-y-1">
          <p className="text-sm text-neutral-500 font-mono cursor-default">
            <span className="text-neutral-700">›</span> Développeur FullStack
          </p>
          <p className="text-[11px] text-neutral-700 font-mono cursor-default tracking-widest">
            @cerealmilkdev
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="relative flex h-[7px] w-[7px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-emerald-500" />
            </span>
            <span className="text-[10px] text-emerald-600 font-mono tracking-widest uppercase">
              Disponible
            </span>
          </div>
        </div>
      </header>

      {/* Main grid */}
      <main className="flex-1 px-4 sm:px-8 py-4 sm:py-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-4xl mx-auto">

          {/* Tech stack — col-span-2 */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 rounded-xl border border-white/[0.06] hover:border-white/[0.11] bg-white/[0.02] hover:bg-white/[0.035] transition-all duration-300 p-5 flex items-start justify-between group min-h-[190px]">
            <div className="text-left">
              <p className="text-[9px] uppercase tracking-[0.22em] text-neutral-700 font-mono mb-5">
                Tech Stack <span className="text-neutral-800">{"{}"}</span>
              </p>
              <div className="mb-4">
                <p className="text-[9px] uppercase tracking-[0.18em] text-neutral-700 font-mono mb-2">
                  Frontend
                </p>
                <ul className="space-y-1.5 font-mono text-[12px] text-neutral-400">
                  <li>JavaScript — TypeScript</li>
                  <li>Next.js · TailwindCSS</li>
                </ul>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-neutral-700 font-mono mb-2">
                  Backend
                </p>
                <ul className="space-y-1.5 font-mono text-[12px] text-neutral-400">
                  <li>Node.js (Express) · Python</li>
                  <li>PostgreSQL · Prisma</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap items-end justify-end gap-2.5 self-end ml-4 opacity-30 group-hover:opacity-70 transition-opacity duration-500">
              <Image
                src="/img/Unofficial_JavaScript_logo_2.svg.png"
                alt="JavaScript"
                width={26}
                height={26}
                className="rounded grayscale"
              />
              <Image
                src="/img/TypeScript_ESLint_logo.svg"
                alt="TypeScript"
                width={26}
                height={26}
                className="rounded grayscale"
              />
              <Image
                src="/img/nextjs-ghnqttyc6ffbnqnn8xlrpj.webp"
                alt="Next.js"
                width={32}
                height={32}
                className="rounded grayscale"
              />
              <Image
                src="/img/figma-svgrepo-com.svg"
                alt="Figma"
                width={26}
                height={26}
                className="rounded grayscale"
              />
              <Image
                src="/img/images.jpg"
                alt="Node.js"
                width={26}
                height={26}
                className="rounded grayscale"
              />
              <Image
                src="/img/arch-linux-svgrepo-com.svg"
                alt="Arch Linux"
                width={26}
                height={26}
                className="rounded grayscale"
              />
              <Image
                src="/img/1749683789-better-auth-logo-wordmark-dark.svg"
                alt="Better Auth"
                width={72}
                height={26}
                className="rounded grayscale"
              />
            </div>
          </div>

          {/* Profile */}
          <div className="rounded-xl border border-white/[0.06] hover:border-white/[0.11] bg-white/[0.02] hover:bg-white/[0.035] transition-all duration-300 flex flex-col items-center justify-center p-6 gap-4">
            <div className="relative">
              <Image
                src="/img/CEREALMILK.jpg"
                alt="Photo de profil"
                width={64}
                height={64}
                className="rounded-full object-cover ring-1 ring-white/[0.08]"
              />
              <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0f0f0f]" />
            </div>
            <div className="text-center">
              <p className="text-xs font-mono font-medium text-neutral-300 mb-0.5">
                @cerealmilkdev
              </p>
              <p className="text-[10px] font-mono text-neutral-600 mb-3">
                Développeur FullStack
              </p>
              <div className="space-y-1 text-[10px] font-mono text-neutral-600">
                <p>Montréal, Canada</p>
                <p>3 ans d&apos;expérience</p>
              </div>
            </div>
          </div>

          {/* Formation */}
          <div className="rounded-xl border border-white/[0.06] hover:border-white/[0.11] bg-white/[0.02] hover:bg-white/[0.035] transition-all duration-300 p-5">
            <p className="text-[9px] uppercase tracking-[0.22em] text-neutral-700 font-mono mb-5">
              Formation
            </p>
            <div className="space-y-4">
              <div className="pl-3 border-l border-neutral-800">
                <p className="text-[12px] font-mono text-neutral-300 leading-snug">
                  Microsoft Azure AZ-900
                </p>
                <p className="text-[10px] font-mono text-neutral-600 mt-0.5">
                  Microsoft · 2022
                </p>
              </div>
              <div className="pl-3 border-l border-neutral-800">
                <p className="text-[12px] font-mono text-neutral-300 leading-snug">
                  CISCO CCNA +
                </p>
                <p className="text-[10px] font-mono text-neutral-600 mt-0.5">
                  Udemy · 2024
                </p>
              </div>
              <div className="pl-3 border-l border-neutral-800">
                <p className="text-[12px] font-mono text-neutral-300 leading-snug">
                  AWS Cloud Practitioner
                </p>
                <p className="text-[10px] font-mono text-neutral-600 mt-0.5">
                  Amazon Web Services · 2024
                </p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="rounded-xl border border-white/[0.06] hover:border-white/[0.11] bg-white/[0.02] hover:bg-white/[0.035] transition-all duration-300 p-5 flex flex-col">
            <p className="text-[9px] uppercase tracking-[0.22em] text-neutral-700 font-mono mb-5">
              Projets
            </p>
            <div className="space-y-3 flex-1">
              <a
                href="https://makesocial.me"
                className="flex items-center justify-between group/l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-mono text-[12px] text-neutral-500 group-hover/l:text-neutral-200 transition-colors duration-150">
                  makesocial.me
                </span>
                <span className="text-neutral-800 group-hover/l:text-neutral-500 transition-colors duration-150 text-xs ml-2">
                  ↗
                </span>
              </a>
              <a
                href="https://ms1-ten.vercel.app/"
                className="flex items-center justify-between group/l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-mono text-[12px] text-neutral-500 group-hover/l:text-neutral-200 transition-colors duration-150">
                  GBU Inc.
                </span>
                <span className="text-neutral-800 group-hover/l:text-neutral-500 transition-colors duration-150 text-xs ml-2">
                  ↗
                </span>
              </a>
              <a
                href="https://github.com/cerealmilkdev/MS_BOT_OPENAI_TELEGRAM"
                className="flex items-center justify-between group/l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-mono text-[12px] text-neutral-500 group-hover/l:text-neutral-200 transition-colors duration-150">
                  Telegram OpenAI Bot
                </span>
                <span className="text-neutral-800 group-hover/l:text-neutral-500 transition-colors duration-150 text-xs ml-2">
                  ↗
                </span>
              </a>
            </div>
            <button className="mt-5 text-left text-[9px] font-mono text-neutral-700 hover:text-neutral-500 transition-colors duration-150 uppercase tracking-widest cursor-pointer">
              Voir plus →
            </button>
          </div>

          {/* Contact */}
          <div className="rounded-xl border border-white/[0.06] hover:border-white/[0.11] bg-white/[0.02] hover:bg-white/[0.035] transition-all duration-300 p-5 group cursor-pointer">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[9px] uppercase tracking-[0.22em] text-neutral-700 font-mono">
                Contact
              </p>
              <Image
                src="/img/arrow-right-svgrepo-com.svg"
                alt="Arrow"
                width={13}
                height={13}
                className="arrow-svg group-hover:translate-x-1 transition-transform duration-200 ease-out opacity-20 group-hover:opacity-50"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-neutral-700 text-[11px] w-3">✉</span>
                <span className="font-mono text-[11px] text-neutral-500 hover:text-neutral-300 transition-colors duration-150">
                  adminms@makesocial.me
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-700 text-[11px] w-3">↗</span>
                <span className="font-mono text-[11px] text-neutral-500 hover:text-neutral-300 transition-colors duration-150">
                  makesocial.me
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-700 text-[11px] w-3">𝕏</span>
                <span className="font-mono text-[11px] text-neutral-500 hover:text-neutral-300 transition-colors duration-150">
                  @cerealmilkdev
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 py-6 px-4 relative z-10">
        <a
          href="https://github.com/cerealmilkdev"
          className="text-[10px] font-mono text-neutral-700 hover:text-neutral-400 transition-colors duration-200 uppercase tracking-widest"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="mailto:adminms@makesocial.me"
          className="text-[10px] font-mono text-neutral-700 hover:text-neutral-400 transition-colors duration-200 uppercase tracking-widest"
        >
          Email
        </a>
        <a
          href="/cv.pdf"
          className="text-[10px] font-mono text-neutral-700 hover:text-neutral-400 transition-colors duration-200 uppercase tracking-widest"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV PDF
        </a>
      </footer>
    </div>
  );
}
