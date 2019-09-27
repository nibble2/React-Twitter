import React from 'react' ;
import Head from 'next/head' ;
import PropTypes from 'prop-types' ;
import AppLayout from '../components/AppLayout' ;

const NodeBird = ({ Component }) => { //app.js는 Component로 props를 받는다(next에서 받음)
    return (
        <>
            <Head>
                <title>React-Twitter</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    ) ;
} ;

NodeBird.propTypes = {
    Component: PropTypes.elementType,
} ;

export default NodeBird ;