import questionsJson from '../../questions.json';
import './QuestionsList.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



const QuestionsList = () => {
    return (
        <>
            <h1>Список вопросов</h1>
            {questionsJson && questionsJson.map(({question, answer, id}) => (
                <div className="question" key={id}>
                    <Link to={'/' + id}>{question}</Link>
                </div>
            ))}
        </>
    )
};

export default QuestionsList;