import { IconConfig, IconHome, IconNotifier } from "../icons/icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function NavBar() {
    return (
        <aside>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul>
                <MenuItem icon={IconHome} url="/" text="Início" />
                <MenuItem icon={IconConfig} url="/config" text="Ajustes" />
                <MenuItem icon={IconNotifier} url="/notifications" text="Notificações" />
            </ul>
        </aside>
    )
}
