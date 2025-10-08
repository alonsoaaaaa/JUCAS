import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Works } from "@/components/Works";
import { Impact } from "@/components/Impact";
import { Join } from "@/components/Join";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Works />
        <Impact />
        <Join />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
