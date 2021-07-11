import React from 'react';
import {Link} from "react-router-dom";

export let movieTitle;


export class Card extends React.Component {
    
    
    constructor() {
        super();
        
    }
    
    render() {
        const VideoDetail = this.props.videoDetail;
        
        return (
            
            <div className="card" style={{width: '18rem'}}>
                
                <Link to={`/VideoDetail/${this.props.movie.title}`}>
                    <img src={this.props.movie.posterurl} id={this.props.movie.title}
                         className="card-img-top"
                         alt="no image"/>
                </Link>
                
               <b> <Link to={`/VideoDetail/${this.props.movie.title}`}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.movie.title}</h5>
                    </div>
                </Link>
               </b>
            </div>
        );
        
    }
    
    
}
    
    


