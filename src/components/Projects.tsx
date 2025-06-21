
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce MERN App",
      description: "Full-stack e-commerce platform built with MERN stack featuring user authentication, payment integration with Stripe, admin dashboard, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media management platform with real-time analytics, post scheduling, and multi-platform integration using MERN stack.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting built with modern MERN stack.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Express", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "Complete LMS platform with course creation, student enrollment, progress tracking, and video streaming capabilities using MERN stack architecture.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "AWS S3", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent MERN stack projects and applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 bg-white border-0 shadow-lg animate-scale-in ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-300 text-slate-700 hover:bg-slate-100 flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 px-8"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
