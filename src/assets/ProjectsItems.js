import QRIT from './images/qr-it.png'
import RadioWeb from './images/web-radio.png'
import CoolMovies from './images/cool_movies.png'
import Pokedex from './images/pokedex.png'

const ProjectsItems = [
{
    id: 1,
   projectTitle: 'Movies API',
   projectDescription: 'API creada con Node.Js, Express y Sequelize. Se trata de un CRUD que utiliza el modelo vista controlador que asociaciones para el correcto funcionamiento de la base de datos. Back-end conectado a un Front-End.',
   projectImage: CoolMovies,
   projectLink:"https://coolmoviesapi.netlify.app/#/",
   projectGit:" https://github.com/ealexc/movie-render"
},
{
    id: 2,
   projectTitle: 'QR It',
   projectDescription: 'Aplicación web para generar códigos QR a partir de una URL. Se utilizan diferentes funcionalidades de React, como la creación de hooks para componentes funcionales y librerías como Axios para lidiar con REST APIs.',
   projectImage: QRIT,
   projectLink:"https://your-qr-it.netlify.app/",
   projectGit:"https://github.com/ealexc/QR-it/tree/main"
},
{
    id: 3,
   projectTitle: 'Web Radio',
   projectDescription: 'Web para sintonizar cinco estaciones de radio mediante la lógica de componentes funcionales consumiendo una librería.',
   projectImage: RadioWeb,
   projectLink:"https://web-radio-web.netlify.app/",
   projectGit:"https://github.com/ealexc/Radio-Web"
},
{
    id: 5,
   projectTitle: 'Pokedex',
   projectDescription: 'Aplicacion web que consume un API para desplegar un Front-End dinámico con gran variedad de estilos mediante CSS y utiliza librerías como Redux',
   projectImage: Pokedex,
   projectLink:"https://comforting-fox-523493.netlify.app/",
   projectGit:"https://github.com/ealexc/ent-5-react"
}
]

export default ProjectsItems