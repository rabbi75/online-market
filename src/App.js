import "./App.css";
import Login from "./component/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import AddProduct from "./component/AddProduct";
import UpdateProduct from "./component/UpdateProduct";
import ProductList from "./component/ProductList";
import SearchProduct from "./component/SearchProduct";
// import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/update/:id" element={<UpdateProduct />}></Route>
          <Route path="/search/" element={<SearchProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
