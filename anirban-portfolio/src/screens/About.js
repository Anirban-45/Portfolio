import React from 'react';
import '../styles/About.css'
import face from '../assets/about-image.jpg'


function About() {
    return(
        <div className="about-body">
            <div className="about-top">
                <div className="top-text">
                    <div style={{fontSize: "22px", fontWeight: "500"}}>Hi there!</div>
                    <div style={{fontSize: "25px", fontWeight: "650", color: "#B83F3F"}}>My name is Anirban Tasfin Azad.</div>
                    <div>Prior to my UX journey, I was adorned into front end Development. And working along there I found out, how important it is for contents to point and dirent towards eachother. <span style={{fontWeight: "700", color: "#2C8DD3"}}>It is the breath of the users journey</span> and makes the whole experience that much enjoyable.</div>
                    <div>Scowering through multiple medias I came close to designing. Modeling my very own personalized products, the ability to create, fascinates me.</div>
                    <div style={{fontWeight: "700", color: "#2C8DD3"}}>The things I've done so far are a pursuit to relate to people and their ease and accessibiliy.</div>
                    <div>And as a designer I'm looking for just a group of people whom I can explore these Ideas.</div>
                </div>
                <img src={face} className="face" alt=""/>
            </div>
            <div className="mid-text">
                <div style={{fontSize: "28px", fontWeight: "600", color: "#B83F3F"}}>What lead me here</div>
            </div>
            <div className="bottom-text">
                <div className="bottom-left">
                    <div style={{fontSize: "28px", fontWeight: "600", color: "#B83F3F"}}>Education</div>
                    <div style={{fontSize: "28px", fontWeight: "600", color: "#B83F3F"}}>Skills</div>
                </div>
                <div className="bottom-right">
                    <div style={{fontSize: "28px", fontWeight: "600", color: "#B83F3F"}}>Experience</div>
                </div>
            </div>
        </div>
    )
}

export default About;
