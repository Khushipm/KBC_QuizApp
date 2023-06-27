import './app.css'
import React, {useState,useEffect,useMemo} from 'react'
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';
function App() {
 const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
 const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");
 
 const data = [
    {
      id: 1,
      question: "What is the capital of India?",
      answers: [
        { text: "Delhi", correct: true },
        { text: "Mumbai", correct: false },
        { text: "Kolkata", correct: false },
        { text: "Chennai", correct: false }
      ]
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Saturn", correct: false },
        { text: "Jupiter", correct: false }
      ]
    },
    {
      id: 3,
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Leonardo da Vinci", correct: true },
        { text: "Vincent van Gogh", correct: false },
        { text: "Pablo Picasso", correct: false },
        { text: "Michelangelo", correct: false }
      ]
    },
    {
    id: 4,
    question: "Who is known as the Missile Man of India?",
    answers: [
      { text: "Jawaharlal Nehru", correct: false },
      { text: "APJ Abdul Kalam", correct: true },
      { text: "Indira Gandhi", correct: false },
      { text: "Rajiv Gandhi", correct: false }
    ]
  },
  {
    id: 5,
    question: "Which is the largest planet in our solar system?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Venus", correct: false }
    ]
  },
  {
    id: 6,
    question: "Who wrote the epic Indian scripture 'Mahabharata'?",
    answers: [
      { text: "Valmiki", correct: false },
      { text: "Tulsidas", correct: false },
      { text: "Ved Vyasa", correct: true },
      { text: "Rishi Kashyap", correct: false }
    ]
  },
  {
    id: 7,
    question: "Which is the highest mountain peak in the world?",
    answers: [
      { text: "Mount Everest", correct: true },
      { text: "K2", correct: false },
      { text: "Kangchenjunga", correct: false },
      { text: "Makalu", correct: false }
    ]
  },
  {
    id: 8,
    question: "Which animal is known as the 'Ship of the Desert'?",
    answers: [
      { text: "Camel", correct: true },
      { text: "Elephant", correct: false },
      { text: "Horse", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    id: 9,
    question: "Which country won the FIFA World Cup 2018?",
    answers: [
      { text: "France", correct: true },
      { text: "Brazil", correct: false },
      { text: "Germany", correct: false },
      { text: "Argentina", correct: false }
    ]
  },
  {
    id: 10,
    question: "Which is the largest ocean in the world?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true }
    ]
  },
  {
    id: 11,
    question: "Which city is known as the 'Pink City' of India?",
    answers: [
      { text: "Jaipur", correct: true },
      { text: "Jaisalmer", correct: false },
      { text: "Udaipur", correct: false },
      { text: "Jodhpur", correct: false }
    ]
  },
  {
    id: 12,
    question: "Who is the author of the Harry Potter book series?",
    answers: [
      { text: "J.R.R. Tolkien", correct: false },
      { text: "J.K. Rowling", correct: true },
      { text: "C.S. Lewis", correct: false },
      { text: "Stephen King", correct: false }
    ]
  },
  {
    id: 13,
    question: "Which city is the capital of Australia?",
    answers: [
      { text: "Melbourne", correct: false },
      { text: "Sydney", correct: false },
      { text: "Brisbane", correct: false },
      { text: "Canberra", correct: true }
    ]
  },
  {
    id: 14,
    question: "Who is the current Prime Minister of the United Kingdom?",
    answers: [
      { text: "Boris Johnson", correct: true },
      { text: "Theresa May", correct: false },
      { text: "David Cameron", correct: false },
      { text: "Tony Blair", correct: false }
    ]
  },
  {
    id: 15,
    question: "Which is the smallest state in India by area?",
    answers: [
      { text: "Goa", correct: true },
      { text: "Sikkim", correct: false },
      { text: "Nagaland", correct: false },
      { text: "Manipur", correct: false }
    ]
  },
  ];
  
  const moneyPyramid = useMemo(() => 
    [
      {id:1, amount: "₹ 2,000"},
      {id:2, amount: "₹ 5,000"},
      {id:3, amount: "₹ 10,000"},
      {id:4, amount: "₹ 20,000"},
      {id:5, amount: "₹ 40,000"},
      {id:6, amount: "₹ 80,000"},
      {id:7, amount: "₹ 1,60,000"},
      {id:8, amount: "₹ 3,20,000"},
      {id:9, amount: "₹ 6,40,000"},
      {id:10, amount: "₹ 12,50,000"},
      {id:11, amount: "₹ 25,00,000"},
      {id:12, amount: "₹ 50,00,000"},
      {id:13, amount: "₹ 1 Crore"},
      {id:14, amount: "₹ 3 Crores"},
      {id:15, amount: "₹ 7 Crores"},
    ].reverse(),
[])

  useEffect(() => {
    
    questionNumber>1 &&
      setEarned(moneyPyramid.find((m)=> m.id === questionNumber-1).amount);

  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
        {stop ? (
          <h1 className="endText">{ `${username}, You earned: ${earned}`}</h1>

        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer 
                    setStop={setStop}
                    questionNumber={questionNumber}  
                  />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
        </>
      ) : <Start  setUsername={setUsername} />}
      
    </div>
  );
}

export default App;
