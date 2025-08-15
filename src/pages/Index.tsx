import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="menu">
          <Menu />
        </div>
        <div id="about">
          <About />
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
