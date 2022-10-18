import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Disney Personajes</h1>
      <Testimonio 
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='donal' alt='foto donald'
        cargo='Software Engineer'
        empresa='Spotify'
        testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify' />
        <Testimonio 
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen='Minnie'
        cargo='Software Engineer'
        empresa='ChatDesk'
        testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación de un nivel principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble' />
        <Testimonio 
        nombre='Shawn Wang'
        pais='Singapur'
        imagen='Tiger'
        cargo='Software Engineer'
        empresa='Amazon'
        testimonio='Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.' />
      </div>
    </div>
  );
}

export default App;
