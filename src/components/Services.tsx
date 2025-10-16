import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, FileText, Shield, Users, Briefcase, HandHeart } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Incapacidades Laborales",
    description: "Gestión y defensa de incapacidades temporales y permanentes. Protegemos tus derechos laborales.",
  },
  {
    icon: Shield,
    title: "Pensiones por Discapacidad",
    description: "Tramitación y recurso de pensiones. Asesoría completa en todo el proceso administrativo.",
  },
  {
    icon: FileText,
    title: "Valoración de Daños",
    description: "Evaluación y reclamación de daños derivados de negligencias médicas o accidentes.",
  },
  {
    icon: Users,
    title: "Acceso a Tratamientos",
    description: "Garantizamos el acceso a tratamientos médicos y medicamentos necesarios.",
  },
  {
    icon: Briefcase,
    title: "Seguridad Social",
    description: "Recursos y reclamaciones ante el INSS. Defendemos tus prestaciones sociales.",
  },
  {
    icon: HandHeart,
    title: "Dependencia",
    description: "Reconocimiento del grado de dependencia y acceso a servicios y prestaciones.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground">
            Especialistas en derecho sanitario con un enfoque humano y resultados probados
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
