import React, { useState, useEffect, useRef } from "react";
import { Box, Button as GrommetButton, Grommet } from "grommet";
import "../Start.css";

const Start = ({ onQuizStart }) => {
  const mobileWidth = 500;
  React.useEffect(() => {
    const onResize = () => {
      const zoom = Math.min(window.innerWidth / mobileWidth, 1);
      document.documentElement.style.zoom = `${zoom}`;
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="div">
      <div calssName="div_start">
        <p className="logo">a prime</p>
        <h1 className="startTitle">"클린뷰티란"</h1>
        <br />
        <br />
        <span className="clean2_class">
          <img className="smile_img" src={require("./img/smile.png").default} />
          <p className="clean">피부에도 좋고</p>
        </span>

        <span className="clean2_class">
          <p className="clean">지구에도 좋고</p>
          <img className="earth_img" src={require("./img/earth.png").default} />
        </span>

        <p className="clean">내일을 위한 선택지. a prime</p>

        <button className="start_button" onClick={onQuizStart}>
          <p className="start_str">시작하기</p>
        </button>
      </div>
    </div>
  );
};

export default Start;
