import React from 'react'
import profilePicture from '../../../media/profile-picture.jpeg'
import './about-tayden.less'

export default class AboutTayden extends React.Component {
    render () {
        return (
            <div className="about-tayden" id="home">
                <h2 className="about-tayden__header">
                    About Me
                </h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={ profilePicture } alt='' style={{ width: '250px', border: '1px solid black', borderRadius: '50%' }} />
                </div>
                <h3>Aspiring Information Technology Professional</h3>
                <div>Tayden Flitcroft is an current Computer Repair Technician with over 2 years experience in hardware
                    and software repair for both Windows and macOS personal computers. He is a previous undergradutate
                    student of Collin College located in Frisco, TX and graduated with a certification in Audio
                    Engineering in 2018. He is currently working towards enrollment at the University of Texas at San
                    Antonio to participate in their Cyber Security (B.B.A.) program in 2021. In his free time, he has
                    been diligently studying to complete the CompTIA A+, Network+ and Security+ certifications, with a
                    goal to complete both A+ and Network+ by late 2021 followed by Security+ in 2022.
                </div>
            </div>
        )
    }
}