import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Client from '../../Components/Client/Client';
import Service from '../../Components/Service/Service';

const Home = () => {
    return (
        <>
            <Banner />
            <Service />
            <Client />
        </>
    );
};

export default Home;