"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import ContactSection from "@/components/contact-section"

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Imágenes de ejemplo para cada categoría
  const images = {
    instalaciones: Array.from({ length: 8 }, (_, i) => ({
      id: `instalacion-${i + 1}`,
      src: "/placeholder.svg?height=400&width=600",
      alt: `Instalaciones ${i + 1}`,
      caption: `Nuestras modernas instalaciones diseñadas para el confort de tu mascota.`,
    })),
    servicios: Array.from({ length: 6 }, (_, i) => ({
      id: `servicio-${i + 1}`,
      src: "/placeholder.svg?height=400&width=600",
      alt: `Servicio ${i + 1}`,
      caption: `Servicios profesionales realizados por nuestro equipo de expertos.`,
    })),
    pacientes: Array.from({ length: 10 }, (_, i) => ({
      id: `paciente-${i + 1}`,
      src: "/placeholder.svg?height=400&width=600",
      alt: `Paciente ${i + 1}`,
      caption: `Nuestros adorables pacientes felices y saludables.`,
    })),
  }

  // Videos de ejemplo
  const videos = Array.from({ length: 4 }, (_, i) => ({
    id: `video-${i + 1}`,
    thumbnail: "/placeholder.svg?height=400&width=600",
    title: `Video ${i + 1}`,
    description: `Descripción del video sobre nuestros servicios y cuidados veterinarios.`,
  }))

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Galería Multimedia</h1>
        <p className="text-lg text-gray-600">
          Conoce nuestras instalaciones, servicios y a algunos de nuestros pacientes a través de nuestra galería de
          fotos y videos.
        </p>
      </div>

      <Tabs defaultValue="instalaciones" className="mb-16">
        <TabsList className="w-full flex flex-wrap justify-center mb-8 bg-transparent">
          <TabsTrigger
            value="instalaciones"
            className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800"
          >
            Instalaciones
          </TabsTrigger>
          <TabsTrigger
            value="servicios"
            className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800"
          >
            Servicios
          </TabsTrigger>
          <TabsTrigger
            value="pacientes"
            className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800"
          >
            Pacientes
          </TabsTrigger>
          <TabsTrigger value="videos" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800">
            Videos
          </TabsTrigger>
        </TabsList>

        {/* Instalaciones */}
        <TabsContent value="instalaciones">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.instalaciones.map((image) => (
              <button
                key={image.id}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity" />
              </button>
            ))}
          </div>
        </TabsContent>

        {/* Servicios */}
        <TabsContent value="servicios">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.servicios.map((image) => (
              <button
                key={image.id}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity" />
              </button>
            ))}
          </div>
        </TabsContent>

        {/* Pacientes */}
        <TabsContent value="pacientes">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.pacientes.map((image) => (
              <button
                key={image.id}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity" />
              </button>
            ))}
          </div>
        </TabsContent>

        {/* Videos */}
        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="rounded-lg overflow-hidden border">
                <div className="relative h-64">
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-teal-600 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-1"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Cerrar</span>
          </button>
          {selectedImage && (
            <div className="relative h-[80vh] w-full">
              <Image src={selectedImage || "/placeholder.svg"} alt="Imagen ampliada" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
