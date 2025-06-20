import { Smartphone, Brain, Cloud, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Web & Mobile Development",
      description: "Scalable applications built with modern frameworks. From MVP to enterprise-grade solutions that handle millions of users with seamless performance and intuitive design.",
      features: ["React/Next.js", "Mobile Apps", "API Development"],
      color: "deep-indigo"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI implementations that drive real business value. From intelligent automation to predictive analytics and advanced LLM integrations for competitive advantage.",
      features: ["Custom AI Models", "LLM Integration", "Process Automation"],
      color: "amber"
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud Infrastructure",
      description: "Bulletproof infrastructure with guaranteed uptime. Complete CI/CD pipelines, comprehensive monitoring, and cloud architecture that scales automatically with your growth.",
      features: ["AWS/GCP/Azure", "CI/CD Pipelines", "Infrastructure Monitoring"],
      color: "deep-indigo"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-1/4 w-32 h-32 bg-gradient-to-r from-deep-indigo to-blue-500 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-24 right-1/3 w-24 h-24 bg-gradient-to-r from-amber to-orange-400 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 right-16 w-20 h-20 bg-gradient-to-r from-purple-500 to-deep-indigo rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="center-content section-title-spacing">
          <h2 className="section-title text-charcoal mb-4 animate-fade-in">Our Core Services</h2>
          <p className="section-subtitle text-charcoal center-content animate-fade-in" style={{animationDelay: '0.2s'}}>
            End-to-end solutions that scale with your ambitions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 service-card-spacing">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-2xl hover:-translate-y-6 transition-all duration-500 border-0 shadow-lg bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50 animate-fade-in overflow-hidden h-full flex flex-col`}
              style={{animationDelay: `${0.4 + index * 0.2}s`}}
            >
              <CardContent className="p-8 center-content relative flex-1 flex flex-col">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
                
                {/* Icon container with enhanced effects */}
                <div className={`${service.color === 'amber' ? 'bg-gradient-to-br from-amber to-orange-400' : 'bg-gradient-to-br from-deep-indigo to-blue-600'} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl relative overflow-hidden`}>
                  {/* Icon shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Pulsing ring effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/30 scale-0 group-hover:scale-110 transition-transform duration-500 animate-pulse opacity-0 group-hover:opacity-100"></div>
                  
                  <service.icon className="h-10 w-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-charcoal mb-4 group-hover:text-deep-indigo transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-charcoal mb-6 center-content group-hover:text-gray-700 transition-colors duration-300 relative z-10 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-2 bg-gray-100 text-charcoal text-sm rounded-full group-hover:bg-deep-indigo group-hover:text-white transition-all duration-300 hover:scale-105 font-medium"
                      style={{transitionDelay: `${featureIndex * 50}ms`}}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="btn-secondary w-full group/btn hover:bg-deep-indigo hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform active:scale-95 relative overflow-hidden mt-auto">
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  
                  <span className="relative flex items-center justify-center font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" />
                  </span>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;