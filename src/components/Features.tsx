import { Award, Target, Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="nosotros" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosotros
          </h2>
          <p className="text-lg text-muted-foreground">
            Abogados especializados en derecho a la salud y en la protección de los derechos de las personas con discapacidad en Mar del Plata.
          </p>
        </div>

        {/* Experiencia destacada */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-card)]">
            <p className="text-foreground text-lg leading-relaxed mb-4">
              Contamos con <strong className="font-bold text-primary">25 años de trayectoria</strong> que avalan nuestro profesionalismo y dedicación. Actuamos cuando se vulneran derechos de salud para asegurar coberturas de tratamientos, medicación, internaciones y prestaciones vinculadas a la discapacidad.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed italic border-l-4 border-primary pl-4">
              Conocemos los criterios de los tribunales y el proceso del amparo, lo que nos permite diseñar estrategias ajustadas a cada caso y obtener resultados en tiempo útil.
            </p>
          </div>
        </div>

        {/* Grid de características */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Nuestro enfoque */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow duration-300">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nuestro enfoque
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-foreground leading-relaxed">Asesoramiento claro, práctico y orientado a resultados.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-foreground leading-relaxed">Estrategias según documentación y contexto de cada afiliado.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-foreground leading-relaxed">Amplia experiencia en amparos de salud y medidas cautelares.</span>
              </li>
            </ul>
          </div>

          {/* Por qué elegirnos */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow duration-300">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Por qué elegirnos
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-foreground leading-relaxed">Especialistas en derecho a la salud.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-foreground leading-relaxed">25 años de experiencia.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-foreground leading-relaxed">Enfoque local en Mar del Plata.</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => scrollToSection('servicios')}
              >
                Ver servicios
              </Button>
              <Button 
                className="flex-1"
                onClick={() => scrollToSection('contacto')}
              >
                Contacto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
