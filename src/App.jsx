import "./App.css";

import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import UnderConstruction from "./common/under-construction";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import LandingPage from "./components/landing-page";
import { ROUTESCONSTANTS } from "./constants/Routes";
import ForgotPassword from "./pages/auth/forgot-password";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import HomePage from "./pages/home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path={ROUTESCONSTANTS.login} element={<Login />} />
        <Route path={ROUTESCONSTANTS.register} element={<Register />} />
        <Route
          path={ROUTESCONSTANTS.forgetPassword}
          element={<ForgotPassword />}
        />

        <Route
          path={ROUTESCONSTANTS.tracking}
          element={<UnderConstruction />}
        />
        <Route path={ROUTESCONSTANTS.reports} element={<UnderConstruction />} />
        <Route
          path={ROUTESCONSTANTS.operation}
          element={<UnderConstruction />}
        />
        <Route path={ROUTESCONSTANTS.admin} element={<UnderConstruction />} />
        <Route
          path={ROUTESCONSTANTS.accounting}
          element={<UnderConstruction />}
        />
        <Route
          path={ROUTESCONSTANTS.serviceCharge}
          element={<UnderConstruction />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
