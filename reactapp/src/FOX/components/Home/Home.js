import React from 'react';
import Header from '../Header/Header';
import DanDatum from '../DanDatum/DanDatum';
import Predmet from '../Predmet/Predmet';
import Footer from '../Footer/Footer';
import PozdravnaPoruka from '../PocetnaStranica/PozdravnaPoruka';

const Home = () => {
    return (
        <div className="Home">
            <Header isPocetna={true}/>
            <div style={{padding: "25px", textAlign: "center"}}>
                <PozdravnaPoruka/>
                <DanDatum/>
                <Predmet/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
