import React, { useEffect, useState } from "react";
import './QuestionsCard.css'

const QuestionsCard = ({questionsData, score, setScore, count, setCount, passing, setPassing}) => {
    const[timer, setTimer] = useState(30)

    const approvedChoice = (e) => {
        
        const checkAnswer = e.currentTarget.value == questionsData[count]?.correct_answer
        console.log(checkAnswer)
        if(checkAnswer){
            setScore(score + 100)
        }
        setCount(count + 1 )
        if(count == 9) setPassing(true)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if(timer > 0) {
                setTimer(timer - 1)
            }
            if(timer == 0 && count < 10){
                setCount(count + 1)
                setTimer(30)
            } else if(count >= 10){
                setPassing(true)
            }
        },1000)
        
        return () => {
            clearInterval(interval)
        }

    },[timer])   

    return (
        <div className="questionsCard">
            <div className="questionscard-timer">{timer}</div>
            <div className="questionscard-title">{count +1}/10 - {questionsData[count]?.question}</div>
            {
                questionsData[count]?.answers?.map((answer, i) => (
                    <button onClick={approvedChoice} key={i} value={answer}>{answer}</button>
                ))
            }
        </div>
    )
}
export default QuestionsCard;