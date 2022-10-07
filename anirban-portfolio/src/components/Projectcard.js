import React from 'react';
import '../styles/Projectcard.css'
import New from '../assets/new.png'

function Pcard(props) {
    return(
        <div className="pcard-body">
            <img src={props.image} alt=""/>
            <div className="layer">
                <div className="nimage">
                    <img className={`${props.isNew? "new-project": "old-project"}`} src={New} alt=""/>
                </div>
                <div className="access">
                    <p className="pcard-title">{props.title}</p>
                    <p className="pcard-desc">{props.description}</p>
                    <button className="viewbtn">View Project</button>
                </div>
            </div>
        </div>
    )
}

export default Pcard;
