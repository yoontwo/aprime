import React, { useState, useEffect } from "react";
import "./App.css";

import Start from "./components/Start";
import Question from "./components/Question";

import ENFP from "./components/ENFP";
import ENFJ from "./components/ENFJ";
import ENTP from "./components/ENTP";
import ENTJ from "./components/ENTJ";
import ESFP from "./components/ESFP";
import ESFJ from "./components/ESFJ";
import ESTP from "./components/ESTP";
import ESTJ from "./components/ESTJ";
import INFP from "./components/INFP";
import INFJ from "./components/INFJ";
import INTP from "./components/INTP";
import INTJ from "./components/INTJ";
import ISFP from "./components/ISFP";
import ISFJ from "./components/ISFJ";
import ISTP from "./components/ISTP";
import ISTJ from "./components/ISTJ";

import Loading from "./components/Loading";
import quizData from "./data/data.json";

function App() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const quizStartHandler = () => {
    setStep(2);
  };

  return (
    <div>
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 &&
        (console.log({ answers }),
        (
          <Question
            data={quizData.data[activeQuestion]}
            answers={answers}
            onAnswerUpdate={setAnswers}
            numberOfQuestions={quizData.data.length}
            activeQuestion={activeQuestion}
            onSetActiveQuestion={setActiveQuestion}
            onSetStep={setStep}
          />
        ))}

      {step === 20 && <Loading Answers={answers} setStep={setStep} />}
      {step === 3 && <ENFP />}
      {step === 4 && <ENFJ />}
      {step === 5 && <ENTP />}
      {step === 6 && <ENTJ />}
      {step === 7 && <ESFP />}
      {step === 8 && <ESFJ />}
      {step === 9 && <ESTP />}
      {step === 10 && <ESTJ />}
      {step === 11 && <INFP />}
      {step === 12 && <INFJ />}
      {step === 13 && <INTP />}
      {step === 14 && <INTJ />}
      {step === 15 && <ISFP />}
      {step === 16 && <ISFJ />}
      {step === 17 && <ISTP />}
      {step === 18 && <ISTJ />}
    </div>
  );
}

export default App;
