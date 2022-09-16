import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.scss";
import Home from './pages/Home';
import List from './pages/List';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
        </Routes>
    </Router>
  );
}

export default App;
