import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage.jsx';
import Authentication from './Components/Authentication/Authentication.jsx';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={true ? <HomePage></HomePage> : <Authentication></Authentication>}>

        </Route>
      </Routes>
    </div >
  );
}

export default App;
