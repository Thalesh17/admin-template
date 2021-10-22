import useAuth from "../../data/hook/useAuth";
import { IconConfig, IconHome, IconLogout, IconNotifier } from "../icons/icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function NavBar() {
    const {logout} = useAuth();
    return (
        <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-200">
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem icon={IconHome} url="/" text="Início" />
                <MenuItem icon={IconNotifier} url="/notifications" text="Notificações" />
                <MenuItem icon={IconConfig} url="/config" text="Ajustes" />
            </ul>
            <ul>
                <MenuItem 
                    className="text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white" 
                    onClick={logout} 
                    icon={IconLogout} 
                    text="Sair" 
                />
            </ul>
        </aside>
    )
}
