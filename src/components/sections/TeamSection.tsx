import { Award, Shield, Star, Linkedin, Github, Code, Brain, Server, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    { 
      name: "Rakshit Ruhil", 
      role: "Full-Stack Architect", 
      img: "/Rakshit.png",
      bio: "Enterprise software architect with 8+ years scaling startups to millions of users",
      specialties: ["System Architecture", "React/Node.js", "Cloud Infrastructure", "Product Strategy"],
      achievements: ["Led 20+ enterprise projects", "Expert in MERN stack", "AWS Solutions Architect"],
      expertise: "Specializes in building scalable web applications and distributed systems that handle high-traffic loads. Expert in modern JavaScript frameworks, microservices architecture, and cloud-native solutions."
    },
    { 
      name: "Abhishek Prasad", 
      role: "AI/ML Engineer ", 
      img: "/Abhishek.png",
      bio: "AI/ML specialist with deep expertise in LLMs, computer vision, and intelligent automation",
      specialties: ["Machine Learning", "Deep Learning", "NLP & LLMs", "AI Strategy"],
      achievements: ["Built 15+ AI solutions", "Published AI research", "Google Cloud ML certified"],
      expertise: "Pioneers cutting-edge AI solutions from concept to production. Deep expertise in large language models, computer vision, and intelligent automation systems that transform business operations."
    }
  ];

  const achievements = [
    { 
      number: "50+", 
      label: "Projects Successfully Delivered", 
      icon: "🎯",
      description: "From startups to enterprise clients",
      color: "from-blue-500 to-blue-600"
    },
    { 
      number: "99.9%", 
      label: "Average System Uptime", 
      icon: "⚡",
      description: "Bulletproof infrastructure guaranteed",
      color: "from-green-500 to-green-600"
    },
    { 
      number: "24/7", 
      label: "Expert Support Coverage", 
      icon: "🛡️",
      description: "Round-the-clock assistance",
      color: "from-purple-500 to-purple-600"
    },
    { 
      number: "5+ Years", 
      label: "Combined Industry Experience", 
      icon: "🏆",
      description: "Proven track record of success",
      color: "from-amber to-orange-400"
    }
  ];

  const certifications = [
    { name: "AWS Solutions Architect", bgColor: "bg-orange-100", textColor: "text-orange-800", icon: "☁️" },
    { name: "Google Cloud ML Engineer", bgColor: "bg-blue-100", textColor: "text-blue-800", icon: "🤖" },
    { name: "React Advanced Certified", bgColor: "bg-cyan-100", textColor: "text-cyan-800", icon: "⚛️" },
    { name: "AI/ML Specialist", bgColor: "bg-purple-100", textColor: "text-purple-800", icon: "🧠" }
  ];

  const companyStats = [
    { metric: "95%", label: "Client Retention Rate", icon: Star },
    { metric: "400%", label: "Average ROI Delivered", icon: Award },
    { metric: "2-12 weeks", label: "Typical Project Timeline", icon: Zap },
    { metric: "100%", label: "Project Success Rate", icon: Shield }
  ];

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-deep-indigo to-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-r from-amber to-orange-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="center-content section-title-spacing">
          <h2 className="section-title text-charcoal mb-4 animate-fade-in">Meet the Founders</h2>
          <p className="section-subtitle text-charcoal center-content animate-fade-in max-w-3xl" style={{animationDelay: '0.2s'}}>
            Experienced engineers and architects dedicated to transforming your vision into scalable, innovative solutions
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border-0 shadow-lg bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50 animate-fade-in overflow-hidden`}
              style={{animationDelay: `${0.4 + index * 0.2}s`}}
            >
              <CardContent className="p-8 center-content relative">
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Photo container with enhanced effects */}
                <div className="relative mb-6">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-32 h-32 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                    />
                    {/* Photo overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-indigo/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                  
                  {/* Floating social icons */}
                  <div className="absolute -bottom-4 -right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-white rounded-full p-2 shadow-lg hover:bg-deep-indigo hover:text-white transition-all duration-200 cursor-pointer hover:scale-110">
                      <Linkedin className="h-4 w-4" />
                    </div>
                    <div className="bg-white rounded-full p-2 shadow-lg hover:bg-deep-indigo hover:text-white transition-all duration-200 cursor-pointer hover:scale-110">
                      <Github className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-charcoal mb-2 group-hover:text-deep-indigo transition-colors duration-300 relative z-10">
                  {member.name}
                </h3>
                <p className="text-deep-indigo mb-3 font-semibold relative z-10">{member.role}</p>
                <p className="text-charcoal/80 text-sm mb-4 group-hover:text-charcoal transition-colors duration-300 relative z-10 leading-relaxed">
                  {member.bio}
                </p>

                {/* Expertise description */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg group-hover:bg-white transition-colors duration-300 relative z-10">
                  <p className="text-sm text-charcoal/70 group-hover:text-charcoal transition-colors duration-300 leading-relaxed">
                    {member.expertise}
                  </p>
                </div>

                {/* Specialty tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6 relative z-10">
                  {member.specialties.map((specialty, specIndex) => (
                    <span 
                      key={specIndex}
                      className="px-3 py-2 bg-gray-100 text-charcoal text-sm rounded-full group-hover:bg-deep-indigo group-hover:text-white transition-all duration-300 hover:scale-105 font-medium"
                      style={{transitionDelay: `${specIndex * 50}ms`}}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-2 mb-6 relative z-10">
                  <h4 className="font-semibold text-sm text-charcoal/80 mb-3">Key Achievements:</h4>
                  {member.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center text-sm text-charcoal/70 group-hover:text-charcoal transition-colors duration-300">
                      <Star className="h-4 w-4 text-amber mr-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack icons */}
                <div className="flex justify-center space-x-3 relative z-10">
                  <div className="group-hover:animate-bounce transition-all duration-300" style={{animationDelay: '0ms'}}>
                    <Code className="h-6 w-6 text-deep-indigo group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="group-hover:animate-bounce transition-all duration-300" style={{animationDelay: '100ms'}}>
                    <Brain className="h-6 w-6 text-amber group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="group-hover:animate-bounce transition-all duration-300" style={{animationDelay: '200ms'}}>
                    <Server className="h-6 w-6 text-deep-indigo group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Performance Stats */}
        <div className="mb-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl font-semibold text-charcoal mb-8 center-content">Company Performance</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <div 
                key={index}
                className="center-content group hover:-translate-y-2 transition-all duration-300 cursor-default"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-deep-indigo/20 w-full">
                  <div className="mb-4">
                    <stat.icon className="h-8 w-8 text-deep-indigo mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-deep-indigo mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.metric}
                  </div>
                  <div className="text-sm font-semibold text-charcoal group-hover:text-deep-indigo transition-colors duration-300 mb-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Team Achievements */}
        <div className="mb-16 animate-fade-in" style={{animationDelay: '1s'}}>
          <h3 className="text-2xl font-semibold text-charcoal mb-8 center-content">Track Record</h3>
          <div className="bg-gradient-to-r from-deep-indigo/5 via-amber/5 to-deep-indigo/5 rounded-3xl p-10 backdrop-blur-sm border border-gray-200">
            <div className="grid md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="center-content group hover:scale-105 transition-all duration-300 cursor-default"
                >
                  <div className={`bg-gradient-to-r ${achievement.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full text-center text-white`}>
                    <div className="text-3xl mb-3">{achievement.icon}</div>
                    <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                      {achievement.number}
                    </div>
                    <div className="text-sm font-semibold mb-2 opacity-90">
                      {achievement.label}
                    </div>
                    <div className="text-xs opacity-80 leading-relaxed">
                      {achievement.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="center-content animate-fade-in" style={{animationDelay: '1.2s'}}>
          <h3 className="text-2xl font-semibold text-charcoal mb-8">Professional Certifications</h3>
          <div className="flex justify-center items-center space-x-6 flex-wrap gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`${cert.bgColor} px-6 py-4 rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-default`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{cert.icon}</span>
                  <span className={`${cert.textColor} font-bold group-hover:font-extrabold transition-all duration-300 text-sm`}>
                    {cert.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;