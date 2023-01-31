import './App.css';
import { BrowserRouter, Routes, Route , useParams} from "react-router-dom";
import Home from "./Pages/Home/Home"
import Contact from './Pages/Contact/Contact';
import Products from './Pages/Products/Products';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUp from './Pages/SignupPage/SignUp';
import Test from '../src/Pages/Test/Test'
import ItemHolder from "./Pages/ItemHolder"
import Cart from './Pages/Cart/Cart';

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        {/* <Route path="about" element={<About />}/> */}
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="test" element={<Test />} />
        <Route path="products/:id" element={<ItemHolder/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>

  );

  
}



export default App;
