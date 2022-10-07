/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './About.css';
import AboutImg from "./about.png" 

const About = () => {
  return (
    <>
      <section>
            <div class = "image">
               <img src={AboutImg} />
            </div>

            <div class = "content">
                <h2>About Us</h2>
                <span></span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>
                <ul class = "links">
                    <li><a href = "#">work</a></li>
                    <div class = "vertical-line"></div>
                    <li><a href = "#">service</a></li>
                    <div class = "vertical-line"></div>
                    <li><a href = "#">contact</a></li>
                </ul>
                <ul class = "icons">
                    <li>
                        <i class = "fa fa-twitter"></i>
                    </li>
                    <li>
                        <i class = "fa fa-facebook"></i>
                    </li>
                    <li>
                        <i class = "fa fa-github"></i>
                    </li>
                    <li>
                        <i class = "fa fa-pinterest"></i>
                    </li>
                </ul>
            </div>
        </section><br /><br />
        <div class="credit">Made with <span style={{color : "black"}}>❤</span> by <a href="">Your Name goes here</a></div>
    </>
  )
}

export default About;