import React from 'react';
import image from '../../images/img.jpg';
import './About.css';

const About = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div className="about-left-content">
                            <div className="section-title-left">
                                <hr className="bg-red" />
                                <h2>About Me</h2>
                                <p>Hi, My Name Is Md Habibur Rahman Shakib. I didn't know anything when I started my journey. And web development is not so popular in my district still now. So I had to suffer a lot.</p>
                                <p>At first I thought I would be a web developer, but as the days went by I realized that web development is a deep sea.</p>                                
                                <p>Now my only purpose is to learn to work well and spend time learning something new. Inshallah, if all goes well, apply for an international job. And Work with Awesome Team. This Is My Main Goal.</p>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                    <div className="about-right-img mt-5 mt-md-0">
                            <img src={image} alt="About" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;