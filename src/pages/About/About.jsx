

import React, { useEffect, useState } from "react";
import profile from "../../image/profile.jpg";
import "./about.css";
import Spinner from "../../Spinner/Spinner";
const About = () => {
  const [isLoading, setIsLoading] = useState(true);
 
  
  useEffect(() => {
    // Simulate a delay of 2 seconds and then set isLoading to false
     setTimeout(() => {
      setIsLoading(false);
    }, 1000);

   
  }, []);
  return (
    <div className="container">
       {isLoading ? (<Spinner/>):(
      <div className="box">
      <span
        className="pageTitle gradient__text1"
        style={{ textDecoration: "none" ,}}
      >
        About Developer
      </span>
        <img src={profile} alt="" />

        <h3 className="gradient__text2">Name:Suraj Kabirath</h3>
        <span className="gradient__text2">Email:   surajkabirath1234@gmail.com</span>
        <div className="follow">
          <span className="gradient__text1">Follow me </span>
        </div>

        <div className="social-links">
          <a  href="https://www.facebook.com/suraj.kabirath/">
            <button className="button btn">
              facebook 
            </button>
          </a>
          <a href="https://www.instagram.com/surajkabirath__/">
            <button className="button btn">
              Instagram 
            </button>
          </a>
          <a href="https://github.com/surajkabirath">
            <button className="button btn">
              Github 
            </button>
          </a>
          <a href="https://www.linkedin.com/">
            <button className="button btn">
            linkedin 
            </button>
          </a>
        </div>
        <div className="footer">
          <span>I am using the TMDB API to build my website.</span>
          <p>@2022</p>
        </div>
      </div>
      )}
    </div>
  );
};

export default About;
