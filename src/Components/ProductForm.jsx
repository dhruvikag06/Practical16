import { useState } from "react";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const addProduct = (e) => {
    e.preventDefault();

    setProducts([...products, { name, price }]);

    setName("");
    setPrice("");
  };

  return (
    <div>
      <h2>Product Management</h2>

      <form onSubmit={addProduct}>
        <input
          value={name}
          placeholder="Product Name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          value={price}
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">Add Product</button>
      </form>

      {products.map((p, i) => (
        <p key={i}>
          {p.name} - Rs. {p.price}
        </p>
      ))}
    </div>
  );
};

export default ProductForm;