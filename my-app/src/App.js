import './App.css';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/" element={<ShowList />} />
       <Route path="/show-summary/:id" element={<ShowSummary />} />
      </Routes> 
    </div>
  );
}

export default App;
