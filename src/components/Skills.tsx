import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"],
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "PostgreSQL", "Git", "Docker", "AWS", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
