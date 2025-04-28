import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactSection from "@/components/contact-section"
import ServiceCard from "@/components/service-card"

export default function SobreNosotros() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Sobre Nosotros</h1>
        <p className="text-lg text-gray-600">
          Conoce más sobre nuestra clínica veterinaria y los servicios que ofrecemos para el cuidado de tus mascotas.
        </p>
      </div>

      {/* About Us Tabs */}
      <Tabs defaultValue="quienes-somos" className="max-w-4xl mx-auto mb-16">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="quienes-somos">Quiénes Somos</TabsTrigger>
          <TabsTrigger value="mision-vision">Misión y Visión</TabsTrigger>
          <TabsTrigger value="equipo">Nuestro Equipo</TabsTrigger>
        </TabsList>

        <TabsContent value="quienes-somos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                Fundada en 2010, Veterinaria PetCare nació con la misión de proporcionar atención médica de calidad para
                mascotas en un ambiente cálido y acogedor.
              </p>
              <p className="text-gray-600 mb-4">
                A lo largo de los años, hemos crecido hasta convertirnos en un centro veterinario integral, ofreciendo
                una amplia gama de servicios y productos para el bienestar animal.
              </p>
              <p className="text-gray-600">
                Nuestro compromiso con la excelencia y el trato personalizado nos ha permitido ganar la confianza de
                miles de familias que nos confían la salud de sus queridas mascotas.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=500" alt="Nuestra clínica" fill className="object-cover" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="mision-vision" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Nuestra Misión</h2>
                <p className="text-gray-600">
                  Proporcionar atención veterinaria de la más alta calidad, con un enfoque integral y personalizado,
                  para mejorar la calidad de vida de las mascotas y fortalecer el vínculo con sus familias.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Nuestra Visión</h2>
                <p className="text-gray-600">
                  Ser reconocidos como el centro veterinario de referencia en nuestra comunidad, destacando por la
                  excelencia en el servicio, la innovación constante y el compromiso con el bienestar animal.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Nuestros Valores</h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <li className="flex flex-col items-center text-center p-4 bg-indigo-50 rounded-lg">
                    <span className="font-medium text-indigo-700 mb-2">Compromiso</span>
                    <p className="text-gray-600 text-sm">Dedicación total al bienestar de cada paciente</p>
                  </li>
                  <li className="flex flex-col items-center text-center p-4 bg-indigo-50 rounded-lg">
                    <span className="font-medium text-indigo-700 mb-2">Profesionalismo</span>
                    <p className="text-gray-600 text-sm">Excelencia y ética en cada servicio</p>
                  </li>
                  <li className="flex flex-col items-center text-center p-4 bg-indigo-50 rounded-lg">
                    <span className="font-medium text-indigo-700 mb-2">Empatía</span>
                    <p className="text-gray-600 text-sm">Comprensión y respeto hacia mascotas y propietarios</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="equipo" className="mt-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">Nuestro Equipo Profesional</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt={`Dr. Nombre ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-indigo-700 mb-1">Dr. Nombre {i}</h3>
                  <p className="text-gray-500 mb-3">Veterinario{i === 1 ? " Principal" : ""}</p>
                  <p className="text-gray-600 text-sm">
                    Especialista con más de {5 + i} años de experiencia en medicina veterinaria, apasionado por el
                    cuidado animal.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Services Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios veterinarios para garantizar la salud y bienestar de tu mascota.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Consulta General"
            description="Revisión completa del estado de salud de tu mascota con diagnóstico y recomendaciones personalizadas."
            icon="stethoscope"
            expanded
          />
          <ServiceCard
            title="Vacunación"
            description="Programa completo de vacunación para perros y gatos, siguiendo los protocolos internacionales más actualizados."
            icon="syringe"
            expanded
          />
          <ServiceCard
            title="Cirugía"
            description="Procedimientos quirúrgicos con equipamiento moderno y técnicas mínimamente invasivas cuando es posible."
            icon="scissors"
            expanded
          />
          <ServiceCard
            title="Laboratorio"
            description="Análisis clínicos y diagnósticos precisos con resultados rápidos para un tratamiento oportuno."
            icon="flask"
            expanded
          />
          <ServiceCard
            title="Peluquería"
            description="Servicios de estética y cuidado para tu mascota, realizados por profesionales especializados en grooming."
            icon="scissors"
            expanded
          />
          <ServiceCard
            title="Tienda"
            description="Productos de calidad para la alimentación y cuidado de tu mascota, seleccionados por nuestros veterinarios."
            icon="shopping-bag"
            expanded
          />
          <ServiceCard
            title="Odontología"
            description="Cuidado dental completo, desde limpiezas hasta tratamientos especializados para problemas bucales."
            icon="tooth"
            expanded
          />
          <ServiceCard
            title="Hospitalización"
            description="Atención continua para mascotas que requieren observación o tratamientos prolongados."
            icon="hospital"
            expanded
          />
          <ServiceCard
            title="Emergencias"
            description="Servicio de urgencias veterinarias para situaciones que requieren atención inmediata."
            icon="alert-circle"
            expanded
          />
        </div>
      </section>

      {/* Facilities Gallery Preview */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Nuestras Instalaciones</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Contamos con instalaciones modernas y equipadas para ofrecer el mejor servicio a tu mascota.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt={`Instalación ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a href="/galeria" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Ver galería completa →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
