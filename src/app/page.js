import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import OurWork from "@/components/OurWork";
import HowWeWork from "@/components/HowWeWork";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

async function fetchData(endpoint) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/${endpoint}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.success ? json.data : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const [heroData, statsData, aboutData, howWeWorkData, industriesData] =
    await Promise.all([
      fetchData("hero"),
      fetchData("stats"),
      fetchData("about"),
      fetchData("how-we-work"),
      fetchData("industries"),
    ]);

  return (
    <div className="relative w-full bg-white overflow-x-hidden font-sans select-none">
      <div className="relative min-h-screen flex flex-col justify-between">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src={heroData?.backgroundImage ?? "/Image (10).svg"}
            alt="Luxury modern interior by Outset Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        </div>

        <Navbar />
        <Hero data={heroData} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-0">
          <Stats data={statsData} />
        </div>
      </div>

      <About data={aboutData} />
      <OurWork />
      <HowWeWork data={howWeWorkData} />
      <Industries data={industriesData} />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
