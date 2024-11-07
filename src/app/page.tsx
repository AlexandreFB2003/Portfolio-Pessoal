import { Header } from './components/header/header';
import { Buttons } from './components/buttons/buttons';
import { Profile } from './components/profile/profile';

import "./styles/home.scss"


export default function Home() {
  return (
      <main className="container">

        <Header/>

        <Buttons/>

        <Profile/>
        
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
