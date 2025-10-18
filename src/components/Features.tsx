import { Button } from "@/components/ui/button";

const Features = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="nosotros" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              NUESTRO ESTUDIO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quiénes somos
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl">
              Abogados especializados en derecho a la salud y en la protección de los derechos de las personas con discapacidad en Mar del Plata.
            </p>
          </div>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left column */}
            <div className="space-y-8">
              <div>
                <p className="text-foreground leading-relaxed mb-4">
                  Contamos con <strong className="font-bold">25 años de trayectoria</strong> que avalan nuestro profesionalismo y dedicación. Actuamos cuando se vulneran derechos de salud para asegurar coberturas de tratamientos, medicación, internaciones y prestaciones vinculadas a la discapacidad.
                </p>
                <p className="text-foreground leading-relaxed italic">
                  Conocemos los criterios de los tribunales y el proceso del amparo, lo que nos permite diseñar estrategias ajustadas a cada caso y obtener resultados en tiempo útil.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Nuestro enfoque
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="text-foreground">Asesoramiento claro, práctico y orientado a resultados.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="text-foreground">Estrategias según documentación y contexto de cada afiliado.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="text-foreground">Amplia experiencia en amparos de salud y medidas cautelares.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:pl-8">
              <div className="bg-card border border-border rounded-xl p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Por qué elegirnos
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="text-foreground">Especialistas en derecho a la salud.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="text-foreground">25 años de experiencia.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span className="text-foreground">Enfoque local en Mar del Plata.</span>
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
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
