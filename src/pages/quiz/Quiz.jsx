import React, { useEffect, useState } from "react";
import './quiz.css'
import * as api from '../../api/api'
import { useParams } from "react-router-dom";
import QuestionsCard from "../../companents/questionsCard/QuestionsCard";
import Modal from "../../companents/modal/Modal";


const Quiz = () => {
    const {difficulty, amount} = useParams()
    const [questionsData, setQuestionsData] = useState([]);
    const [score, setScore] = useState(0)
    const [count, setCount] = useState(0)
    const [passing, setPassing] = useState(false)
    
    useEffect(() => {
     const getData = async() => {
        const data = await api.fetchQuizData(difficulty, amount)
        setQuestionsData(data)
    }
     getData();
     },[])
     console.log(questionsData)

    return (
        <div className="quiz">
            {
                passing ? <Modal score={score}/> : 
                <QuestionsCard
                questionsData={questionsData}
                score={score}
                setScore={setScore}
                count={count}
                setCount={setCount}
                passing={passing}
                setPassing={setPassing}/>
            }
            
        </div>
    )
}

export default Quiz;