// import "./App.scss";
// import Naav from "./Components/Nav/Header";
// import Home from "./Pages/Home/Home";
// import Cart from "./Pages/Cart/CartItem";
// import Footer from "./Components/Footer/Footer";
// import ErrorPage from "./Pages/ErrorPage/NotFound";
// import ProductDetail from "./Components/ProductDetail/ProductDetail";
// import About from "./Pages/About/About";

// import { Route, Routes } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import WishList from "./Pages/WishList/WishList";

// function App() {
//   return (
//     <div className="App">
//       <Naav />
//       <div className="main">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/wishlist" element={<WishList />} />
//           <Route path="*" element={<ErrorPage />} />
//         </Routes>
//       </div>
//       <Footer />
//       <ToastContainer position="top-right" />
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;

import "./App.scss";
import Naav from "./Components/Nav/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React, { Suspense, lazy } from "react";
import Loader from "./Components/Loader/Loader"; // 👈 Your loading spinner

// ⏳ Lazy loaded pages
const Home = lazy(() => import("./Pages/Home/Home"));
const Cart = lazy(() => import("./Pages/Cart/CartItem"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage/NotFound"));
const ProductDetail = lazy(() => import("./Components/ProductDetail/ProductDetail"));
const About = lazy(() => import("./Pages/About/About"));
const WishList = lazy(() => import("./Pages/WishList/WishList"));

function App() {
  return (
    <div className="App">
      <Naav />
      <div className="main">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
