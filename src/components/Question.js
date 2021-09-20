import React, { useState, useEffect, useRef } from "react";
import { Button as GrommetButton, Box } from "grommet";
import "../Question.css";

const Question = ({
  Finish,
  data,
  answers,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
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

  const nextClickHandler = (i) => {
    onAnswerUpdate((prevState) => [...prevState, i]);
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(20);
    }
  };

  return (
    <div className="outer">
      <div className="inner">
        <p className="logo">a prime</p>
        {data.question.split("N").map((line) => {
          return (
            <span className="question">
              {line}
              <br />
              <br />
            </span>
          );
        })}
        <p>{onAnswerUpdate}</p>
        {data.choices.map((choice, i) => (
          <ul>
            <button className="button" onClick={() => nextClickHandler(i)}>
              {choice}
            </button>
          </ul>
        ))}
        <p className="footer">{data.footer}</p>
      </div>
    </div>
  );
};

export default Question;
