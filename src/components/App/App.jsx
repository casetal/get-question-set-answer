import AllRoutes from '../AllRoutes/AllRoutes';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AllRoutes />
        {/* <QuestionsList /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
