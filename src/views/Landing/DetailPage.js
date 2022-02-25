import React from "react";

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
          <div className="detail_image">
            <img src={location.state.bg} className="bg" />
            <img src={location.state.poster} className="poster" />
          </div>
          <div className="detail_info">
            <p className="title">{location.state.title}</p>
            <p className="rating">★ {location.state.rating}/10</p>
            <p className="like">♥ {location.state.like}</p>
            <p className="year">{location.state.year}</p>
            <span className="intro">{location.state.intro}</span>
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
