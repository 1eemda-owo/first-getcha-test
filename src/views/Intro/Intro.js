import React from "react";
import { Link } from "react-router-dom";
import "../Style/Intro.css";

//배경 그라데이션, 애니메이션
//시작버튼

function Intro() {
  return (
    <section className="intro">
      <div className="intro_bg">
        <h1>See What`s Next</h1>
        <Link to="/home">
          <div className="intro_box">시작하기</div>
        </Link>
      </div>
    </section>
  );
}

export default Intro;
