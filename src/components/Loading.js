import React, { useState, useEffect, useRef } from "react";
import { Box, Button as GrommetButton, Grommet } from "grommet";
import "../App.css";

const Loading = ({ setStep, Answers }) => {
  function NS(Answers) {
    let counts = 0;
    Answers.map((answer, i) => {
      if ((i === 0 || i === 3 || i === 10) && answer === 1) {
        counts = counts + 1;
      }
    });
    if (counts < 2) return 1;
    else return 0;
  }

  function FT(Answers) {
    let counts = 0;
    Answers.map((answer, i) => {
      if ((i === 1 || i === 4 || i === 6) && answer === 1) {
        counts = counts + 1;
      }
    });
    if (counts < 2) return 1;
    else return 0;
  }

  function EI(Answers) {
    let counts = 0;
    Answers.map((answer, i) => {
      if ((i === 2 || i === 5 || i === 8) && answer === 1) {
        counts = counts + 1;
      }
    });
    if (counts < 2) return 1;
    else return 0;
  }

  function PJ(Answers) {
    let counts = 0;
    Answers.map((answer, i) => {
      if ((i === 7 || i === 9 || i === 11) && answer === 1) {
        counts = counts + 1;
      }
    });

    if (counts < 2) return 1;
    else return 0;
  }
  const quizFinishHandler = () => {
    if (EI(Answers)) {
      if (NS(Answers)) {
        if (FT(Answers)) {
          if (PJ(Answers)) {
            setStep(3);
          } else {
            setStep(4);
          }
        } else {
          if (PJ(Answers)) {
            setStep(5);
          } else {
            setStep(6);
          }
        }
      } else {
        if (FT(Answers)) {
          if (PJ(Answers)) {
            setStep(7);
          } else {
            setStep(8);
          }
        } else {
          if (PJ(Answers)) {
            setStep(9);
          } else {
            setStep(10);
          }
        }
      }
    } else {
      if (NS(Answers)) {
        if (FT(Answers)) {
          if (PJ(Answers)) {
            setStep(11);
          } else {
            setStep(12);
          }
        } else {
          if (PJ(Answers)) {
            setStep(13);
          } else {
            setStep(14);
          }
        }
      } else {
        if (FT(Answers)) {
          if (PJ(Answers)) {
            setStep(15);
          } else {
            setStep(16);
          }
        } else {
          if (PJ(Answers)) {
            setStep(17);
          } else {
            setStep(18);
          }
        }
      }
    }
  };
  return (
    <div className="outer">
      <div className="inner">
        <button className="resultButton" onClick={quizFinishHandler}>
          결과 확인
        </button>
      </div>
    </div>
  );
};

export default Loading;
