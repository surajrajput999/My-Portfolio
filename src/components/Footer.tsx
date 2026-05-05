import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/50">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold text-lg">Suraj Bhan Pratap Singh</p>
          <p className="text-sm text-muted-foreground mt-1">Full Stack Developer</p>
        </div>
        
        <div className="flex gap-4">
          <a href="http://linkedin.com/in/suraj-bhan-pratap-singh-891727293/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/surajrajput999" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaTwitter className="h-5 w-5" />
          </a>
        </div>
        
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Suraj Bhan Pratap Singh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
