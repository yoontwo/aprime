import React, { useState, useEffect, useRef } from "react";
import { Button as GrommetButton, Box } from "grommet";
import "../Question.css";

export var ProgressBar = ({ width, percent }) => {
  let progress = 0.01 * percent * width;

  return (
    <div className="progress-div" style={{ width: width }}>
      <div style={{ width: `${progress}px` }} className="progress" />
    </div>
  );
};
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
  const [percent, setPercent] = useState(0);

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

  const prevClickHandler = () => {
    if (activeQuestion > 0) {
      onSetActiveQuestion(activeQuestion - 1);
      setPercent(percent - 100 / 11);
      onAnswerUpdate((prevState) => [
        ...prevState.slice(0, prevState.length - 1),
      ]);
    }
  };

  const nextClickHandler = (i) => {
    onAnswerUpdate((prevState) => [...prevState, i]);
    setPercent(percent + 100 / 11);
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
        <button className="prevButton" onClick={() => prevClickHandler()}>
          이전
        </button>
        {data.question.split("N").map((line) => {
          return <span className="question">{line}</span>;
        })}
        {/* <p>{onAnswerUpdate}</p> */}
        {data.choices.map((choice, i) => (
          <div className={`button_${i}`}>
            <button className="button" onClick={() => nextClickHandler(i)}>
              {choice}
            </button>
          </div>
        ))}

        <ProgressBar className="footer" width={400} percent={percent} />
        {/* <p className="footer">{data.footer}</p> */}
      </div>
    </div>
  );
};

export default Question;
