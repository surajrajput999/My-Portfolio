import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Cloud File Storage",
      description: "A secure file sharing application featuring end-to-end encryption, drag-and-drop uploads, and AWS S3 integration.",
      tech: ["TypeScript", "Next.js", "AWS S3", "Prisma"],
      github: "#",
      live: "#",
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable messaging platform supporting direct messages, group chats, and real-time notifications via WebSockets.",
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="mt-2 line-clamp-3">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-2 pt-4">
              <a href={project.github} target="_blank" rel="noreferrer" className="flex-1">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <FaGithub className="h-4 w-4" /> Code
                </Button>
              </a>
              <a href={project.live} target="_blank" rel="noreferrer" className="flex-1">
                <Button size="sm" className="w-full gap-2">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
