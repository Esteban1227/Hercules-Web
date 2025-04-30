import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Contacto() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 mb-6">
          Estamos aquí para responder tus preguntas y atender a tu mascota. Contáctanos por WhatsApp para una respuesta
          rápida.
        </p>
        <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
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

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-green-600"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="font-medium text-lg mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Respuesta rápida a tus consultas</p>
            <Link href="https://wa.me/573116370334" target="_blank" className="text-indigo-600 hover:underline">
              +57 311 637 0334
            </Link>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="font-medium text-lg mb-2">Dirección</h3>
            <p className="text-gray-600 mb-4">Visítanos en nuestra clínica</p>
            <p className="text-gray-600">Av 2b norte # 73a -26 , Cali</p>
            <Link href="https://maps.google.com" target="_blank" className="text-indigo-600 hover:underline text-sm">
              Ver en Google Maps
            </Link>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="font-medium text-lg mb-2">Horario</h3>
            <p className="text-gray-600 mb-4">Estamos para atenderte</p>
            <p className="text-gray-600">Lun-Sab: 8am-10pm</p>
            <p className="text-gray-600">Dom: 9am-6pm</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="font-medium text-lg mb-2">Reseñas</h3>
            <p className="text-gray-600 mb-4">Comparte tu experiencia</p>
            <Link href="https://google.com/maps" target="_blank" className="text-indigo-600 hover:underline">
              Ver y dejar reseñas en Google
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* WhatsApp Contact Options */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6 text-center">Contáctanos por WhatsApp</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
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
                <span className="font-medium block mb-1">Agendar recogida de tu mascota</span>
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
      </div>

      {/* Map Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6">Nuestra Ubicación</h2>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Link href="https://maps.google.com" target="_blank">
            <Image src="/placeholder.svg?height=400&width=1200" alt="Mapa de ubicación" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="bg-indigo-600 hover:bg-indigo-700">Abrir en Google Maps</Button>
            </div>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6">Preguntas Frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-2">¿Necesito cita previa para una consulta?</h3>
              <p className="text-gray-600">
                Sí, recomendamos solicitar cita previa para garantizar una atención sin tiempos de espera. Puedes
                hacerlo por WhatsApp.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-2">¿Qué servicios de urgencia ofrecen?</h3>
              <p className="text-gray-600">
                Ofrecemos servicio de urgencias durante nuestro horario de atención. Para emergencias fuera de horario,
                contáctanos por WhatsApp.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-2">¿Realizan visitas a domicilio?</h3>
              <p className="text-gray-600">
                Sí, ofrecemos servicio a domicilio para casos específicos. Consulta disponibilidad y tarifas por
                WhatsApp.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-2">¿Cómo puedo pagar por los servicios?</h3>
              <p className="text-gray-600">
                Aceptamos efectivo, tarjetas de crédito/débito y transferencias bancarias. También ofrecemos planes de
                pago para tratamientos extensos.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6">Horario de Atención</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-4">Horario Regular</h3>
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Lunes</td>
                    <td className="py-3 text-right">8:00 AM - 10:00 PM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Martes</td>
                    <td className="py-3 text-right">8:00 AM - 10:00 PM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Miércoles</td>
                    <td className="py-3 text-right">8:00 AM - 10:00 PM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Jueves</td>
                    <td className="py-3 text-right">8:00 AM - 10:00 PM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Viernes</td>
                    <td className="py-3 text-right">8:00 AM - 10:00 PM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Sábado</td>
                    <td className="py-3 text-right">8:00 AM - 10:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Domingo</td>
                    <td className="py-3 text-right">9:00 AM - 6:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg text-indigo-700 mb-4">Información Adicional</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <p className="text-gray-600">
                    Para urgencias fuera del horario regular, contactanos al numero de celular 311 637 0334 

                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <p className="text-gray-600">
                    La tienda de productos está abierta durante los horarios regulares de atención de la clínica.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <p className="text-gray-600">
                    Para programar la recogida de tu mascota a domicilio, ya sea para baño, peluquería o la entrega de un producto, llámanos o escríbenos al número de celular 311 637 0334.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
