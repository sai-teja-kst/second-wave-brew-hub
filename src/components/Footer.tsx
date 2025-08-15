const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Second Wave</h3>
            <p className="text-white/70 leading-relaxed">
              Bringing you the finest artisanal coffee experience, 
              one carefully crafted cup at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-white/70">
              <p>123 Coffee Street</p>
              <p>Seattle, WA 98101</p>
              <p>(555) 123-BREW</p>
              <p>hello@secondwave.coffee</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Hours</h4>
            <div className="space-y-2 text-white/70">
              <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
              <p>Saturday: 7:00 AM - 9:00 PM</p>
              <p>Sunday: 7:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Second Wave Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;