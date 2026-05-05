import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "Jan 2024 - Present",
      description: "Leading the development of highly scalable microservices and dynamic frontend applications. Improved system performance by 40% through architecture refactoring.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    },
    {
      title: "Software Engineer",
      company: "Innovate Web Agency",
      period: "Jun 2021 - Dec 2023",
      description: "Developed and maintained multiple client-facing applications. Collaborated with UX/UI teams to implement pixel-perfect designs.",
      skills: ["JavaScript", "React", "Express", "MongoDB"],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary mt-1">
                    {exp.company}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="w-fit">{exp.period}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
