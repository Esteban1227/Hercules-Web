import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactSection from "@/components/contact-section"
import alimentos from "@/data/alimentos"


export default function Tienda() {
  // Categorías de productos
  const categories = [
    { id: "alimentos", name: "Alimentos" },
    //{ id: "juguetes", name: "Juguetes" },
    //{ id: "medicamentos", name: "Medicamentos" },
    //{ id: "accesorios", name: "Accesorios" },
  ]

  // Productos de ejemplo para cada categoría
  const generateProducts = (category: string, count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `${category}-${i + 1}`,
      name: `${category.charAt(0).toUpperCase() + category.slice(1)} Premium ${i + 1}`,
      description: `Producto de alta calidad para tu mascota en la categoría de ${category}.`,
      image: `/placeholder.svg?height=200&width=300`,
    }))
  }

  const productsByCategory = {
    alimentos: alimentos,
    juguetes: generateProducts("juguetes", 6),
    medicamentos: generateProducts("medicamentos", 4),
    accesorios: generateProducts("accesorios", 6),
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Tienda de Productos</h1>
        <p className="text-lg text-gray-600">
          Encuentra todo lo que tu mascota necesita: alimentos, juguetes, medicamentos y accesorios de calidad.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input placeholder="Buscar productos..." className="pl-10" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-600">Ordenar por:</span>
            <select className="border rounded-md p-2 bg-white">
              <option>Más recientes</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
              <option>Alfabético: A-Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products by Category */}
      <Tabs defaultValue="alimentos" className="mb-16">
        <TabsList className="w-full flex flex-wrap justify-start mb-6 bg-transparent">
          <TabsTrigger value="todos" className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800">
            Todos
          </TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="todos">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(productsByCategory)
              .flat()
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productsByCategory[category.id as keyof typeof productsByCategory].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

interface Product {
  id: string
  name: string
  description: string
  image: string
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="h-full transition-all hover:shadow-md relative">
      <Link href={`/tienda/${product.id}`} className="block">
        <div className="relative w-full h-48">
          <Image
             src={product.image || "/placeholder.svg"}
             alt={product.name}
             layout="fill"  // Utiliza 'fill' para que la imagen llene todo el contenedor
             className="object-contain rounded-t-lg" // Ajusta la imagen sin recortarla
          />
        </div>
        <CardContent className="p-4 pb-14 text-center">
          <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
          
        </CardContent>
      </Link>
      <div className="absolute bottom-4 left-4 right-4"></div>
    </Card>
  )
}
