import ralation from "../../../assets/images/relation.png"
import memory from "../../../assets/images/memory.png"
import write from "../../../assets/images/write.png"

const cardDataExersices = [
  {
    title: "Relaciona la imagen con la palabra",
    imageSrc: ralation,
    description: "Seleccione la palabra que describe la imagen ",
    route: "/exercises/relation",
  },
  {
    title: "Memoriza y aprende",
    imageSrc: memory,
    description: "Voltea las tarjetas y encuentra la pareja de cada palabra",
    route: "/exercises/memory",
  },
  {
    title: "Escribe la traduccion",
    imageSrc: write,
    description: "Escribe la traduccion de la palabra que se muestra",
    route: "/exercises/write",
  }
]

export default cardDataExersices
