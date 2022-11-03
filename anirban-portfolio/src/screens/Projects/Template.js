import React from 'react';
import '../../styles/Projecttemplate.css'

function Template(props) {
    return(
        <div className="project-head">
            <label htmlFor="" className="pname"> {props.Title} </label><br/>
            <label htmlFor="" className="psub"> {props.Subtitle} </label>
            <div className="ov-dt">
                <div className="overview">
                    <div className="ti">Project Overview</div>
                    <div className="ov-text">{props.Overview}</div>
                </div>
                <div className="details">
                    <div  className="ti">Project Details</div>
                    <div className="dt-text">{props.Details}</div>
                </div>
            </div>
            <div className="problem-objective-goals">
                <div className="problem ti">{props.addTitle}</div>
                <p className="p-text">{props.Problem}</p>
                <div className="objective ti">Objective</div>
                <p className="ob-text">{props.Objective}</p>
                <div className="goals ti">Goals</div>
                <p className="g-text">{props.Goals}</p>
            </div>
        </div>
    )
}

export default Template;
