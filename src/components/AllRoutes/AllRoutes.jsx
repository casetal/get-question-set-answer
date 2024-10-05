import QuestionsList from '../QuestionsList/QuestionsList';
import Question from '../Question/Question';
import questionsJson from '../../questions.json';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<QuestionsList />}></Route>
            {questionsJson && questionsJson.map(({question, answer, id}) => (
                <Route key={id} path={'/' + id} element={<Question id={id} question={question} answer={answer} />}></Route>
            ))}
        </Routes>
    )
}

export default AllRoutes;