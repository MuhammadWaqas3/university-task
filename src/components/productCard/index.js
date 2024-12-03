// import "../../styles/product.css";
// import React from "react";

//  function Product (props) {

//   const { id, name, price, url } = props;

//     return (

// <>

// <div className="product-card">
//       <div className="product-id">id: {id}</div>
//       <div className="product-image">
//         <img src={url} alt="Apple iPhone 15 Pro"  className="apple" width={100} />
//         <div className="actions">

//           <img src="./scales.svg " width={20} alt="scales" className="scales" />
//           <img src="./btn.svg" width={20} alt="btn" className="btn-img"/></div>

//       </div>
//       <h3 className="product-title">{name}</h3>
//       <div className="ratings">
//        <img src="./Rating.svg" width={100} alt="reviews"/> <span className="review-count">(97)</span>
//       </div>
//       <div className="pricing">
//         <span className="original-price">$999.00</span>
//         <span className="discount">-10%</span>
//       </div>
//       <div className="final-price">{price}</div>
//       <button className="add-to-cart"><img src="./Cart.svg" width={20}  /></button>
//     </div>

// </>

//     );
// }

// export default Product ;

import "../../styles/product.css";

function Product() {
  return (
    <>
      <div className="product-card">
        <div className="product-id">id: 12345689</div>
        <div className="product-image">
          <img
            src="./product-image.svg"
            alt="Apple iPhone 15 Pro"
            className="apple"
            width={100}
          />
          <div className="actions">
            <img
              src="./scales.svg "
              width={20}
              alt="scales"
              className="scales"
            />
            <img src="./btn.svg" width={20} alt="btn" className="btn-img" />
          </div>
        </div>
        <h3 className="product-title">iPhone 15 Pro</h3>
        <div className="ratings">
          <img src="./Rating.svg" width={100} alt="reviews" />{" "}
          <span className="review-count">(97)</span>
        </div>
        <div className="pricing">
          <span className="original-price">$999.00</span>
          <span className="discount">-10%</span>
        </div>
        <div className="final-price">$899.00</div>
        <button className="add-to-cart">
          <img src="./Cart.svg" width={20} />
        </button>
      </div>
    </>
  );
}

export default Product;
