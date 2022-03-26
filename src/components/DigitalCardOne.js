import React from 'react'
import MainContent from './MainContent'
import photo from '../myPhoto.jpg';
import Footer from './Footer';

export default function DigitalCard() {
    return(
        <div className='card'>
            <img src ={photo} className='photo'/>
            <MainContent />
            <Footer />
        </div>
    )
}