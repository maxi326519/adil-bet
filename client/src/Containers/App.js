import { Route } from 'react-router-dom';

import Landing from '../Components/Landing/Landing.jsx';
import Home from '../Components/Home/Home.jsx';
import Promotions from '../Components/Promotions/Promotions.jsx';
import About from '../Components/About/About.jsx';
import Dashboard from '../Components/Dashboard/Dashboard.jsx';
import Login from '../Components/Login/Login.jsx';
import Singin from '../Components/Singin/Singin.jsx';
import Inprocess from '../Components/Inprocess/Inprocess.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={Landing}/>
      <Route exact path='/home' render={Home}/>
      <Route exact path='/about' render={Inprocess}/>
      <Route exact path='/promotions' render={Inprocess}/>
      <Route exact path='/login' render={Login}/>
      <Route exact path='/singin' render={Singin}/>
      <Route exact path='/admin' render={Inprocess}/>
    </div>
  );
}

export default App;
