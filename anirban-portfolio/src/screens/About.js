import React from 'react';
import '../styles/About.css'
import face from '../assets/about-image.jpg'
import goal from '../assets/start-up.png'
import eyes from '../assets/b2.jpeg'


function About() {
    window.scrollTo(0,0);
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
                <div className="mid-par">
                    <div className="mid-title">
                        <img src={goal} alt=""/>
                        <span style={{fontSize: "28px", fontWeight: "600", color: "#fff"}}>What lead me here</span>
                    </div>
                    <div>
                        Aut fugiat inventore quia quisquam iure aut perspiciatis iste. Id amet sed hic tenetur et rem. Blanditiis eum architecto in autem repellat est. Qui vitae officia occaecati distinctio nam quis tempora. Cumque et est alias quas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div>A quo eos quia. Placeat quas recusandae unde voluptatem. Ex nostrum omnis adipisci. Pariatur in minima similique iusto distinctio. Odit quia non est earum pariatur commodi sunt sed. Nam explicabo saepe fugiat. Officiis qui velit possimus soluta. Reprehenderit consequuntur quod voluptates. Ad magni sunt ut adipisci officiis repellendus. A veniam non dolores.</div>
                    <div>Enim et nihil omnis. Accusamus placeat laboriosam est. Sit occaecati iure perspiciatis quia. Illo perferendis minus consectetur consectetur nisi praesentium.</div>
                    <div>Sit amet venenatis urna cursus eget nunc scelerisque. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Arcu felis bibendum ut tristique et egestas quis. At risus viverra adipiscing at in tellus. Eget est lorem ipsum dolor sit amet. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Augue eget arcu dictum varius duis at consectetur lorem. Elementum curabitur vitae nunc sed velit. Donec ultrices tincidunt arcu non sodales neque sodales ut. Auctor eu augue ut lectus arcu bibendum. Fringilla ut morbi tincidunt augue interdum velit euismod. Convallis posuere morbi leo urna molestie at elementum.</div>
                    <div>Odit quia non est earum pariatur commodi sunt sed. Nam explicabo saepe fugiat. Officiis qui velit possimus soluta. Reprehenderit consequuntur quod voluptates. Ad magni sunt ut adipisci officiis repellendus. A veniam non dolores.</div>
                </div>
            </div>
            <div className="bottom-text">
                <div className="bottom-left">
                    <div style={{fontSize: "28px", fontWeight: "600", color: "#B83F3F"}}>Experience</div>
                    <div className="e-title">Kernel Technologies</div>
                    <div className="ocu">FrontEnd Developer Intern</div>
                    <div>Feb 2021 - Jul 2021</div>
                    <div className="e-title-sp">Kernel Technologies (Freelance)</div>
                    <div className="ocu">Mobile UX design</div>
                    <div>Nov 2021</div>
                    <div className="e-title-sp">Innova Solutions</div>
                    <div className="ocu">UX/UI Designer</div>
                    <div>Jan 2022 - May 2022</div>
                    <img src={eyes} className="eyes" alt=""/>
                </div>
                <div className="bottom-right">
                    <div className="edu" style={{fontSize: "28px", fontWeight: "600", color: "#B83F3F"}}>Education</div>
                    <div className="uni">Islamic university of Technology- <span>2018-2022</span></div>
                    <div style={{color: "#2C8DD3"}}>BSC. in Software Engineering</div>
                    <div className="college">Notre Dame College, Dhaka- <span>2015-2017</span></div>
                    <div style={{color: "#2C8DD3"}}>HSC, science</div>
                    <div className="school">Ideal School and College, Dhaka- <span>upto 2015</span></div>
                    <div style={{color: "#2C8DD3"}}>SSC, science</div>
                    <div style={{fontSize: "28px", fontWeight: "600", color: "#B83F3F", marginTop:"50px"}}>Skills</div>
                    <div className="design">Design</div>
                    <div><span style={{fontWeight: "600", color: "#2C8DD3"}}>Tools</span>- Figma, Whimsical, Lucid Chart, Aseprite</div>
                    <div><span style={{fontWeight: "600", color: "#2C8DD3"}}>Techniques</span>- User flows, Wireframing, Prototyping, Journey maps, Design sytems, Gamification</div>
                    <div className="design" style={{marginTop:"20px"}}>Tech</div>
                    <div><span style={{fontWeight: "600", color: "#2C8DD3"}}>Languages</span>- C, C#, Python, JavaScript</div>
                    <div><span style={{fontWeight: "600", color: "#2C8DD3"}}>Frameworks & Services</span>- React, Firebase, MySQL, Mongo, AWS</div>

                </div>
            </div>
        </div>
    )
}

export default About;
