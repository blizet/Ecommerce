import React from 'react';
import { Routes ,Route ,Navigate} from 'react-router-dom'; 
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';
import Signup from '../pages/Signup';
import ProtectedRoutes from './ProtectedRoutes';


                                                                     
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='home'/>} />
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<ProtectedRoutes>
          <Checkout/></ProtectedRoutes>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='checkout/login' element={<Login/>}/>
    </Routes>
  )
}

export default Routers