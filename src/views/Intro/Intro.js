import React from "react";
import { Link } from "react-router-dom";
import "../Style/Intro.css";

//배경 그라데이션, 애니메이션
//시작버튼

function Intro() {
  return (
    <Link to="/home">
      <div className="start_box"> 시작하기 </div>
    </Link>
  );
}

export default Intro;
