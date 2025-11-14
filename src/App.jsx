import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LenisProvider from "./components/LenisProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";

export default function App() {
    return (

            <Router>

                {/* 🌿 Tartalom */}
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/aszf" element={<Terms />} />
                    <Route path="/adatkezeles" element={<Privacy />} />
                </Routes>
                <Footer />
            </Router>

    );
}
