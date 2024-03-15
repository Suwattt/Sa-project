import React from 'react'
import "./Content.css"

function Content() {
  return (
    <div className='container'>
        <section className='content-con'>
            <div className='content-l'>
                <img src='https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2023/03/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv.jpg' alt=""/>
            </div>
            <div className='content-r'>
                <h2>Bedrooom</h2>
                <p>
                "Your bedroom is like a cozy kingdom, surrounded by elegant curtains draped around your bed, adding 
                a touch of luxury and beauty to the room. 
                It provides both elegance and comfort."
                </p>
            </div>
        </section>
        <section className='content-con'>
            <div className='content-r'>
                <h2>Bathrooms</h2>
                <p>
                "Elevate Your Everyday: Transforming Bathrooms into Sanctuaries of Serenity and Comfort."
                </p>
            </div>
            <div className='content-l'>
                <img src='https://mogenmore.com/wp-content/uploads/2022/06/blog_11-1024x576.jpeg' alt=""/>
            </div>
        </section>
        <section className='content-con'>
            <div className='content-l'>
                <img src='https://www.apthai.com/images/production/qwlxza47DvHnMkD0XRyO7LhiKkXPqyLe4LdITq5c.jpg' alt=""/>
            </div>
            <div className='content-r'>
                <h2>Living room</h2>
                <p>
                Transform Your Space: Elevate Your Experience in the Ultimate Lounge Retreat"
                </p>
            </div>
        </section>
    </div>
  )
}

export default Content