import React from 'react';
import '../../styles/Beditor.css';
import Template from './Template.js';

function Beditor() {
    return(
        <div className="bhero">
            <Template
                Title= "Beditor"
                Subtitle= "A Text editor for casual writing exercise."
            />
        </div>
    )
}

export default Beditor;
