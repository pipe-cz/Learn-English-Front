import read from "../../../assets/images/read.png";
import speaker from "../../../assets/images/speaker.png";
import translate from "../../../assets/images/translate.png";

const cardDataResources = [
  {
    title: 'Practica tu lectura',
    imageSrc: read,
    description: 'Lee y historias en inglés. Practica tu comprensión lectora',
    route: '/resources/read',
  },

  {
    title: 'Escucha y repite',
    imageSrc: speaker,
    description: 'Escucha y repite palabras en inglés. Practica tu pronunciación',
    route: '/resources/listen',
  },
  {
    title: 'Traductor',
    imageSrc: translate,
    description: 'Traduce palabras en inglés a español y viceversa',
    route: '/resources/translate',
  }
  
]

export default cardDataResources;