import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'
function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                Hello there 👋 , I am
                 <br/><span className='info-name'> Rahul Kamble</span>. 
                 <br/> Full Stack Developer
                </div>
                <div className='about-photo'>
                    <img  className='picture' src={require('../../../assets/coding.png').default}></img>
                </div>
            </div>
            <div className='about-bottom'>
                <SocialContact/>
            </div>
        </div>
    )
}

export default About
