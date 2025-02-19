import "./technologies.scss"
import Image from "next/image";
import { Title } from '../title/title';

export function Technologies() {
    return(
        <div className="technologies"> 

            <Title text="Technologies"/>

            <div className="technologies-list">
                       <Image
                          className="logo"
                          src="/nodejs.svg"
                          alt="Next.js logo"
                          width={100}
                          height={100}
                          priority
                        />
                        <Image
                          className="logo"
                          src="/docker.svg"
                          alt="Next.js logo"
                          width={100}
                          height={100}
                          priority
                        />
                        <Image
                          className="logo"
                          src="/postgresql.svg"
                          alt="Next.js logo"
                          width={100}
                          height={100}
                          priority
                        />
            </div>

        </div>
    )
}