import React from 'react';
import HeroSection from "../components/Home/hero-section";
import {div} from "mdb-ui-kit/src/js/mdb/perfect-scrollbar/lib/dom";
import Header from "../components/header";
import FooterPage from "../components/FooterPage";
import FeaturedMV from "../components/Home/featured-movie";
import FeaturedTV from "../components/Home/featured-tv";
import ContentSection from "../components/content-section";

import './home.css'


const Home = () => {
    return (
       
        
        
        <>
            <main className='homecolor'>
                
                <Header/>
                {/*//?*/}
                
                
                
                <div style={{border: '2px solid powderblue', padding: '100px'}}>
                    <h1><b> Most demanded movies and tv shows of 2021 </b></h1>
                    <br/>
                    <HeroSection/>
                    <br/>
                    <FeaturedMV/>
                    <br/>
                    <FeaturedTV/>
                    <ContentSection/>
                    {/* *?* */}
                
                </div>
                
                <FooterPage/>
            </main>
        
        </>
    
    )
    
    
};

export default Home;