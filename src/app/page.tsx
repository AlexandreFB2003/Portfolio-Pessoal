import { Header } from './components/header/header';
import { Buttons } from './components/buttons/buttons';
import { Profile } from './components/profile/profile';
import { Technologies } from './components/technologies/technologies';

import "./styles/home.scss"


export default function Home() {
  return (
      <main className="container">

        <Header/>

        <Buttons/>

        <br/>

        <Profile/>

        <br/>
        
        <Technologies/>

        <br/>

        <div className="portfolio">
          <h1>Portfólio</h1>
          <div className="projects">

          </div>
        </div>
  
      </main>
  );
}
