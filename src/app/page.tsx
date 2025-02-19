import { Header } from './components/header/header';
import { Buttons } from './components/buttons/buttons';
import { Profile } from './components/profile/profile';
import { Technologies } from './components/technologies/technologies';
import { Porfolio } from './components/portfolio/portfolio';

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

        <Porfolio/>
  
      </main>
  );
}
