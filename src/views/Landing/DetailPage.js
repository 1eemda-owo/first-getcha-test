import axios from "axios";
import React, { useEffect, useState } from "react";

export const Detail = (props) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    getInfo(props.match.params.id);
  }, []);

  const getInfo = async (id) => {
    let response = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    console.log(response);

    if (response.data) {
      setInfo(response.data);
    }
  };

  return info ? (
    <div className="detail_box">
      <div className="detail_image">
        <img src={info.background_image} className="bg" />
        <img src={info.poster} className="poster" />
      </div>
      <div className="detail_info">
        <p className="title">{info.title}</p>
        <p className="rating">★ {info.rating}/10</p>
        <p className="like">♥ {info.like_count}</p>
        <p className="year">{info.year}</p>
        <span className="intro">{info.description_intro}</span>
      </div>
    </div>
  ) : (
    " "
  );
};
//제목, 인트로 설명, 포스터, 좋아요 수, 점수
