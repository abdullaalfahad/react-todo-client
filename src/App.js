import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
