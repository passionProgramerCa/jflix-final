import React from 'react';
import {Carousel} from "react-bootstrap";
import './hero-section.css'

const Slides = () => {
    
    return (
        <Carousel>
            
            <Carousel.Item>
                <img
                    className="d-block w-28 wrap    "
                    src="https://www.filmykeeday.com/wp-content/uploads/2017/03/american-tv-series-list-e1489131927110.jpg"
                
                />
                <Carousel.Caption>
                    <h3>First one</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-28  wrap "
                    src="https://pbs.twimg.com/media/EOqKcoBXUAISr4k.png"
                />
                
                <Carousel.Caption>
                    <h3>Second one</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-28  wrap "
                    src="https://www.reviews.org/app/uploads/2020/09/Netflix-TV-Shows-1024x335.png"
                />
                
                <Carousel.Caption>
                    <h3>Third one</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-28 wrap "
                    src="https://d2fy2et424xkoh.cloudfront.net/blog/wp-content/uploads/2019/03/list-of-best-netflix-tv-shows.jpg"
                />
                
                <Carousel.Caption>
                    <h3>Fourth one</h3>
                
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
    
};

export default Slides;