import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const HowToAct = () => {
  const steps = [
    {
      number: "1",
      title: "Entrevista inicial",
      description: "Brindamos asesoramiento jurídico y práctico según tu caso, explicando cómo reclamar formalmente ante la obra social y qué documentación es necesaria."
    },
    {
      number: "2",
      title: "Vía administrativa",
      description: "Se presenta el reclamo formal. Si hay negativa o arbitrariedad, se habilita la instancia judicial para exigir el cumplimiento de tus derechos."
    },
    {
      number: "3",
      title: "Acción de amparo",
      description: "Se interpone el amparo para tutelar tu derecho a la salud y, en casos urgentes, se solicita una medida cautelar con resolución rápida."
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

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step) => (
            <Card key={step.number} className="border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {step.number}. {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-3xl font-bold mb-6 text-primary">
              ¿Qué es el recurso de amparo en salud?
            </h3>
            <div className="space-y-4">
              <p className="text-foreground text-lg leading-relaxed">
                El recurso de amparo se utiliza cuando se afecta o niega el ejercicio de un derecho, por ejemplo la cobertura de un tratamiento, medicación, internación o traslado. Es una vía judicial rápida y efectiva: ante urgencia puede dictarse una medida cautelar en pocas horas; luego el proceso continúa hasta la resolución definitiva.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Los plazos varían según el caso y el expediente. Si hay apelaciones, interviene el tribunal de alzada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToAct;
