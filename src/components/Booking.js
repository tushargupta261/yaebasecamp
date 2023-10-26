import React from 'react'
import './Booking.css';

function Booking() {
    return (
        <div>
            <form className='booking'>
                <label className='bookingText' for="name">Name:</label>
                <input type="text" id="fname" name="fname"></input>

                <label className='bookingText'for="age">Age:</label>
                <input type="text" id="age" name="age"></input>

                <label className='bookingText' for="email">Email:</label>
                <input type="text" id="email" name="email"></input>

                <label className='bookingText' for="mobileNumber">Mobile Number:</label>
                <input type="text" id="mobileNumber" name="mobileNumber"></input>

                <label className='bookingText' for="guest">Guest:</label>
                <input type="text" id="guest" name="guest"></input>

                <label className='bookingText' for="tentType">TentType:</label>
                <input type="text" id="tentType" name="tentType"></input>

                <label className='bookingText' for="tentType">Choose Tent Type:</label>
                <select name="tentType" id="tentType">
                    <option value="Tent1">Army Room Tent with Outside Washroom. Starting @ ₹3802</option>
                    <option value="Tent2">Swiss tent room. Starting @ ₹3802</option>
                    <option value="Tent3">Cottage C - One Bedroom cottage with Outside Washroom. Starting @ ₹3802</option>
                    <option value="Tent4">Cottage G ( Triple Sharing Bed ). Starting @ ₹3802</option>
                    <option value="Tent5">L Cottage - Two Double bed and One Single Bed. Starting @ ₹4183</option>
                    <option value="Tent6">S Cottage - Two Bedroom Cottage. Starting @ ₹6084</option>
                </select>

                <input  type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Booking
