import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
