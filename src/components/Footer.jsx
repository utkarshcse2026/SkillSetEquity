import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from "../assets/logo.png";
import social from "../assets/social.jpeg";


const Footer = () => {
  return (
    <footer id="footer">
    <div>
      <img
        src={social}
        alt="Founder"
      />

      <h2>SkillsetEquity </h2>
    </div>

    <aside>
      <h2>Social Media</h2>

      <article>
        <a href="https://www.youtube.com/@coutPrince" target={"blank"}>
          <AiFillYoutube />
        </a>
        <a href="https://www.instagram.com/_i_m.prince/" target={"blank"}>
          <AiFillInstagram />
        </a>
        <a href="https://github.com/Prince-Sharma002" target={"blank"}>
          <AiFillGithub />
        </a>
      </article>
    </aside>
    <a href="#home">
      <AiOutlineArrowUp />
    </a>
  </footer>
  )
}

export default Footer