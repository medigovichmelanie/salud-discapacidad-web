import { Scale, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-primary to-secondary p-2.5 rounded-xl">
                <Scale className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Discapacidad MDQ</h3>
                <p className="text-xs text-muted-foreground">Abogados Especialistas</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Despacho especializado en derecho a la salud y de la discapacidad. Más de 25 años defendiendo los derechos
              de nuestros clientes con profesionalismo y dedicación.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+54 9 223 400-1244</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>drabenvenuti@yahoo.com.ar</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Mar del Plata, Argentina</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#como-actuar" className="hover:text-primary transition-colors">
                  Cómo Actuar
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Discapacidad MDQ. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
