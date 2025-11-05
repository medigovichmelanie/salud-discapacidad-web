import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Building2, Shield, ArrowRight } from "lucide-react";

const HowToAct = () => {
  const steps = [
    {
      number: "1",
      title: "Consulta Legal Gratuita",
      description: "Brindamos asesoramiento jurídico especializado según tu caso, explicando cómo reclamar formalmente ante la obra social, prepaga o PAMI, y qué documentación médica es necesaria para el amparo.",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "2",
      title: "Reclamo Administrativo Formal",
      description: "Presentamos el reclamo administrativo formal ante la obra social o prepaga. Si hay negativa, demora o arbitrariedad, se habilita la vía judicial para exigir el cumplimiento de tus derechos de salud.",
      icon: Building2,
      color: "from-amber-500 to-orange-500"
    },
    {
      number: "3",
      title: "Amparo de Salud Urgente",
      description: "Interponemos el amparo judicial para tutelar tu derecho a la salud constitucionalmente protegido. En casos urgentes, solicitamos medida cautelar con resolución en 24-48hs para garantizar cobertura inmediata.",
      icon: Shield,
      color: "from-primary to-secondary"
    }
  ];

  return (
    <section id="como-actuar" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Cómo Reclamar ante Obras Sociales y Prepagas
          </h2>
          <p className="text-lg text-muted-foreground">
            Procedimiento legal para reclamar ante negativas de cobertura médica de obras sociales, prepagas o PAMI. Cómo funciona el amparo de salud y las medidas cautelares urgentes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative group">
                {/* Connector arrow - hidden on last item */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 -right-8 z-10">
                    <ArrowRight className="w-12 h-12 text-primary/30 animate-pulse" />
                  </div>
                )}
                
                <Card className="border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 h-full hover:-translate-y-2 overflow-hidden relative">
                  {/* Decorative gradient background */}
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color}`}></div>
                  
                  <CardHeader className="pb-4">
                    {/* Number badge with icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20 leading-none`}>
                        {step.number}
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary/5 via-card to-secondary/5 border-2 border-primary/20 rounded-3xl p-10 shadow-[var(--shadow-elegant)] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl -z-0"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary sm:mt-2">
                  ¿Qué es el Amparo de Salud y la Medida Cautelar?
                </h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6 sm:ml-20">
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 shadow-sm">
                  <p className="text-foreground text-base sm:text-lg leading-relaxed">
                    El amparo de salud es un recurso judicial constitucional que se utiliza cuando obras sociales, prepagas o PAMI niegan o demoran coberturas de tratamientos médicos, medicación, prótesis, internaciones o cirugías. Es una vía judicial <strong className="text-primary font-semibold">rápida y efectiva</strong>: ante urgencia médica puede dictarse una medida cautelar en 24-48 horas ordenando cobertura inmediata; luego el proceso de amparo continúa hasta la sentencia definitiva.
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-4 sm:p-6 shadow-sm border-l-4 border-l-primary">
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed italic">
                    Los plazos varían según el caso y el expediente. Si hay apelaciones, interviene el tribunal de alzada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToAct;
