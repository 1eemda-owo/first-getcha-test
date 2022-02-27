import React from "react";
import "../Style/DetailPage.css";

class DetailPage extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail_box">
          <img src={location.state.bg} className="detail_bg" />
          <img src={location.state.poster} className="detail_poster" />
          <div className="detail_info">
            <p className="detail_title">{location.state.title}</p>
            <p className="detail_rating">★ {location.state.rating}/10</p>
            <span className="detail_intro">{location.state.intro}</span>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default DetailPage;
//제목, 인트로 설명, 포스터, 좋아요 수, 점수
