import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const phoneNumber = "+5492234421528"; // WhatsApp format without spaces or dashes
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(34,197,94,0.7)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
    </a>
  );
};

export default FloatingWhatsApp;
