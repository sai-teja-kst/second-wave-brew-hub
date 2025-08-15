import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display text-2xl font-bold text-coffee-primary">
            Second Wave
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-foreground hover:text-coffee-primary transition-colors">
              Menu
            </a>
            <a href="#about" className="text-foreground hover:text-coffee-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-coffee-primary transition-colors">
              Contact
            </a>
          </nav>
          <Button variant="coffee" size="sm">
            Order Online
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;