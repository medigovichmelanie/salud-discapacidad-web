import { CheckCircle, Clock, Award, UserCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Más de 15 años defendiendo los derechos de nuestros clientes con resultados exitosos.",
  },
  {
    icon: UserCheck,
    title: "Atención Personalizada",
    description: "Cada caso es único. Te ofrecemos un trato cercano y una estrategia adaptada a tu situación.",
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    description: "Entendemos la urgencia de tu caso. Respondemos en menos de 24 horas.",
  },
  {
    icon: CheckCircle,
    title: "Sin Riesgos",
    description: "Consulta inicial gratuita. Solo cobras si ganamos tu caso.",
  },
];

const Features = () => {
  return (
    <section id="nosotros" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-muted-foreground">
            Tu tranquilidad es nuestra prioridad. Trabajamos incansablemente por tus derechos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-[var(--transition-bounce)]">
                  <Icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
