import Landing from '../Components/Landing/Landing.jsx';
import Home from '../Components/Home/Home.jsx';
import Promotions from '../Components/Promotions/Promotions.jsx';
import About from '../Components/About/About.jsx';
import Dashboard from '../Components/Dashboard/Dashboard.jsx';
import Login from '../Components/Login/Login.jsx';
import Signin from '../Components/Signin/Signin.jsx';
import Inprocess from '../Components/Inprocess/Inprocess.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<Inprocess/>}/>
      <Route path='/promotions' element={<Inprocess/>}/>
      <Route path='/tutorial' element={<Inprocess/>}/>
      <Route path='/login' element={<Inprocess/>}/>
      <Route path='/signin' element={<Inprocess/>}/>
      <Route path='/admin' element={<Inprocess/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
