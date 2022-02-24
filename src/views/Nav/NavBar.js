import React from "react";
import { Link } from "react-router-dom";
import "../Style/Nav.css";
import Logo from "./getcha.png";
//좋아요순
//다운로드순
//점수순
//그리드 변경
//로고(홈버튼)
function NavBar() {
  return (
    <div>
      <Link to="/home">
        <img src={Logo} width="100px" />
      </Link>
    </div>
  );
}

export default NavBar;
