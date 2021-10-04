import React from 'react';
// import useData from '../../hooks/useData';
import './About.css';


const About = () => {

    return (
        <div className="container m-5 ps-5">

            <img src="https://www.libertyparkmusic.com/wp-content/uploads/2016/09/benefits-learning-music.jpg" alt="" />
            <h1 className="mt-5">About Music World:</h1>

            <h5 className="mt-5 w-100 text-start about-us">Music World school offers comprehensive musiclessons that start with the fundamentals, including scales, chords, tuning, arpeggios, and rhythm adapted to various skill levels.
                <br />
                <br />

                Our core philosophy is that the best way for students to gain musical proficiency is through performance-based music education. All of our lessons for students include a performance aspect.
                The Learning Institute provides opportunities for individuals and communities through high quality education, training and research programmes that challenge personal barriers and promote social inclusion.
                <br /> <br />

                We believe learning should be informed by research, guided by ethics and committed to communities.

                It should:
                <br /> <br />

                1.offer the freedom to make empowering choices
                <br />
                2.remove barriers, to allow the freedom to make those choices
                <br />
                3.create the desire and expectation that the choices made will lead to positive change.</h5>

        </div>
    );
};

export default About;