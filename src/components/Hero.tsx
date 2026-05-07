import { Download, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 flex flex-col items-center text-center">
      <div className="space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Hi, I'm <br className="hidden sm:block" /> 
          <span className="text-primary inline-block mt-2">Suraj Bhan Pratap Singh</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
          Full Stack Developer
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I specialize in building scalable web applications, designing elegant user interfaces, and solving complex problems across the entire stack. Passionate about clean code and modern architectures.
        </p>
        
        <div className="flex justify-center gap-4 pt-4">
          <a href="http://linkedin.com/in/suraj-bhan-pratap-singh-891727293/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Button variant="ghost" size="icon" className="rounded-full hover:text-primary transition-colors">
              <FaLinkedin className="h-6 w-6" />
            </Button>
          </a>
          <a href="https://github.com/surajrajput999" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Button variant="ghost" size="icon" className="rounded-full hover:text-primary transition-colors">
              <FaGithub className="h-6 w-6" />
            </Button>
          </a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="Twitter">
            <Button variant="ghost" size="icon" className="rounded-full hover:text-primary transition-colors">
              <FaTwitter className="h-6 w-6" />
            </Button>
          </a>
          <a href="mailto:surajdona2005@gmail.com" aria-label="Email">
            <Button variant="ghost" size="icon" className="rounded-full hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </Button>
          </a>
          <a href="tel:7209690361" aria-label="Phone">
            <Button variant="ghost" size="icon" className="rounded-full hover:text-primary transition-colors">
              <Phone className="h-6 w-6" />
            </Button>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <a href="#projects">
            <Button size="lg" className="w-full sm:w-auto font-medium">View Projects</Button>
          </a>
          <a href="https://drive.google.com/file/d/10k7q5r-EKbAWinmBXLF44NiY4Oh6UVBt/view?usp=sharing" target="_blank" rel="noreferrer" title="View Resume">
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 font-medium">
              <Download className="h-5 w-5" /> View Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
