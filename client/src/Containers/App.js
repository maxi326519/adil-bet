import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { postLoginUserAuth0, updateRedux } from "../redux/actions/POST/index.js";
import Swal from 'sweetalert2';
import { addBet } from "../redux/actions/POST/index.js";

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
import Cart from "../Components/Cart/Cart.jsx";
import UserActivity from "../Components/MyAccount/userActivity/userActivity.jsx";
import MyAccount from "../Components/MyAccount/MyAccount.jsx";

// Dashboard
import Dashboard from "../Components/Dashboard/Dashboard";
import UsersDashboard from "../Components/Dashboard/UsersDashboard/UsersDashboard.jsx";
import BetsDashboard from "../Components/Dashboard/BetsDashboard/BetsDashboard.jsx";
import MatchesDashboard from "../Components/Dashboard/MatchesDashboard/MatchesDashboard.jsx";
import DepositsDashboard from "../Components/Dashboard/DepositsDashboard/DepositsDashboard.jsx";
import ReviewsDashboard from "../Components/Dashboard/ReviewsDashboard/ReviewsDashboard.jsx";
import WithdrawDashboard from "../Components/Dashboard/WithdrawDashboard/WithdrawDashboard.jsx"

import { ToastContainer, toast } from "react-toastify";

import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch()
  const { user } = useAuth0();
  const cartLocal = JSON.parse(localStorage.getItem('cart'))
  // console.log(cart)

  useEffect(() => {
    const dataUser = JSON.parse(window.localStorage.getItem('user'));
    !dataUser ?
    dispatch(postLoginUserAuth0({ email: user?.email, name: user?.name }))
    :
    dispatch(postLoginUserAuth0({ email: dataUser.email, name: dataUser.name}))
  }, [user]);

  useEffect(()=> {
    if(cartLocal){
      cartLocal.cart.map(e => dispatch(addBet(e)))
    }
  },[])

  useEffect(()=>{
    console.log(error);
    toast(error);
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
          <Route path="/tutorial" element={<Inprocess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/admin" element={<Inprocess />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/payment" element={<Stripe />} />

          {/* DASHBOARD */}
          <Route path="/dashboard" element={ <Dashboard/> }/>
          <Route path="/dashboard/users" element={ <UsersDashboard/> }/>
          <Route path="/dashboard/bets" element={ <BetsDashboard/> }/>
          <Route path="/dashboard/matches" element={ <MatchesDashboard/> }/>
          <Route path="/dashboard/deposits" element={ <DepositsDashboard/> }/>
          <Route path="/dashboard/config" element={ <DepositsDashboard/> }/>
          <Route path="/dashboard/reseñas" element={ <ReviewsDashboard/> }/>
          <Route path="/dashboard/retiros" element={ <WithdrawDashboard/> }/>
        </Routes>
      </BrowserRouter>
{/*       {error.length === 0
        ? null
        : Swal.fire({
            title: "Error!",
            text: "Inténtalo nuevamente",
            icon: "error",
            confirmButtonText: "OK",
          }).then(function () {
            window.location = "/home";
          })} */}
    </div>
  );
}

export default App;