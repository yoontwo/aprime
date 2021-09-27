import React, { useState, useEffect, useRef } from "react";
import "../Question.css";
import { TiArrowLeft } from "react-icons/ti";

export var ProgressBar = ({ width, percent }) => {
  let progress = 0.01 * percent * width;

  return (
    <div className="progress-div" style={{ width: width }}>
      <div style={{ width: `${progress}px` }} className="progress" />
    </div>
  );
};
const Question = ({
  setAnime,
  Finish,
  data,
  answers,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [percent, setPercent] = useState(100 / 12);

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
    } else {
      onSetStep(1);
    }
  };

  const nextClickHandler = (i) => {
    setAnime((prev) => prev + 1);
    onAnswerUpdate((prevState) => [...prevState, i]);
    setPercent(percent + 100 / 12);
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
          <TiArrowLeft className="back" />
          이전
        </button>
        {data.question.split("N").map((line) => {
          return <span className="question">{line}</span>;
        })}
        {data.choices.map((choice, i) => (
          <div className={`btn_${i}`}>
            <button className="button" onClick={() => nextClickHandler(i)}>
              {choice}
            </button>
          </div>
        ))}
        {/* {data.footer.map((line) => (
          <p className="question">{line}</p>
        ))} */}
        <ProgressBar className="footer" width={350} percent={percent} />
      </div>
    </div>
  );
};

export default Question;
