import NavBar from './NavBar';
import Title from './Title';

interface TopBarProps {
    titulo: string
    subtitulo: string
}

export default function TopBar(props: TopBarProps) {
    return (
        <div>
            <Title titulo={props.titulo} subtitulo={props.subtitulo} />
        </div>
    )
}
