import "./index.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Cart from "./components/cart/Cart";
import { Provider } from "react-redux";

import AdminPanel from "./components/AdminPanel";
import store from "./store/index";
import PrivateRoute from "./routes/PrivateRoute";
import AddProducts from "./components/AddProducts";
import EditProduct from "./components/EditProduct";

const App = () => {
  return (
    <div>
      <Provider store={store}>
      
      <Router>
        <Routes>
            <Route path="/dashboard" element={<PrivateRoute><AdminPanel/></PrivateRoute>} />
            <Route path="/addProduct" element={<PrivateRoute><AddProducts/></PrivateRoute>} />
              <Route path="/editProduct" element={<PrivateRoute><EditProduct/></PrivateRoute>} /> 
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
      
      </Provider>
    </div>
  );
};

export default App;
