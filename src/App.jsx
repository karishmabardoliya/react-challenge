import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashbord';
import Addjoke from './Addjoke';
import History from './History';
import Header from './Header';

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/add-joke" element={<Addjoke />} />
          <Route path="/history" element={<History />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>

      </div></>
  );
}

export default App;
