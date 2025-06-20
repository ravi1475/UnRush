import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-deep-indigo via-deep-indigo to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-amber rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-white rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container-max center-content relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6 animate-fade-in hover:text-amber transition-colors duration-300">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl animate-fade-in hover:text-white transition-colors duration-300 leading-relaxed" style={{animationDelay: '0.2s'}}>
            Join 50+ successful companies who've scaled their operations with our proven development and AI solutions. Start your transformation today.
          </p>
          
          {/* Value propositions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
              <CheckCircle className="h-8 w-8 text-amber mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-semibold mb-2">Proven Results</h3>
              <p className="text-white/80 text-sm">99.9% uptime, 400% average ROI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
              <Clock className="h-8 w-8 text-amber mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-semibold mb-2">Fast Delivery</h3>
              <p className="text-white/80 text-sm">2-12 weeks typical timeline</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
              <Shield className="h-8 w-8 text-amber mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-semibold mb-2">Risk-Free</h3>
              <p className="text-white/80 text-sm">30-day satisfaction guarantee</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <button className="relative bg-gradient-to-r from-amber to-orange-400 text-white hover:from-amber hover:to-amber text-xl px-10 py-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 transform active:scale-95 overflow-hidden group">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative flex items-center font-semibold">
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
              </span>
            </button>
            
            <button className="text-white/90 hover:text-white transition-colors duration-300 font-semibold text-lg underline underline-offset-4 hover:underline-offset-8">
              Schedule Free Consultation
            </button>
          </div>
          
          {/* Social proof and guarantee */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-amber mb-2">50+</div>
                <div className="text-white/80 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber mb-2">95%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber mb-2">24/7</div>
                <div className="text-white/80 text-sm">Expert Support</div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-6 pt-6">
              <p className="text-white/80 text-sm text-center leading-relaxed">
                <strong className="text-white">Free 30-minute strategy call</strong> • No sales pitch, just expert advice • 
                <strong className="text-white"> 30-day satisfaction guarantee</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
