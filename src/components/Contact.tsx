import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  claimType: string;
  message: string;
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    claimType: "",
    message: "",
  });

  const claimTypes = [
    "Medicación o estudios",
    "Tratamientos o terapias",
    "Internación",
    "Desafiliación / obra social",
    "Geriatría (residencias)",
    "Prótesis y órtesis",
    "Otros",
  ];

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones mínimas
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.claimType.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    if (!isEmail(formData.email)) {
      toast({
        title: "Error",
        description: "Ingresá un email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Invocamos la Supabase Edge Function
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          claimType: formData.claimType.trim(),
          message: formData.message.trim(),
        } as FormData,
      });

      if (error) {
        console.error("Supabase Function error:", error);
        throw new Error(typeof error === "string" ? error : error.message || "Error desconocido");
      }

      // Si Resend devolvió error dentro del payload, lo mostramos
      if (data?.error) {
        console.error("Resend payload error:", data.error);
        throw new Error(
          typeof data.error === "string" ? data.error : data.error.message || "No se pudo enviar el email.",
        );
      }

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto a la brevedad.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        claimType: "",
        message: "",
      });
    } catch (err: any) {
      console.error("Error al enviar mensaje:", err);
      toast({
        title: "Error",
        description: err?.message ?? "Hubo un problema al enviar el mensaje. Por favor intentá de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl"></div>

      <div className="container px-4 mx-auto max-w-5xl relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Tu caso</h2>
          <p className="text-lg text-muted-foreground">
            Completá el formulario y nos pondremos en contacto a la brevedad.
          </p>
        </div>

        <div className="relative">
          {/* Decorative gradient border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur opacity-20"></div>

          <form
            onSubmit={handleSubmit}
            className="relative space-y-8 bg-card p-10 md:p-12 rounded-3xl border border-border shadow-[var(--shadow-elegant)]"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  Nombre y Apellido
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 border-border focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2 group">
                <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 border-border focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <label htmlFor="phone" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  Teléfono
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 border-border focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2 group">
                <label htmlFor="claimType" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  Seleccione el objeto a reclamar
                </label>
                <Select
                  value={formData.claimType}
                  onValueChange={(value) => setFormData({ ...formData, claimType: value })}
                  required
                >
                  <SelectTrigger id="claimType" className="h-12 border-border focus:border-primary transition-colors">
                    <SelectValue placeholder="-----" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {claimTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                Relate brevemente su caso
              </label>
              <Textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="border-border focus:border-primary transition-colors resize-none"
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="px-12 h-14 text-base font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 group"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
