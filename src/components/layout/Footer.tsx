import { Mail, Phone, Globe, ArrowRight, Linkedin, Twitter, Github, Send } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Web & Mobile Development", href: "#services" },
    { name: "AI & Machine Learning", href: "#services" },
    { name: "DevOps & Cloud", href: "#services" },
    { name: "Strategy Consulting", href: "#services" }
  ];

  const quickLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Book a Call", href: "#contact" },
    { name: "Case Studies", href: "#case-studies" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { icon: Github, href: "#", color: "hover:text-gray-300" }
  ];

  const faqs = [
    {
      question: "How quickly can you start a project?",
      answer: "Most projects can begin within 1-2 weeks after our initial strategy call and agreement finalization."
    },
    {
      question: "Do you work with startups?",
      answer: "Yes, we specialize in helping startups scale from MVP to enterprise-level solutions."
    }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-charcoal via-gray-900 to-charcoal text-white section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-deep-indigo rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-amber rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container-max relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 footer-section-spacing">
          {/* Company Info */}
          <div className="col-span-2 center-content md:text-left md:items-start animate-fade-in">
            <div className="flex items-center mb-6 group">
              <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-1">
                <img 
                  src="/Real logo.png" 
                  alt="Unrush Logo" 
                  className="h-12 w-auto object-contain group-hover:drop-shadow-lg transition-all duration-300 brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                />
              </div>
              <span className="ml-3 text-2xl font-montserrat font-bold group-hover:text-amber transition-colors duration-300">
                Unrush
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 center-content md:text-left leading-relaxed hover:text-gray-300 transition-colors duration-300">
              Accelerating Your Growth with End-to-End Dev, AI & DevOps Excellence
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-gray-400 center-content md:text-left md:items-start">
              <div className="flex items-center group hover:text-white transition-colors duration-300 cursor-pointer">
                <Mail className="h-4 w-4 mr-3 group-hover:text-amber transition-colors duration-300" />
                <span>hello@unrush.agency</span>
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300 cursor-pointer">
                <Phone className="h-4 w-4 mr-3 group-hover:text-amber transition-colors duration-300" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center group hover:text-white transition-colors duration-300 cursor-pointer">
                <Globe className="h-4 w-4 mr-3 group-hover:text-amber transition-colors duration-300" />
                <span>Serving North America & Europe</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`bg-gray-800 p-3 rounded-full ${social.color} hover:scale-110 hover:shadow-lg transition-all duration-300 group`}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Services Links */}
          <div className="center-content md:text-left md:items-start animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h4 className="font-semibold mb-6 font-montserrat text-xl relative">
              Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-gray-400">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="center-content md:text-left md:items-start animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h4 className="font-semibold mb-6 font-montserrat text-xl relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 footer-section-spacing animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="center-content">
            <h4 className="font-semibold mb-4 font-montserrat text-xl">Stay Updated</h4>
            <p className="text-gray-400 mb-6 max-w-2xl">
              Get the latest insights on scaling your business with our monthly newsletter
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-deep-indigo focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-deep-indigo to-blue-600 px-6 py-3 rounded-r-lg hover:from-blue-600 hover:to-deep-indigo transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="border-t border-gray-800 pt-8 footer-section-spacing animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="center-content">
            <h4 className="font-semibold mb-6 font-montserrat text-xl">Frequently Asked Questions</h4>
            <div className="grid md:grid-cols-2 gap-8 text-left text-gray-400">
              {faqs.map((faq, index) => (
                <div key={index} className="group hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                  <h5 className="text-white font-medium mb-3 group-hover:text-amber transition-colors duration-300">
                    {faq.question}
                  </h5>
                  <p className="text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 center-content animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              &copy; 2024 Unrush. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                Made with ❤️ for growing businesses
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;