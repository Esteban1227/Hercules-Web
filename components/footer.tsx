import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Star } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 bg-white rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Veterinaria PetCare Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">PetCare</span>
            </div>
            <p className="text-indigo-100 mb-4">
              Clínica veterinaria comprometida con la salud y bienestar de tus mascotas. Ofrecemos servicios
              profesionales y productos de calidad.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="rounded-full text-white hover:text-indigo-900 hover:bg-white"
              >
                <Link href="https://facebook.com" target="_blank">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="rounded-full text-white hover:text-indigo-900 hover:bg-white"
              >
                <Link href="https://instagram.com" target="_blank">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="rounded-full text-white hover:text-indigo-900 hover:bg-white"
              >
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-indigo-100 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/tienda" className="text-indigo-100 hover:text-white transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-indigo-100 hover:text-white transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-indigo-100 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Consulta General
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Vacunación
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Cirugía
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Laboratorio
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-indigo-100 hover:text-white transition-colors">
                  Peluquería
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-300 mt-0.5" />
                <span className="text-indigo-100">Av. Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-300" />
                <Link href="tel:+123456789" className="text-indigo-100 hover:text-white transition-colors">
                  +123 456 7890
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-300" />
                <Link
                  href="mailto:info@veterinariapetcare.com"
                  className="text-indigo-100 hover:text-white transition-colors"
                >
                  info@veterinariapetcare.com
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-indigo-300 mt-0.5" />
                <div className="text-indigo-100">
                  <p>Lun-Vie: 9am-7pm</p>
                  <p>Sáb: 9am-2pm</p>
                  <p>Dom: Cerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-indigo-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-indigo-100 text-sm">
            © {new Date().getFullYear()} Veterinaria PetCare. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2">
            <Link
              href="https://google.com/maps"
              target="_blank"
              className="flex items-center gap-1 text-indigo-100 hover:text-white transition-colors"
            >
              <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
              Déjanos una reseña en Google
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
