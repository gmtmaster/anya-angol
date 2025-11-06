import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LenisProvider from "./components/LenisProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

export default function App() {
    return (

            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
                <Footer />
            </Router>

    );
}
