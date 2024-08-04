import React from 'react'
import fooddonation from '../../assets/fooddonation.jpg'
import './about.css'

const about = () => {
  return (
    <div className='about'>
    <div className="about-left">
    <img src={fooddonation} alt='' className='about-img' />
    </div>
    <div className='about-right'>
        <h3>Learn About Us</h3>
        <h2>HELPER (FOOD MANAGEMENT AND DONATION)</h2>
        <p>HELPER is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.</p>
        <p>
        To Inspire Students, help them Innovate and let them Integrate to build the next generation humankind.

        To Run Food Donation And Awareness Campaign In Rural Region.
        </p>
        <p>
        To build Next Generation Entrepreneur, by providing them a Skill-Based Education.
        </p>
    </div>
    </div>
    
  )
}

export default about;