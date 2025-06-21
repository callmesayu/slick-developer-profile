
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Server, Smartphone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Developer workspace"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">My Journey as a MERN Developer</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a dedicated MERN stack developer with 4+ years of experience in building 
              modern, scalable web applications. My expertise lies in creating end-to-end 
              solutions using MongoDB, Express.js, React, and Node.js.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm passionate about writing clean, efficient code and staying up-to-date 
              with the latest technologies in the JavaScript ecosystem. I enjoy solving 
              complex problems and turning ideas into reality through code.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Code2,
              title: "Frontend Development",
              description: "Expert in React, Redux, HTML5, CSS3, and modern JavaScript frameworks."
            },
            {
              icon: Server,
              title: "Backend Development", 
              description: "Proficient in Node.js, Express.js, RESTful APIs, and server-side architecture."
            },
            {
              icon: Database,
              title: "Database Management",
              description: "Experienced with MongoDB, MySQL, and database optimization techniques."
            },
            {
              icon: Smartphone,
              title: "Responsive Design",
              description: "Creating mobile-first, responsive applications with modern UI/UX principles."
            }
          ].map((item, index) => (
            <Card 
              key={item.title}
              className="text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 bg-white border-0 shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
