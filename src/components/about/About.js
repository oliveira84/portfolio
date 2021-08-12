import "./about.scss";
import {useState} from "react";

const About = (props) => {

  const [currentSlider, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "About me",
      desc: "I am 37 years old, worked as a Systems Administrator for 14 years. I recently started my studies again, and am finishing a degree in Software Engineering. I have always had a passion for programming and am looking for a job as a developer.",
      img: "assets/webDev2.svg",
    },
    {
      id: "2",
      title: "Experience",
      desc: "I have intermediate experience with: HTML, CSS, JavaScript, Java and C/C++. And beginner experience in ReactJs.",
      img: "assets/webDev3.svg",
    },
    {
      id: "3",
      title: "Soft Skills",
      desc: "Problem solving, Creativity, Empathy, Teamwork, Time management",
      img: "assets/webDev4.svg",
    },
  ];

  const handleClick = (way) => {

    if (way === "left")
      setCurrentSlide(currentSlider === 0 ? data.length - 1 : currentSlider - 1);

    else if (way === "right")
      setCurrentSlide(currentSlider === data.length - 1 ? 0 : currentSlider + 1);
  }

  return (
    <div className={"about"} id={"about"}>
      <div className="slider">
        {data.map(item => (
          <div className="container" style={{
            transform: `translateX(-${currentSlider * 100}vw)`,
            transition: "all 1s ease-out"
          }}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={item.img}
                  alt=""/>
              </div>
            </div>
          </div>
        ))
        }
      </div>
      <img src="assets/arrow.png" className={"arrow left"} onClick={() => handleClick("left")} alt=""/>
      <img src="assets/arrow.png" className={"arrow right"} onClick={() => handleClick("right")} alt=""/>
    </div>
  );
}

export default About;