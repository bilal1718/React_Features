import React from "react";


export default function CartItems({renderItems,cartCount}) {
  const totalPrice=renderItems.reduce(
  (total,item)=> total + (item.price) * (item.quantity), 0
  )
  
  return (
    <>
      <div className="card-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-6"> {/* Add col-span to align to the right */}
            <div className="card bg-white shadow">
              <div className="card-body">
                <h5 className="card-title text-lg font-semibold">
                  Subtotal ({cartCount} items): ${totalPrice.toFixed(2)}
                </h5>
                <div className="mb-4">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    id="defaultCheck1"
                  />
                  <label
                    className="text-sm text-gray-700"
                    htmlFor="defaultCheck1"
                  >
                    This order contains a gift
                  </label>
                </div>
                <a href="#" className="btn btn-warning">
                  Proceed to Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="added-cards-container grid grid-cols-1 md:grid-cols-3 gap-4">
      {renderItems.map((product)=> (
          <div key={product.id} className="added-card bg-white shadow">
            <div className="added-card-content p-4">
              <img
                src={product.img}
                alt={product.description}
                className="added-card-image w-16 h-16 object-contain mx-auto mb-2"
              />
              <h5 className="added-card-title text-base font-semibold mb-1">{product.description}</h5>
              <p className="added-card-price text-sm text-gray-600 mb-2 font-bold text-base">Price : ${product.price}</p>
              <p className="added-card-price text-sm text-gray-600 mb-2">Quantity : {product.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
