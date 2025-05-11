const alimentos = [
  {
    id: "alimento-1",
    name: "Agility Gold Gato",
    description:
      "Agility Gold para gatos ofrece una fórmula especializada que satisface las necesidades nutricionales de felinos en crecimiento, adultos y esterilizados. Con proteínas de alta calidad, prebióticos y ácidos grasos esenciales, este alimento ayuda a mantener la salud digestiva, el sistema urinario y un pelaje sano y brillante. Elaborado sin subproductos ni colorantes artificiales, es una excelente opción para gatos exigentes y dueños que valoran una alimentación natural y completa.\n\tPresentaciones: 500g, 1.5kg y 3kg, 8kg",
    image: "/img-productos/alimentos/agility-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-2",
    name: "Agility Gold Perro",
    description:
      "Agility Gold para perros es un alimento premium diseñado para brindar una nutrición completa y balanceada en cada etapa de vida. Elaborado con ingredientes naturales, proteínas de alta calidad y libre de subproductos, favorece una digestión saludable, refuerza el sistema inmunológico y mantiene el pelaje brillante. Disponible en presentaciones específicas para grandes y pequeños cachorros, adultos, razas pequeñas, razas grandes y cuidado de la piel. Ideal para quienes buscan lo mejor para su compañero de cuatro patas.\nPresentaciones: 500g, 1.5kg, 3kg, 7kg, 8kg",
    image: "/img-productos/alimentos/agility-perro.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-3",
    name: "Alpo",
    description:
      "Alpo ofrece un alimento completo y balanceado para perros adultos que disfrutan del sabor a carne real. Con vitaminas, minerales y proteínas esenciales, fortalece músculos y huesos, a la vez que satisface el apetito de los más exigentes. Su fórmula proporciona energía y vitalidad para perros activos.\nPresentaciones: 400g, 2kg",
    image: "/img-productos/alimentos/alpo.png",
    category: "alimentos",
  },
  {
    id: "alimento-4",
    name: "Cat Chow",
    description:
      "Cat Chow es una línea de alimentos secos y húmedos formulados para la nutrición integral de los gatos. Contiene defensas naturales, prebióticos y proteínas que fortalecen su sistema inmunológico, promueven la salud digestiva y mantienen el pelaje brillante. Está disponible en versiones para gato adulto y gatito.\n\tPresentaciones: 450g, 500g, 1.3kg, 1.5kg",
    image: "/img-productos/alimentos/cat-chow.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-5",
    name: "Chunky Gato",
    description:
      "Chunky ofrece variedad en alimento seco y húmedo para gatos. Elaborado con ingredientes naturales y sin colorantes artificiales, promueve una dieta balanceada en cada etapa de vida. Ideal para quienes buscan buena nutrición y excelente sabor a un precio accesible.\n\tPresentaciones: 500g, 1.5kg, 9kg",
    image: "/img-productos/alimentos/chunky-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-6",
    name: "Chunky Perro",
    description:
      "Chunky ofrece variedad en alimento seco y húmedo para perros. Elaborado con ingredientes naturales y sin colorantes artificiales, promueve una dieta balanceada para cada etapa de vida. Está disponible en presentaciones para cachorros, adultos, seniors y razas pequeñas. Ideal para quienes buscan buena nutrición y excelente sabor a un precio accesible.\nPresentaciones: 500g, 1.5kg, 2kg, 4kg, 8 kg, 9kg, 12kg, 16kg, 25kg",
    image: "/img-productos/alimentos/chunky-perro.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-7",
    name: "Dog Chow",
    description:
      "Dog Chow proporciona una nutrición completa con un enfoque en la salud digestiva y el sistema inmune. Con prebióticos naturales, proteínas de calidad y sin colorantes artificiales, ayuda a mantener los perros sanos y activos. Ofrece opciones específicas para cada etapa: cachorros, adultos, senior, razas pequeñas y grandes.\nPresentación: 475g, 1kg, 2kg, 8kg.",
    image: "/img-productos/alimentos/dog-chow.png",
    category: "alimentos",
  },
  {
    id: "alimento-8",
    name: "Dogourmet",
    description:
      "Dogourmet es una opción nutritiva y deliciosa para perros adultos y cachorros. Con una combinación de proteínas, cereales y vegetales, ofrece una fórmula balanceada que cuida la salud digestiva, el sistema inmunológico y el brillo del pelaje. Es ideal para dueños que buscan calidad a un buen precio. Está disponible en diversos sabores como carne a la parrilla, parrilla mixta, Salmón y carne, 3 cereales, carne-cereales y leche deslactosada, pollo y pavo.\nPresentación: 350g, 1kg, 2kg, 9kg, 25kg",
    image: "/img-productos/alimentos/dogourmet.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-9",
    name: "Don Kat",
    description:
      "Don Kat es un alimento económico y completo para gatos, que ofrece una nutrición básica para el mantenimiento diario. Enriquecido con vitaminas, minerales y taurina, ayuda al cuidado visual y del corazón. Agradable al paladar felino y accesible para todos los bolsillos.\nPresentación: 500g, 1kg, 7kg, 16kg",
    image: "/img-productos/alimentos/don-kat.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-10",
    name: "Excellent Skin Care",
    description:
      "Excellent Skin Care es un alimento premium para perros con piel sensible, alergias o problemas dermatológicos. Su fórmula contiene ácidos grasos Omega 3 y 6, proteínas de alta digestibilidad y nutrientes esenciales que fortalecen la barrera cutánea, reducen la irritación y mejoran visiblemente la salud del pelaje. Perfecto para perros que requieren una dieta que cuide su piel desde el interior.\nPresentación: 3kg",
    image: "/img-productos/alimentos/excellent-skin.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-11",
    name: "Excellent Urinary",
    description:
      "Excellent Urinary es un alimento especializado para gatos formulado para mantener la salud del sistema urinario. Ayuda a prevenir la formación de cálculos y cristales, gracias a su equilibrio óptimo de minerales y su aporte controlado de magnesio. Ideal para gatos con antecedentes de afecciones urinarias o como dieta de mantenimiento. Su fórmula también promueve una hidratación adecuada y una digestión saludable.\nPresentación: 1kg, 3kg",
    image: "/img-productos/alimentos/excellent-urinary.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-12",
    name: "Felix",
    description:
      "Felix Triple Delicious es un alimento húmedo irresistible para gatos, con trocitos jugosos en salsa y tres tipos de proteínas por porción. Su sabor variado y textura tierna hacen del momento de la comida una experiencia deliciosa y nutritiva. Ideal para gatos exigentes.\n\tPresentación: 500g, 1.5kg",
    image: "/img-productos/alimentos/felix.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-13",
    name: "Hill's Gato",
    description:
      "Hill's también cuenta con fórmulas especializadas para gatos, desarrolladas científicamente para atender necesidades nutricionales específicas. Su línea Prescription Diet abarca soluciones para afecciones renales, digestivas, urinarias, articulares, control de peso y otros trastornos. Es una opción de alta calidad veterinaria para el tratamiento clínico a través de la dieta.",
    image: "/img-productos/alimentos/hills-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-14",
    name: "Hill's",
    description:
      "Hill's es una marca reconocida por sus fórmulas científicamente desarrolladas para perros con necesidades nutricionales específicas. Su línea Prescription Diet incluye productos para el manejo de problemas renales, digestivos, urinarios, articulares, de peso y más. Ofrece alta calidad veterinaria, ideal para el manejo clínico mediante la alimentación.",
    image: "/img-productos/alimentos/hills.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-15",
    name: "Max Cat",
    description:
      "Max también brinda una nutrición completa y balanceada para gatos, elaborada con ingredientes naturales y sin conservantes artificiales. Su alto contenido proteico promueve una buena digestión, masa muscular saludable y un pelaje brillante. Disponible en presentaciones para gatitos y gatos adultos.\nPresentación: 1kg, 3kg",
    image: "/img-productos/alimentos/max-cat.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-16",
    name: "Max Perro",
    description:
      "Max ofrece una alimentación completa y balanceada para perros, con alto contenido proteico e ingredientes naturales, sin conservantes artificiales. Su fórmula está diseñada para favorecer una digestión saludable, el desarrollo de músculos fuertes y un pelaje brillante. Disponible en presentaciones para cachorros, adultos y razas pequeñas.\nPresentación: 1kg, 2kg",
    image: "/img-productos/alimentos/max-perro.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-17",
    name: "Max",
    description: "",
    image: "/img-productos/alimentos/max.png",
    category: "alimentos",
  },
  {
    id: "alimento-18",
    name: "Mirringo",
    description:
      "Mirringo es una opción económica y balanceada para gatos, enriquecida con vitaminas, minerales y taurina para una vida sana y activa. Con sabor a carne y pescado, su fórmula favorece la digestión, fortalece defensas y cuida el pelaje. Disponible en presentaciones para gatitos y adultos.\nPresentación: 500g, 1kg, 8kg",
    image: "/img-productos/alimentos/mirringo.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-19",
    name: "Monello Gato",
    description:
      "Monello también ofrece alimentos secos de alta calidad para gatos, formulados con proteínas nobles, vegetales y cereales funcionales. Incluye prebióticos, omega 3 y 6, y extracto de yuca para controlar el olor de las heces. Es una excelente opción para quienes buscan una nutrición equilibrada con buen rendimiento. Disponible en presentaciones para gato adulto, castrado, con bola de pelo y gatito.\nPresentación: 1kg, 7 kg",
    image: "/img-productos/alimentos/monello-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-20",
    name: "Monello Perro",
    description:
      "Monello ofrece alimentos secos de alta calidad para perros, elaborados con proteínas nobles, vegetales y cereales funcionales. Su fórmula contiene prebióticos, omega 3 y 6, y extracto de yuca para reducir el olor de las heces. Es ideal para dueños que buscan una alimentación saludable con buen rendimiento. Disponible en presentaciones para perro cachorro, adulto y razas pequeñas.\n\tPresentación: 1kg y 7 kg",
    image: "/img-productos/alimentos/monello-perro.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-21",
    name: "Nutre Can",
    description:
      "Nutre Can es un alimento completo para perros, formulado para brindar energía, salud digestiva y nutrición diaria. Contiene vitaminas, minerales y proteínas que ayudan al desarrollo muscular y fortalecimiento del sistema inmunológico. Disponibles para perros adultos, cachorros y razas pequeñas, razas medianas, grandes y senior.\nPresentaciones: 500g, 800g, 2kg",
    image: "/img-productos/alimentos/nutre-can.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-22",
    name: "Oh Mai Gat",
    description:
      "Oh Mai Gat es un alimento húmedo gourmet para gatos, elaborado con trozos reales de carne o pescado en salsa. Su textura y sabor lo hacen altamente apetecible, ideal para complementar la dieta diaria o consentir a tu felino. Contiene taurina y nutrientes esenciales para su bienestar. Presentación para gatos inquietos y aventureros, juguetones y exploradores, sedentarios y territoriales, caseros y delicados.\nPresentaciones: 200g, 500g, 1.5kg, 8kg",
    image: "/img-productos/alimentos/oh-mai-gat.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-23",
    name: "ProPlan Gato",
    description:
      "ProPlan, desarrollado por Purina con respaldo veterinario, brinda nutrición avanzada para gatos. Sus fórmulas se adaptan a cada etapa de vida, tamaño o necesidad específica, como sensibilidad digestiva, control de peso o soporte renal. Ofrece excelente sabor, fácil digestión y beneficios comprobables en la salud del gato.\nPresentación: 1.5kg",
    image: "/img-productos/alimentos/proplan-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-24",
    name: "ProPlan Perro",
    description:
      "Desarrollado por Purina con respaldo veterinario, ProPlan ofrece nutrición avanzada para perros. Cada fórmula está diseñada según la edad, tamaño, raza o necesidad especial, como digestión sensible, control de peso o cuidado renal. Se destaca por su alta palatabilidad, digestibilidad y resultados visibles en la salud del perro.\nPresentación: 1 kg, 2 kg, 3 kg",
    image: "/img-productos/alimentos/proplan-perro.webp",
    category: "alimentos",
  },
  {
    id: "alimento-25",
    name: "Qida Cat",
    description:
      "Qida Cat es una marca de alimento húmedo de alta calidad para gatos, que combina carne real y recetas formuladas para una nutrición equilibrada. Aporta hidratación, mejora la digestión y es ideal para gatos exigentes o con dieta mixta.\nPresentación: 500g, 8kg",
    image: "/img-productos/alimentos/qida-cat.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-26",
    name: "Ringo",
    description:
      "Ringo ofrece nutrición esencial a un precio accesible, ideal para perros activos. Su fórmula balanceada con proteínas, vitaminas y minerales contribuye al mantenimiento de músculos fuertes, dientes sanos y pelaje brillante. Disponible para cachorro y adulto.\nPresentación: 500g, 1kg, 2kg, 30kg",
    image: "/img-productos/alimentos/ringo.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-27",
    name: "Taste Gato",
    description:
      "Taste of the Wild es un alimento súper premium para gatos, elaborado con ingredientes que imitan su alimentación natural. Contiene carne real, frutas y vegetales, y no incluye cereales, siendo perfecto para gatos con sensibilidad o necesidades especiales. Aporta proteínas, antioxidantes y probióticos que promueven su bienestar general.\nPresentación: 2.27kg",
    image: "/img-productos/alimentos/taste-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-28",
    name: "Taste Perro",
    description:
      "Taste of the Wild es un alimento súper premium para perros, inspirado en su dieta natural. Está formulado con carne real, frutas y vegetales, sin cereales, lo que lo hace ideal para perros con sensibilidad alimentaria o que siguen dietas libres de granos. Su fórmula rica en proteínas, antioxidantes y probióticos favorece una nutrición equilibrada y saludable.\nPresentación: 2.27kg",
    image: "/img-productos/alimentos/taste-perro.jpg",
    category: "alimentos",
  },
];

export default alimentos;
