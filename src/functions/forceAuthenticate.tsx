import Head from 'next/head';
import Image from 'next/image';
import router from 'next/router';
import loadingImage from '../../public/images/loading.gif';
import useAuth from '../data/hook/useAuth';

export default function forceAuthenticate(jsx) {

    const { user, loading } = useAuth();

    const renderContent = () => {
        return (
            <>
                <Head>
                    <script dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template")) {
                                    window.location.href = "/authenticate"
                                }
                            `
                        }}/>
                </Head>
                {jsx}
            </>
        )
    }

    const renderLoading = () => {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loadingImage} /> 
            </div>
        )
    }

    if(!loading && user?.email) {
        return renderContent();
    }else if(loading) {
        return renderLoading();
    }else {
        router.push('/authenticate')
        return null;
    }
}
                 