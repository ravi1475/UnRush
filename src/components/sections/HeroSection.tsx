import { ArrowRight, CheckCircle, Users, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-padding hero-top-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-deep-indigo rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-1/3 w-24 h-24 bg-amber rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-deep-indigo rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-48 right-1/4 w-16 h-16 bg-amber rounded-full animate-bounce" style={{animationDelay: '6s'}}></div>
      </div>
      
      <div className="container-max center-content relative z-10">
        <h1 className="hero-title text-charcoal mb-6 animate-fade-in hover:scale-105 transition-transform duration-300">
          Scale Your Business with
          <span className="text-transparent bg-gradient-to-r from-deep-indigo via-blue-600 to-deep-indigo bg-clip-text block mt-2 animate-gradient-x">
            Expert Development & AI Solutions
          </span>
        </h1>
        
        <p className="text-xl text-charcoal mb-8 animate-fade-in center-content hover:text-gray-700 transition-colors duration-300 max-w-3xl leading-relaxed" style={{animationDelay: '0.2s'}}>
          Transform your vision into scalable solutions. From rapid MVP development to enterprise-grade infrastructure, we deliver results that drive growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <button className="relative btn-primary text-xl px-10 py-4 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 transform active:scale-95 overflow-hidden group">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Pulsing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-deep-indigo to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <span className="relative flex items-center font-semibold">
              Start Your Project
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </span>
          </button>
          
          <button className="text-deep-indigo hover:text-blue-600 transition-colors duration-300 font-semibold text-lg underline underline-offset-4 hover:underline-offset-8">
            View Our Work
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="flex items-center justify-center group hover:scale-105 transition-all duration-300 cursor-default">
            <div className="bg-gradient-to-r from-deep-indigo to-blue-600 p-3 rounded-full mr-4 group-hover:shadow-lg transition-shadow duration-300">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <div className="font-bold text-charcoal group-hover:text-deep-indigo transition-colors duration-300">50+ Projects</div>
              <div className="text-sm text-charcoal/70">Successfully Delivered</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center group hover:scale-105 transition-all duration-300 cursor-default">
            <div className="bg-gradient-to-r from-amber to-orange-400 p-3 rounded-full mr-4 group-hover:shadow-lg transition-shadow duration-300">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <div className="font-bold text-charcoal group-hover:text-deep-indigo transition-colors duration-300">99.9% Uptime</div>
              <div className="text-sm text-charcoal/70">Guaranteed Performance</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center group hover:scale-105 transition-all duration-300 cursor-default">
            <div className="bg-gradient-to-r from-deep-indigo to-purple-600 p-3 rounded-full mr-4 group-hover:shadow-lg transition-shadow duration-300">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <div className="font-bold text-charcoal group-hover:text-deep-indigo transition-colors duration-300">24/7 Support</div>
              <div className="text-sm text-charcoal/70">Expert Assistance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;