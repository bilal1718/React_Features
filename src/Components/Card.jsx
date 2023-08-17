import React from "react";
import Carddata from "../data.jsx";

export default function Card( { updateCartCount } ) {
  const [data,setData]=React.useState(Carddata)

  const handleAddToCart=(productId) => {
    const Updatedata=data.map(product => {
      if(product.id===productId){
        product.quantity += 1;
        product.inCart=true;
      }
      return product
    })
    setData(Updatedata)
    updateCartCount();
  }

  const handleRatingClick=(productId,rating)=>{
    const Updatedata=data.map(product => {
      if(productId === product.id){
        product.rating=rating
      }
      return product
  })
  setData(Updatedata)
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 mt-8">
      {Carddata.map((product) => (
        <div
          key={product.id}
          className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          style={{ maxWidth: "390px" }} // Adjust the max width as needed
        >
          <a href="#">
            <img
              className="p-4 rounded-t-md h-40 md:h-56 object-cover"
              src={product.img}
              alt="product image"
            />
          </a>
          <div className="px-3 py-2">
            <a href="#">
              <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                {product.description}
              </h5>
            </a>
            <div className="flex items-center mt-1 mb-2">
            {[...Array(5)].map((_, index) => (
              <span key={index}
               className={index < product.rating ? "starActive" : "star"}
               onClick={()=> handleRatingClick(product.id, index + 1)}>
                &#9733;
              </span>
              ))}
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
              {product.rating}.0
              </span>
              
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              <a onClick={() => handleAddToCart(product.id)}
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
