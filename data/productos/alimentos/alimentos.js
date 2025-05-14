const alimentos = [
  {
    id: "alimento-1",
    name: "Monello Gato Adulto",
    description:
      "Alimento completo y equilibrado para gatos adultos, con ingredientes de alta calidad que promueven una digestión saludable, pelaje brillante y bienestar general.",
    image: "/img-productos/alimentos/monello-gato.png",
    category: "alimentos",
  },
  {
    id: "alimento-2",
    name: "Monello Gatito",
    description:
      "Nutrición completa para gatitos, con DHA, vitaminas y minerales que apoyan el desarrollo cerebral, visual y del sistema inmune.",
    image: "/img-productos/alimentos/monello-gatito.webp",
    category: "alimentos",
  },
  {
    id: "alimento-3",
    name: "Monello Gato Castrado",
    description:
      "Alimento formulado para gatos esterilizados, ayuda a controlar el peso y favorece la salud urinaria con un sabor irresistible.",
    image: "/img-productos/alimentos/monello-castrado.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-4",
    name: "Monello Gato Bola de Pelo",
    description:
      "Ideal para gatos propensos a formar bolas de pelo. Contiene fibras especiales que favorecen la eliminación natural del pelo ingerido.",
    image: "/img-productos/alimentos/monello-bola.webp",
    category: "alimentos",
  },
  {
    id: "alimento-5",
    name: "Monello Razas Pequeñas",
    description:
      "Fórmula especial para perros de razas pequeñas, con croquetas adaptadas, alto valor nutricional y sabor irresistible para una vida activa y saludable.",
    image: "/img-productos/alimentos/monello-razas.png",
    category: "alimentos",
  },
  {
    id: "alimento-6",
    name: "Monello Tradicional",
    description:
      "Alimento balanceado para perros adultos, con proteínas de calidad, vitaminas y minerales para una nutrición completa y sabrosa.",
    image: "/img-productos/alimentos/monello-tradicional.png",
    category: "alimentos",
  },
  {
    id: "alimento-7",
    name: "Monello Cachorro",
    description:
      "Fórmula especial para cachorros en crecimiento, con nutrientes esenciales para el desarrollo saludable de huesos, músculos y defensas.",
    image: "/img-productos/alimentos/monello-cachorro.png",
    category: "alimentos",
  },
  {
    id: "alimento-8",
    name: "Agility Gold Gato Adulto",
    description:
      "Alimento premium para gatos adultos, con proteínas de alta calidad, omega 3 y 6 para un pelaje saludable y control de bolas de pelo.",
    image: "/img-productos/alimentos/agility-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-9",
    name: "Agility Gold Gatito",
    description:
      "Nutrición completa para gatitos en crecimiento, con DHA para el desarrollo cerebral y visual, y proteínas de fácil digestión.",
    image: "/img-productos/alimentos/agility-gatitos.webp",
    category: "alimentos",
  },
  {
    id: "alimento-10",
    name: "Agility Gold Pequeños adultos",
    description:
      "Fórmula balanceada para perros adultos de razas pequeñas, con croquetas adaptadas, energía concentrada y excelente sabor.",
    image: "/img-productos/alimentos/agility-pequeños-adultos.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-11",
    name: "Agility Gold Pequeños adultos piel",
    description:
      "Especial para perros de razas pequeñas con piel sensible. Contiene ácidos grasos esenciales y nutrientes que cuidan la piel y el pelaje.",
    image: "/img-productos/alimentos/agility-pequeños-adultos-piel.webp",
    category: "alimentos",
  },{
    id: "alimento-12",
    name: "Agility Gold grandes adultos piel",
    description:
      "Desarrollado para perros grandes con piel sensible. Refuerza la barrera cutánea y aporta brillo y salud al pelaje con omega 3 y 6.",
    image: "/img-productos/alimentos/agility-grandes-adultos-piel.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-13",
    name: "Agility Gold grandes cachorros",
    description:
      "Alimento para cachorros de razas grandes, con fórmula especializada que apoya el crecimiento óseo, muscular y el sistema inmunológico.",
    image: "/img-productos/alimentos/agility-grandesc.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-14",
    name: "Agility Gold pequeños cachorros",
    description:
      "Nutrición ideal para cachorros de razas pequeñas, con DHA, proteínas y minerales que fortalecen su desarrollo desde los primeros meses.",
    image: "/img-productos/alimentos/agility-pequeños-cachorro.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-15",
    name: "Max Cat Adulto",
    description:
      "Alimento completo para gatos adultos, con proteínas de alta calidad, omega 3 y 6 y taurina para un corazón sano y pelaje brillante.",
    image: "/img-productos/alimentos/max-cat-adulto.webp",
    category: "alimentos",
  },
  {
    id: "alimento-16",
    name: "Max Cat Castrado",
    description:
      "Fórmula especial para gatos esterilizados, ayuda a mantener el peso ideal y favorece la salud del tracto urinario.",
    image: "/img-productos/alimentos/max-cat-castrado.webp",
    category: "alimentos",
  },
  {
    id: "alimento-17",
    name: "Max Cat Gatitos",
    description: 
      "Nutrición balanceada para gatitos, con DHA para el desarrollo cognitivo y visual, y proteínas que fortalecen el crecimiento.",
    image: "/img-productos/alimentos/max-cat-gatito.webp",
    category: "alimentos",
  },
  {
    id: "alimento-18",
    name: "Max Adulto",
    description:
      "Alimento equilibrado para perros adultos, con proteínas de origen animal, vitaminas y minerales que promueven vitalidad y bienestar.",
    image: "/img-productos/alimentos/max-adulto.webp",
    category: "alimentos",
  },
  {
    id: "alimento-19",
    name: "Max Cachorro",
    description:
      "Alimento completo para cachorros en etapa de crecimiento. Enriquecido con DHA, proteínas de alta calidad y calcio para un desarrollo saludable de huesos, músculos y sistema inmunológico.",
    image: "/img-productos/alimentos/max-cachorro.webp",
    category: "alimentos",
  },
  {
    id: "alimento-20",
    name: "Max Adulto Razas pequeñas",
    description: 
      "Fórmula adaptada para perros de razas pequeñas, con croquetas pequeñas, alta palatabilidad y nutrientes que favorecen su metabolismo activo.",
    image: "/img-productos/alimentos/max-razas.webp",
    category: "alimentos",
  },
  {
    id: "alimento-21",
    name: "Max Light",
    description: 
      "Especial para perros con sobrepeso o baja actividad física. Bajo en calorías, con fibras que aportan saciedad y control de peso.",
    image: "/img-productos/alimentos/max-light.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-22",
    name: "Alpo",
    description:
      "Alpo ofrece un alimento completo y balanceado para perros adultos que disfrutan del sabor a carne real. Con vitaminas, minerales y proteínas esenciales, fortalece músculos y huesos, a la vez que satisface el apetito de los más exigentes. Su fórmula proporciona energía y vitalidad para perros activos.",
    image: "/img-productos/alimentos/alpo.png",
    category: "alimentos",
  },
  {
    id: "alimento-23",
    name: "Cat Chow",
    description:
      "Cat Chow es una línea de alimentos secos y húmedos formulados para la nutrición integral de los gatos. Contiene defensas naturales, prebióticos y proteínas que fortalecen su sistema inmunológico, promueven la salud digestiva y mantienen el pelaje brillante. Está disponible en versiones para gato adulto y gatito.",
    image: "/img-productos/alimentos/cat-chow.webp",
    category: "alimentos",
  },
  {
    id: "alimento-24",
    name: "Chunky Gato Adulto",
    description:
      "Alimento balanceado para gatos adultos, con proteínas de calidad, omega 3 y 6, y taurina para una vida saludable y un pelaje brillante.",
    image: "/img-productos/alimentos/chunky-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-25",
    name: "Chunky Gatitos",
    description:
      "Especialmente formulado para gatitos. Contiene DHA, proteínas y calcio para apoyar el desarrollo cognitivo, óseo y muscular.",
    image: "/img-productos/alimentos/chunky-gatito.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-26",
    name: "Chunky Adulto",
    description:
      "Alimento completo para perros adultos, con delicioso sabor a pollo, proteínas de alta calidad y nutrientes esenciales para mantener su vitalidad.",
    image: "/img-productos/alimentos/chunky-perro.webp",
    category: "alimentos",
  },
  {
    id: "alimento-27",
    name: "Chunky Adulto Razas Pequeñas",
    description:
      "Fórmula adaptada a perros de razas pequeñas, con croquetas pequeñas, alta palatabilidad y nutrientes que cuidan su piel, pelaje y energía diaria.",
    image: "/img-productos/alimentos/chunky-razas.webp",
    category: "alimentos",
  },
   {
    id: "alimento-28",
    name: "Chunky Cordero",
    description:
      "Ideal para perros adultos con sensibilidad alimentaria. Contiene cordero como fuente alternativa de proteína, favoreciendo una digestión suave y saludable.",
    image: "/img-productos/alimentos/chunky-cordero.png",
    category: "alimentos",
  },
  {
    id: "alimento-29",
    name: "Chunky Cachorro",
    description:
      "Nutrición completa para cachorros en crecimiento. Con DHA, vitaminas y minerales que fortalecen el desarrollo físico y mental desde los primeros meses.",
    image: "/img-productos/alimentos/chunky-cachorro.webp",
    category: "alimentos",
  },
  {
    id: "alimento-30",
    name: "Dog Chow",
    description:
      "Dog Chow proporciona una nutrición completa con un enfoque en la salud digestiva y el sistema inmune. Con prebióticos naturales, proteínas de calidad y sin colorantes artificiales, ayuda a mantener los perros sanos y activos. Ofrece opciones específicas para cada etapa: cachorros, adultos, senior, razas pequeñas y grandes.\nPresentación: 475g, 1kg, 2kg, 8kg.",
    image: "/img-productos/alimentos/dog-chow.png",
    category: "alimentos",
  },
  {
    id: "alimento-31",
    name: "Dogourmet",
    description:
      "Dogourmet es una opción nutritiva y deliciosa para perros adultos y cachorros. Con una combinación de proteínas, cereales y vegetales, ofrece una fórmula balanceada que cuida la salud digestiva, el sistema inmunológico y el brillo del pelaje. Es ideal para dueños que buscan calidad a un buen precio. Está disponible en diversos sabores como carne a la parrilla, parrilla mixta, Salmón y carne, 3 cereales, carne-cereales y leche deslactosada, pollo y pavo.\nPresentación: 350g, 1kg, 2kg, 9kg, 25kg",
    image: "/img-productos/alimentos/dogourmet.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-32",
    name: "Don Kat",
    description:
      "Don Kat es un alimento económico y completo para gatos, que ofrece una nutrición básica para el mantenimiento diario. Enriquecido con vitaminas, minerales y taurina, ayuda al cuidado visual y del corazón. Agradable al paladar felino y accesible para todos los bolsillos.\nPresentación: 500g, 1kg, 7kg, 16kg",
    image: "/img-productos/alimentos/don-kat.webp",
    category: "alimentos",
  },
  {
    id: "alimento-33",
    name: "Excellent Skin Care",
    description:
      "Excellent Skin Care es un alimento premium para perros con piel sensible, alergias o problemas dermatológicos. Su fórmula contiene ácidos grasos Omega 3 y 6, proteínas de alta digestibilidad y nutrientes esenciales que fortalecen la barrera cutánea, reducen la irritación y mejoran visiblemente la salud del pelaje. Perfecto para perros que requieren una dieta que cuide su piel desde el interior.\nPresentación: 3kg",
    image: "/img-productos/alimentos/excellent-skin.webp",
    category: "alimentos",
  },
  {
    id: "alimento-34",
    name: "Excellent Urinary",
    description:
      "Excellent Urinary es un alimento especializado para gatos formulado para mantener la salud del sistema urinario. Ayuda a prevenir la formación de cálculos y cristales, gracias a su equilibrio óptimo de minerales y su aporte controlado de magnesio. Ideal para gatos con antecedentes de afecciones urinarias o como dieta de mantenimiento. Su fórmula también promueve una hidratación adecuada y una digestión saludable.\nPresentación: 1kg, 3kg",
    image: "/img-productos/alimentos/excellent-urinary.webp",
    category: "alimentos",
  },
  {
    id: "alimento-35",
    name: "Felix",
    description:
      "Felix Triple Delicious es un alimento húmedo irresistible para gatos, con trocitos jugosos en salsa y tres tipos de proteínas por porción. Su sabor variado y textura tierna hacen del momento de la comida una experiencia deliciosa y nutritiva. Ideal para gatos exigentes.\n\tPresentación: 500g, 1.5kg",
    image: "/img-productos/alimentos/felix.webp",
    category: "alimentos",
  },
  {
    id: "alimento-36",
    name: "Hill's Gato",
    description:
      "Hill's también cuenta con fórmulas especializadas para gatos, desarrolladas científicamente para atender necesidades nutricionales específicas. Su línea Prescription Diet abarca soluciones para afecciones renales, digestivas, urinarias, articulares, control de peso y otros trastornos. Es una opción de alta calidad veterinaria para el tratamiento clínico a través de la dieta.",
    image: "/img-productos/alimentos/hills-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-37",
    name: "Hill's",
    description:
      "Hill's es una marca reconocida por sus fórmulas científicamente desarrolladas para perros con necesidades nutricionales específicas. Su línea Prescription Diet incluye productos para el manejo de problemas renales, digestivos, urinarios, articulares, de peso y más. Ofrece alta calidad veterinaria, ideal para el manejo clínico mediante la alimentación.",
    image: "/img-productos/alimentos/hills.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-38",
    name: "Mirringo",
    description:
      "Mirringo es una opción económica y balanceada para gatos, enriquecida con vitaminas, minerales y taurina para una vida sana y activa. Con sabor a carne y pescado, su fórmula favorece la digestión, fortalece defensas y cuida el pelaje. Disponible en presentaciones para gatitos y adultos.\nPresentación: 500g, 1kg, 8kg",
    image: "/img-productos/alimentos/mirringo.webp",
    category: "alimentos",
  },
  {
    id: "alimento-39",
    name: "Nutre Can",
    description:
      "Nutre Can es un alimento completo para perros, formulado para brindar energía, salud digestiva y nutrición diaria. Contiene vitaminas, minerales y proteínas que ayudan al desarrollo muscular y fortalecimiento del sistema inmunológico. Disponibles para perros adultos, cachorros y razas pequeñas, razas medianas, grandes y senior.\nPresentaciones: 500g, 800g, 2kg",
    image: "/img-productos/alimentos/nutre-can.webp",
    category: "alimentos",
  },
  {
    id: "alimento-40",
    name: "Oh Mai Gat",
    description:
      "Oh Mai Gat es un alimento húmedo gourmet para gatos, elaborado con trozos reales de carne o pescado en salsa. Su textura y sabor lo hacen altamente apetecible, ideal para complementar la dieta diaria o consentir a tu felino. Contiene taurina y nutrientes esenciales para su bienestar. Presentación para gatos inquietos y aventureros, juguetones y exploradores, sedentarios y territoriales, caseros y delicados.\nPresentaciones: 200g, 500g, 1.5kg, 8kg",
    image: "/img-productos/alimentos/oh-mai-gat.png",
    category: "alimentos",
  },
  {
    id: "alimento-41",
    name: "ProPlan Gato",
    description:
      "ProPlan, desarrollado por Purina con respaldo veterinario, brinda nutrición avanzada para gatos. Sus fórmulas se adaptan a cada etapa de vida, tamaño o necesidad específica, como sensibilidad digestiva, control de peso o soporte renal. Ofrece excelente sabor, fácil digestión y beneficios comprobables en la salud del gato.\nPresentación: 1.5kg",
    image: "/img-productos/alimentos/proplan-gato.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-42",
    name: "ProPlan Perro",
    description:
      "Desarrollado por Purina con respaldo veterinario, ProPlan ofrece nutrición avanzada para perros. Cada fórmula está diseñada según la edad, tamaño, raza o necesidad especial, como digestión sensible, control de peso o cuidado renal. Se destaca por su alta palatabilidad, digestibilidad y resultados visibles en la salud del perro.\nPresentación: 1 kg, 2 kg, 3 kg",
    image: "/img-productos/alimentos/proplan-perro.webp",
    category: "alimentos",
  },
  {
    id: "alimento-43",
    name: "Q-ida Cat",
    description:
      "Qida Cat es una marca de alimento húmedo de alta calidad para gatos, que combina carne real y recetas formuladas para una nutrición equilibrada. Aporta hidratación, mejora la digestión y es ideal para gatos exigentes o con dieta mixta.\nPresentación: 500g, 8kg",
    image: "/img-productos/alimentos/qida-cat.jpg",
    category: "alimentos",
  },
  {
    id: "alimento-44",
    name: "Ringo",
    description:
      "Ringo ofrece nutrición esencial a un precio accesible, ideal para perros activos. Su fórmula balanceada con proteínas, vitaminas y minerales contribuye al mantenimiento de músculos fuertes, dientes sanos y pelaje brillante. Disponible para cachorro y adulto.\nPresentación: 500g, 1kg, 2kg, 30kg",
    image: "/img-productos/alimentos/ringo.png",
    category: "alimentos",
  },
  {
    id: "alimento-45",
    name: "Taste Of the Will Gato",
    description:
      "Taste of the Wild es un alimento súper premium para gatos, elaborado con ingredientes que imitan su alimentación natural. Contiene carne real, frutas y vegetales, y no incluye cereales, siendo perfecto para gatos con sensibilidad o necesidades especiales. Aporta proteínas, antioxidantes y probióticos que promueven su bienestar general.\nPresentación: 2.27kg",
    image: "/img-productos/alimentos/taste-gato.webp",
    category: "alimentos",
  },
  {
    id: "alimento-46",
    name: "Taste Of the Will Perro",
    description:
      "Taste of the Wild es un alimento súper premium para perros, inspirado en su dieta natural. Está formulado con carne real, frutas y vegetales, sin cereales, lo que lo hace ideal para perros con sensibilidad alimentaria o que siguen dietas libres de granos. Su fórmula rica en proteínas, antioxidantes y probióticos favorece una nutrición equilibrada y saludable.\nPresentación: 2.27kg",
    image: "/img-productos/alimentos/taste-dog.webp",
    category: "alimentos",
  },
];

export default alimentos;
