import { IconMoon, IconSun } from "../icons/icons";

interface ButtonThemeProps {
    theme: string;
    changeTheme: () => void;
}

export default function ButtonTheme(props: ButtonThemeProps) {
    return props.theme === 'dark' ? (
        <div onClick={props.changeTheme} className={``}>
            <div className={``}>
                {IconSun}
            </div>
            <div className={``}>
                <span>Claro</span>
            </div>
        </div>
    ) :
    (
        <div>
           
        </div>
    )
}
