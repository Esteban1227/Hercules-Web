import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Phone, Star } from "lucide-react"
import ServiceCard from "@/components/service-card"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
              Cuidamos de tus mascotas como si fueran nuestras
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              En Veterinaria PetCare ofrecemos atención médica de calidad, productos especializados y todo lo que tu
              mascota necesita.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/contacto">Contactar ahora</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                <Link href="/sobre-nosotros">Conocer más</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Veterinario con mascota"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-8 bg-indigo-50 rounded-lg mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-sm bg-white">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Horario de atención</h3>
                <p className="text-gray-600">Lun-Sab: 8am-10pm | Dom: 9am-6pm</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Contacto</h3>
                <p className="text-gray-600">+57 311 637 0334</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-white">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-indigo-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Ubicación</h3>
                <p className="text-gray-600">Av. 2b norte # 73a -26, Cali</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios veterinarios para garantizar la salud y bienestar de tu mascota.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Consulta General"
            description="Revisión completa del estado de salud de tu mascota."
            icon="stethoscope"
          />
          <ServiceCard
            title="Vacunación"
            description="Programa completo de vacunación para perros y gatos."
            icon="syringe"
          />
          <ServiceCard
            title="Cirugía"
            description="Procedimientos quirúrgicos con equipamiento moderno."
            icon="scissors"
          />
          <ServiceCard title="Laboratorio" description="Análisis clínicos y diagnósticos precisos." icon="flask" />
          <ServiceCard
            title="Peluquería"
            description="Servicios de estética y cuidado para tu mascota."
            icon="scissors"
          />
          <ServiceCard
            title="Tienda"
            description="Productos de calidad para la alimentación y cuidado."
            icon="shopping-bag"
          />
        </div>

        <div className="text-center mt-8">
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/sobre-nosotros">Ver todos los servicios</Link>
          </Button>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 bg-indigo-50 rounded-lg mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            La satisfacción de nuestros clientes y sus mascotas es nuestra mayor recompensa.
          </p>
          <Button asChild variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
            <Link href="https://www.google.com/search?sca_esv=cd2e0a442ffc9e64&rlz=1C1VDKB_esCO1018CO1018&sxsrf=AHTn8zrX9cvhsX4IUEPecz-a52N9SAFLpA:1745965460277&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzdrL-pw0zeUYMH152WGI8kOwRSFCAvlLyyksIHEymx62cHa_QNTEtWOZWgKW8Br6HqICUvcdTqrwRCG-Z-zXbTmAhKyjEvMXzd-U_9b-32-e0y1o-1eXfKRwKwtS37nNj-sC-eI%3D&q=Cl%C3%ADnica+Veterinaria+H%C3%A9rcules+Opiniones&sa=X&ved=2ahUKEwid-rKYpP6MAxUZQzABHbjSE_0Q0bkNegQIIRAD&biw=1366&bih=599&dpr=1" 
              target="_blank" className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
              Ver reseñas en Google
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="border-none shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excelente atención para mi mascota. El personal es muy amable y profesional. Recomiendo totalmente
                  sus servicios."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image src="/placeholder.svg?height=40&width=40" alt="Cliente" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Cliente {i}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Productos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos de alta calidad para el cuidado de tu mascota.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="h-full transition-all hover:shadow-md">
              <Link href={`/tienda/producto-${i}`} className="block">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt={`Producto ${i}`}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4 pb-14 relative">
                  <h3 className="font-medium text-gray-900 mb-2">Producto {i}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Alimento premium para mascotas con ingredientes naturales.
                  </p>
                </CardContent>
              </Link>
              <div className="absolute bottom-4 left-4 right-4"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/tienda">Ver todos los productos</Link>
          </Button>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Nuestra Ubicación</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos ubicados en una zona céntrica y de fácil acceso. ¡Ven a visitarnos!
          </p>
        </div>

        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Link href="https://maps.google.com" target="_blank">
            <Image src="/placeholder.svg?height=400&width=1200" alt="Mapa de ubicación" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="bg-indigo-600 hover:bg-indigo-700">Abrir en Google Maps</Button>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
