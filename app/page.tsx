import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import Section1 from "@/components/section-1";
import Section2 from "@/components/section-2";
import Section3 from "@/components/section-3";
import Section4 from "@/components/section-4";
import Section5 from "@/components/section-5";

export default function Home() {
  return (
    <div className="animate-scroll max-w-screen relative min-h-screen overflow-hidden bg-royal font-sans">
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}
