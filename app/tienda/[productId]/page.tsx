import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Heart, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactSection from "@/components/contact-section"
import alimentos from "@/data/productos/alimentos/alimentos"
import accesorios from "@/data/productos/accesorios/accesorios"
import juguetes from "@/data/productos/juguetes/juguetes"
import medicamentos from "@/data/productos/medicamentos/medicamentos"
import arenas from "@/data/productos/arenas/arenas"

interface ProductPageProps {
  params: {
    productId: string
  }
}
interface Product {
  id: string
  name: string
  description: string
  image: string
  category?: string
}

export default function ProductPage({ params }: ProductPageProps) {
  const { productId } = params

  // necesito tratar el id del para obtener la categoria a la que pertenece el id que viene es [categoria]-[id]
  const [category, id] = productId.split("-")

  let producto: Product = {
    id: "",
    name: "",
    description: "",
    image: "",
    category: "",
  }

  let productos: Product[] = []

  switch (category) {
    case "alimento":
      productos = alimentos 
      break
    case "juguete":
      productos = juguetes
      break
    case "medicamento":
      productos = medicamentos
      break
    case "accesorio":
      productos = accesorios
      break
    case "arena":
      productos = arenas
      break
    default:
      console.error("Categoría no válida")
      break
  }

  producto = productos.find((item) => item.id === productId) || {
    id: "",
    name: "",
    description: "",
    image: "",
    category: "",
  }


  // Productos relacionados quiero que sean 4 productos de la misma categoria aleatoriamente
  const relatedProducts = productos
    .filter((item) => item.category === producto.category && item.id !== productId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

  console.log(relatedProducts, "relatedProducts")

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
        <span className="text-gray-700">{producto?.name}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}

        <div className="relative h-[400px] rounded-lg overflow-hidden mb-4">
          <Image src={producto?.image || "/placeholder.svg"} alt={producto?.name} fill className="object-contain" />
        </div>

        {/* <div className="grid grid-cols-5 gap-2">
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
          </div> */}


        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{producto?.name}</h1>
          <p className="text-gray-600 mb-6">{producto?.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Link
                href={`https://wa.me/573116370334?text=Me%20interesa%20el%20producto%20${encodeURIComponent(producto?.name)}`}
                target="_blank"
              >
                Consultar por WhatsApp
              </Link>
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
                  ¿Este producto es adecuado para gato esterilizado?
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
