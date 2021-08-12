import "./portfolioList.scss";

const PortfolioList = (props) => {
    const {id, title, selected, setSelected} = props;
    return (
        <li className={"portfolioList " + (selected && "active")} onClick={() => setSelected(id)}>
            {title}
        </li>
    );
}

export default PortfolioList;