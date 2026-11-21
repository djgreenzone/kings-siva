import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LiveStream from "@/components/LiveStream";
import Giveaway from "@/components/Giveaway";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LiveStream />
      <Giveaway />
      <Footer />
    </main>
  );
}
