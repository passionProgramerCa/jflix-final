import CardListing from "../../components/listing-page/card-listing";
import './featured-movie.css'

import React, {Component} from 'react';


// create react class by using rcc
class fMovies extends Component {
    state = {
           movies: []
       }
       componentDidMount() {
           fetch('https://jasonserverjflix-app.herokuapp.com/videos')
               .then(res => res.json())
               .then((data) => {
                   this.setState({ movies: data })
               })
               .catch(console.log)
       }

    render() {


        return (
            <>
                <div className='featureMb'>
                    <h1>	Featured TV shows </h1>
                    <br/>
                    <CardListing movies={(this.state.movies).filter(movies=>((movies.type)==="TV"))}/>

                </div>

            </>
        );
    }
}

export default fMovies;