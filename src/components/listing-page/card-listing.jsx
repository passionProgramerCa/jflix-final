import React from "react";
import {Card} from "./card";


// remember to use two ... in the front
import 'bootstrap/dist/css/bootstrap.min.css';
import './card-listing.css'


class CardListing extends React.Component {
    
    
    render() {
        return (
            <div className='card-list '>
                {(this.props.movies.map((movie, index) => {
                        return (
                            < Card key={index} movie={movie}/>
                        )
                    }
                ))}
            </div>
        );
    }
}

export default CardListing;