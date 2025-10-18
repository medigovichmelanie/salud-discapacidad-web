import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    claimType: "",
    message: ""
  });

  const claimTypes = [
    "Medicación o estudios",
    "Tratamientos o terapias",
    "Internación",
    "Desafiliación / obra social",
    "Geriatría (residencias)",
    "Prótesis y órtesis",
    "Otros"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.claimType || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto a la brevedad.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        claimType: "",
        message: ""
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">
            CONSULTA RÁPIDA
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Tu caso
          </h2>
          <p className="text-lg text-muted-foreground">
            Completá el formulario y nos pondremos en contacto a la brevedad.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Nombre y Apellido
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">
                Teléfono
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="claimType" className="text-sm font-medium text-foreground">
                Seleccione el objeto a reclamar
              </label>
              <Select
                value={formData.claimType}
                onValueChange={(value) => setFormData({ ...formData, claimType: value })}
                required
              >
                <SelectTrigger id="claimType">
                  <SelectValue placeholder="-----" />
                </SelectTrigger>
                <SelectContent>
                  {claimTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Relate brevemente su caso
            </label>
            <Textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <div className="flex justify-center">
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="px-12"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
