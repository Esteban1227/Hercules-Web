import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactSection from "@/components/contact-section"
import ServiceCard from "@/components/service-card"
import Veterinarians from "@/components/veterinary-equipment"

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
              <p className="text-gray-600 mb-4 text-justify" >
                Fundada en el año 2023, la Clínica Veterinaria Hércules nació con el propósito de ofrecer atención médica de calidad para mascotas, 
                impulsada por una profunda vocación hacia los animales. Esta pasión nació desde la infancia de nuestro fundador y médico principal, 
                cuya conexión con los animales lo inspiró a convertir su vocación en un compromiso de vida.

              </p>
              <p className="text-gray-600 mb-4 text-justify">
                El nombre de nuestra clínica rinde homenaje a Hércules, un compañero entrañable que marcó profundamente nuestra historia y nos inspiró a crear un 
                espacio donde los animales sean atendidos con amor, respeto y profesionalismo.
              </p>
              <p className="text-gray-600 text-justify">
                 Con un enfoque cercano y altamente profesional, hemos crecido ofreciendo servicios especializados que siempre buscan el bienestar de cada paciente. 
                 Nuestro compromiso con la excelencia ha consolidado la confianza de nuestros clientes, quienes nos han confiado el cuidado de sus queridas mascotas.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/about-us.jpg" alt="Nuestra clínica" fill className="object-cover" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="mision-vision" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Nuestra Misión</h2>
                <p className="text-gray-600 text-justify">
                  Brindar atención médica veterinaria de alta calidad, con amor, respeto y compromiso, 
                  protegiendo la salud y el bienestar de los animales. Nos esforzamos por ofrecer un servicio humano y profesional, 
                  tratando a cada paciente como un miembro más de nuestra familia.

                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Nuestra Visión</h2>
                <p className="text-gray-600 text-justify">
                    Ser reconocidos como una clínica veterinaria líder en nuestra comunidad, destacándonos por nuestro trato cercano, 
                    nuestra excelencia médica y la pasión genuina que sentimos por los animales. Aspiramos a crecer y expandir nuestros servicios, 
                    sin perder jamás la esencia de amor y compromiso que dio vida a la Clínica Veterinaria Hércules.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" >
            {Veterinarians.map((miembro, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 relative overflow-hidden">
                    <Image
                      src={miembro.imagen}
                      alt={miembro.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-indigo-700 mb-1">{miembro.nombre}</h3>
                  <p className="text-gray-500 mb-3">{miembro.cargo}</p>
                  <p className="text-gray-600 text-sm text-justify">{miembro.descripcion}</p>
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
            title="Consulta General y especializada"
            description="Ofrecemos atención veterinaria integral, tanto preventiva como de diagnóstico y tratamiento, adaptada a las necesidades específicas de cada mascota."
            icon="stethoscope"
            expanded
          />
          <ServiceCard
            title="Vacunación y desparasitacion"
            description="Aseguramos la protección de tu mascota contra enfermedades comunes, mediante un esquema de vacunación completo y un programa de desparasitación efectivo."
            icon="syringe"
            expanded
          />
          <ServiceCard
            title="Cirugías programadas y de emergencia"
            description="Realizamos intervenciones quirúrgicas tanto planificadas como de urgencia, con un enfoque profesional y en un ambiente controlado y seguro."
            icon="scissors"
            expanded
          />
          <ServiceCard
            title="Diagnóstico por imagen (ecografías y radiografías)"
            description="Disponemos de tecnología avanzada para obtener imágenes precisas, esenciales para un diagnóstico detallado de la salud de tu mascota."
            icon="flask"
            expanded
          />
          <ServiceCard
            title="Laboratorio clínico"
            description="Realizamos pruebas de laboratorio para obtener diagnósticos rápidos y confiables, permitiendo un tratamiento oportuno y adecuado."
            icon="flask"
            expanded
          />
           <ServiceCard
            title="Profilaxis dental"
            description="Ofrecemos limpieza y cuidado dental para prevenir enfermedades bucodentales, mejorando la salud general de tu mascota."
            icon="scissors"
            expanded
          />
          <ServiceCard
            title="Peluquería y baño"
            description="Servicios de corte de pelo, baño y cuidado estético realizados por profesionales, garantizando el bienestar y la higiene de tu mascota."
            icon="scissors"
            expanded
          />
          <ServiceCard
            title="Tienda"
            description="Disponemos de una amplia gama de alimentos y productos especializados para el cuidado y la nutrición de tu mascota, seleccionados por su calidad y efectividad."
            icon="shopping-bag"
            expanded
          />
          <ServiceCard
            title="Hospitalización y cuidados intensivos"
            description="Atención continua y personalizada para mascotas que requieren observación constante o tratamientos prolongados, garantizando su bienestar en todo momento."
            icon="hospital"
            expanded
          />
          <ServiceCard
            title="Emergencias"
            description="Servicio de urgencias veterinarias, ofreciendo atención inmediata para situaciones críticas que requieren intervención rápida y profesional."
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
