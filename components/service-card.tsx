import { Card, CardContent } from "@/components/ui/card"
import {
  Stethoscope,
  Syringe,
  Scissors,
  FlaskRoundIcon as Flask,
  ShoppingBag,
  SmileIcon as Tooth,
  Hospital,
  AlertCircle,
} from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  expanded?: boolean
}

export default function ServiceCard({ title, description, icon, expanded = false }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "stethoscope":
        return <Stethoscope className="h-6 w-6 text-indigo-600" />
      case "syringe":
        return <Syringe className="h-6 w-6 text-indigo-600" />
      case "scissors":
        return <Scissors className="h-6 w-6 text-indigo-600" />
      case "flask":
        return <Flask className="h-6 w-6 text-indigo-600" />
      case "shopping-bag":
        return <ShoppingBag className="h-6 w-6 text-indigo-600" />
      case "tooth":
        return <Tooth className="h-6 w-6 text-indigo-600" />
      case "hospital":
        return <Hospital className="h-6 w-6 text-indigo-600" />
      case "alert-circle":
        return <AlertCircle className="h-6 w-6 text-indigo-600" />
      default:
        return <Stethoscope className="h-6 w-6 text-indigo-600" />
    }
  }

  return (
    <Card className={`border-none shadow-sm transition-all ${expanded ? "" : "hover:shadow-md"}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-100 p-3 rounded-full">{getIcon()}</div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
