import CardListing from "../components/listing-page/card-listing";
import Header from "../components/header";
import FooterPage from "../components/FooterPage";
import Miniheader from "../components/listing-page/miniheader";
import './listing-pages.css'

import React, {Component} from 'react';


// create react class by using rcc
class ListingPages extends Component {
    state = {
        movies: []
    }
    
    componentDidMount() {
        fetch('https://jasonserverjflix-app.herokuapp.com/videos')
            .then(res => res.json())
            .then((data) => {
                this.setState({movies: data})
            })
            .catch(console.log)
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