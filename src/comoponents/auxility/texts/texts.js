const texts = [
  // Nivel Fácil (Type: 1)
  {
    id: 1,
    text: "I have a small dog. His name is Max. He is brown and white. Every morning, we go for a walk. Max loves to play with a ball. He runs fast and jumps high. After playing, he drinks water. Then, he rests under a tree. I love my dog, Max. He is my best friend.",
    translate:
      "Tengo un perro pequeño. Su nombre es Max. Es marrón y blanco. Todas las mañanas, salimos a caminar. A Max le encanta jugar con una pelota. Corre rápido y salta alto. Después de jugar, bebe agua. Luego, descansa bajo un árbol. Amo a mi perro, Max. Es mi mejor amigo.",
    type: 1,
  },
  {
    id: 2,
    text: "It is a sunny day today. I went to the park with my family. We brought sandwiches and juice. My brother and I played soccer. We ran and laughed a lot. My parents sat on a bench and watched us. After playing, we ate together. It was a fun day at the park.",
    translate:
      "Hoy es un día soleado. Fui al parque con mi familia. Trajimos sándwiches y jugo. Mi hermano y yo jugamos al fútbol. Corrimos y nos reímos mucho. Mis padres se sentaron en un banco y nos miraron. Después de jugar, comimos juntos. Fue un día divertido en el parque.",
    type: 1,
  },
  {
    id: 3,
    text: "My favorite fruit is an apple. Apples are sweet and crunchy. I eat an apple every day. They come in different colors, like red, green, and yellow. My mom says apples are good for my health. Sometimes, I eat apple slices with peanut butter. It's a delicious snack.",
    translate:
      "Mi fruta favorita es la manzana. Las manzanas son dulces y crujientes. Como una manzana todos los días. Vienen en diferentes colores, como rojo, verde y amarillo. Mi mamá dice que las manzanas son buenas para mi salud. A veces, como rodajas de manzana con mantequilla de maní. Es un bocadillo delicioso.",
    type: 1,
  },
  {
    id: 4,
    text: "Yesterday, I went to the zoo with my friends. We saw lions, tigers, and bears. The monkeys were very funny. We took pictures of the animals. At noon, we ate lunch. I bought a souvenir from the gift shop. It was a great day at the zoo.",
    translate:
      "Ayer, fui al zoológico con mis amigos. Vimos leones, tigres y osos. Los monos eran muy graciosos. Tomamos fotos de los animales. Al mediodía, almorzamos. Compré un recuerdo en la tienda de regalos. Fue un gran día en el zoológico.",
    type: 1,
  },
  {
    id: 5,
    text: "My sister has a new bike. It is pink and has a bell. She rides it every afternoon. I like to run beside her. Sometimes, we go to the park together. She is learning to ride fast. I am happy for her.",
    translate:
      "Mi hermana tiene una bicicleta nueva. Es rosa y tiene una campana. La monta todas las tardes. Me gusta correr a su lado. A veces, vamos juntos al parque. Ella está aprendiendo a andar rápido. Estoy feliz por ella.",
    type: 1,
  },
  {
    id: 6,
    text: "We have a big tree in our backyard. In summer, we sit under the tree. It gives us shade. Birds make nests in the tree. We can hear them sing. Sometimes, squirrels climb the tree. We love our big tree.",
    translate:
      "Tenemos un árbol grande en nuestro patio trasero. En verano, nos sentamos bajo el árbol. Nos da sombra. Los pájaros hacen nidos en el árbol. Podemos escucharlos cantar. A veces, las ardillas trepan al árbol. Amamos nuestro gran árbol.",
    type: 1,
  },
  {
    id: 7,
    text: "My mom baked cookies today. The house smells so good. I helped her mix the ingredients. We used chocolate chips. After baking, we waited for them to cool. Then, we ate the cookies with milk. They were delicious.",
    translate:
      "Mi mamá horneó galletas hoy. La casa huele muy bien. La ayudé a mezclar los ingredientes. Usamos chispas de chocolate. Después de hornear, esperamos a que se enfriaran. Luego, comimos las galletas con leche. Estaban deliciosas.",
    type: 1,
  },
  {
    id: 8,
    text: "At school, we have a new playground. It has swings and slides. My friends and I play there during recess. We like to climb and run. The playground is colorful. Everyone enjoys it.",
    translate:
      "En la escuela, tenemos un nuevo parque infantil. Tiene columpios y toboganes. Mis amigos y yo jugamos allí durante el recreo. Nos gusta trepar y correr. El parque es colorido. Todos lo disfrutan.",
    type: 1,
  },
  {
    id: 9,
    text: "I have a pet fish named Goldie. She swims in her tank all day. I feed her fish food. Sometimes, she hides behind the plants. I watch her swim. Goldie is a good pet.",
    translate:
      "Tengo un pez mascota llamado Goldie. Nada en su pecera todo el día. Le doy comida para peces. A veces, se esconde detrás de las plantas. La miro nadar. Goldie es una buena mascota.",
    type: 1,
  },
  {
    id: 10,
    text: "Every night, I read a book before bed. My favorite book is about a pirate. He sails the seas and finds treasure. I imagine going on adventures with him. Reading helps me sleep.",
    translate:
      "Todas las noches, leo un libro antes de dormir. Mi libro favorito es sobre un pirata. Navega los mares y encuentra tesoros. Me imagino yendo en aventuras con él. Leer me ayuda a dormir.",
    type: 1,
  },

  // Nivel Intermedio (Type: 2)
  {
    id: 11,
    text: "Last summer, I went to the beach with my family. We stayed at a hotel near the ocean. Every morning, we walked along the shore and collected seashells. In the afternoon, we swam in the water. At night, we watched the sunset. It was a relaxing and beautiful vacation.",
    translate:
      "El verano pasado, fui a la playa con mi familia. Nos quedamos en un hotel cerca del océano. Todas las mañanas, caminábamos por la orilla y recogíamos conchas marinas. Por la tarde, nadábamos en el agua. Por la noche, veíamos la puesta de sol. Fue unas vacaciones relajantes y hermosas.",
    type: 2,
  },
  {
    id: 12,
    text: "My family went camping last weekend. We set up a tent near a lake. During the day, we went fishing and hiking. At night, we sat around a campfire. We roasted marshmallows and told stories. The stars were bright in the sky. It was a wonderful experience.",
    translate:
      "Mi familia fue de campamento el fin de semana pasado. Montamos una tienda cerca de un lago. Durante el día, fuimos a pescar y a hacer senderismo. Por la noche, nos sentamos alrededor de una fogata. Asamos malvaviscos y contamos historias. Las estrellas brillaban en el cielo. Fue una experiencia maravillosa.",
    type: 2,
  },
  {
    id: 13,
    text: "Last year, I joined the school band. I chose to play the guitar. At first, it was difficult to learn the chords. But with practice, I improved. We performed at the school concert. My family came to watch me play. I felt proud and happy.",
    translate:
      "El año pasado, me uní a la banda de la escuela. Elegí tocar la guitarra. Al principio, fue difícil aprender los acordes. Pero con práctica, mejoré. Actuamos en el concierto de la escuela. Mi familia vino a verme tocar. Me sentí orgulloso y feliz.",
    type: 2,
  },
  {
    id: 14,
    text: "I love to read mystery novels. The stories are exciting and keep me guessing. My favorite author is Agatha Christie. Her books have interesting characters and plots. I try to solve the mystery before the end. Reading helps me relax and learn new words.",
    translate:
      "Me encanta leer novelas de misterio. Las historias son emocionantes y me mantienen adivinando. Mi autora favorita es Agatha Christie. Sus libros tienen personajes y tramas interesantes. Trato de resolver el misterio antes del final. Leer me ayuda a relajarme y aprender nuevas palabras.",
    type: 2,
  },
  {
    id: 15,
    text: "Our city has a new community center. It offers many activities for people of all ages. There is a gym, a swimming pool, and a library. I joined a yoga class and my brother goes to the basketball court. On weekends, we enjoy spending time there as a family.",
    translate:
      "Nuestra ciudad tiene un nuevo centro comunitario. Ofrece muchas actividades para personas de todas las edades. Hay un gimnasio, una piscina y una biblioteca. Me uní a una clase de yoga y mi hermano va a la cancha de baloncesto. Los fines de semana, disfrutamos pasar tiempo allí en familia.",
    type: 2,
  },
  {
    id: 16,
    text: "During the winter holidays, my family travels to the mountains. We stay in a cabin and enjoy the snow. We go skiing and sledding. At night, we sit by the fireplace and drink hot chocolate. It's a tradition we look forward to every year.",
    translate:
      "Durante las vacaciones de invierno, mi familia viaja a las montañas. Nos quedamos en una cabaña y disfrutamos de la nieve. Vamos a esquiar y a andar en trineo. Por la noche, nos sentamos junto a la chimenea y bebemos chocolate caliente. Es una tradición que esperamos cada año.",
    type: 2,
  },
  {
    id: 17,
    text: "I enjoy learning about space and the planets. Last week, I watched a documentary about astronauts. It showed how they live and work in space. They wear special suits and float inside the spacecraft. It must be exciting to see Earth from so far away.",
    translate:
      "Disfruto aprender sobre el espacio y los planetas. La semana pasada, vi un documental sobre astronautas. Mostraba cómo viven y trabajan en el espacio. Llevan trajes especiales y flotan dentro de la nave espacial. Debe ser emocionante ver la Tierra desde tan lejos.",
    type: 2,
  },
  {
    id: 18,
    text: "My best friend and I have been friends since we were little. We met in kindergarten and have been close ever since. We enjoy doing many things together, like playing sports and watching movies. Even though we have different interests, we always support each other.",
    translate:
      "Mi mejor amigo y yo somos amigos desde que éramos pequeños. Nos conocimos en el jardín de infantes y hemos sido cercanos desde entonces. Disfrutamos hacer muchas cosas juntos, como practicar deportes y ver películas. Aunque tenemos intereses diferentes, siempre nos apoyamos mutuamente.",
    type: 2,
  },
  {
    id: 19,
    text: "This year, I decided to learn how to cook. I started with simple recipes like pasta and scrambled eggs. As I gained confidence, I tried more complicated dishes. My family is happy to taste my cooking. It's a fun and useful skill to have.",
    translate:
      "Este año, decidí aprender a cocinar. Comencé con recetas simples como pasta y huevos revueltos. A medida que ganaba confianza, probé platos más complicados. Mi familia está feliz de probar mi cocina. Es una habilidad divertida y útil de tener.",
    type: 2,
  },
  {
    id: 20,
    text: "In the future, I want to travel to different countries. I love learning about other cultures and trying new foods. My dream is to visit Japan, Italy, and Brazil. I am saving money for my trips. Traveling will be a great way to see the world.",
    translate:
      "En el futuro, quiero viajar a diferentes países. Me encanta aprender sobre otras culturas y probar nuevos alimentos. Mi sueño es visitar Japón, Italia y Brasil. Estoy ahorrando dinero para mis viajes. Viajar será una excelente manera de ver el mundo.",
    type: 2,
  },

  // Nivel Avanzado (Type: 3)
  {
    id: 21,
    text: "Climate change is a pressing issue that affects the entire planet. Scientists agree that human activity, particularly the burning of fossil fuels, is a major contributor to the increase in greenhouse gases. These gases trap heat in the atmosphere, leading to global warming. The consequences include more frequent and severe weather events, such as hurricanes and droughts.",
    translate:
      "El cambio climático es un problema urgente que afecta a todo el planeta. Los científicos coinciden en que la actividad humana, en particular la quema de combustibles fósiles, es un importante contribuyente al aumento de los gases de efecto invernadero. Estos gases atrapan el calor en la atmósfera, lo que lleva al calentamiento global. Las consecuencias incluyen eventos climáticos más frecuentes y severos, como huracanes y sequías.",
    type: 3,
  },
  {
    id: 22,
    text: "The internet has revolutionized the way we communicate and access information. With just a few clicks, people can connect with others around the world or find answers to nearly any question. However, this convenience also comes with challenges, such as misinformation and data privacy concerns. It's important for users to critically evaluate the information they encounter online.",
    translate:
      "Internet ha revolucionado la forma en que nos comunicamos y accedemos a la información. Con solo unos pocos clics, las personas pueden conectarse con otras en todo el mundo o encontrar respuestas a casi cualquier pregunta. Sin embargo, esta conveniencia también conlleva desafíos, como la desinformación y las preocupaciones sobre la privacidad de los datos. Es importante que los usuarios evalúen críticamente la información que encuentran en línea.",
    type: 3,
  },
  {
    id: 23,
    text: "Artificial intelligence (AI) is rapidly transforming industries. In healthcare, AI is used to analyze medical data and assist in diagnosing diseases. In manufacturing, it helps automate processes and improve efficiency. However, there are concerns about AI replacing jobs and the ethical implications of machines making decisions. As AI continues to develop, it's crucial to address these issues.",
    translate:
      "La inteligencia artificial (IA) está transformando rápidamente las industrias. En el sector de la salud, se utiliza la IA para analizar datos médicos y ayudar en el diagnóstico de enfermedades. En la manufactura, ayuda a automatizar procesos y mejorar la eficiencia. Sin embargo, existen preocupaciones sobre la IA que reemplaza empleos y las implicaciones éticas de que las máquinas tomen decisiones. A medida que la IA continúa desarrollándose, es crucial abordar estos problemas.",
    type: 3,
  },
  {
    id: 24,
    text: "Renewable energy sources, such as solar and wind power, are essential for reducing our reliance on fossil fuels. Unlike traditional energy sources, renewable energy produces little to no greenhouse gas emissions. As technology improves, the cost of renewable energy continues to decrease, making it a more viable option for both individuals and businesses.",
    translate:
      "Las fuentes de energía renovable, como la energía solar y eólica, son esenciales para reducir nuestra dependencia de los combustibles fósiles. A diferencia de las fuentes de energía tradicionales, la energía renovable produce pocas o ninguna emisión de gases de efecto invernadero. A medida que la tecnología mejora, el costo de la energía renovable sigue disminuyendo, lo que la convierte en una opción más viable tanto para individuos como para empresas.",
    type: 3,
  },
  {
    id: 25,
    text: "The global population is growing at an unprecedented rate. By 2050, it's expected that there will be nearly 10 billion people on Earth. This rapid population growth presents significant challenges, including the need for more food, water, and energy. Governments and organizations must work together to find sustainable solutions to meet the needs of a growing population.",
    translate:
      "La población mundial está creciendo a un ritmo sin precedentes. Para 2050, se espera que haya casi 10 mil millones de personas en la Tierra. Este rápido crecimiento de la población presenta desafíos significativos, incluida la necesidad de más alimentos, agua y energía. Los gobiernos y las organizaciones deben trabajar juntos para encontrar soluciones sostenibles que satisfagan las necesidades de una población en crecimiento.",
    type: 3,
  },
  {
    id: 26,
    text: "Biodiversity is crucial for maintaining the balance of ecosystems. Each species, no matter how small, plays a role in the health of the environment. However, human activities such as deforestation and pollution are causing many species to become endangered or extinct. Protecting biodiversity is essential for the future of our planet.",
    translate:
      "La biodiversidad es crucial para mantener el equilibrio de los ecosistemas. Cada especie, por pequeña que sea, desempeña un papel en la salud del medio ambiente. Sin embargo, las actividades humanas como la deforestación y la contaminación están provocando que muchas especies estén en peligro de extinción o desaparezcan. Proteger la biodiversidad es esencial para el futuro de nuestro planeta.",
    type: 3,
  },
  {
    id: 27,
    text: "The rise of electric vehicles (EVs) is changing the automotive industry. EVs produce fewer emissions than traditional gasoline-powered cars and are becoming more popular as technology improves. Governments are also offering incentives for people to switch to electric cars. However, challenges such as charging infrastructure and battery production remain.",
    translate:
      "El aumento de los vehículos eléctricos (VE) está cambiando la industria automotriz. Los VE producen menos emisiones que los automóviles tradicionales que funcionan con gasolina y están ganando popularidad a medida que mejora la tecnología. Los gobiernos también están ofreciendo incentivos para que las personas cambien a automóviles eléctricos. Sin embargo, aún existen desafíos como la infraestructura de carga y la producción de baterías.",
    type: 3,
  },
  {
    id: 28,
    text: "Mental health awareness has grown significantly in recent years. People are beginning to recognize the importance of taking care of their mental well-being, just as they do their physical health. There is less stigma around seeking help for mental health issues, and more resources are becoming available for those in need.",
    translate:
      "La concienciación sobre la salud mental ha crecido significativamente en los últimos años. La gente está comenzando a reconocer la importancia de cuidar su bienestar mental, al igual que lo hacen con su salud física. Hay menos estigma en torno a buscar ayuda para problemas de salud mental, y hay más recursos disponibles para quienes los necesitan.",
    type: 3,
  },
  {
    id: 29,
    text: "In recent years, sustainable fashion has become a popular movement. Consumers are more aware of the environmental impact of the fashion industry, which is one of the most polluting industries in the world. Brands are now focusing on producing clothing that is ethically made and environmentally friendly.",
    translate:
      "En los últimos años, la moda sostenible se ha convertido en un movimiento popular. Los consumidores son más conscientes del impacto ambiental de la industria de la moda, que es una de las industrias más contaminantes del mundo. Las marcas ahora se están enfocando en producir ropa que esté hecha de manera ética y que sea amigable con el medio ambiente.",
    type: 3,
  },
  {
    id: 30,
    text: "Space exploration has always been a topic of fascination for humanity. In recent years, private companies like SpaceX have made significant strides in making space travel more accessible. While space exploration can lead to important scientific discoveries, there are also ethical questions about the potential commercialization of space.",
    translate:
      "La exploración espacial siempre ha sido un tema de fascinación para la humanidad. En los últimos años, empresas privadas como SpaceX han hecho grandes avances para hacer que los viajes espaciales sean más accesibles. Aunque la exploración espacial puede llevar a importantes descubrimientos científicos, también surgen preguntas éticas sobre la posible comercialización del espacio.",
    type: 3,
  },
]

export default texts
