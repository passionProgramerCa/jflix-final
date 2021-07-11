import React from 'react';
import Header from "../header";
import FooterPage from "../FooterPage";
import "./video-detail.css"

const VideoDetail = ({video}) => {
    
    
    return (
        <>
        <Header/>
        <div className="video-details">
           <b><h1>{video.title}</h1></b>
            
            <div className="card mb-3 card-Components" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={video.posterurl} className="img-fluid rounded-start" alt="no image"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{video.title}</h5>
                            <p className="card-text">
                                <b><h6>Story line:</h6></b>
                                {video.storyline}</p>
                            <p className="card-text"><small className="text-muted">Actors: {video.actors}</small></p>
                            
                            <h5>IMBD Rating: {video.imdbRating}</h5>
                            <h5>Release date: {video.releaseDate}</h5>
                            <h5>Genres: {video.genres}</h5>
                            <br/><br/>
                            <div>
                                <button type="button" className="btn btn-primary btn-lg">Rent $3.99</button>
                                <button type="button" className="btn btn-primary btn-lg">Buy $14.99</button>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <img className="image" src={video.posterurl} alt="no image"/>
            <FooterPage/>
        </>
    
    )
    
};

export default VideoDetail;