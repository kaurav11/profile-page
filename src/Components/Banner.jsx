import React, { Component } from 'react'
import logo from '../Components/public/image/maxresdefault.jpg';
import cse from '../Components/public/image/nit2.png';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Hi! I'm Okay Dexter </h1>
                    <p id="paragarph1"> NIT ALUMINI.... <br/>
                    Batch of 2012-16</p>
                     <a id="logo" href="http://www.nitjsr.ac.in/" ><img src={cse} width="100" height="100" alt="cselogo"/></a> 
                    
            </section>
        )
    }
}

export default Banner


