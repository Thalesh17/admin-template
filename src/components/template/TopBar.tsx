import useAppData from '../../data/hook/useAppData';
import ButtonTheme from './ButtonTheme';
import NavBar from './NavBar';
import Title from './Title';

interface TopBarProps {
    titulo: string
    subtitulo: string
}

export default function TopBar(props: TopBarProps) {
    const { theme, changeTheme } = useAppData();

    return (
        <div className={`flex`}>
            <Title titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className={`flex flex-grow justify-end`}>
                <ButtonTheme theme={theme} changeTheme={changeTheme} />
            </div>
        </div>
    )
}
