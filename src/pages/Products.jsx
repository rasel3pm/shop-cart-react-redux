import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
const Products = () => {
  const [products, setProduct] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="flex-column-reverse my-4 d-grid gap-3">
      {products.map((product) => (
        <div key={product.id} className="container ">
          <div className="card p-4 shadow-sm ">
            <div className="text-center">
              <img width={150} height={150} src={product.image} alt="" />
            </div>
            <h5>{product.title}</h5>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
