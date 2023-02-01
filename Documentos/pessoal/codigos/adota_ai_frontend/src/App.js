import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signIn/signUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SignIn /> } />
        <Route path="/signup" element={ <SignUp /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
