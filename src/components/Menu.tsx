import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    category: "Espresso",
    items: [
      {
        name: "Classic Espresso",
        description: "Rich, full-bodied shot with notes of dark chocolate",
        price: "$3.50",
        popular: true
      },
      {
        name: "Americano",
        description: "Espresso with hot water, clean and strong",
        price: "$4.00"
      },
      {
        name: "Cappuccino",
        description: "Perfect balance of espresso, steamed milk, and foam",
        price: "$4.50"
      },
      {
        name: "Latte",
        description: "Smooth espresso with velvety steamed milk",
        price: "$5.00"
      }
    ]
  },
  {
    category: "Cold Brew",
    items: [
      {
        name: "Classic Cold Brew",
        description: "Smooth, less acidic coffee steeped for 12 hours",
        price: "$4.50",
        popular: true
      },
      {
        name: "Nitro Cold Brew",
        description: "Cold brew infused with nitrogen for a creamy texture",
        price: "$5.50"
      },
      {
        name: "Cold Brew Latte",
        description: "Cold brew with your choice of milk",
        price: "$5.00"
      }
    ]
  },
  {
    category: "Specialty",
    items: [
      {
        name: "Pour Over",
        description: "Single origin beans brewed to perfection",
        price: "$6.00"
      },
      {
        name: "French Press",
        description: "Full immersion brewing for rich, complex flavors",
        price: "$5.50"
      },
      {
        name: "Cortado",
        description: "Equal parts espresso and warm milk",
        price: "$4.75"
      }
    ]
  }
];

const Menu = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-coffee-primary">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully crafted beverages using premium beans from sustainable farms
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((category) => (
            <div key={category.category} className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-coffee-primary mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <Card key={item.name} className="bg-gradient-card shadow-soft border-border/50 hover:shadow-warm transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg font-semibold text-card-foreground">
                          {item.name}
                        </CardTitle>
                        {item.popular && (
                          <Badge variant="secondary" className="ml-2">
                            Popular
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-coffee-primary">
                          {item.price}
                        </span>
                        <Button variant="coffee" size="sm">
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;