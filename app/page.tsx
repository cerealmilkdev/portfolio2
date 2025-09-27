import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-background text-foreground flex flex-col">
      {/* Header - Nom et sous-titres */}
      <header className="flex flex-col items-center justify-center pt-8">
        <h1 className="text-4xl font-semibold mb-2">Jonathan</h1>
        <div className="text-center space-y-1">
          <p className="text-lg text-gray-300">{">"} Développeur FullStack</p>
          <p className="text-sm text-zinc-500">@boutdaguap</p>
        </div>
      </header>

      {/* Grid principale - 6 éléments sur 2 lignes */}
      <main className="flex-1 px-8 py-12">
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-full max-w-4xl mx-auto">
          {/* Ligne 1 */}
          <div className="bg-neutral-800 border border-neutral-700 hover:border-neutral-500 col-span-2 rounded-lg flex items-center justify-center text-white font-semibold">
            <div className="text-left p-4 w-full max-w-xl">
              <div className="text-lg font-semibold">Tech stack {"{}"}</div>
              <div className="mt-2">
                <div className="text-sm uppercase tracking-wide text-neutral-200">
                  Frontend
                </div>
                <ul className="mt-1 text-sm text-neutral-300 space-y-1 list-none list-inside font-normal">
                  <li>JavaScript - TypeScript</li>
                  <li>React (Next.js) · Tailwind CSS</li>
                </ul>
              </div>
              <div className="mt-3">
                <div className="text-sm uppercase tracking-wide text-neutral-200">
                  Backend
                </div>
                <ul className="mt-1 text-sm text-neutral-300 space-y-1 list-none list-inside font-normal">
                  <li>Node.js (Express) · REST</li>
                  <li>PostgreSQL · Prisma</li>
                </ul>
              </div>
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
              <div className="text-lg font-bold text-neutral-100 mb-1">
                @boutdaguap
              </div>
              <div className="text-xs text-neutral-300 mb-2">
                Développeur FullStack
              </div>
              <div className="text-xs text-neutral-300">
                <div>Montréal, Canada</div>
                <div>💻 3 ans d&apos;expérience</div>
              </div>
            </div>
          </div>

          {/* Ligne 2 */}
          <div className="bg-neutral-800 border-neutral-600 hover:border-neutral-500 border-[0.5px] rounded-tr-md flex items-center justify-center text-white font-semibold">
            <div className="text-left p-4 w-full">
              <div className="text-lg font-semibold mb-3">Formation 🎓</div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-neutral-200">
                    Formation React
                  </div>
                  <div className="text-xs text-neutral-400">
                    Le Wagon · 2022
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-200">
                    CISCO CCNA +
                  </div>
                  <div className="text-xs text-neutral-400">Udemy · 2024</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-200">
                    Certification AWS Cloud Practitioner
                  </div>
                  <div className="text-xs text-neutral-400">
                    Amazon Web Services · 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-800 border-neutral-600 hover:border-neutral-500 border-[0.5px] transform flex items-center justify-center text-white font-semibold">
            Contact
          </div>
          <div className="bg-neutral-800 border-neutral-600 hover:border-neutral-500 border-[0.5px] rounded-2xl flex items-center justify-center text-white font-semibold">
            Projects
          </div>
        </div>
      </main>

      {/* Footer - Liens */}
      <footer className="flex justify-center items-center gap-6 pb-8">
        <a
          href="https://github.com/cerealmilkdev"
          className="text-gray-400 hover:text-white transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          className="text-gray-400 hover:text-white transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="mailto:contact@example.com"
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          Email
        </a>
        <a
          href="/cv.pdf"
          className="text-gray-400 hover:text-white transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV PDF
        </a>
      </footer>
    </div>
  );
}
