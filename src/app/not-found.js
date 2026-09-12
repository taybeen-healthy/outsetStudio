import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#0c0d0e] flex flex-col items-center justify-center text-center px-6">
      <span className="text-xs tracking-[0.3em] text-[#bf572b] uppercase font-mono">
        404 — Space Not Found
      </span>
      <h1 className="font-serif text-4xl sm:text-6xl text-white mt-4 mb-4">
        This realm has yet to be designed.
      </h1>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed">
        The destination you are seeking does not exist or has been relocated within our architectural portfolio.
      </p>
      <Link
        href="/"
        className="border border-white/60 hover:border-white px-8 py-3 text-xs tracking-[0.2em] uppercase text-white bg-transparent hover:bg-white/10 transition-colors rounded-none"
      >
        Return to Outset
      </Link>
    </div>
  );
}
