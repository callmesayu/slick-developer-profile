
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
