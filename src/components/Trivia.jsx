import { useEffect, useState } from "react"
import { useSound } from 'use-sound';
import play from "../assets/play.mp3"
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"
// import { Howl, Howler } from "howler";

export default function Trivia({data, setStop, questionNumber, setQuestionNumber }) {
  
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letsPlay, setLetsPlay] = useSound(play);
    const [correctAnswer, setCorrectAnswer] = useSound(correct);
    const [wrongAnswer, setWrongAnswer] = useSound(wrong);

    useEffect(() => {
        // Howler.autoUnlock = false;
        letsPlay();
    }, [letsPlay]);
    

    useEffect(() => {
        setQuestion(data[questionNumber-1]);
    }, [data,questionNumber]);
    
    const delay = (duration, callback) => {

        setTimeout(() => {
            callback();
        }, duration);
    }


    const handleClick = (a) => {
           
            setSelectedAnswer(a);
            setClassName("answer active");
            delay(3000, () => 
                 setClassName(a.correct ? "answer correct": "answer wrong")
            );
            delay(5000, () => 
                {
                    if (a.correct) {
                        correctAnswer();
                        delay(1000, () => {
                            if (questionNumber === data.length) {
                                setQuestionNumber((prev) => prev + 1);
                                setSelectedAnswer(null);
                                delay(1000, () => {
                                  setStop(true);
                                });
                              } else {
                                setQuestionNumber((prev) => prev + 1);
                                setSelectedAnswer(null);
                              }
                    
                        })
                        
                    }
                    else{
                        wrongAnswer();
                        delay(1000, () => {
                            setStop(true);
                        })
                        
                    }
                }
            );
        };
    return (
    <div className="trivia">
      <div className="question"> {question?.question}</div>
      <div className="answers"> 
      {question?.answers.map((a)=>(
               <div className={selectedAnswer===a ? className : "answer"} onClick={()=> handleClick(a)}> {a.text}</div>
      ))}
   
      </div>
      {questionNumber === data.length+1 && (
        <h1><div className="question">You won! Woohoo!</div></h1>
      )}
    </div>
  )
}
