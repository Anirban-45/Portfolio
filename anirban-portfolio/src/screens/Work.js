import React from 'react';
import Pcard from '../components/Projectcard'
import Beditor from '../assets/Beditor Mockup.jpeg'
import Jatayat from '../assets/Jatayat Mockup.jpeg'
import Medibee from '../assets/Medibee Mockup.jpeg'
import '../styles/Work.css'

function Work() {
    return(
        <div className="work-container">
            <Pcard
                image={Jatayat}
                title="Jatayat"
                isNew={true}
                url="/work/jatayat"
                description="The website was built using Wix, which is a website builder"
            />
            <Pcard
                image={Medibee}
                title="Medibee"
                isNew={true}
                url="/work/medibee"
                description="The website was built using Wix, which is a website builder"
            />
            <Pcard
                image={Beditor}
                title="Beditor"
                isNew={false}
                 url="/work/beditor"
                  description="The website was built using Wix, which is a website builder"
              />
        </div>
    )
}

export default Work;
