import Link from "next/link";
import Image from "next/image";

/* ----------------------- Content (edit me) ----------------------- */

const projects = [
  {
    title: "Climate Stance Detection (Reddit)",
    year: "2025",
    blurb:
      "End-to-end NLP pipeline classifying stance on climate topics. Data wrangling, feature engineering, and model comparison across classic ML and Transformers.",
    tags: ["Python", "Transformers", "Scikit-learn", "PyTorch"],
    code:
      "https://github.com/jjjayp/Climate-Discourse-Analysis-Machine-Learning-NLP-for-Stance-Detection",
  },
  {
    title: "Airline Reservation System",
    year: "2025",
    blurb:
      "C++ route tool with DFS-based search and STL containers. Reduced trip planning time with clean CLI workflow and robust data structures.",
    tags: ["C++", "STL", "Algorithms"],
    code: "https://github.com/jjjayp/Airline-Reservation-System",
  },
  {
    title: "Epidemic Simulation",
    year: "2025",
    blurb:
      "Real-time SIR simulator with performant data lookups and visualization. Optimized core loops to support long time horizons and large populations.",
    tags: ["C", "Simulation", "Data Structures"],
    code: "https://github.com/jjjayp/Epidemic-Simulation",
  },
];

const experience = [
  { role: "ML Undergraduate Researcher", org: "University of Connecticut", dates: "Aug 2025 – Present", bullets: [] },
  { role: "Peer Tutor (CS/Math)", org: "University of Connecticut", dates: "Aug 2025 – Present", bullets: [] },
  { role: "Cybersecurity Intern", org: "Amneal Pharmaceuticals", dates: "Jun 2025 – Aug 2025", bullets: [] },
  { role: "AI/ML Intern", org: "Commotion", dates: "Apr 2025 – Jun 2025", bullets: [] },
  { role: "Secure Embedded Systems Engineer — eCTF Team", org: "University of Connecticut", dates: "Aug 2024 – May 2025", bullets: [] },
  { role: "IT Intern (Chatbot/NLP)", org: "Yale University", dates: "Jun 2024 – Aug 2024", bullets: [] },
];

const interests = ["Artificial Intelligence", "Machine Learning", "Data Science", "Software Engineering"];

/* ----------------------- Page ----------------------- */

export default function Home() {
  return (
    <div className="relative min-h-screen w-full text-foreground overflow-hidden">
      {/* Background gradient + aura */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0b0b0f] via-[#111827] to-[#1e1b4b]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_70%)]" />

      {/* Sticky anchor nav — taller + larger links */}
      <nav className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-[1700px] px-4 md:px-6 h-16 flex items-center justify-center">
          <div className="flex gap-14 text-lg md:text-xl font-medium">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#interests" className="hover:underline">Interests</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <Link href="/JayResume9-13-2025.pdf" target="_blank" className="hover:underline">Résumé</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto w-full max-w-[1700px] px-3 md:px-4 pt-10 md:pt-14 lg:pt-16 pb-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* LEFT */}
          <div className="lg:col-span-7 lg:min-h-[620px] flex flex-col">
            {/* Add bottom margin to h1 and tighten leading so descenders don't collide */}
            <h1 className="text-[56px] md:text-[76px] xl:text-[96px] font-extrabold leading-[0.92] tracking-tight mb-3 md:mb-5">
              Jay Patel
            </h1>
            {/* Remove extra top margin on h2 and make it a touch larger */}
            <h2 className="mt-0 text-[22px] md:text-[28px] xl:text-[34px] text-zinc-100">
              Software / AI / Machine Learning / Data Science
            </h2>

            <div className="mt-6 lg:flex-1">
              <p className="max-w-none text-[20px] md:text-[22px] leading-9 text-zinc-200">
                I’m an Honors student at the University of Connecticut pursuing a dual degree in Computer
                Science &amp; Applied Mathematics with a concentration in Computational Data Analytics and
                minor in Business Fundamentals. I have a strong foundation in data engineering, machine
                learning, and software development. During my time at UConn, I’ve made the Dean’s List while
                engaging in technical projects that have honed my skills in Python, C++, cloud computing, and
                AI-driven analytics.
              </p>
              <p className="mt-4 max-w-none text-[20px] md:text-[22px] leading-9 text-zinc-200">
                I thrive in fast-paced, diverse environments and enjoy both teaching and learning. My
                experiences as a counselor, tutor, and instructor have helped me develop a collaborative
                mindset. I’m always enjoy being able to mentor others while continuously growing from those
                around me.
              </p>
            </div>
          </div>

          {/* RIGHT: photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-xl lg:h-[620px]">
              <div className="absolute -inset-12 rounded-[40px] bg-[conic-gradient(from_0deg,_#3b82f6,_#a855f7,_#06b6d4,_#3b82f6)] blur-3xl opacity-40" />
              <Image
                src="/images/JayPatel.jpg"
                alt="Jay Patel portrait"
                width={1200}
                height={1500}
                priority
                className="relative rounded-[32px] object-cover w-full h-full aspect-[4/5] ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto w-full max-w-[1700px] px-3 md:px-4 py-24">
        <h3 className="text-5xl md:text-6xl font-bold">Projects</h3>
        <p className="mt-4 text-zinc-200 max-w-none text-2xl">A selection of recent work.</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 2xl:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:shadow-2xl transition"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-2xl md:text-3xl font-semibold">{p.title}</h4>
                <span className="text-xs text-zinc-400">{p.year}</span>
              </div>
              <p className="mt-4 text-lg md:text-xl text-zinc-200">{p.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-zinc-800/70 px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-8 text-base">
                <a className="underline" href={p.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto w-full max-w-[1700px] px-3 md:px-4 py-24">
        <h3 className="text-5xl md:text-6xl font-bold">Experience</h3>
        <p className="mt-4 text-zinc-200 max-w-none text-2xl">Roles where I shipped things that mattered.</p>

        <div className="mt-14 relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />
          <ul className="space-y-14">
            {experience.map((e) => (
              <li key={e.role + e.org} className="relative pl-14">
                <span className="absolute left-3.5 top-2.5 h-3.5 w-3.5 rounded-full bg-white/70 ring-4 ring-white/10" />
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <h4 className="text-3xl font-semibold">{e.role}</h4>
                  <span className="text-zinc-200">· {e.org}</span>
                  <span className="ml-auto text-lg text-zinc-400">{e.dates}</span>
                </div>
                <ul className="mt-5 list-disc pl-7 text-zinc-100 space-y-2 text-xl">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INTERESTS */}
      <section id="interests" className="mx-auto w-full max-w-[1700px] px-3 md:px-4 py-24">
        <h3 className="text-5xl md:text-6xl font-bold">Interests</h3>
        <p className="mt-4 text-zinc-200 max-w-none text-2xl">
          What I’m curious about right now and explore in side projects.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 2xl:grid-cols-3">
          {interests.map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 text-xl md:text-2xl text-zinc-100"
            >
              {i}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto w-full max-w-[1700px] px-3 md:px-4 py-24">
        <h3 className="text-5xl md:text-6xl font-bold">Contact</h3>
        <p className="mt-4 text-zinc-200 max-w-none text-2xl">
          Want to talk projects, internships, or research? Reach me directly or use the form.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h4 className="text-3xl font-semibold">Email</h4>
            <p className="mt-3 text-zinc-300 text-xl">
              <a className="underline" href="mailto:jay.v.patel@uconn.edu">jay.v.patel@uconn.edu</a>
            </p>
            <div className="mt-6 flex gap-8 text-xl text-zinc-300">
              <a className="underline" href="https://github.com/jjjayp" target="_blank" rel="noreferrer">GitHub</a>
              <a className="underline" href="https://www.linkedin.com/in/jayvipatel/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex items-center justify-between">
            <div>
              <h4 className="text-3xl font-semibold">Prefer a form?</h4>
              <p className="mt-3 text-zinc-300 text-xl">Use my contact form and I’ll reply soon.</p>
            </div>
            <Link
              href="/contact"
              className="rounded-lg bg-white/90 px-7 py-3 text-black text-lg font-medium hover:bg-white transition"
            >
              Open Contact Form
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-sm text-zinc-400">
        <div className="mx-auto max-w-[1700px] px-3 md:px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Jay Patel</span>
          <div className="flex gap-6">
            <a className="hover:underline" href="https://github.com/jjjayp" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:underline" href="https://www.linkedin.com/in/jayvipatel/" target="_blank" rel="noreferrer">LinkedIn</a>
            <Link className="hover:underline" href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
