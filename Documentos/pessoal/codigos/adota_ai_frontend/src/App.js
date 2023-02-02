import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signIn/signUp/SignUp';
import Pets from './pages/signIn/pets/Pets';
import CreatePet from './pages/signIn/createPet/CreatePet';
import Chat from './pages/signIn/chat/Chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SignIn /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/pets" element={ <Pets /> }/>
        <Route to="/pets/new" element={ <CreatePet /> } />
        <Route to="/chat" element={ <Chat /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
