import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  postLoginUserAuth0,
  updateRedux,
} from "../redux/actions/POST/index.js";

// Componentes
import Landing from "../Components/Landing/Landing.jsx";
import Home from "../Components/Home/Home.jsx";
import Promotions from "../Components/Promotions/Promotions.jsx";
import About from "../Components/About/About.jsx";
import Login from "../Components/Login/Login.jsx";
import Signin from "../Components/Signin/Signin.jsx";
import Inprocess from "../Components/Inprocess/Inprocess.jsx";
import Stripe from "../Components/Stripe/Stripe";
import MatchDetails from "../Components/MatchDetails/MatchDetails.jsx";
import MyAccount from "../Components/MyAccount/MyAccount.jsx";
import PoliticasDePrivacidad from "../Components/Footer/PoliticaDePrivacidad/PoliticaDePrivacidad.jsx";
import TerminosYcondiciones from "../Components/Footer/TerminosYcondiciones/TerminosYcondiciones.jsx";
import Tutorial from "../Components/Tutorial/Tutorial.jsx";

// Dashboard
import Dashboard from "../Components/Dashboard/Dashboard";
import UsersDashboard from "../Components/Dashboard/UsersDashboard/UsersDashboard.jsx";
import BetsDashboard from "../Components/Dashboard/BetsDashboard/BetsDashboard.jsx";
import MatchesDashboard from "../Components/Dashboard/MatchesDashboard/MatchesDashboard.jsx";
import DepositsDashboard from "../Components/Dashboard/DepositsDashboard/DepositsDashboard.jsx";
import ReviewsDashboard from "../Components/Dashboard/ReviewsDashboard/ReviewsDashboard.jsx";
import WithdrawDashboard from "../Components/Dashboard/WithdrawDashboard/WithdrawDashboard.jsx";

import { ToastContainer, toast } from "react-toastify";

import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { getMatchs2 } from "../redux/actions/GET/index.js";

function App() {
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const { user } = useAuth0();

  useEffect(() => {
    const dataUser = JSON.parse(window.localStorage.getItem("user"));
    const cart = window.localStorage.getItem("cart")
      ? JSON.parse(window.localStorage.getItem("cart"))
      : null;

    //----------------------------------------

    dispatch(getMatchs2())

    //----------------------------------------
    
    if (!(cart === null)) {
      if (cart.amount) {
        dispatch(updateRedux([cart]));
      } else {
        const savecart = [];
        Object.entries(cart).map(e => {
          savecart.push(e[1])
        })
        dispatch(updateRedux(savecart));
      }
    }
    !dataUser
      ? dispatch(postLoginUserAuth0({ email: user?.email, name: user?.name }))
      : dispatch(
          postLoginUserAuth0({ email: dataUser.email, name: dataUser.name })
        );
  }, [user]);

  useEffect(()=>{
    if(error !== '') toast(error);
  },[error]);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* CLIENT PAGE */}
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<MatchDetails />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/admin" element={<Inprocess />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/payment" element={<Stripe />} />
          <Route
            path="/politicasdeprivacidad"
            element={<PoliticasDePrivacidad />}
          />
          <Route
            path="/terminosycondiciones"
            element={<TerminosYcondiciones />}
          />

          {/* DASHBOARD */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users" element={<UsersDashboard />} />
          <Route path="/dashboard/bets" element={<BetsDashboard />} />
          <Route path="/dashboard/matches" element={<MatchesDashboard />} />
          <Route path="/dashboard/deposits" element={<DepositsDashboard />} />
          <Route path="/dashboard/config" element={<DepositsDashboard />} />
          <Route path="/dashboard/reseñas" element={<ReviewsDashboard />} />
          <Route path="/dashboard/retiros" element={<WithdrawDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
