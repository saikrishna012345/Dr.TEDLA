import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Biography } from "@/components/Biography";
import { About } from "@/components/About";
import { Resume } from "@/components/Resume";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Biography />
      <About />
      <Resume />
      <Publications />
      <Contact />
    </div>
  );
};

export default Index;