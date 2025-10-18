import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Building2, Shield, ArrowRight } from "lucide-react";

const HowToAct = () => {
  const steps = [
    {
      number: "1",
      title: "Entrevista inicial",
      description: "Brindamos asesoramiento jurídico y práctico según tu caso, explicando cómo reclamar formalmente ante la obra social y qué documentación es necesaria.",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "2",
      title: "Vía administrativa",
      description: "Se presenta el reclamo formal. Si hay negativa o arbitrariedad, se habilita la instancia judicial para exigir el cumplimiento de tus derechos.",
      icon: Building2,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "3",
      title: "Acción de amparo",
      description: "Se interpone el amparo para tutelar tu derecho a la salud y, en casos urgentes, se solicita una medida cautelar con resolución rápida.",
      icon: Shield,
      color: "from-primary to-secondary"
    }
  ];

  return (
    <section id="como-actuar" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Cómo actuar
          </h2>
          <p className="text-lg text-muted-foreground">
            Pasos para reclamar ante una negativa o silencio de la obra social y cómo funciona el recurso de amparo en salud.
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
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mt-2">
                  ¿Qué es el recurso de amparo en salud?
                </h3>
              </div>
              
              <div className="space-y-6 ml-20">
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm">
                  <p className="text-foreground text-lg leading-relaxed">
                    El recurso de amparo se utiliza cuando se afecta o niega el ejercicio de un derecho, por ejemplo la cobertura de un tratamiento, medicación, internación o traslado. Es una vía judicial <strong className="text-primary font-semibold">rápida y efectiva</strong>: ante urgencia puede dictarse una medida cautelar en pocas horas; luego el proceso continúa hasta la resolución definitiva.
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-sm border-l-4 border-l-primary">
                  <p className="text-muted-foreground text-lg leading-relaxed italic">
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
