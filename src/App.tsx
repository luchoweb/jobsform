import { Routes, Route } from "react-router-dom";

import LoginView from "./views/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="*" element={<p>*</p>} />
    </Routes>
  );
}

export default App;
