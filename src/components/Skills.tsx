
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 78 }
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "AWS", level: 83 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 92 },
        { name: "CI/CD", level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.category} 
              className="bg-white/50 backdrop-blur-sm border-white/20 animate-slide-in-left"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-center gradient-text">
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
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "20+", label: "Happy Clients" },
              { number: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="animate-scale-in"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
