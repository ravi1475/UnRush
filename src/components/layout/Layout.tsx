import { useState, useEffect } from 'react';
import { ArrowUp, Zap, Rocket, Shield, Sparkles, CheckCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import MethodologySection from '../sections/MethodologySection';
import TeamSection from '../sections/TeamSection';
import ResourcesSection from '../sections/ResourcesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTASection from '../sections/CTASection';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentLoadingStep, setCurrentLoadingStep] = useState(0);

  const loadingSteps = [
    { text: "Initializing premium experience", icon: "sparkles", color: "text-purple-500" },
    { text: "Loading professional components", icon: "rocket", color: "text-blue-500" },
    { text: "Securing enterprise connections", icon: "shield", color: "text-green-500" },
    { text: "Optimizing performance", icon: "zap", color: "text-amber" },
    { text: "Finalizing user experience", icon: "check", color: "text-emerald-500" }
  ];

  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className={className} />;
      case 'rocket':
        return <Rocket className={className} />;
      case 'shield':
        return <Shield className={className} />;
      case 'zap':
        return <Zap className={className} />;
      case 'check':
        return <CheckCircle className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  useEffect(() => {
    // Enhanced loading progress with smoother animation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        const increment = Math.random() * 8 + 2; // Smoother increments
        const newProgress = prev + increment;
        
        // Update loading step based on progress
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
        setCurrentLoadingStep(Math.min(stepIndex, loadingSteps.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 800); // Longer delay for premium feel
          return 100;
        }
        return newProgress;
      });
    }, 80); // Faster updates for smoother animation

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
        {/* Enhanced animated background */}
        <div className="absolute inset-0">
          {/* Large gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full animate-pulse blur-3xl" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-amber/20 to-orange-400/20 rounded-full animate-pulse blur-3xl" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 rounded-full animate-pulse blur-3xl" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="text-center relative z-10 max-w-2xl mx-auto px-6">
          {/* Premium logo container */}
          <div className="relative mb-12">
            {/* Outer glow ring */}
            <div className="absolute inset-0 w-32 h-32 mx-auto">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 opacity-30 animate-spin" style={{animationDuration: '8s'}}></div>
            </div>
            
            {/* Middle ring */}
            <div className="absolute inset-2 w-28 h-28 mx-auto">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-amber via-rose-400 to-blue-500 opacity-40 animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
            </div>
            
            {/* Logo container with enhanced effects */}
            <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center group">
              {/* Logo shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-pulse rounded-2xl" style={{animationDuration: '2s'}}></div>
              
              {/* Logo image */}
              <img 
                src="/Real logo.png" 
                alt="Unrush Logo" 
                className="h-16 w-auto object-contain relative z-10 drop-shadow-2xl"
                style={{filter: 'brightness(0) invert(1) drop-shadow(0 0 20px rgba(255,255,255,0.5))'}}
              />
              
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-emerald-400/20 animate-pulse"></div>
            </div>

            {/* Orbiting elements */}
            <div className="absolute inset-0 w-40 h-40 mx-auto">
              <div className="relative w-full h-full animate-spin" style={{animationDuration: '12s'}}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Sparkles className="h-6 w-6 text-purple-400 animate-pulse" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <Rocket className="h-6 w-6 text-blue-400 animate-pulse" style={{animationDelay: '0.5s'}} />
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Shield className="h-6 w-6 text-emerald-400 animate-pulse" style={{animationDelay: '1s'}} />
                </div>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <Zap className="h-6 w-6 text-amber animate-pulse" style={{animationDelay: '1.5s'}} />
                </div>
              </div>
            </div>
          </div>

          {/* Company name with enhanced typography */}
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text animate-pulse">
            Unrush
          </h1>
          
          <p className="text-white/80 mb-12 font-inter text-lg leading-relaxed">
            Crafting extraordinary digital experiences with enterprise-grade precision
          </p>

          {/* Enhanced progress section */}
          <div className="mb-8">
            {/* Progress bar container */}
            <div className="relative w-full max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-full h-4 mb-6 overflow-hidden border border-white/20">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 animate-pulse"></div>
              
              {/* Progress fill */}
              <div 
                className="relative h-full bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 rounded-full transition-all duration-500 ease-out overflow-hidden"
                style={{width: `${Math.min(loadingProgress, 100)}%`}}
              >
                {/* Progress shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-pulse" style={{animationDuration: '1.5s'}}></div>
              </div>
              
              {/* Progress glow */}
              <div 
                className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent to-white/30 blur-sm transition-all duration-500"
                style={{left: `${Math.min(loadingProgress, 100)}%`, transform: 'translateX(-50%)'}}
              ></div>
            </div>
            
            {/* Progress percentage */}
            <div className="text-2xl font-bold text-white mb-6 tabular-nums">
              {Math.round(Math.min(loadingProgress, 100))}%
            </div>
          </div>

          {/* Current loading step */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-3 text-white/90">
              {loadingSteps[currentLoadingStep] && (
                <>
                  {renderIcon(loadingSteps[currentLoadingStep].icon, `h-5 w-5 ${loadingSteps[currentLoadingStep].color} animate-pulse`)}
                  <span className="text-lg font-medium">
                    {loadingSteps[currentLoadingStep].text}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Loading steps indicator */}
          <div className="flex justify-center space-x-3 mb-8">
            {loadingSteps.map((step, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index <= currentLoadingStep 
                    ? 'bg-gradient-to-r from-blue-400 to-emerald-400 scale-110' 
                    : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Premium tagline */}
          <div className="text-center">
            <p className="text-white/60 text-sm font-inter mb-2">
              Preparing your premium digital experience
            </p>
            <div className="flex items-center justify-center space-x-1">
              <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>
        
        {/* Services Section */}
        <section id="services">
          <ServicesSection />
        </section>
        
        {/* Case Studies Section */}
        <section id="case-studies">
          <CaseStudiesSection />
        </section>
        
        {/* Methodology Section */}
        <section id="methodology">
          <MethodologySection />
        </section>
        
        {/* Team Section */}
        <section id="team">
          <TeamSection />
        </section>
        
        {/* Resources Section */}
        <section id="resources">
          <ResourcesSection />
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        {/* CTA Section */}
        <section id="cta-section">
          <CTASection />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-gradient-to-r from-deep-indigo to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-40 group ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
      </button>
      
      {/* Background decoration for sections */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-deep-indigo/5 to-blue-500/5 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 right-20 w-48 h-48 bg-gradient-to-br from-amber/5 to-orange-400/5 rounded-full animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-deep-indigo/5 rounded-full animate-pulse" style={{animationDuration: '5s', animationDelay: '4s'}}></div>
      </div>
      
      {/* Performance and SEO meta tags would go here in a real app */}
      <noscript>
        <div className="bg-amber text-white p-4 text-center">
          Please enable JavaScript for the best experience on our website.
        </div>
      </noscript>
    </div>
  );
};

export default Layout; 