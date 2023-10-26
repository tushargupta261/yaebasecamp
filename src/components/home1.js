import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './home1.css';
import Logo from '../images/header2.jpg'
import Logo1 from '../images/header3.jpg'
import Logo3 from '../images/homeImage.jpg'
import campType1 from '../images/campType1.jpg'
import campType2 from '../images/campType2.jpg'
import campType3 from '../images/campType3.jpg'
import directionBackground from '../images/directionBackground.jpg'
import RatingComponent from './rating';
import Haridwar from '../images/hariduar.jpg';
import Rshikesh from '../images/rshikesh.jpg';
import Dehradun from '../images/dehradun.jpg';

const ReviewRating = [{
  title: "ranjit",
  description: "Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.",
  raitng: 3
}, {
  title: "ranjit",
  description: "i am ranjit",
  raitng: 3
}, {
  title: "ranjit",
  description: "i am ranjit",
  raitng: 3
}, {
  title: "ranjit",
  description: "i am ranjit",
  raitng: 3
}]

function Home() {

  const navigate = useNavigate()
  const [editTextCheck, setEdiTextCheck] = useState("")
  function bookFunction() {
    navigate("/Booking");
  }

  return (

    <div className='homeMainContent'>
      <div>
        <img className='camptent' src={Logo} alt="React Logo" />
        <img className='camptent1' src={Logo1} alt="React Logo" />
      </div>

      <div className='homeText'>

        <img className='homeImage' src={Logo3} alt="React Logo" />

        <div className='text'>
          <h2> Camping in Mussoorie at Yao BaseCamps </h2>
          <h3>  Location : Bhatta Gaon, Kyar Kuli Bhatta, Mussoorie Uttarakhand </h3>
          Yao base camp is one of the leading camping companies based in Bhatta fall in Mussoorie. It is an official government-registered local travel agency and provides you with trustable service. We offer camping, bonfire, flooding near the fall in between nature and more other adventures activities in Mussoorie like paragliding, zipline, etc. It is easily accessible by car and bus from Dehradun."

          <h3>Meals </h3>
          <h3>| Lunch | Breakfast | Dinner |</h3>
          The Camp kitchen offers you to taste delicious food made with local spices and veggies and also makes Chinese food on your demand.
          Garhwali cuisine is a regional cuisine from the state of Uttarakhand. Characteristically grain and cereal-based, made up of simple ingredients, cooked with minimal spicing, simple temperings, and optimal cooking methods into flavourful, filling, and nutritious meals.
        </div>
      </div>

      <div className='thirdPart'>

        <div >
          <h2 className='tentName'> Camps-Type Tent1 Tent2 Tent3</h2>
        </div>
        <img className='campTentType1' src={campType1} alt="React Logo" />
        <img className='campTentType2' src={campType2} alt="React Logo" />
        <img className='campTentType3' src={campType3} alt="React Logo" />

        <div className='bookNow'>
          {/* <button className="button button1"> <a  >Book Now</a></button> */}
          <button onClick={bookFunction} className="button button1"> <a  >Book Now</a></button>

        </div>
      </div >

      <div style={{ backgroundImage: `url(${directionBackground})` }} className='direction' >

        <h1>How to Reach from Haridwar</h1>
        <img className='HaridwarDirection' src={Haridwar} alt="React Logo" />
        <h1> To Rishikesh</h1>
        <img className='RshikeshDirection' src={Rshikesh} alt="React Logo" />
        <h1>To Dehradun</h1>
        <img className='DehradunDirection' src={Dehradun} alt="React Logo" />
        <h1>Welcome to Yao BaseCamp</h1>
        <img className='DehradunDirection' src={Dehradun} alt="React Logo" />

      </div>

      <div>
        <div className='customerReview'>
          <h2>YAO Beloved Customers</h2>
        </div>

        <div className='row' >
          {ReviewRating.map((data, index) => {
            return <div className='review'>
              <p>{data.title}</p>
              <p>{data.description}</p>
              <RatingComponent rating={data.raitng} />

            </div>
          })}

        </div>
      </div>
    </div>
  );
}

export default Home;
