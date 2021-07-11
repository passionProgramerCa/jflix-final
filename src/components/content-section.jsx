import React from 'react';
import './content-section.css'

const ContentSection = () => {
    
    
    return (
        
        <div>
            
            <br/><br/>
            <div className="card mb-3 sub-background" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="1.png" className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">About Jflix</h5>
                            <p className="card-text">At Jflix, we want to entertain the world. Whatever your taste,
                                and no matter where you live, we give you access to best-in-class TV shows, movies and
                                documentaries. Our members control what they want to watch, when they want it, with no
                                ads, in one simple subscription. We’re streaming in more than 30 languages and 190
                                countries, because great stories can come from anywhere and be loved everywhere. We are
                                the world’s biggest fans of entertainment, and we’re always looking to help you find
                                your next favorite story.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <br/>
            <div className="card mb-3 sub-background" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="2.jpg"
                            className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">About Hollywood</h5>
                            <p className="card-text">Hollywood is a neighborhood in the central region of Los Angeles,
                                California. Its name has come to be a shorthand reference for the U.S. film industry, and
                                the people associated with it. Many of its studios such as Disney, Paramount Pictures,
                                Warner Bros., and Universal Pictures were founded there; Paramount still has its studios
                                there.
                                
                                Hollywood was incorporated as a municipality in 1903. It was consolidated with the
                                city of Los Angeles in 1910, and soon thereafter a prominent film industry emerged,
                                eventually becoming the most recognizable in the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    )
    
};

export default ContentSection;