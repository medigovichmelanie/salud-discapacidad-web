import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Asesoría legal profesional en salud y discapacidad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
            <span className="text-secondary font-semibold text-sm">Más de 25 años de experiencia</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Especialistas en
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              {" "}
              Derecho a la Salud{" "}
            </span>
            Mar del Plata
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Defendemos tus derechos con dedicación y profesionalismo. Asesoría especializada en incapacidades, pensiones
            y acceso a tratamientos médicos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-base">
              Agenda tu Consulta
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base">
              <Phone className="mr-2" />
              Llamar Ahora
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Casos Ganados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Éxito</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Años</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
