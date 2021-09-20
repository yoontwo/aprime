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
        <h1 className="startTitle">나에게 딱 맞는 클린뷰티 제품은?</h1>
        <p>클린뷰티에 대한 간단한 설명추가하기</p>
        <img className="start_img" src={require("./img/start.png").default} />
        <p className="body">테스트 후 응모하면 상품까지!!</p>
        <button className="start_button" onClick={onQuizStart}>
          내 인생템 찾으러 가기
        </button>
      </div>
    </div>
  );
};

export default Start;
