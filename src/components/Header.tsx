import { Button } from "@/components/ui/button";
import { Scale, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-primary to-secondary p-2.5 rounded-xl">
              <Scale className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Abogados Salud MDP</h1>
              <p className="text-xs text-muted-foreground">Abogados Especialistas</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 ml-auto">
            <a
              href="#servicios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-[var(--transition-smooth)]"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-[var(--transition-smooth)]"
            >
              Nosotros
            </a>
            <a
              href="#como-actuar"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-[var(--transition-smooth)]"
            >
              Cómo actuar
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-[var(--transition-smooth)]"
            >
              Contacto
            </a>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden ml-auto">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-6 mt-8">
                <a
                  href="#servicios"
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-[var(--transition-smooth)]"
                >
                  Servicios
                </a>
                <a
                  href="#nosotros"
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-[var(--transition-smooth)]"
                >
                  Nosotros
                </a>
                <a
                  href="#como-actuar"
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-[var(--transition-smooth)]"
                >
                  Cómo actuar
                </a>
                <a
                  href="#contacto"
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-[var(--transition-smooth)]"
                >
                  Contacto
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
