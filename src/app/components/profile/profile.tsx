import "./profile.scss"
import { Title } from '../title/title';

export function Profile() {
    return (
        <div className="profile">
          <Title text="Perfil"/>
          <p>Sempre tive o objetivo de poder ajudar as pessoas e criar soluções para problemas, isso 
             aliado com um forte interesse por tecnologia, me levou a escolher a carreira como 
             desenvolvedor.
             <br />
             trabalho atualmente com desenvolvimento Android, mas também tenho projetos com desenvolvimento web. Utilizo e aprimoro minhas 
             habilidades nas tecnologias: kotlin, Android Studio, JavaScript, React, NodeJS. Além disso estou no sexto 
             semestre no curso de Ciências da Computação. </p>
        </div>
    )
}