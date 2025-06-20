import { TrendingUp, Zap, Shield, Users, ArrowUpRight, Clock, DollarSign, Target } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "TechFlow Financial Platform",
      category: "FinTech • Enterprise SaaS",
      timeline: "8 months",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      client: "TechFlow Inc.",
      industry: "Financial Services",
      challenge: {
        title: "Legacy Infrastructure Crisis",
        description: "Processing only 1,200 daily transactions with 15% system downtime, costing $50K monthly in lost revenue and customer churn.",
        pain_points: ["Frequent system crashes", "Security vulnerabilities", "Poor user experience", "Limited scalability"]
      },
      solution: {
        title: "Cloud-Native Transformation",
        description: "Built modern microservices architecture with real-time processing, AI-powered fraud detection, and auto-scaling infrastructure.",
        technologies: ["React", "Node.js", "AWS", "MongoDB", "Redis", "Docker"]
      },
      results: [
        { metric: "500%", label: "Transaction Capacity Increase", icon: TrendingUp },
        { metric: "99.97%", label: "System Uptime Achieved", icon: Shield },
        { metric: "75%", label: "Fraud Reduction", icon: Target },
        { metric: "$2.3M", label: "Annual Revenue Increase", icon: DollarSign }
      ],
      testimonial: {
        quote: "Unrush transformed our entire business. We went from constant firefighting to scaling confidently.",
        author: "David Chen, CTO at TechFlow Inc."
      },
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      id: 2,
      title: "SmartSupport AI Platform",
      category: "E-commerce • AI Automation",
      timeline: "5 months",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      client: "RetailMax Corp",
      industry: "E-commerce",
      challenge: {
        title: "Customer Support Overwhelm",
        description: "Support team drowning in 2,500+ daily tickets, leading to 48-hour response times and 60% customer satisfaction.",
        pain_points: ["Overwhelming ticket volume", "Slow response times", "High support costs", "Poor customer satisfaction"]
      },
      solution: {
        title: "Intelligent AI Automation",
        description: "Deployed advanced NLP chatbot with sentiment analysis, automated routing, and seamless human handoff capabilities.",
        technologies: ["Python", "TensorFlow", "OpenAI API", "React", "PostgreSQL", "AWS Lambda"]
      },
      results: [
        { metric: "85%", label: "Ticket Volume Reduction", icon: TrendingUp },
        { metric: "24/7", label: "Instant Support Coverage", icon: Clock },
        { metric: "94%", label: "Customer Satisfaction Score", icon: Users },
        { metric: "$480K", label: "Annual Cost Savings", icon: DollarSign }
      ],
      testimonial: {
        quote: "The AI solution exceeded our expectations. Our customers love the instant, accurate responses.",
        author: "Sarah Martinez, VP Operations at RetailMax"
      },
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  const overallStats = [
    { number: "50+", label: "Enterprise Projects", sublabel: "Successfully delivered" },
    { number: "99.9%", label: "Average Uptime", sublabel: "Across all systems" },
    { number: "400%", label: "Average ROI", sublabel: "Within first year" },
    { number: "95%", label: "Client Satisfaction", sublabel: "Long-term partnerships" }
  ];

  return (
    <section id="case-studies" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="center-content mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4 animate-fade-in">
            <Target className="h-4 w-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Transforming Businesses with
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Proven Results
            </span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
            Real transformations from Fortune 500 companies and fast-growing startups who trusted us with their most critical projects.
          </p>
        </div>

        {/* Case Studies - Horizontal Cards */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.id}
              className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden animate-fade-in"
              style={{animationDelay: `${0.3 + index * 0.2}s`}}
            >
              <div className="grid md:grid-cols-5 gap-0 min-h-[400px]">
                {/* Image Section - 2 columns */}
                <div className="md:col-span-2 relative overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-sm font-semibold text-gray-900">{study.category}</div>
                    <div className="text-xs text-gray-600 flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {study.timeline}
                    </div>
                  </div>

                  {/* Floating Metric */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center space-x-2">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-r ${study.gradient}`}>
                        {React.createElement(study.results[0].icon, { className: "h-4 w-4 text-white" })}
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900">{study.results[0].metric}</div>
                        <div className="text-xs text-gray-600">{study.results[0].label}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section - 3 columns */}
                <CardContent className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {study.title}
                    </h3>
                    <div className="text-blue-600 font-semibold mb-4">{study.client} • {study.industry}</div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="p-1.5 bg-red-100 rounded-lg mr-2">
                          <Shield className="h-4 w-4 text-red-600" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm">Challenge</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{study.challenge.description}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="p-1.5 bg-blue-100 rounded-lg mr-2">
                          <Zap className="h-4 w-4 text-blue-600" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm">Solution</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">{study.solution.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {study.solution.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results & Testimonial */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Results */}
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-3">Key Results</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center bg-gray-50 rounded-lg p-2">
                            {React.createElement(result.icon, { className: "h-4 w-4 text-green-600 mr-2 flex-shrink-0" })}
                            <div className="flex-1">
                              <span className="font-bold text-lg text-gray-900">{result.metric}</span>
                              <span className="text-sm text-gray-600 ml-2">{result.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-3">Client Feedback</h4>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <p className="text-gray-800 text-sm italic mb-3 leading-relaxed">
                          "{study.testimonial.quote}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">
                              {study.testimonial.author.split(' ')[0][0]}
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-gray-900">{study.testimonial.author}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Performance Stats */}
        <div className="mt-24 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Our Track Record Speaks for Itself</h3>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                  Consistent results across industries, from startups to Fortune 500 companies
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                {overallStats.map((stat, index) => (
                  <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xl font-semibold mb-1 text-blue-100">{stat.label}</div>
                    <div className="text-sm text-blue-300">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the companies who've transformed their business with our proven approach. Let's discuss your project.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              Start Your Transformation
              <ArrowUpRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;