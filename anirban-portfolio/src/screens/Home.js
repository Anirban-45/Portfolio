import React from 'react';
import '../styles/Home.css'
import profile from '../assets/Photo.jpeg'

function Home() {
    return(
        <div className="container">
            <div className="container-text">
                <p className="main-pg">
                    Hello, I am Anirban.<br/>
                    And I work as a <span className="colored-text-1">UI/UX</span> and <span className="colored-text-2">Product designer</span>.
                </p>
                <p className="second-pg-1">
                    To cover my full bases,
                </p>
                <p className="second-pg-2">
                    I also work as a <span className="colored-text-3">Front-end developer</span> and a <span className="colored-text-4">Creative content writer</span>.
                </p>
                <p className="desc-pg-1" style={{marginRight: "250px"}}>
                    The way I have seen design that it's a very subjective and customized process.
                </p>
                <p className="desc-pg-2" style={{marginRight: "250px"}}>
                    One must know the crowd and blend into them to create a near perfect
                    and delightful design solution for them. And being an empath I see myself
                    striving for just that<br/>
                    <span className="colored-text-5"> As I do so, you will also find me hanging around outdors or nearby any
                    artworks and literary scenes.</span>
                </p>
            </div>
            <img src={profile} alt=""/>
        </div>
    )
}

export default Home;
