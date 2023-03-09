import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import SignIn from './pages/components/signIn/SignIn';
import SignUp from './pages/components/signUp/SignUp';
import Pets from './pages/components/pets/Pets';
import CreatePet from './pages/components/createPet/CreatePet';
import Chat from './pages/components/chat/Chat';

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
