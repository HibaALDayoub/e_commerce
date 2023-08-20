import "./App.css"
import Header from "./common/Header/Header"
import {
  Routes,
  Route
} from "react-router-dom";
import Pages from "./pages/Pages";
import Login from "./login/Login";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import Cart from "./common/Header/cart/Cart";
import SignIn from "./login/SignIn";
import Navbar from "./common/Header/Navbar";

function App() {
  return (
    <ShoppingCartProvider>
        <Header />
        <Routes>
              <Route path="/" element={<><Pages /></>} />
              <Route path="/logIn" element={<><Login /></>}/>
              <Route path="/signup/logIn" element={<><Login /></>}/>
              <Route path="/cart" element={<><Cart /></>}/>
              <Route path="/logIn/signup" element={<><SignIn /></>}/>
        </Routes>
    </ShoppingCartProvider>
  )
}
export default App















