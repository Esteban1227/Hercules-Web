import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Heart, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactSection from "@/components/contact-section"

interface ProductPageProps {
  params: {
    productId: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { productId } = params

  // En un caso real, aquí se obtendría la información del producto desde una API o base de datos
  const product = {
    id: productId,
    name: `Producto ${productId}`,
    description: "Producto de alta calidad para el cuidado y bienestar de tu mascota.",
    longDescription:
      "Este producto premium está diseñado específicamente para satisfacer las necesidades de tu mascota. Fabricado con ingredientes de la más alta calidad y sometido a rigurosos controles, garantiza resultados óptimos y seguros. Recomendado por veterinarios y querido por las mascotas, este producto se ha convertido en un favorito entre nuestros clientes.",
    specifications: [
      "Material: Premium",
      "Peso: 500g",
      "Dimensiones: 20 x 15 x 5 cm",
      "País de origen: España",
      "Recomendado para: Todas las razas",
    ],
    images: Array(5).fill("/placeholder.svg?height=600&width=600"),
  }

  // Productos relacionados
  const relatedProducts = Array.from({ length: 4 }, (_, i) => ({
    id: `related-${i + 1}`,
    name: `Producto Relacionado ${i + 1}`,
    image: "/placeholder.svg?height=200&width=300",
  }))

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">
          Inicio
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/tienda" className="hover:text-indigo-600">
          Tienda
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-700">{product.name}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div>
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-4">
            <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
          </div>

          <div className="grid grid-cols-5 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className="relative h-20 border rounded-md overflow-hidden hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Vista ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Link
                href={`https://wa.me/573116370334?text=Me%20interesa%20el%20producto%20${encodeURIComponent(product.name)}`}
                target="_blank"
              >
                Consultar por WhatsApp
              </Link>
            </Button>

            <Button variant="outline" size="icon" className="rounded-full">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Añadir a favoritos</span>
            </Button>

            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Compartir producto</span>
            </Button>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium text-indigo-800 mb-2">Preguntas frecuentes</h3>
            <div className="grid gap-2">
              <Button
                asChild
                variant="ghost"
                className="justify-start text-left h-auto py-2 hover:bg-indigo-100 hover:text-indigo-700"
              >
                <Link
                  href={`https://wa.me/573116370334?text=¿Este%20producto%20es%20adecuado%20para%20cachorros?`}
                  target="_blank"
                >
                  ¿Este producto es adecuado para cachorros?
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="justify-start text-left h-auto py-2 hover:bg-indigo-100 hover:text-indigo-700"
              >
                <Link href={`https://wa.me/573116370334?text=¿Cuánto%20tiempo%20dura%20este%20producto?`} target="_blank">
                  ¿Cuánto tiempo dura este producto?
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="justify-start text-left h-auto py-2 hover:bg-indigo-100 hover:text-indigo-700"
              >
                <Link
                  href={`https://wa.me/573116370334?text=¿Tienen%20disponibilidad%20inmediata%20de%20este%20producto?`}
                  target="_blank"
                >
                  ¿Tienen disponibilidad inmediata?
                </Link>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="descripcion">
            <TabsList>
              <TabsTrigger value="descripcion">Descripción</TabsTrigger>
              <TabsTrigger value="especificaciones">Especificaciones</TabsTrigger>
            </TabsList>
            <TabsContent value="descripcion" className="mt-4">
              <p className="text-gray-600">{product.longDescription}</p>
            </TabsContent>
            <TabsContent value="especificaciones" className="mt-4">
              <ul className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="text-gray-600 flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6">Productos Relacionados</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((product) => (
            <Link href={`/tienda/${product.id}`} key={product.id}>
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-40 w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-3">
                  <h3 className="font-medium text-gray-900 text-sm">{product.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
