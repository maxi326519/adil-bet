import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
// Componentes
import Landing from "../Components/Landing/Landing.jsx";
import Home from "../Components/Home/Home.jsx";
import Promotions from "../Components/Promotions/Promotions.jsx";
import About from "../Components/About/About.jsx";
import Login from "../Components/Login/Login.jsx";
import Signin from "../Components/Signin/Signin.jsx";
import Inprocess from "../Components/Inprocess/Inprocess.jsx";
// Dashboard
import Dashboard from "../Components/Dashboard/Dashboard";
import UsersDashboard from "../Components/Dashboard/UsersDashboard/UsersDashboard.jsx";
import BetsDashboard from "../Components/Dashboard/BetsDashboard/BetsDashboard.jsx";
import MatchesDashboard from "../Components/Dashboard/MatchesDashboard/MatchesDashboard.jsx";
import DepositsDashboard from "../Components/Dashboard/DepositsDashboard/DepositsDashboard.jsx";
import UserActivity from "../Components/userActivity/userActivity.jsx";
import MyAccount from "../Components/MyAccount/MyAccount.jsx";

import "./App.css";
import MatchDetails from "../Components/MatchDetails/MatchDetails.jsx";

function App() {
  const error = useSelector((state) => state.error);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* CLIENT PAGE */}
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Inprocess />} />
          <Route path="/details/:id" element={<MatchDetails />} />
          <Route path="/promotions" element={<Inprocess />} />
          <Route path="/tutorial" element={<Inprocess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/admin" element={<Inprocess />} />
          <Route path="/myaccount" element={<MyAccount />} />
          {/*       <Route path='/loginout' element={<Header/>}/> */}
        </Routes>
      </BrowserRouter>
      {/* {error.length === 0
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
