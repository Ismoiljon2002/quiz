import NavbarComponent from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminLogin from "./pages/AdminLogin";
import SignInPage from "./pages/LoginPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import QuizPage from "./pages/QuizPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import AdminSignUp from "./pages/AdminSignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />

        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/auth/hidden-admin/login" element={<AdminLogin />} />
          <Route path="/auth/hidden-admin/signup" element={<AdminSignUp />} />
          <Route path="/auth/forgot-password" element={<ForgetPasswordPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;