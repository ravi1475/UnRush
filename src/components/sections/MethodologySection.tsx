import { CheckCircle, Clock, Rocket, Target, Code, Cog } from "lucide-react";

const MethodologySection = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery & Strategy",
      description: "We dive deep into your business needs, analyze current systems, and create a comprehensive technical roadmap with clear milestones and success metrics.",
      bgColor: "bg-gradient-to-br from-deep-indigo to-blue-600",
      icon: Target,
      duration: "1-2 weeks",
      deliverables: ["Technical Audit", "Project Roadmap", "Architecture Plan"]
    },
    {
      number: "2", 
      title: "Development & Testing",
      description: "Agile development with continuous integration, automated testing, and weekly progress reviews to ensure quality and alignment with your vision.",
      bgColor: "bg-gradient-to-br from-amber to-orange-400",
      icon: Code,
      duration: "2-12 weeks",
      deliverables: ["Working Software", "Quality Assurance", "Progress Reports"]
    },
    {
      number: "3",
      title: "Launch & Optimization", 
      description: "Seamless deployment with monitoring, performance optimization, and ongoing support to ensure your solution scales smoothly with your business growth.",
      bgColor: "bg-gradient-to-br from-deep-indigo to-purple-600",
      icon: Cog,
      duration: "Ongoing",
      deliverables: ["Production Deployment", "Monitoring Setup", "Support & Maintenance"]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-48 h-48 bg-deep-indigo rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-32 right-24 w-36 h-36 bg-amber rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Connecting lines */}
      <div className="absolute inset-0 hidden md:block">
        <svg className="w-full h-full" style={{top: '50%', transform: 'translateY(-50%)'}}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B4563" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#3B4563" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <path 
            d="M 25% 50% Q 50% 40% 75% 50%" 
            stroke="url(#lineGradient)" strokeWidth="2" fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="container-max relative z-10">
        <div className="center-content mb-16">
          <h2 className="section-title text-charcoal mb-4 animate-fade-in">How We Work</h2>
          <p className="section-subtitle text-charcoal animate-fade-in max-w-3xl" style={{animationDelay: '0.2s'}}>
            A proven methodology that ensures transparency, quality, and results at every stage of your project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`center-content group hover:-translate-y-3 transition-all duration-500 animate-fade-in cursor-default`}
              style={{animationDelay: `${0.4 + index * 0.2}s`}}
            >
              {/* Step card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-deep-indigo/20 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Step number circle with enhanced effects */}
                <div className="relative mb-6">
                  <div className={`${step.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl relative overflow-hidden`}>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-white/30 scale-0 group-hover:scale-125 transition-transform duration-500 animate-pulse opacity-0 group-hover:opacity-100"></div>
                    
                    <span className="text-2xl font-bold text-white relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </span>
                  </div>

                  {/* Floating icon */}
                  <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <step.icon className="h-4 w-4 text-deep-indigo" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-charcoal mb-4 group-hover:text-deep-indigo transition-colors duration-300 relative z-10">
                  {step.title}
                </h3>
                
                <p className="text-charcoal mb-6 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed relative z-10">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6 relative z-10">
                  <h4 className="font-semibold text-sm text-charcoal/80 mb-3">Key Deliverables:</h4>
                  {step.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="flex items-center text-sm text-charcoal/70 group-hover:text-charcoal transition-colors duration-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{deliverable}</span>
                    </div>
                  ))}
                </div>

                {/* Duration badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-charcoal group-hover:bg-deep-indigo group-hover:text-white transition-all duration-300 relative z-10">
                  <Clock className="h-4 w-4 mr-2" />
                  {step.duration}
                </div>

                {/* Progress indicator */}
                <div className="mt-6 w-full bg-gray-200 rounded-full h-2 overflow-hidden relative z-10">
                  <div 
                    className={`h-full ${step.bgColor} rounded-full transition-all duration-1000 group-hover:w-full`}
                    style={{width: `${33.33 * (index + 1)}%`}}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why it works section */}
        <div className="mt-20 center-content animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="bg-gradient-to-r from-deep-indigo/5 via-amber/5 to-deep-indigo/5 rounded-2xl p-10 backdrop-blur-sm border border-gray-200 max-w-5xl">
            <h3 className="text-2xl font-semibold text-charcoal mb-8">Why Our Approach Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="center-content hover:scale-105 transition-transform duration-300 group">
                <div className="bg-gradient-to-br from-deep-indigo to-blue-600 p-4 rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-charcoal mb-2 group-hover:text-deep-indigo transition-colors duration-300">
                  Predictable Timeline
                </h4>
                <p className="text-sm text-charcoal/70 text-center leading-relaxed">
                  Clear milestones and regular check-ins ensure your project stays on track and within budget.
                </p>
              </div>
              
              <div className="center-content hover:scale-105 transition-transform duration-300 group">
                <div className="bg-gradient-to-br from-amber to-orange-400 p-4 rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-charcoal mb-2 group-hover:text-deep-indigo transition-colors duration-300">
                  Continuous Communication
                </h4>
                <p className="text-sm text-charcoal/70 text-center leading-relaxed">
                  Weekly demos and progress reports keep you informed and involved throughout the development process.
                </p>
              </div>
              
              <div className="center-content hover:scale-105 transition-transform duration-300 group">
                <div className="bg-gradient-to-br from-deep-indigo to-purple-600 p-4 rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-charcoal mb-2 group-hover:text-deep-indigo transition-colors duration-300">
                  Measurable Results
                </h4>
                <p className="text-sm text-charcoal/70 text-center leading-relaxed">
                  Every deliverable is tied to specific business outcomes and success metrics that matter to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;