import "./topbar.scss";
import {Mail} from '@material-ui/icons';
import React from "react";

const Topbar = (props) => {
  let {menuOpen, setMenuOpen, navShadow} = props;
  return (
    <div className={"topbar " + (menuOpen && " active ") + ((!menuOpen && navShadow) && " shadow")}>
      <div className="wrapper">
        <div className="left">
          <a href={"#intro"} className={"logo"}>Daniel_Oliveira</a>
          <div className="mail">
            <Mail className={"icon"}/>
            <span><a href="mailto: oliveiradaniel@outlook.com">oliveiradaniel@outlook.com</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span>line1</span>
            <span>line2</span>
            <span>line3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;