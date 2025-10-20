import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, Users, Stethoscope, Pill, FileHeart, ShieldCheck, Activity, Globe, ChevronRight } from "lucide-react";

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
  {
    icon: Globe,
    title: "Extranjería e Inmigración",
    shortDescription:
      "Estamos especializados en extranjería, nacionalidad, derecho laboral, seguridad social y movilidad internacional, y cuenta con la experiencia necesaria para guiarte en cada etapa del proceso.",
    fullDescription: [
      "Nuestros servicios abarcan:",
      "Visados y permisos de residencia: Obtención, renovación y modificaciones. Residencia y trabajo por cuenta ajena, cuenta propia y supuestos especiales.",
      "Arraigo y regularizaciones: Laboral, social y familiar.",
      "Nacionalidad española: Solicitud, preparación de documentación y presentación de recursos.",
      "Reagrupación familiar: Acompañamiento en la reunificación con cónyuge, hijos u otros familiares.",
      "Estancia por estudios y movilidad internacional: Autorizaciones para estudiantes y prácticas. Tarjeta Azul-UE y traslados intraempresariales.",
    ],
  },
];

const ServiceItem = ({ service, value }: { service: (typeof services)[0]; value: string }) => {
  const Icon = service.icon;

  return (
    <AccordionItem 
      value={value} 
      className="border border-border rounded-xl mb-4 overflow-hidden bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
    >
      <AccordionTrigger className="px-6 py-5 hover:no-underline group [&[data-state=open]]:bg-muted/50">
        <div className="flex items-center gap-4 w-full">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-lg font-semibold text-foreground mb-1">{service.title}</h3>
            <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-5">
        <div className="pl-16 space-y-3 pt-2">
          {service.fullDescription.map((paragraph, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground leading-relaxed">{paragraph}</p>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

const Services = () => {
  return (
    <section id="servicios" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground">
            Asesoramiento legal integral en derecho a la salud y cobertura médica en Mar del Plata.
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} value={`item-${index}`} />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Services;
