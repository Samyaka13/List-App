import Image from "next/image";
import Hero from "./sections/hero/Index";
import Testimonials from "./sections/testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100 p-24">
      <Hero />
      <Testimonials />
    </main>
  );
}
