import { IconConfig, IconHome, IconNotifier } from "../icons/icons";
import MenuItem from "./MenuItem";

export default function NavBar() {
    return (
        <aside>
            <ul>
                <MenuItem icon={IconHome} url="/" text="Início" />
                <MenuItem icon={IconConfig} url="/config" text="Ajustes" />
                <MenuItem icon={IconNotifier} url="/notifications" text="Notificações" />
            </ul>
        </aside>
    )
}
