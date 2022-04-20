import React from 'react';
import ProtoTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';

// eslint-disable-next-line react/prop-types
const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    )
}

NodeBird.protoTypes = {
    Component : ProtoTypes.node.isRequired
}

export default wrapper.withRedux(NodeBird);