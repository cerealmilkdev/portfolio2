import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header - Nom et sous-titres */}
      <header className="flex flex-col items-center justify-center pt-2 px-4">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 font-sans cursor-default">
          cerealmilkdev
        </h1>
        <div className="text-center space-y-1">
          <p className="text-base sm:text-lg text-gray-300 font-mono cursor-default">
            {">"} Développeur FullStack
          </p>
          <p className="text-xs sm:text-sm text-zinc-500 font-mono cursor-default">
            @cerealmilkdev
          </p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400 font-mono">Disponible</span>
          </div>
        </div>
      </header>

      {/* Grid principale - Responsive */}
      <main className="flex-1 px-4 sm:px-8 py-4 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-3 h-full max-w-4xl mx-auto">
          {/* Ligne 1 */}
          <div className="bg-neutral-800 border border-neutral-700 hover:border-neutral-500 col-span-1 sm:col-span-2 lg:col-span-2 rounded-lg flex items-center justify-between text-white font-semibold p-3">
            <div className="text-left w-full max-w-xl">
              <div className="text-lg font-semibold font-mono cursor-default">
                Tech stack {"{}"}
              </div>
              <div className="mt-2">
                <div className="text-sm uppercase tracking-wide text-neutral-200 font-mono">
                  Frontend
                </div>
                <ul className="mt-1 text-sm text-neutral-300 space-y-1 list-none list-inside font-sans">
                  <li>JavaScript - TypeScript</li>
                  <li>Next.js · TailwindCSS</li>
                </ul>
              </div>
              <div className="mt-3">
                <div className="text-sm uppercase tracking-wide text-neutral-200 font-mono">
                  Backend
                </div>
                <ul className="mt-1 text-sm text-neutral-300 space-y-1 list-none list-inside font-sans">
                  <li>Node.js (Express) · Python</li>
                  <li>PostgreSQL · Prisma</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap items-end justify-end gap-3 mt-24 ml-4">
              <Image
                src="/img/Unofficial_JavaScript_logo_2.svg.png"
                alt="JavaScript"
                width={32}
                height={32}
                className="rounded"
              />
              <Image
                src="/img/TypeScript_ESLint_logo.svg"
                alt="TypeScript"
                width={32}
                height={32}
                className="rounded"
              />
              <Image
                src="/img/nextjs-ghnqttyc6ffbnqnn8xlrpj.webp"
                alt="Arch Linux"
                width={40}
                height={40}
                className="rounded"
              />
              <Image
                src="/img/figma-svgrepo-com.svg"
                alt="Figma"
                width={32}
                height={32}
                className="rounded"
              />
              <Image
                src="/img/images.jpg"
                alt="Arch Linux"
                width={32}
                height={32}
                className="rounded  "
              />
              <Image
                src="/img/arch-linux-svgrepo-com.svg"
                alt="Arch Linux"
                width={32}
                height={32}
                className="rounded  "
              />
              <Image
                src="/img/1749683789-better-auth-logo-wordmark-dark.svg"
                alt="Better Auth"
                width={80}
                height={80}
                className="rounded"
              />
            </div>
          </div>
          {/* <div className="bg-gradient-to-br from-green-500 to-teal-500 border-neutral-300 border-1 flex items-center justify-center text-white font-semibold">
            Compétences
          </div> */}
          <div className="bg-neutral-800 border-neutral-600 hover:border-neutral-500 border-[0.5px] transform flex flex-col items-center justify-center text-white font-semibold p-6">
            <Image
              src="/img/CEREALMILK.jpg"
              alt="Photo de profil"
              width={40}
              height={40}
              className="rounded-full object-cover mb-3"
            />
            <div className="text-center">
              <div className="text-lg font-bold text-neutral-50 mb-1 font-sans">
                @cerealmilkdev
              </div>
              <div className="text-xs text-neutral-200 mb-2 font-mono">
                Développeur FullStack
              </div>
              <div className="text-xs text-neutral-300 font-sans">
                <div>Montréal, Canada</div>
                <div>💻 3 ans d&apos;expérience</div>
              </div>
            </div>
          </div>

          {/* Ligne 2 */}
          <div className="bg-neutral-800 border-neutral-600 hover:border-neutral-500 border-[0.5px] rounded-tr-md flex items-center justify-center text-white font-semibold">
            <div className="text-left p-4 w-full">
              <div className="text-lg font-semibold mb-3 font-mono">
                Formation 🎓
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-neutral-200 font-mono">
                    Formation React
                  </div>
                  <div className="text-xs text-neutral-400 font-sans">
                    Le Wagon · 2022
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-200 font-mono">
                    CISCO CCNA +
                  </div>
                  <div className="text-xs text-neutral-400 font-sans">
                    Udemy · 2024
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-200 font-mono">
                    Certification AWS Cloud Practitioner
                  </div>
                  <div className="text-xs text-neutral-400 font-sans">
                    Amazon Web Services · 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-800 border-neutral-600 hover:border-neutral-500 border-[0.5px] rounded-2xl flex flex-col items-center justify-center text-white font-semibold p-4">
            <div className="flex flex-col items-center space-y-3">
              <a
                href="https://makesocial.me"
                className="text-neutral-200 hover:text-white transition-colors duration-200 font-mono text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                makesocial.me
              </a>
              <a
                href="https://makesocial.me"
                className="text-neutral-200 hover:text-white transition-colors duration-200 font-mono text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                montreal space
              </a>
              <a
                href="https://makesocial.me"
                className="text-neutral-200 hover:text-white transition-colors duration-200 font-mono text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                n8n automation
              </a>
              <button className="text-neutral-400 hover:text-neutral-200 transition-colors duration-200 font-sans text-xs cursor-pointer">
                Voir plus
              </button>
            </div>
          </div>
          <div className="bg-neutral-800 border-neutral-600 hover:border-neutral-500 border-[0.5px] transform flex flex-col items-center justify-center text-white font-semibold p-4 group cursor-pointer">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <span className="font-sans text-lg">Contact</span>
                <Image
                  src="/img/arrow-right-svgrepo-com.svg"
                  alt="Arrow"
                  width={20}
                  height={20}
                  className="arrow-svg group-hover:translate-x-2 transition-transform duration-200 ease-out"
                />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center space-x-2 text-neutral-300 hover:text-white transition-colors duration-200 font-mono">
                  <span>📧</span>
                  <span>adminms@makesocial.me</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-neutral-300 hover:text-white transition-colors duration-200 font-mono">
                  <span>🌐</span>
                  <span>makesocial.me</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-neutral-300 hover:text-white transition-colors duration-200 font-mono">
                  <span>🐦</span>
                  <span>@cerealmilkdev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Liens */}
      <footer className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 pb-6 sm:pb-8 px-4">
        <a
          href="https://github.com/cerealmilkdev"
          className="text-gray-400 hover:text-white transition-colors duration-200 font-sans"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="mailto:contact@example.com"
          className="text-gray-400 hover:text-white transition-colors duration-200 font-sans"
        >
          Email
        </a>
        <a
          href="/cv.pdf"
          className="text-gray-400 hover:text-white transition-colors duration-200 font-sans"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV PDF
        </a>
      </footer>
    </div>
  );
}
