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
             Atualmente, trabalho como freelancer em desenvolvimento Back-end, onde utilizo e aprimoro
             minhas habilidades em JavaScript, NodeJS e Docker. Tenho experiência significativa no
             desenvolvimento de sistemas robustos, escaláveis e otimizados para atender
             às necessidades dos usuários. Além disso, também atuo no front-end com o
             framework React, criando interfaces interativas e de fácil usabilidade.
             <br />
             Com um sólido conhecimento de Git e GitHub, consigo gerenciar versões de
             código de forma eficiente e colaborar em projetos de forma ágil.
             Tenho também experiência em Java, o que me permite trabalhar com 
             diferentes tipos de aplicações, e sou capaz de criar servidores na nuvem,
             utilizando plataformas como DigitalOcean, para garantir que as soluções
             que desenvolvo sejam escaláveis e de alto desempenho.</p>
        </div>
    )
}