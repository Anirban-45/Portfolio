import React from 'react';
import '../../styles/Projecttemplate.css'

function Template(props) {
    return(
        <div className="">
            <label htmlFor="" className="pname"> {props.Title} </label>
            <label htmlFor="" className="psub"> {props.Subtitle} </label>
            <div className="ov-dt">
                <div className="overview">
                    <label htmlFor="" className="ov">Project Overview</label>
                    <p className="ov-text">{props.Overview}</p>
                </div>
                <div className="details">
                    <label htmlFor="" className="ov">Project Details</label>
                    <p className="dt-text">{props.Details}</p>
                </div>
            </div>
            <div className="problem-objective-goals">
                <label htmlFor="" className="problem">Problem</label>
                <p className="p-text">{props.Problem}</p>
                <label htmlFor="" className="objective">Objective</label>
                <p className="ob-text">{props.Objectibe}</p>
                <label htmlFor="" className="goals">Goals</label>
                <p className="g-text">{props.Goals}</p>
            </div>
        </div>
    )
}

export default Template;
