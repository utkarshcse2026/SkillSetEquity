import React from 'react'
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaBuildingNgo } from "react-icons/fa6";
import { MdWork } from "react-icons/md";





function Services() {

const animations = {
    whileInView : {
        x : 0,
        y : 0,
        opacity : 1,
    },
    one : {
        opacity : 0,
        x  : '-100%',
    },
    twoAndThree: {
        opacity: 0,
        y: "-100%",
      },
  
      four: {
        opacity: 0,
        x: "100%",
      },
}


  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>7+</h3>
          <p>Skill Developement Courses</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <FaHandHoldingMedical />
          <span>Medical aid and assistant</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <FaBuildingNgo />
          <span>NGO support</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <MdWork />
          <span>Profile building for employment opportunities</span>
        </motion.div>
      </section>
    </div>
  )
}

export default Services