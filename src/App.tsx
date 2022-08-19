import { Routes, Route } from "react-router-dom";

// Views
import LoginView from "./views/login";
import NotFoundView from "./views/404";
import DashboardView from "./views/private/dashboard";

// Forms
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ResetPwdForm from "./components/ResetPwdForm";

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
        path="/dashboard"
        element={ <DashboardView /> }
      />
      <Route
        path="*"
        element={ <NotFoundView /> }
      />
    </Routes>
  );
}

export default App;
