import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Star } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section className="py-12 bg-indigo-50 rounded-lg">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">Contáctanos</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Estamos aquí para responder tus preguntas y atender a tu mascota. Contáctanos por WhatsApp para una respuesta
          rápida.
        </p>
        <Button asChild size="default" className="bg-green-500 hover:bg-green-600">
          <Link href="https://wa.me/573116370334" target="_blank" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contactar por WhatsApp
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <Card className="border-none shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-6">Información de Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-600 mt-0.5" />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-gray-600">Av. 2b norte # 73a -26 , Cali</p>
                  <Link
                    href="https://www.google.com/maps/place/Cl%C3%ADnica+Veterinaria+H%C3%A9rcules/@3.492575,-76.5062012,17z/data=!3m1!4b1!4m6!3m5!1s0x8e30a997aa17475f:0xd88bb2d00e4d12be!8m2!3d3.4925696!4d-76.5036263!16s%2Fg%2F11k51ggr95?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="text-indigo-600 hover:underline text-sm"
                  >
                    Ver en Google Maps
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-indigo-600 mt-0.5" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <Link href="https://wa.me/573116370334" target="_blank" className="text-gray-600 hover:text-indigo-600">
                    +57 311 637 0334
                  </Link>
                  <p className="text-sm text-gray-500 mt-1">Respuesta rápida por WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-indigo-600 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <Link href="mailto:clinicaveterinariahercules@gmail.com" className="text-gray-600 hover:text-indigo-600">
                    clinicaveterinariahercules@gmail.com
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-indigo-600 mt-0.5" />
                <div>
                  <p className="font-medium">Horario de Atención</p>
                  <p className="text-gray-600">Lun-Sab: 8am-10pm</p>
                  <p className="text-gray-600">Dom: 9am-6pm</p>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <p className="font-medium mb-2">Síguenos en redes sociales</p>
              <div className="flex gap-3">
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="rounded-full border-indigo-200 hover:border-indigo-600 hover:bg-indigo-50"
                >
                  <Link href="https://www.facebook.com/clinicaveterinariahercules24horas" target="_blank">
                    <Facebook className="h-4 w-4 text-indigo-600" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="rounded-full border-indigo-200 hover:border-indigo-600 hover:bg-indigo-50"
                >
                  <Link href="https://www.instagram.com/clinicaveterinariahercules/" target="_blank">
                    <Instagram className="h-4 w-4 text-indigo-600" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="rounded-full border-indigo-200 hover:border-indigo-600 hover:bg-indigo-50"
                >
                  <Link href="https://www.tiktok.com/@veterinariaherculescali" target="_blank">
                    <Twitter className="h-4 w-4 text-indigo-600" />
                    <span className="sr-only">TikTok</span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <Button asChild variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                <Link href="https://www.google.com/search?sca_esv=cd2e0a442ffc9e64&rlz=1C1VDKB_esCO1018CO1018&sxsrf=AHTn8zrX9cvhsX4IUEPecz-a52N9SAFLpA:1745965460277&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzdrL-pw0zeUYMH152WGI8kOwRSFCAvlLyyksIHEymx62cHa_QNTEtWOZWgKW8Br6HqICUvcdTqrwRCG-Z-zXbTmAhKyjEvMXzd-U_9b-32-e0y1o-1eXfKRwKwtS37nNj-sC-eI%3D&q=Cl%C3%ADnica+Veterinaria+H%C3%A9rcules+Opiniones&sa=X&ved=2ahUKEwid-rKYpP6MAxUZQzABHbjSE_0Q0bkNegQIIRAD&biw=1366&bih=599&dpr=1" target="_blank" className="flex items-center justify-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
                  Ver reseñas en Google
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* WhatsApp Contact Options */}
        <Card className="border-none shadow-sm lg:col-span-2">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-6">Contáctanos por WhatsApp</h3>
            <p className="text-gray-600 mb-6">
              Selecciona una de las siguientes opciones para iniciar una conversación por WhatsApp con nuestro equipo:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Button asChild variant="outline" className="h-auto py-4 justify-start text-left">
                <Link
                  href="https://wa.me/573116370334?text=Hola,%20quisiera%20agendar%20una%20cita%20para%20mi%20mascota"
                  target="_blank"
                  className="flex items-start gap-3"
                >
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                      <path d="M8 14h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 18h.01" />
                      <path d="M12 18h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium block mb-1">Agenda la recogida de tu mascota</span>
                    <span className="text-sm text-gray-500">Para baño y peluqueria</span>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4 justify-start text-left">
                <Link
                  href="https://wa.me/573116370334?text=Hola,%20quisiera%20información%20sobre%20los%20servicios%20de%20la%20veterinaria"
                  target="_blank"
                  className="flex items-start gap-3"
                >
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium block mb-1">Información general</span>
                    <span className="text-sm text-gray-500">Sobre nuestros servicios y productos</span>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4 justify-start text-left">
                <Link
                  href="https://wa.me/573116370334?text=Hola,%20quisiera%20consultar%20sobre%20los%20precios%20de%20los%20servicios"
                  target="_blank"
                  className="flex items-start gap-3"
                >
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8h.01" />
                      <path d="M11 12h1v4h1" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium block mb-1">Consultar precios</span>
                    <span className="text-sm text-gray-500">Tarifas de servicios y productos</span>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto py-4 justify-start text-left">
                <Link
                  href="https://wa.me/573116370334?text=Hola,%20tengo%20una%20emergencia%20con%20mi%20mascota"
                  target="_blank"
                  className="flex items-start gap-3"
                >
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                      <path d="M12 8v4" />
                      <path d="M12 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium block mb-1">Emergencias</span>
                    <span className="text-sm text-gray-500">Atención urgente para tu mascota</span>
                  </div>
                </Link>
              </Button>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-indigo-600 mt-1"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <div>
                  <h4 className="font-medium text-indigo-700">Respuesta rápida garantizada</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Nuestro equipo está disponible durante el horario de atención para responder tus consultas por
                    WhatsApp. Tiempo promedio de respuesta: 5-10 minutos.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
