import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="contacto"
      className="py-24 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-background/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Comienza tu Consulta Hoy</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            No esperes más para hacer valer tus derechos. Nuestro equipo jurídico analiza tu situación y te orienta
            sobre los pasos a seguir para acceder a tus coberturas médicas, tratamientos o prestaciones por
            discapacidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="text-base bg-background text-primary hover:bg-background/90 shadow-[var(--shadow-elegant)]"
            >
              Agendar Consulta
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a
                href="https://api.whatsapp.com/send?phone=5492234421528&text=Hola! Quisiera más información."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          <p className="mt-8 text-primary-foreground/80 text-sm">
            Primera consulta completamente gratuita • Sin compromiso • Respuesta en 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
