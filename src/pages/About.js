// About.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate(); // 用于页面跳转

  return (
    <div className="about-container">
      <h1>tapioca :</h1>
      <img src={`${process.env.PUBLIC_URL}/images/author.jpeg`} alt="Author" className="about-image" />
      <p>日常破防的鱿鱼。</p>
      
      <button onClick={() => navigate('/')} className="back-button">
        返回
      </button>
    </div>
  );
}

export default About;
