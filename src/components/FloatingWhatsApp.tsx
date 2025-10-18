import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  // Solo dígitos: país + número. Para AR Mar del Plata sería 5492234421528
  const phoneNumber = "5492234421528";

  // Texto opcional
  const defaultText = "Hola! Quisiera más información.";

  // Enlace recomendado (mejor que api.whatsapp.com)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center shadow-lg"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default FloatingWhatsApp;
