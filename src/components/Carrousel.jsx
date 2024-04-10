import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
    return (
        <div  style={{ Width: '500px', margin: 'auto'}}>
        <Carousel>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '300px'}}>
                    <img src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol-500x281.png" alt="React Logo" style={{ width: 'auto', maxHeight: '300px' }} />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '300px'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/300px-Node.js_logo.svg.png" alt="Node.js Logo" style={{ width: 'auto', maxHeight: '300px' }} />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '300px'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" style={{ width: 'auto', maxHeight: '300px' }} />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '300px'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="CSS3 Logo" style={{ width: 'auto', maxHeight: '300px' }} />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '300px'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL Logo" style={{ width: 'auto', maxHeight: '300px' }} />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '300px'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" style={{ width: 'auto', maxHeight: '300px' }} />
                </div>
            </Carousel.Item>
        
        </Carousel>
        </div>
    );
}

export default MyCarousel;
