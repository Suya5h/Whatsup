import Register from "./Pages/Register";
import LOGIN from "./Pages/Login";
import "./style.scss";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<LOGIN />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
