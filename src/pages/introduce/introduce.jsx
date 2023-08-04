import React, { useState } from "react";
import './introduce.css'
import Dropdown from "../../companents/dropdown/dropdown";
import { useNavigate } from "react-router-dom";
const Introduce = () => {
    const difficulty = ["easy", "medium", "hard"]
    const [difficultyChange, setDifficultyChange] = useState('')
    const navigate = useNavigate()
    const TOTAL_QUESTIONS = 10
    const startQuiz = () => {
        if(difficultyChange){
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
        }
    }
    return (
        <div className="introduce">
            <div className="introduce-container">
                <img  src="https://www.youthdownloads.com//triviamaker/wp-content/themes/stratusx-child/template/upload/UraXLTV8vcP72YAUTkWoerz5nZB2/2021052716221412191886/388logo.png" alt="" />
                <Dropdown data= {difficulty} setDifficultyChange={setDifficultyChange}/>
                <div onClick={startQuiz} className="introduce-btn">Start Quiz</div>
            </div>
           
        </div>
    )
}

export default Introduce;