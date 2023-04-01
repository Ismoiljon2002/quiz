import NavbarComponent from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminLogin from "./pages/AdminLogin";
import SignInPage from "./pages/LoginPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import Quiz from "./components/Quiz";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Router>
        <Routes>
          {/* <Route path="/" element={<h1>Hello World</h1>} /> */}
          <Route path="/" element={<SignInPage />} />
          <Route path="/auth/hidden-admin/login" element={<AdminLogin />} />
          <Route path="/auth/forgot-password" element={<ForgetPasswordPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/userData" element={"userdata"} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;