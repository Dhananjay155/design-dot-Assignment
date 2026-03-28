import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HotTopics from "@/components/HotTopics";
import About from "@/components/About";
import Insights from "@/components/Insights";
// import Footer from "@/components/Footer";
import "./globals.css"
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HotTopics />
      <About />
      <Insights />
      {/* <Footer /> */}
    </main>
  );
}