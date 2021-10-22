import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'
interface AvatarUserProps {
    className?: string;
}
export default function AvatarUser(props: AvatarUserProps) {
    const {user} = useAuth();
    return (
        <Link href='/perfil'>
            <img 
                src={user?.imageURL ?? '/images/avatar.svg'} 
                alt={user?.name} 
                className={
                    `${props.className} 
                    h-9 w-9 rounded-full cursor-pointer`
                }
            />
        </Link>
    )
}
