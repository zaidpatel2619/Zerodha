import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { About, Footer, Home, Navbar, NotFound, Pricing, Product, SignUp, Support } from './comp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Product />} />
      <Route path='/pricing/' element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
