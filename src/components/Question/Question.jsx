import './Question.css';
import { Link } from 'react-router-dom';

const Question = (props) => {
    return (
        <>
            <h1>Вопрос №{props.id}: {props.question}</h1>
            <div className="answer" dangerouslySetInnerHTML={{ __html: props.answer }}/>
            <Link className="back" to="/">Назад к списку</Link>
        </>
    )
};

export default Question;