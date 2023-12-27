import React, { useState } from 'react'
import './Booking.css';

function Booking() {
    const [ReviewRating, setReviewRating] = useState([])

    return (
        <div className='bookBackground'>
            <form className='booking'>
                <div className='bookingRow'>
                    <label className='bookingText' for="name">Name:</label>
                    <input type="text" id="fname" name="fname"></input>
                </div>

                <div className='bookingRow'>
                    <label className='bookingText' for="email">Email:</label>
                    <input type="text" id="email" name="email"></input>
                </div>

                <div className='bookingRow'>
                    <label className='bookingText' for="mobileNumber">Mobile Number:</label>
                    <input type="text" id="mobileNumber" name="mobileNumber"></input>
                </div>

                <div className='bookingRow'>
                    <label className='bookingText' for="guest" >Number of Guest:</label>
                    <input type="text" id="guest" name="guest" onChange={(e) => {
                        if (e.target.value <= 6) {
                            const emptyArray = Array.from({ length: e.target.value });
                            setReviewRating(emptyArray)
                        }
                        if (e.target.value > 6) {
                            alert("Number of guest should not be greater than 6.")
                        }

                    }}></input>
                </div>

                <div >
                    <div >

                        <label className='bookingText' for="guest">Guest Name:</label>
                        <label className='bookingText' for="guest">Guest Age:</label>
                        <label className='bookingText' for="guest">Guest Gender:</label>

                        {ReviewRating.map((data, index) => {
                            return <div className='review'>

                                <input className='guestName' type="text" id="guestName" name="guestName"></input>
                                <input className='guestAge' type="text" id="guestAge" name="guest"></input>
                                <input className='guestGender' type="text" id="guestGender" name="guest"></input>
                            </div>
                        })}
                    </div>
                </div>

                <div className='bookingRow'>
                    <label className='bookingText' for="tentType">TentType:</label>
                    <input type="text" id="tentType" name="tentType"></input>
                </div>

                <div className='bookingRow'>
                    <label className='bookingText' for="tentType">Choose Tent Type:</label>
                    <select name="tentType" id="tentType">
                        <option value="Tent1">Army Room Tent with Outside Washroom. Starting @ ₹3802</option>
                        <option value="Tent2">Swiss tent room. Starting @ ₹3802</option>
                        <option value="Tent3">Cottage C - One Bedroom cottage with Outside Washroom. Starting @ ₹3802</option>
                        <option value="Tent4">Cottage G ( Triple Sharing Bed ). Starting @ ₹3802</option>
                        <option value="Tent5">L Cottage - Two Double bed and One Single Bed. Starting @ ₹4183</option>
                        <option value="Tent6">S Cottage - Two Bedroom Cottage. Starting @ ₹6084</option>
                    </select>
                </div>
                <input type="submit" value="Submit"></input>
            </form>

            <div className='tentTypeDiv'>
                <div className='tenttype'>
                    <h5>
                        Army Room Tent.
                    </h5>
                    <h5>
                        Cost 3800
                    </h5>
                    <h5>
                        with Washroom
                    </h5>
                    <h5>
                        breakfast , lunch , dinner
                    </h5>
                </div>

                <div className='tenttype'>
                    <h5>
                        Swiss tent room.
                    </h5>
                    <h5>
                        Cost 3800
                    </h5>
                    <h5>
                        with Washroom
                    </h5>
                    <h5>
                        breakfast , lunch , dinner
                    </h5>
                </div>

                <div className='tenttype'>
                    <h5>
                        Cottage C - One Bedroom cottage.
                    </h5>
                    <h5>
                        Cost 3800
                    </h5>
                    <h5>
                        with Washroom
                    </h5>
                    <h5>
                        breakfast , lunch , dinner
                    </h5>
                </div>

                <div className='tenttype'>
                    <h5>
                        Cottage G ( Triple Sharing Bed ).
                    </h5>
                    <h5>
                        Cost 3800
                    </h5>
                    <h5>
                        with Washroom
                    </h5>
                    <h5>
                        breakfast , lunch , dinner
                    </h5>
                </div>

                <div className='tenttype'>
                    <h5>
                        L Cottage
                    </h5>
                    <h5>
                        Two Double and One Single Bed.
                    </h5>
                    <h5>
                        Cost 3800
                    </h5>
                    <h5>
                        with Washroom
                    </h5>
                    <h5>
                        breakfast , lunch , dinner
                    </h5>
                </div>

                <div className='tenttype'>
                    <h5>
                        S Cottage - Two Bedroom Cottage.
                    </h5>
                    <h5>
                        Cost 3800
                    </h5>
                    <h5>
                        with Washroom
                    </h5>
                    <h5>
                        breakfast , lunch , dinner
                    </h5>
                </div>

            </div>
        </div>
    )
}

export default Booking
