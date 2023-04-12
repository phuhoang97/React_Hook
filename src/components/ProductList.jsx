import React, { useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);

  return (
    <div>
      ProductList
      <div>
        {products.map((e) => {
          return (
            <ul>
              <li>
                {e.name}: ${e.price}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
