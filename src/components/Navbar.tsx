import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tight">Suraj</span>
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <a href="#experience" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Skills</a>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
