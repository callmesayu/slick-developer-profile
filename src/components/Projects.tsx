
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team chat, and advanced analytics. Built for remote teams and productivity optimization.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent analytics platform that provides actionable insights using machine learning. Features predictive analytics and automated reporting.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "React", "TensorFlow", "D3.js", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile-First Social Platform",
      description: "A responsive social networking platform optimized for mobile devices. Includes real-time messaging, content sharing, and community features.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase", "GraphQL", "Redux", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden card-hover bg-white/50 backdrop-blur-sm border-white/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/20">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/20">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className="bg-electric-blue hover:bg-electric-blue/90 flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Live
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-electric-blue text-electric-blue hover:bg-electric-blue/10 flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
