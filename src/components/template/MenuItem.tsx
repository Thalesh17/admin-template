import Link from 'next/link'

interface MenuItemProps {
    url?: string
    text: string
    icon: any
    className?: string
    onClick?: () => void
}

export default function MenuItem(props: MenuItemProps) {

    const renderContent = () => {
        return <a className={`
                flex flex-col justify-center items-center
                h-20 w-20 dark:text-gray-200
                text-gray-600 ${props.className}
            `}>
                {props.icon}
                <span className={`
                    text-xs font-light 
                `}>{props.text}</span>
            </a>
    }

    return (
        <li onClick={props.onClick} className={`
            dark:hover:bg-gray-800
            hover:bg-gray-100 cursor-pointer
        `}>
            {props.url ? (
                <Link href={props.url}>
                    {renderContent()}
                </Link>
            ) :
            renderContent()
        }
        </li>
    )
}
