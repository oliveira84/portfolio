import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {useEffect, useState} from "react"
import {ccppPortfolio, frontendPortfolio, javaPortfolio} from "../../data";


const Portfolio = (props) => {

  const [selected, setSelected] = useState("frontend")
  const [data, setData] = useState([])

  const list = [
    {id: "frontend", title: "Front-end",},
    {id: "ccpp", title: "C/C++",},
    {id: "java", title: "Java",},
  ]

  useEffect(() => {
    switch (selected) {
      case "frontend":
        setData(frontendPortfolio);
        break;
      case "ccpp":
        setData(ccppPortfolio);
        break;
      case "java":
        setData(javaPortfolio);
        break;
      default:
        setData(frontendPortfolio);
    }
  }, [selected])

  return (
    <div className={"portfolio"} id={"portfolio"}>
      <h2>Portfolio</h2>
      <ul>
        {list.map(item => (
          <PortfolioList id={item.id} title={item.title} selected={item.id === selected}
                         setSelected={setSelected}/>))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item">
            <img src={item.img} alt=""/>
            <a href={item.link}><h3>{item.title}</h3></a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;