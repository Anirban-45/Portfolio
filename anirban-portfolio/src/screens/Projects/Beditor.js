import React from 'react';
import '../../styles/Beditor.css';
import Template from './Template.js';
import face from '../../assets/Beditor face.png';

function Beditor() {
    window.scrollTo(0,0);
    return(
        <>
            <img className="faceim" src={face} alt=""/>
            <div className="bhero">
                <Template
                    Title= "Beditor"
                    Subtitle= "A Text editor for casual writing exercise."
                    Overview= {<>Writings has been constructited and valued, as it is a way of formulating data in numerous ways. As a growing passion in constructive writing and coming from a Code oriented background this was my first personal project to build a proper consistent text editor. <span style={{fontWeight: "700"}}>This was focused on casual writing and journal making capability.</span></>}
                    Details=
                    {
                        <>
                            <span style={{fontWeight: "500"}}>Role:</span> UI/UX designer<br/>
                            <span style={{fontWeight: "500"}}>Duration:</span> 3 weeks
                        </>
                     }
                    Objective=
                    {
                        <>The objective of this project was to create a seamless experience for writing. Providing various modes and pointing out the outlines while giving an easy way to format the text will be the main objective of this application.<br/><br/>
                          Now coming into the genre of casual writing softwares, most of the user has been known to choose a particular software over "Microsoft Words" is for better writability, speed and ease of access. Yet due to most of the writing tools bulk and excessive settings somehow people gets overwhelmed. I
                          In this case the basic wanted outcome is to create a minimalistic appwhile keeping a pretty handy level of features and usage.
                        </>
                    }
                    Goals=
                    {
                        <>
                            <span style={{fontWeight: "500"}}>- Achieve the most ease and accessability.</span><br/>
                            <span style={{fontWeight: "500"}}>- Acurately provide the document details and formatting support.</span><br/>
                            <span style={{fontWeight: "500"}}>-A polished easy to understand UI from a markdown view.</span>
                        </>
                    }
                />
            </div>
        </>
    )
}

export default Beditor;
