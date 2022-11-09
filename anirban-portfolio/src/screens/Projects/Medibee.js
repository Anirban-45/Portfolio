import React from 'react';
import '../../styles/Medibee.css';
import Template from './Template.js';
import uj from '../../assets/uj.jpg';
import cpt from '../../assets/cpt.jpg';
import Mhome from '../../assets/Mhome.jpg';
import Mcourse from '../../assets/Mcourse.jpg';
import Mlibrary from '../../assets/mlibrary.jpg';
import Mprofile from '../../assets/Mprofile.jpg';

function Medibee() {
    window.scrollTo(0,0);
    return(
        <>
            <div className="mhero">
                <Template
                    Title= "Medibee"
                    Subtitle= "A course managing platform for medical students."
                    Overview= {<>Medibee.com has already been a very successful website for the upcoming generations of doctors. They provide MBBS students with courses and exams to sharpen their skills. This project was handed to a few developers to make a mobile app for it. I was working there as a freelancer and was given the whole designing process of the first version of the app. As per the first version a few things were thought to be offered less in the app.</>}
                    Details=
                    {
                        <>
                            <span style={{fontWeight: "500"}}>Role:</span> Freelance UI/UX designer<br/>
                            <span style={{fontWeight: "500"}}>Duration:</span> 3 months <br/>
                            <span style={{fontWeight: "500"}}>Client:</span> Kernel Technologies <br/>
                        </>
                    }
                    Objective={
                        <>
                            <p>The objective was this project was pretty straightforward. To turn the Web application into an mobile app. Putting it in a compact form for easy to access use.</p>
                            <span style={{fontWeight: "500",  fontSize: "20px"}}>Problem</span>
                            <p>The problem peeps out just when thinking about the project. In a website the course showcase is much easier. The advantage of browsing through courses reaching out the creators and mentors is far to easy. But for a mobile app achieving this is far to difficult. The problem of live and recorded courses, seperating them & upholding them to the usersjust as easily as the online web app would definitely be a tough job. Not to mention there was a support feature that would help the user texts one of his issues with the apps multitude of courses and exams. And one of the officials would handle it checking their databases. As a solo designer I had very few resources to work through. The assets were hard to find and several designs had to be re-imagined in order to achieve a better performance. So in theory achieving all of this was quite a daunting task.</p>
                        </>
                    }
                    Goals=
                    {
                        <>
                            <span style={{fontWeight: "500"}}>- Translate the website into fragments.</span><br/>
                            <span style={{fontWeight: "500"}}>- find a solution to fit the courses in a mobile app</span> <br/>
                        </>
                    }
                />
            </div>
            <div className="proc">
                <div className="research">
                    <div className="research-title heding">Research</div>
                    <p style={{lineHeight: "25px"}}>In case of research this project was a bit hazy. As i was the only one working on it with access to very less resources, and my only client was the CEO of Kernel technologies himself. Therefore I neede to reach out to him everytime I needed a proper understanding of the architecture. Aside from the high expectations there where just something that would have been better to exclude from the mobile app. Like the creators should only use the Website for uploading, creating courses and article. Thus we have one less module to focus onto. There were several small detail imbued in this. I.e.</p>
                    <p style={{lineHeight: "25px"}}>- Consulting with the CEO I have had figured out that seperating the tests into three partitions would make the selecting process easier for the user <br/>
                    - The Events should be put in a separate page hwere all the events a re listed and can be accessed by hyperlinks<br/>
                    - The profile pages should also include a statistics. Because this helps keeping track of the progressed and finished courses <br/>
                    - The outline of the courses should be week basised for a sense of continuity. <br/>
                    - The support page(Texts) should be only accessible after entering a valid course or test code. <br/>
                    <br/>
                    Now these findings were gathered by following a few other apps in the marketplace and running up a few handheld ideas from other sort of components. As the users were almost fully literate people the user journey will not confuse them as much. However the said features will really help the to navigate the app according to the UI.</p>
                </div>

                <div className="des-def">
                    <div className="heding">Define</div>
                    For defining the whole work process I had to imagine a User journey. As It is a fairly large project defining this was necessary.
                    <div className="user-journey">
                        <img src={uj} alt=""/>
                    </div>
                    <p>The next important thingwas to create the color theme and typography. Which was created in regards with the website itself.</p>
                    <div className="typo">
                        <img src={cpt} alt=""/>
                    </div>
                    <div className="screens heding">Design</div>
                    <div className="typo">
                        <img src={Mhome} alt=""/>
                    </div>
                    <div className="typo">
                        <img src={Mcourse} alt=""/>
                    </div>
                    <div className="typo">
                        <img src={Mlibrary} alt=""/>
                    </div>
                    <div className="typo">
                        <img src={Mprofile} alt=""/>
                    </div>
                    <div className="proto">
                        <a href="https://www.figma.com/proto/joDWKVW58uZxpYMBNEAatJ/Medibee?page-id=0%3A1&node-id=1%3A343&viewport=372%2C353%2C0.22&scaling=scale-down&starting-point-node-id=1%3A343">
                        <button className="viewbtn">View Prototype</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Medibee;
