import { Header } from './components/header/header';
import "./styles/home.scss"


export default function Home() {
  return (
      <main className="container">

        <Header/>

        <div className="buttons">
          <div className="social">

          </div>
          <button>Currículo</button>
        </div>
        <div className="profile">
          <h1>Perfil</h1>
          <p>Sempre tive o objetivo de poder ajudar as pessoas e criar soluções para problemas, isso 
             aliado com um forte interesse por tecnologia, me levou a escolher a carreira como 
             desenvolvedor.
             <br />
             trabalho atualmente com desenvolvimento Android, mas também tenho projetos com desenvolvimento web. Utilizo e aprimoro minhas 
             habilidades nas tecnologias: kotlin, Android Studio, JavaScript, React, NodeJS. Além disso estou no sexto 
             semestre no curso de Ciências da Computação. </p>
        </div>
        <div className="technology">
          <h1>Tecnologias</h1>
          <div className="icon_tec">

          </div>
        </div>
        <div className="portfolio">
          <h1>Portfólio</h1>
          <div className="projects">

          </div>
        </div>
  
      </main>
  );
}
