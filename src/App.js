import './App.css';
import Header from './view/Header';
import { Routes, Route } from "react-router-dom";
import LoginView from './view/LoginView';
import ProfileView from './view/ProfileView';
import TranslationView from './view/TranslationView';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<LoginView />} />
        <Route path='/translation' element={<TranslationView />} />
        <Route path='/profile/' element={<ProfileView />} />
        {/* <Route path='/profile/:id' element={<ProfileView />} /> */}
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
