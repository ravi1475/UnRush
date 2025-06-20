import { Shield, Brain, Play, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ResourcesSection = () => {
  const resources = [
    {
      icon: Shield,
      title: "Free DevOps Health Check",
      description: "Get a comprehensive analysis of your current infrastructure and deployment processes.",
      buttonText: "Start Assessment",
      bgColor: "bg-gradient-to-br from-deep-indigo to-blue-600",
      hoverColor: "group-hover:from-blue-600 group-hover:to-deep-indigo"
    },
    {
      icon: Brain,
      title: "AI Readiness Assessment", 
      description: "Discover AI opportunities in your business and get a custom implementation roadmap.",
      buttonText: "Take Assessment",
      bgColor: "bg-gradient-to-br from-amber to-orange-400",
      hoverColor: "group-hover:from-orange-400 group-hover:to-amber"
    },
    {
      icon: Play,
      title: "Upcoming Webinar",
      description: "\"Scaling to 10M Users: DevOps Strategies That Actually Work\" - Dec 15, 2024",
      buttonText: "Register Now",
      bgColor: "bg-gradient-to-br from-deep-indigo to-purple-600",
      hoverColor: "group-hover:from-purple-600 group-hover:to-deep-indigo"
    }
  ];

  return (
    <section id="resources" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-deep-indigo rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-amber rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="center-content mb-16">
          <h2 className="section-title text-charcoal mb-4 animate-fade-in">Free Resources & Assessments</h2>
          <p className="section-subtitle text-charcoal animate-fade-in" style={{animationDelay: '0.2s'}}>
            Get expert insights tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-0 shadow-lg bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 animate-fade-in overflow-hidden`}
              style={{animationDelay: `${0.4 + index * 0.2}s`}}
            >
              <CardContent className="p-8 center-content relative">
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`${resource.bgColor} ${resource.hoverColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg relative overflow-hidden`}>
                  {/* Icon shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <resource.icon className="h-8 w-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-charcoal mb-4 group-hover:text-deep-indigo transition-colors duration-300 relative z-10">
                  {resource.title}
                </h3>
                
                <p className="text-charcoal mb-6 group-hover:text-gray-700 transition-colors duration-300 relative z-10 leading-relaxed">
                  {resource.description}
                </p>
                
                <button className="btn-primary w-full group/btn hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform active:scale-95 relative overflow-hidden">
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  
                  <span className="relative flex items-center justify-center font-semibold">
                    {resource.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" />
                  </span>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value proposition footer */}
        <div className="mt-12 center-content animate-fade-in" style={{animationDelay: '1s'}}>
          <p className="text-charcoal/70 text-sm hover:text-charcoal transition-colors duration-300">
            💡 All assessments include personalized recommendations and actionable insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection; 