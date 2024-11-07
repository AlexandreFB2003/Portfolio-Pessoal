import Image from "next/image";
import "./header.scss"


export function Header() {
    return(
      <div className="header">
        <div>
          <h3>Olá!👋 Meu nome é</h3>
          <h2>Alexandre Fonseca Borges</h2>
          <h1>Desenvolvedor Mobile</h1>
        </div>
        <Image
          className="dark:invert"
          src="/me.jpg"
          alt="Next.js logo"
          width={350}
          height={350}
          priority
        />
      </div>
    )

}