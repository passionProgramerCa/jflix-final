import CardListing from "../components/listing-page/card-listing";
import Header from "../components/header";
import FooterPage from "../components/FooterPage";
import Miniheader from "../components/listing-page/miniheader";
import moviesData from '../data/db.json' ;
import './listing-pages.css'

import React, {Component} from 'react';


// create react class by using rcc
class ListingPages extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            movies: [...moviesData]
            
            
        }
        
    }
  
    
    render() {
    
    
        return (
            <>
                <Header/>
                <Miniheader/>
                <div className='listing-pages'>
                    <h1> Movie & TV Shows </h1>
                    <br/>
                    <CardListing movies={this.state.movies}/>
                </div>
                < FooterPage/>
            
            </>
        );
    }
}

export default ListingPages;