import React from "react";
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import data from "./data"
import CartItems from "./Components/CartItems"
import {BrowserRouter,Routes,Route} from "react-router-dom"


export default function App(){
  const [cartCount,setCartCount]=React.useState(0);

  const updateCartCount=()=>{
    const cartData=data.filter((product)=> product.inCart);
    const count=cartData.reduce((total, product) => total + product.quantity, 0)
    setCartCount(count);
  }
  
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home cartCount={cartCount} updateCartCount={updateCartCount} />} />
   <Route path="/cart/*" element={<CartLayout cartCount={cartCount} />} />

    </Routes>
  
  </BrowserRouter>
  )
}
function Home({cartCount,updateCartCount}){
  return(
    <div>
        <Navbar cartCount={cartCount} />
        <Card updateCartCount={updateCartCount} />
    </div>
  )
}

function CartLayout({cartCount}){
  const renderItems=data.filter((product)=> product.inCart)
  return(
   <CartItems renderItems={renderItems} cartCount={cartCount} />
  )
}