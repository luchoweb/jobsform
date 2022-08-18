import { Routes, Route } from "react-router-dom";

// Login
import LoginView from "./views/login";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ResetPwdForm from "./components/ResetPwdForm";

import NotFoundView from "./views/404";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoginView
            typeForm={ <LoginForm /> }
          />
        }
      />
      <Route
        path="/register"
        element={
          <LoginView
            typeForm={ <RegisterForm /> }
          />
        }
      />
      <Route
        path="/reset-passwd"
        element={
          <LoginView
            typeForm={ <ResetPwdForm /> }
          />
        }
      />
      <Route
        path="*"
        element={ <NotFoundView /> }
      />
    </Routes>
  );
}

export default App;
