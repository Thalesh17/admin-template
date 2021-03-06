interface TopBarProps {
    titulo: string
    subtitulo: string
}

export default function Title(props: TopBarProps) {
    return (
        <div>
            <h1 className={`
                font-black text-3xl
                text-gray-900 dark:text-gray-100
            `}>{props.titulo}</h1>
            <h1 className={`
                font-light text-sm font-gray-600 dark:text-gray-300
            `}>{props.subtitulo}</h1>
        </div>
    )
}
