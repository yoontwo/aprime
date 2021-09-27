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

        <button className="start_button" onClick={onQuizStart}>
          <p className="start_str">내 인생템 찾으러 가기</p>
        </button>
      </div>
    </div>
  );
};

export default Start;
