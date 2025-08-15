import { Button } from "@/components/ui/button";
import heroImage from "@/assets/coffee-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/80 via-coffee-primary/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Second Wave
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the art of coffee through carefully curated beans, 
          expertly crafted drinks, and personalized service
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Order Now
          </Button>
          <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4">
            Our Story
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;