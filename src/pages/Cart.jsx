import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeTocart } from "../redux/slice/cartSlice";
const Cart = () => {
  const cartProduct = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="row my-3">
        <div className="col-md-8 ">
          {cartProduct.map((product) => (
            <div key={product.id}>
              <div className="card p-4 shadow-sm ">
                <div className="d-flex gap-3 item-center">
                  <img width={100} height={100} src={product.image} alt="" />
                  <h6>{product.title}</h6>
                  <br />
                  <p>Price : {product.price}</p>
                  <button
                    onClick={() => dispatch(removeTocart())}
                    className="btn btn-sm btn-outline-primary"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="border p-4 shadow">
            <h6>Order Summary</h6>
            <div className="d-flex justify-content-between">
              <span>SubTotal</span>
              <span>5541</span>
            </div>
            <div className="d-flex justify-content-between">
              <span> Shipping Fee</span>
              <span>100</span>
            </div>
            <div className="d-flex justify-content-between my-3">
              <h6> Total</h6>
              <h6 className="text-danger">500</h6>
            </div>
            <button className="btn btn-danger w-100">
              Process To checkOut
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
