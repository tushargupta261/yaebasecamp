import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()
  const [editTextCheck, setEdiTextCheck] = useState("")

  function galleryFunction() {
    navigate("/Gallery");

  }
  function loginFunction() {
    navigate("/login");

  }

  function bookFunction() {
    navigate("/Booking");
  }

  return (

    <div class="header">
      <a class="logo">YaoBaseCamp</a>
      <div class="header-right">

        <button onClick={() => {
          navigate("/");
        }}> <a class="active" >Home</a> </button>

        <button onClick={galleryFunction}> <a class="active" >Gallery</a> </button>

        <button onClick> <a class="active" >Contact US</a> </button>
        {/* <button onClick={bookFunction} className="button button1"> <a  >Book Now</a></button> */}

        <button onClick={bookFunction}> <a class="active" >Book Now</a> </button>

        <button onClick={loginFunction}> <a class="active" >Login</a> </button>

      </div>
    </div>

  )
}

export default Header
