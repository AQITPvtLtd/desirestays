import About from "@/components/homepage/About";
import Banner from "@/components/homepage/Banner";
import Contact from "@/components/homepage/Contact";
import Faq from "@/components/homepage/Faq";
import Location from "@/components/homepage/Location";
import Review from "@/components/homepage/Review";
import Services from "@/components/homepage/Services";
import Video from "@/components/homepage/Video";

export default function Home() {
  return (
    <main className="mt-[105px] md:mt-[116px]">
      <Banner />
      <div className="bg-[#eee1d8]">
        <About />
      </div>
      <div id='desire-stays'>
        <Services />
      </div>
      <div className="bg-[#eee1d8]">
        <Faq />
        <Video />
        <Review />
        <Contact />
        <Location />
      </div >
    </main>
  );
}
