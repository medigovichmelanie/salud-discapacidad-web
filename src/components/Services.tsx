import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Building2, Users, Stethoscope, Pill, FileHeart, ShieldCheck, Activity, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Building2,
    title: "Residencia geriátrica",
    shortDescription: "Cobertura del 100% del geriátrico cuando corresponde.",
    fullDescription: [
      "Asesoramos para gestionar la cobertura del 100% del presupuesto de la residencia cuando corresponde, incluso si no está conveniada con PAMI.",
      "Brindamos herramientas jurídicas para requerir ante la obra social o prepaga la cobertura del 100% del costo de la residencia geriátrica, cuando la institución cumple requisitos administrativos y de seguridad.",
      "Si te niegan el 100% o recibís información confusa, iniciamos el reclamo administrativo y, de ser necesario, la vía judicial.",
    ],
  },
  {
    icon: Users,
    title: "Seguir en tu obra social al jubilarte",
    shortDescription: "El pase a PAMI no es obligatorio, podés mantener tu cobertura.",
    fullDescription: [
      "Podés continuar en tu obra social o prepaga de origen al jubilarte; el pase a PAMI es automático pero no obligatorio.",
      "Si estuviste afiliado/a durante tu vida laboral, tenés derecho a seguir en esa obra social o prepaga.",
      "No pueden obligarte a pasarte a PAMI ni imponer sobrecostos injustificados para continuar.",
    ],
  },
  {
    icon: Stethoscope,
    title: "Prótesis y órtesis",
    shortDescription: "Cobertura de prótesis indicadas por tu médico, incluso importadas si no hay equivalente.",
    fullDescription: [
      "Deben cubrir prótesis indicadas por tu médico; incluso importadas cuando no exista equivalente nacional adecuado.",
      "Si tu médico justifica una prótesis específica y no hay alternativa nacional, corresponde gestionar su cobertura, incluso importada.",
    ],
  },
  {
    icon: FileHeart,
    title: "Tratamiento o medicación denegada",
    shortDescription: "Aunque no figure en el PMO, puede corresponder según indicación médica.",
    fullDescription: [
      "Aunque un tratamiento/medicación no figure explícitamente en el PMO, puede corresponder si está indicado por tu médico tratante.",
      "Las negativas suelen citar PMO, plan insuficiente o prestadores no conveniados.",
      "La cobertura no puede restringirse cuando la indicación médica justificada es esencial para tu salud.",
    ],
  },
  {
    icon: Pill,
    title: "Cobertura parcial de medicación",
    shortDescription: "Muchas veces cubren menos porcentaje del debido. Conozca lo que corresponde.",
    fullDescription: [
      "A menudo otorgan un porcentaje menor al que corresponde (patologías crónicas, discapacidad, etc.).",
      "Analizamos diagnóstico, plan y normativa para exigir el porcentaje correcto.",
      "Si recibís menos de lo debido, documentamos el caso y elevamos el reclamo formal.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Preexistencias y afiliación",
    shortDescription: "No pueden rechazarte ni fijar cuotas extraordinarias por enfermedades preexistentes.",
    fullDescription: [
      "No pueden rechazarte por preexistencias. Un diferencial, si corresponde, lo fija la autoridad competente, no la prepaga.",
      "La prepaga no puede negar tu afiliación por preexistencias ni fijar unilateralmente un adicional excesivo.",
      "Te asesoramos para lograr la afiliación y evitar pagos que no proceden.",
    ],
  },
  {
    icon: Activity,
    title: "Tratamientos particulares",
    shortDescription: "Bariátrica, oncológicos y fertilidad: requisitos y cobertura integral cuando aplica.",
    fullDescription: [
      "Evaluamos requisitos y normativa para habilitar cobertura (cirugía bariátrica, oncológicos, fertilidad).",
      "Bariátrica: cobertura integral si se cumplen criterios (pre/pos operatorio y seguimiento).",
      "Oncológicos: gestión de estudios, tratamientos y medicación.",
      "Fertilidad: acceso a técnicas y fármacos según normativa.",
    ],
  },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = service.icon;

  return (
    <Card className="border-border bg-card shadow-[var(--shadow-card)] h-full flex flex-col">
      <CardHeader>
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
          <Icon className="h-7 w-7 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="text-muted-foreground text-base leading-relaxed mb-4">
          {service.shortDescription}
        </CardDescription>
        
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-auto">
          <CollapsibleContent className="space-y-3 mb-4">
            {service.fullDescription.map((paragraph, idx) => (
              <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </CollapsibleContent>
          
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full group"
            >
              {isOpen ? "Leer menos" : "Leer más"}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

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
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <ServiceCard service={service} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Services;
