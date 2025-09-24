import About from "@/components/homepage/About";
import Banner from "@/components/homepage/Banner";
import Contact from "@/components/homepage/Contact";
import Faq from "@/components/homepage/Faq";
import Location from "@/components/homepage/Location";
import Services from "@/components/homepage/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="bg-[#eee1d8]">
        <About />
      </div>
      <Services />
      <div className="bg-[#eee1d8]">
        <Faq />
        <Contact />
        <Location />
      </div >
    </>
  );
}
