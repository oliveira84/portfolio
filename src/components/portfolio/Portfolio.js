import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {useEffect, useState} from "react"
import {ccppPortfolio, frontendPortfolio, javaPortfolio} from "../../data";
import GitHubIcon from '@material-ui/icons/GitHub';

const Portfolio = () => {

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
        <a href="https://github.com/oliveira84?tab=repositories" target="_blank" rel="noreferrer">
          <GitHubIcon className={"icon"}/>
        </a>
        {list.map(item => (
          <PortfolioList key={item.id} id={item.id} title={item.title} selected={item.id === selected}
                         setSelected={setSelected}/>))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div key={item.id} className="item">
            <img src={item.img} alt=""/>
            <a href={item.link} target="_blank" rel="noreferrer"><h3>{item.title}</h3></a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;