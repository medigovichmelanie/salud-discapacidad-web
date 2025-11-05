import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Building2,
  Users,
  Stethoscope,
  Pill,
  FileHeart,
  ShieldCheck,
  Activity,
  Globe,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Cobertura de Residencia Geriátrica PAMI",
    shortDescription: "Gestión legal para obtener cobertura del 100% de geriátricos ante PAMI y obras sociales.",
    fullDescription: [
      "Asesoramos para gestionar la cobertura del 100% del presupuesto de la residencia geriátrica cuando corresponde, incluso si no está conveniada con PAMI.",
      "Brindamos herramientas jurídicas para requerir ante la obra social o prepaga la cobertura del 100% del costo de la residencia, cuando la institución cumple requisitos administrativos y de seguridad.",
      "Si te niegan el 100% o recibís información confusa, iniciamos el reclamo administrativo y, de ser necesario, amparo judicial.",
    ],
  },
  {
    icon: Users,
    title: "Mantener Obra Social al Jubilarse - No pasar a PAMI",
    shortDescription: "Asesoramiento legal para conservar tu obra social o prepaga al jubilarte sin pasar a PAMI.",
    fullDescription: [
      "Podés continuar en tu obra social o prepaga de origen al jubilarte; el pase a PAMI es automático pero no obligatorio.",
      "Si estuviste afiliado/a durante tu vida laboral, tenés derecho legal a seguir en esa cobertura médica.",
      "No pueden obligarte a pasarte a PAMI ni imponer sobrecostos injustificados para continuar con tu obra social.",
    ],
  },
  {
    icon: Stethoscope,
    title: "Cobertura de Prótesis y Órtesis",
    shortDescription: "Amparo para obtener cobertura de prótesis indicadas por médicos, incluso importadas.",
    fullDescription: [
      "Las obras sociales y prepagas deben cubrir prótesis indicadas por tu médico tratante; incluso importadas cuando no exista equivalente nacional adecuado.",
      "Si tu médico justifica una prótesis específica y no hay alternativa nacional, corresponde gestionar su cobertura mediante amparo de salud.",
    ],
  },
  {
    icon: FileHeart,
    title: "Tratamiento Médico o Medicación Denegada",
    shortDescription: "Amparo de salud para obtener tratamientos y medicamentos rechazados por obra social o prepaga.",
    fullDescription: [
      "Aunque un tratamiento o medicación no figure en el PMO, puede corresponder su cobertura si está indicado por tu médico tratante.",
      "Las negativas de obras sociales suelen citar PMO insuficiente, plan básico o prestadores no conveniados.",
      "La cobertura médica no puede restringirse cuando la indicación profesional justificada es esencial para tu salud. Iniciamos amparos urgentes.",
    ],
  },
  {
    icon: Pill,
    title: "Cobertura Insuficiente de Medicación Crónica",
    shortDescription: "Reclamos legales cuando la obra social cubre menos porcentaje del debido en medicación.",
    fullDescription: [
      "Las obras sociales a menudo otorgan un porcentaje menor al que legalmente corresponde en patologías crónicas, discapacidad y tratamientos prolongados.",
      "Analizamos tu diagnóstico, plan de obra social y normativa vigente para exigir el porcentaje correcto de cobertura de medicación.",
      "Si recibís menos cobertura de la debida, documentamos el caso y elevamos reclamo administrativo o amparo judicial.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Rechazo por Preexistencias en Prepaga",
    shortDescription: "Defensa legal ante rechazos o cuotas extraordinarias por enfermedades preexistentes.",
    fullDescription: [
      "Las prepagas no pueden rechazar tu afiliación por preexistencias. Un diferencial, si corresponde, lo fija la Superintendencia de Servicios de Salud, no la prepaga.",
      "La empresa de medicina prepaga no puede negar tu afiliación por enfermedades preexistentes ni fijar unilateralmente adicionales excesivos.",
      "Te asesoramos legalmente para lograr tu afiliación a la prepaga y evitar pagos adicionales que no proceden por ley.",
    ],
  },
  {
    icon: Activity,
    title: "Cirugía Bariátrica, Oncológicos y Fertilidad",
    shortDescription: "Amparos para cobertura de cirugía bariátrica, tratamientos oncológicos y fertilidad asistida.",
    fullDescription: [
      "Evaluamos requisitos médicos y normativa legal para habilitar cobertura de cirugía bariátrica, tratamientos oncológicos y fertilidad asistida.",
      "Cirugía bariátrica: gestión de cobertura integral incluyendo preoperatorio, cirugía y seguimiento posoperatorio cuando se cumplen criterios médicos.",
      "Tratamientos oncológicos: gestión urgente de estudios, quimioterapia, radioterapia y medicación de alto costo.",
      "Fertilidad asistida: acceso a técnicas de reproducción asistida y fármacos según ley de fertilización asistida.",
    ],
  },
  {
    icon: Globe,
    title: "Extranjería e Inmigración a España",
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Servicios Legales en Salud y Discapacidad</h2>
          <p className="text-lg text-muted-foreground">
            Asesoramiento especializado en amparos de salud, cobertura de obras sociales, prepagas, PAMI, tratamientos médicos, pensiones por discapacidad y certificados en Mar del Plata.
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
