import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      
      <div className="left">
        <h1>CheFu AI</h1>
        <h2>Empowering Smarter Solution</h2>
        <h3>
         Experience AI-driven solutions that simplify tasks and boost productivity.
        </h3>
        <Link to="/dashboard">Get Started &#8594; </Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "User: Recommend a movie.",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "AI: How about 'Inception'?",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "User: What's my schedule today?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "AI: You have a meeting at 10 AM.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Powered by GOOGLE</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
