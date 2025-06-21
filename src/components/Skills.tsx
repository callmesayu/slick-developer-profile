
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "Next.js", level: 90, color: "bg-slate-700" },
        { name: "Redux/Zustand", level: 88, color: "bg-purple-500" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-600" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90, color: "bg-green-600" },
        { name: "Express.js", level: 88, color: "bg-gray-600" },
        { name: "MongoDB", level: 85, color: "bg-green-500" },
        { name: "MySQL", level: 80, color: "bg-blue-700" },
        { name: "RESTful APIs", level: 92, color: "bg-indigo-500" },
        { name: "GraphQL", level: 75, color: "bg-pink-500" }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90, color: "bg-gray-800" },
        { name: "Docker", level: 75, color: "bg-blue-600" },
        { name: "AWS", level: 70, color: "bg-orange-600" },
        { name: "Jest/Testing", level: 80, color: "bg-red-500" },
        { name: "Webpack/Vite", level: 85, color: "bg-yellow-500" },
        { name: "Linux", level: 78, color: "bg-yellow-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to create amazing digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.category} 
              className="bg-slate-800 border-slate-700 animate-slide-in-left"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-center text-white">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="animate-fade-in"
                    style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "MongoDB", color: "text-green-500" },
              { name: "Express.js", color: "text-gray-400" },
              { name: "React.js", color: "text-blue-400" },
              { name: "Node.js", color: "text-green-400" },
              { name: "TypeScript", color: "text-blue-500" },
              { name: "Next.js", color: "text-white" },
              { name: "Tailwind", color: "text-cyan-400" },
              { name: "Redux", color: "text-purple-400" }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className={`px-6 py-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 animate-scale-in ${tech.color}`}
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <span className="font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
