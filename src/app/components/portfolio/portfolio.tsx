import "./portfolio.scss";
import { Title } from '../title/title';

export function Porfolio() {
    return(
        <div className="portfolio">

            <Title text="Portfólio"/>

            <div className="projects">

                <div className="project-card">
                    <h3>EngliStream</h3>
                    <p>Plataforma para o ensino de inglês, onde fui responsável por ajudar
                       a equipe na construção e manutenção da estrutura do back-end. 
                       Utilizo TypeScript em conjunto com NodeJS e Docker para criar uma 
                       arquitetura robusta e escalável. Durante o desenvolvimento, criei
                       e otimizei diversas APIs, melhorando a comunicação entre o front-end e o banco de dados</p>
                    <a href="https://github.com/GGVidal/EngliStream_api" target="_blank" 
                        rel="noopener noreferrer">Acessar Repositório</a>
                </div>

            </div>

        </div>
    )
}