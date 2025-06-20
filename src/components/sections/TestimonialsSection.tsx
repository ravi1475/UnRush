import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Unrush completely transformed our infrastructure. We went from constant downtime to 99.9% uptime in just 3 months.",
      author: "David Park",
      position: "CTO, TechFlow Inc.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=face",
      company: "TechFlow Inc.",
      results: ["99.9% Uptime", "3 Months Implementation", "Zero Downtime Migration"]
    },
    {
      rating: 5,
      text: "Their AI implementation saved us 40 hours per week of manual work. ROI was immediate and continues to grow.",
      author: "Lisa Chen",
      position: "Founder, DataVision",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=50&h=50&fit=crop&crop=face",
      company: "DataVision",
      results: ["40 Hours Saved/Week", "Immediate ROI", "Automated Workflows"]
    }
  ];

  const clientLogos = [
    { name: "TechFlow", color: "text-deep-indigo" },
    { name: "DataVision", color: "text-amber" },
    { name: "CloudCorp", color: "text-deep-indigo" },
    { name: "AI Solutions", color: "text-purple-600" },
    { name: "DevOps Pro", color: "text-green-600" }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-36 h-36 bg-gradient-to-r from-deep-indigo to-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-28 h-28 bg-gradient-to-r from-amber to-orange-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="center-content mb-16">
          <h2 className="section-title text-charcoal mb-4 animate-fade-in">Trusted by Growing Companies</h2>
          <p className="section-subtitle text-charcoal animate-fade-in" style={{animationDelay: '0.2s'}}>
            Real results from real clients who've scaled their businesses with us
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {clientLogos.map((logo, index) => (
                <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
                  <div className="p-4 center-content">
                    <div className="bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 h-16 rounded-xl flex items-center justify-center border border-gray-200 hover:border-deep-indigo/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-default">
                      <span className={`${logo.color} font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                        {logo.name}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-deep-indigo border-deep-indigo hover:bg-deep-indigo hover:text-white transition-all duration-300" />
            <CarouselNext className="text-deep-indigo border-deep-indigo hover:bg-deep-indigo hover:text-white transition-all duration-300" />
          </Carousel>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50 animate-fade-in overflow-hidden`}
              style={{animationDelay: `${0.6 + index * 0.2}s`}}
            >
              <CardContent className="p-8 center-content relative">
                {/* Hover background effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
                
                {/* Quote icon */}
                <div className="absolute top-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="h-12 w-12 text-deep-indigo" />
                </div>
                
                {/* Star rating with staggered animation */}
                <div className="flex mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className={`h-5 w-5 text-amber fill-current group-hover:scale-110 transition-all duration-300`}
                      style={{
                        transitionDelay: `${starIndex * 100}ms`,
                        animation: `pulse 2s infinite ease-in-out ${starIndex * 0.2}s`
                      }}
                    />
                  ))}
                </div>
                
                <p className="text-charcoal mb-6 text-lg italic leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  "{testimonial.text}"
                </p>
                
                {/* Results tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6 relative z-10">
                  {testimonial.results.map((result, resultIndex) => (
                    <span 
                      key={resultIndex}
                      className="px-3 py-1 bg-gray-100 text-charcoal text-xs rounded-full group-hover:bg-deep-indigo group-hover:text-white transition-all duration-300 hover:scale-105"
                      style={{transitionDelay: `${resultIndex * 50}ms`}}
                    >
                      {result}
                    </span>
                  ))}
                </div>
                
                {/* Author info */}
                <div className="flex items-center relative z-10">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    />
                    {/* Profile ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-deep-indigo scale-0 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-50"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal group-hover:text-deep-indigo transition-colors duration-300">
                      {testimonial.author}
                    </p>
                    <p className="text-charcoal text-sm group-hover:text-gray-700 transition-colors duration-300">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social proof footer */}
        <div className="mt-16 center-content animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="bg-gradient-to-r from-deep-indigo/5 via-amber/5 to-deep-indigo/5 rounded-2xl p-8 backdrop-blur-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-4">Join Our Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-charcoal">
              <div className="center-content hover:text-deep-indigo transition-colors duration-300">
                <div className="text-2xl mb-2">🎯</div>
                <span>50+ Successful Projects</span>
              </div>
              <div className="center-content hover:text-deep-indigo transition-colors duration-300">
                <div className="text-2xl mb-2">⚡</div>
                <span>99.9% Client Satisfaction</span>
              </div>
              <div className="center-content hover:text-deep-indigo transition-colors duration-300">
                <div className="text-2xl mb-2">🚀</div>
                <span>Average 400% ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;