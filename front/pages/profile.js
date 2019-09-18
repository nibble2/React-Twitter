import React from 'react' ;
import AppLayout from '../components/AppLayout' ;
import Head from 'next/head' ;

const Profile = () => {
    return (
    <>
        <Head>
            <title>React-Twitter</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.css" />
        </Head>
        <AppLayout>
            <div>
                프로필 입니다.
            </div>
        </AppLayout>
    </>
    );
} ;

export default Profile ;