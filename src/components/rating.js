
import React, { useState } from 'react'
import StarRatings from 'react-star-ratings'

function RatingComponent(props) {
    const [rating, setRating] = useState(props.rating)
    const changeRating = (params) => {
        setRating(params);

    }
    return (
        <div className=' '>
            <StarRatings
                rating={rating}
                starRatedColor="blue"
                changeRating={changeRating}
                numberOfStars={6}
                name='rating'
            />
        </div>
    )
}

export default RatingComponent
