import Image from "next/image";
import Navbar from "./sections/Navbar/page";
import Solve from "./sections/grid/page"
import Footer from "./sections/footer/page"
import Features from "./sections/Features/page";
import Hero from "./sections/hero/page";
import Testimonials from "./sections/Testimonials/page";
import App_Features from "./sections/App features/page";
import Slider from "./sections/slider/page";
import Fab from "./sections/Fab/page"
export default function Home() {
  return (
    <>
    <div className="bg-white overflow-hidden  ">
      {/* bg-gradient-to-b from-blue-300 to-white   */}

<div className="md:z-40">
      <Navbar />

</div>

      <Hero />
      <div>
        <div className="z-0">
          <Slider />
        </div>
        <div className="z-20">
          <Fab /> 
        </div>
      </div>
      <Features />
      <div className="-z-50">
        <Testimonials />
      </div>
      <App_Features />
      <div className="relative bottom-4">
      <Footer />

      </div>
    </div>
    </>
  );
}
