import React, { useState, useEffect, useRef } from "react";
import { Box, Button as GrommetButton, Grommet } from "grommet";
import "../App.css";

const Start = ({ onQuizStart }) => {
  return (
    <div className="start">
      <p className="logo">a prime</p>
      <h1 className="title">나에게 딱 맞는 클린뷰티 제품은?</h1>
      <p className="body">테스트 후 응모하면 상품까지!!</p>
      <button className="start_button" onClick={onQuizStart}>
        내 인생템 찾으러 가기
      </button>
    </div>
  );
};

export default Start;
