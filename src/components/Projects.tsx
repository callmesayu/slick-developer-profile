
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* First Project */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Example Project</h2>
                <p className="text-purple-200 mb-8 leading-relaxed">
                  Ut auctor viverra pede. Phasellus ultricies convallis nisi. Nam cursus vestibulum 
                  tortor, eget consectetur neque rutrum vel. Ut cursus metus et dolor. Aliquam erat volutpat. 
                  Proin in lorem. Nunc rutrum nibh at mauris eleifend tempor. Ut tellus. 
                  Aliquam dignissim varius mauris.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button variant="outline" className="border-purple-400/30 text-purple-200 hover:bg-purple-400/10">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
              <div>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      <div className="w-full h-full bg-white/90 m-4 rounded-lg flex items-center justify-center">
                        <div className="text-gray-600 text-center">
                          <div className="w-16 h-16 bg-gray-200 rounded mx-auto mb-4"></div>
                          <p className="text-sm">Project Screenshot</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Second Project */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h2 className="text-3xl font-bold text-white mb-6">Example Project</h2>
                <p className="text-purple-200 mb-8 leading-relaxed">
                  Ut auctor viverra pede. Phasellus ultricies convallis nisi. Nam cursus vestibulum 
                  tortor, eget consectetur neque rutrum vel. Ut cursus metus et dolor. Aliquam erat volutpat. 
                  Proin in lorem. Nunc rutrum nibh at mauris eleifend tempor. Ut tellus. 
                  Aliquam dignissim varius mauris.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button variant="outline" className="border-purple-400/30 text-purple-200 hover:bg-purple-400/10">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
              <div className="lg:order-1">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="w-full h-full bg-white/90 m-4 rounded-lg flex items-center justify-center">
                        <div className="text-gray-600 text-center">
                          <div className="w-16 h-16 bg-gray-200 rounded mx-auto mb-4"></div>
                          <p className="text-sm">Project Screenshot</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
