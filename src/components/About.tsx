
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            digital solutions that make a difference. I love turning complex problems 
            into simple, beautiful, and intuitive designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-electric-blue/20 to-cyber-purple/20 p-8 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Alex Johnson working on laptop"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-3xl font-bold">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Started my journey in 2019 with a curiosity for how things work on the web. 
              Since then, I've had the privilege of working with startups, agencies, and 
              enterprises to build products that users love.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the 
              developer community.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS'].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Code2,
              title: "Clean Code",
              description: "Writing maintainable, scalable, and efficient code that stands the test of time."
            },
            {
              icon: Palette,
              title: "UI/UX Design",
              description: "Creating beautiful and intuitive user interfaces with attention to detail."
            },
            {
              icon: Zap,
              title: "Performance",
              description: "Optimizing applications for speed, accessibility, and user experience."
            },
            {
              icon: Users,
              title: "Collaboration",
              description: "Working effectively with teams to deliver projects on time and on budget."
            }
          ].map((item, index) => (
            <Card 
              key={item.title} 
              className="card-hover gradient-bg border-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-electric-blue/10 rounded-xl flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-electric-blue" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
