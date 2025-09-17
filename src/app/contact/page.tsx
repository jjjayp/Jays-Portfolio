// src/app/contact/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Contact — Jay Patel",
  description:
    "Get in touch with Jay Patel for projects, internships, or research collaboration.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full text-foreground">
      {/* Unique background (different than homepage) */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0f0f14] via-[#1a1f3a] to-[#232347]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_800px_at_15%_8%,rgba(99,102,241,0.22),transparent_60%)]" />

      <main className="relative z-10 mx-auto max-w-5xl px-6 md:px-10 lg:px-12 py-28">
        {/* Back Button */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-white/10 px-5 py-2.5 text-base font-medium text-white hover:bg-white/20 transition"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold">Contact</h1>
        <p className="mt-5 text-xl text-zinc-300">
          Prefer email?{" "}
          <a href="mailto:jay.v.patel@uconn.edu" className="underline">
            jay.v.patel@uconn.edu
          </a>
        </p>

        {/* FORM */}
        <form className="mt-12 space-y-8">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-zinc-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Jane Doe"
              className="mt-3 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-lg text-zinc-100 placeholder-zinc-500 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-zinc-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@company.com"
              className="mt-3 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-lg text-zinc-100 placeholder-zinc-500 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Reason */}
          <div>
            <label htmlFor="reason" className="block text-lg font-medium text-zinc-200">
              Reason (optional)
            </label>
            <select
              id="reason"
              name="reason"
              defaultValue=""
              className="mt-3 w-full rounded-md border border-zinc-300 bg-white text-black px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
            >
              <option value="" disabled>
                — Select —
              </option>
              <option value="recruiting">Recruiting / Interview</option>
              <option value="research">Research Collaboration</option>
              <option value="project">Project Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-zinc-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              required
              placeholder="How can I help?"
              className="mt-3 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-lg text-zinc-100 placeholder-zinc-500 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-white/90 px-8 py-4 text-lg font-semibold text-black hover:bg-white transition"
            >
              Send message
            </button>
          </div>
        </form>

        {/* Elsewhere */}
        <div className="mt-14 text-lg text-zinc-400">
          Elsewhere:{" "}
          <a href="https://github.com/jjjayp" target="_blank" className="underline">
            GitHub
          </a>{" "}
          ·{" "}
          <a href="https://www.linkedin.com/in/jayvipatel/" target="_blank" className="underline">
            LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}
