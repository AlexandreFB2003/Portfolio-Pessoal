import "./title.scss"

interface TitleProps {
    text: string
}

export function Title ( { text }: TitleProps ) {
    return (
        <h3 className="title">{ text }</h3>
    )
}