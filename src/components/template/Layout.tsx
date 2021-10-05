import useAppData from '../../data/hook/useAppData';
import Content from './Content';
import NavBar from './NavBar';
import TopBar from './TopBar';

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const { theme } = useAppData();

    return (
        <div className={`${theme} flex h-screen w-screen`}>
            <NavBar />
            <div className={`
                flex p-7 flex-col w-full bg-gray-300
                dark:bg-gray-800    
            `}>
                <TopBar titulo={props.titulo} subtitulo={props.subtitulo} />
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    )
}
