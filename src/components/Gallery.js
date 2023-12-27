import React, { useEffect } from 'react'
import './gallery.css';
import gallery1 from '../images/gallery2.jpeg'
import gallery2 from '../images/gallery2.jpeg'
import gallery3 from '../images/gallery3.jpeg'
import gallery4 from '../images/gallery4.jpeg'
import gallery5 from '../images/gallery5.jpeg'
import gallery6 from '../images/gallery6.jpeg'

function Gallery() {

    return (
        <div >
            

            <div>
                <img className='gallery' src={gallery1} alt="React Logo" />

                <img className='gallery' src={gallery2} alt="React Logo" />

                <img className='gallery' src={gallery3} alt="React Logo" />

                <img className='gallery' src={gallery4} alt="React Logo" />

                <img className='gallery' src={gallery5} alt="React Logo" />\

                <img className='gallery' src={gallery5} alt="React Logo" />
                
            </div>
        </div>
    )
}

export default Gallery