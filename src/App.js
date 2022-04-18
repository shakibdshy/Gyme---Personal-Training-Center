import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Layout/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Notfound from "./Pages/Error/Notfound";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Footer from "./Layout/Footer/Footer";
import RequireAuth from "./Pages/Login/RequireAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route
          path='/checkout/:checkoutId'
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        {/* <Route path='/checkout/:checkoutId' element={<Checkout />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
