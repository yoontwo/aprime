import React, { useState, useEffect, useRef } from "react";
import { Button as GrommetButton, Box } from "grommet";
// import { animated } from "react-spring";

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
  const nextClickHandler = (i) => {
    onAnswerUpdate((prevState) => [...prevState, i]);
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(20);
    }
  };

  return (
    <div className="start">
      <p className="logo">a prime</p>
      {data.question.split("n").map((line) => {
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

      <footer className="footer">{data.footer}</footer>
    </div>
  );
};

export default Question;
