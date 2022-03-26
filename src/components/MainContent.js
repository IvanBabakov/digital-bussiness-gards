import React from 'react'
import Button from './Button'

export default function MainContent() {
    const buttons = [
        {
            name: 'Email',
            color: '#FFFFFF',
            link: 'mailto:babakovid@yandex.ru'
        },
         {
            name: 'LinkedIn',
            color: '#5093E2',
            link: 'https://www.linkedin.com/in/ivan-babakov-624697165/'
        }
    ]

    return (
        <main className='main--content'>
            <h2>Ivan Babakov</h2>
            <h3>Frontend Developer</h3>
            <Button data={buttons}/>
            <div className='discription'>
                <div>
                    <h4>About</h4>
                    <p>
                        I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                        I try to keep up with security and best practices, and am always looking for new things to learn.
                    </p>
                </div>
                <div>
                    <h4>Interests</h4>
                    <p>
                        Food expert. Music scholar. Reader. 
                        Internet fanatic. Bacon buff. Entrepreneur. 
                        Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>
                </div>
            </div>
        </main>
    )
}