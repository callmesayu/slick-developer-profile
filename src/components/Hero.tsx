
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image with Glassmorphism */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-400/20 to-blue-400/20 backdrop-blur-sm border border-white/10 p-1">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Profile"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm">Judges a book by its cover...</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              I'm a Software Engineer.!
            </h1>
            <p className="text-xl text-purple-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              A self-taught UI/UX designer, functioning in the industry for 3+ years now. 
              I make meaningful and delightful digital products that create an equilibrium 
              between user needs and business goals.
            </p>
          </div>

          {/* Work Experience Cards */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-8">Work Experience</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { company: "CB on the blocks", role: "Full Stack Developer", period: "2021-2023" },
                { company: "CB on the blocks", role: "Frontend Developer", period: "2020-2021" },
                { company: "CB on the blocks", role: "UI/UX Designer", period: "2019-2020" },
                { company: "CB on the blocks", role: "Intern Developer", period: "2018-2019" }
              ].map((job, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-purple-400 rounded"></div>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{job.company}</h3>
                  <p className="text-purple-200 mb-1">{job.role}</p>
                  <p className="text-purple-300 text-sm">{job.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mb-12">
            <p className="text-purple-200 mb-6">I'm currently looking to join a <span className="text-purple-400 font-semibold">cross-functional</span> team</p>
            <p className="text-purple-300 text-sm mb-8">that values improving people's lives through accessible design</p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" className="border-purple-400/30 text-purple-200 hover:bg-purple-400/10 px-8 py-3 rounded-xl">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-purple-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cosmic Element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default Hero;
