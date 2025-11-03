import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Wrench, Home, Building, Lightbulb, Settings } from "lucide-react";
import sensorsImage from "@/assets/sensors.jpg";
import houseLighting1 from "@/assets/eagleacepics/houselighting.jpeg";
import houseLighting2 from "@/assets/eagleacepics/houselighting2.jpeg";
import houseLighting4 from "@/assets/eagleacepics/houselighting4.jpeg";
import houseLighting5 from "@/assets/eagleacepics/houselighting5.jpeg";
import { useNavigate } from "react-router-dom";

const Electrical = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    // Use window.location.hash to ensure proper scrolling after navigation
    window.location.hash = 'contact';
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback: try again after a longer delay
        setTimeout(() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500);
      }
    }, 300);
  };
  const features = [
    {
      icon: Settings,
      title: "Switchboard Upgrades & Repairs",
      description: "Modern switchboard upgrades and repairs to improve safety, accommodate new electrical loads, and meet current standards."
    },
    {
      icon: Zap,
      title: "Power Points & Lighting",
      description: "Installation of power points, light fittings, and complete lighting solutions for homes and businesses."
    },
    {
      icon: Home,
      title: "New Builds & Rewires",
      description: "Complete electrical installations for new constructions, home renovations, and comprehensive rewiring projects."
    },
    {
      icon: Lightbulb,
      title: "Safety & Compliance",
      description: "Safety switch installation, electrical testing, and compliance certification for all electrical work."
    }
  ];

  const services = [
    {
      name: "Residential Electrical",
      price: "From $150/hr",
      features: [
        "Switchboard Upgrades & Repairs",
        "Power Point Installation",
        "Light Fitting Installation",
        "Safety Switch Installation",
        "Electrical Testing & Certification",
        "Rewiring & Renovations"
      ]
    },
    {
      name: "Commercial Electrical",
      price: "From $180/hr",
      features: [
        "Commercial Switchboards",
        "Three Phase Installations",
        "Emergency Lighting",
        "Power Distribution Systems",
        "Compliance Testing & Certification",
        "Maintenance Contracts"
      ]
    },
    {
      name: "Heatpump Installation",
      price: "From $899",
      features: [
        "Heatpump Supply & Install",
        "Dedicated Circuit Installation",
        "Electrical Connections",
        "System Testing & Commissioning",
        "Warranty Registration",
        "User Training & Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Electrical
                <span className="block text-primary">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional electrical services including switchboard upgrades & repairs, power point installation, 
                lighting solutions, and complete rewiring. Certified electricians delivering safe, reliable electrical 
                work for residential and commercial properties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact" onClick={handleContactClick}>
                  <Button variant="premium" size="lg" className="text-base px-8 py-4 h-auto font-medium">
                    <Zap className="h-4 w-4 mr-2" />
                    Get Free Quote
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src={sensorsImage} 
                alt="Electrical Services" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lighting Gallery Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              House Lighting Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional lighting installations that transform your home with beautiful, functional lighting designs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
              <img 
                src={houseLighting1} 
                alt="House Lighting Installation 1" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
              <img 
                src={houseLighting2} 
                alt="House Lighting Installation 2" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
              <img 
                src={houseLighting4} 
                alt="House Lighting Installation 4" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
              <img 
                src={houseLighting5} 
                alt="House Lighting Installation 5" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Electrical Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Certified electricians providing safe, reliable electrical solutions for your home and business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-border bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Electrical Work Done?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact Eagle Ace today for a free electrical consultation and quote for your home or business in Auckland and Waikato.
          </p>
          <a href="/#contact" onClick={handleContactClick}>
            <Button variant="premium" size="lg" className="text-base px-8 py-4 h-auto font-medium">
              <Zap className="h-4 w-4 mr-2" />
              Get Free Quote
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Electrical;

