import "./intro.scss";
import {KeyboardArrowDown} from "@material-ui/icons"
import {init} from "ityped"
import {useEffect, useRef} from "react";


const Intro = (props) => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front-end", "JavaScript", "ReactJs", "Java", "C/C++"],
    })
  }, [])
  return (
    <div className={"intro"} id={"intro"}>
      <div className="left">
        <div className="imgContainer">
          <img src={"assets/webDev.svg"} alt={""}/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Daniel Oliveira</h1>
          <h3><span ref={textRef}></span> Developer</h3>
        </div>
        <a href="#about">
          <KeyboardArrowDown className={"arrow"}/>
        </a>
      </div>
    </div>
  );
}

export default Intro;