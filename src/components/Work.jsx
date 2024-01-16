import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import skill from "../assets/skill.jpeg";
import coding from "../assets/coding.jpeg";
import edu from "../assets/edu.jpeg";
import legal from "../assets/legal.jpeg";
import business from "../assets/business.jpeg";
import art from "../assets/art.jpeg";

function Work() {
  return (
    <div id='work'>
        <h2>WORK</h2>
        <section>
            <article>
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    interval={2000}
                    autoPlay={true}
                >
                    
                       
                            {/* <div key={i.title} className='workItem'>
                                <img src={i.imgSrc} alt={i.title} />
                                <aside>
                                    <h3>{i.title}</h3>
                                    <p>{i.description}</p>
                                    <a target={"blank"} href={i.url}> View Demo </a>
                                </aside>
                            </div> */}

                <div className='workItem'>
                    <img className='' src={skill} />
                    <aside>
                        <h3> COMMUNICATION AND SOFT SKILLS </h3>
                        <p className=""> • Effective Communication in Professional Settings
• Networking and Relationship Building Skills
• Public Speaking and Presentation Skills </p>
                        <a target={"_blank"} href='/'> View</a>
                    </aside>
                </div>
                <div className='workItem'>
                    <img className='' src={art} />
                    <aside>
                        <h3> CREATIVE ARTS AND DESIGN </h3>
                        <p className="">•Adaptive Art Techniques
• Inclusive Graphic Design
• Accessible UI/UX Design Principles</p>
                        <a target={"_blank"} href='/'> View</a>
                    </aside>
                </div>
                <div className='workItem'>
                    <img className='' src={business} />
                    <aside>
                        <h3> ENTERPRENENURSHIP AND BUSINESS DEVELOPMENT </h3>
                        <p className="">• Starting and Managing and inclusive Business
• Financial literacy and Budgeting for Enterpreneuers
• Accessing funding and grants for Disabled Enterpreneuers</p>
                        <a target={"_blank"} href='/'> View</a>
                    </aside>
                </div>
                <div className='workItem'>
                    <img className='' src={edu} />
                    <aside>
                        <h3> SCIENCE , TECHNOLOGY , ENGINEERING AND MATHEMATICS ( STEM) </h3>
                        <p className="">• Accessible STEM Education
• Inclusive Science Experiment and Projects
• Adaptive Technology in STEM field</p>
                        <a target={"_blank"} href='/'> View</a>
                    </aside>
                </div>
                <div className='workItem'>
                    <img className='' src={legal} />
                    <aside>
                        <h3> LEGAL RIGHTS AND ADVOCACY </h3>
                        <p className="">• Understanding disability rights and laws
• Advocacy training for individuals with disabilities
• Legal Resources for navigating discrimination and accessibility issues</p>
                        <a target={"_blank"} href='/'> View</a>
                    </aside>
                </div>
                <div className='workItem'>
                    <img className='' src={coding} />
                    <aside>
                        <h3> INTRODUCTION TO CODING AND AUTOMATION </h3>
                        <p className="">• Basic Programming Languages 
• Automating tasks using scripts
• Integrating Excel with external applications</p>
                        <a target={"_blank"} href='/'> View</a>
                    </aside>
                </div>

                </Carousel>
            </article>
        </section>
    </div>
  )
}

export default Work;