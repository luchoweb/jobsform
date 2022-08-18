import { Routes, Route } from "react-router-dom";

import LoginView from "./views/login";
import NotFoundView from "./views/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
