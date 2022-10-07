import React from 'react';
import Pcard from '../components/Projectcard'
import Beditor from '../assets/Beditor Mockup.jpeg'
import Jatayat from '../assets/Jatayat Mockup.jpeg'
import '../styles/Work.css'

function Work() {
    return(
        <div className="work-container">
            <Pcard image={Beditor} title="Beditor" isNew={false} description="The website was built using Wix, which is a website builder"/>
            <Pcard image={Jatayat} title="Jatayat" isNew={true} description="The website was built using Wix, which is a website builder"/>
        </div>
    )
}

export default Work;
