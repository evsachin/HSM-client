import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Service from "./pages/service/Services";
import PublicLayout from "./layouts/PublicLayout";
import ServiceMan from "./pages/ServiceMan.jsx/ServiceMan";
import AboutUs from "./pages/aboutus/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/:id" element={<ServiceMan />} />
          <Route path="/servicemen/:serviceType" element={<ServiceMan />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
