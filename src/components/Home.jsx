import React, { useRef } from 'react';
import {animate, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight , BsChevronDown} from "react-icons/bs"
import me from '../assets/logo.png'
import social from '../assets/social.jpeg'

function Home() {


    const clientCount  = useRef(null);
    const projectCount  = useRef(null);

    const animationClientCount = ()=>{
        animate(0,10,{
            duration : 1,
            onUpdate:(v)=>(clientCount.current.textContent = v.toFixed()),
        } )
    }
    const animationProjectCount = ()=>{
        animate(0,7 ,{
            duration : 1,
            onUpdate:(v)=>(projectCount
                .current.textContent = v.toFixed()),
        } )
    }

    const animations = {
        h1:{
            initial : {
                x : "-100%",
                opacity : 0,
            } ,
            whileInView : {
                x : "0",
                opacity : 1,
            }
        },
        button:{
            initial : {
                y : "-100%",
                opacity : 0,
            } ,
            whileInView : {
                y : "0",
                opacity : 1,
            }
        }
    }
    
  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animations.h1} >
                    Often times, celebrated disability is a excuse to cover up real abilities
                </motion.h1>
            
                
            <div>
                <a href='mailto:prince12845sharma@gmail.com'> Login </a>
                <a href='#work'> Work <BsArrowUpRight /> </a>
            </div>
            
            <article>
                <p>
                    +<motion.span 
                    whileInView={animationClientCount}
                    ref={clientCount}>  </motion.span>
                </p>
                <span>Jobs</span>
            </article>

            <aside>
            <article>
                <p>
                    +<motion.span 
                    whileInView={animationProjectCount}
                    ref={projectCount}>  </motion.span>
                </p>
                <span>Skill Developement Courses</span>
            </article>
            <article data-special>
                <p>
                    Contact
                </p>
                <span>skillsetequity@gmail.com</span>
            </article>
            </aside>
        </div>  
        </section>

        <section>
            <img src={social} alt='Prince' />
        </section>
        <a href='#footer'>
            <BsChevronDown />
        </a>
    </div>
  )
}

export default Home