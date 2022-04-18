import dog1 from "./../asserts/images/dog1.png";
import { BsHeartFill } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { RiEBikeLine } from "react-icons/ri";
import './../asserts/styles/product/product.css'
export default function ProductCard() {
  return (
    <div className="product-card">
      <img src={dog1} alt="" className="product-image" />

      <div className="pd-group">
        <div className="pd-info-list">
          <FaCartArrowDown />
          <BsHeartFill className="heart" fill="red" />
        </div>
        <div className="pd-info-list">Breed: Some breed</div>
        <div className="pd-info-list">
          <span>Age: 2 years </span>
          <span>
            <RiEBikeLine />
            <small>free delivery</small>
          </span>
        </div>
        <div className="pd-info-list">Gender: Male</div>

        <fieldset>
          <legend className="product-legend">Price</legend>
          <p className="pd-price">
            <span className="discount"> $73,000</span>
            <span className="cost"> $43,000</span>
          </p>
        </fieldset>
      </div>
      <button className="btn-primary-square">Adopt</button>
    </div>
  );
}
