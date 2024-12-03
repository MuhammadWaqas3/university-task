import "../../styles/product.css";



 function Product () {



// const {}  = props

    return ( 

<>

{/* <div className="container">
 
      <header className="header">
        <div className="logo">MyLogo</div>
        <nav className="nav">
          <button>Product</button>
          <button>Contact</button>
        </nav>
        <div className="cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="Cart"
          />
        </div>
      </header>

   
      <div className="product-card">
        <div className="left-section">
          <h1 className="product-name">Amazing Product</h1>
        </div>
        <div className="right-section">
          <div className="product-image">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Product"
            />
          </div>
          <h1 className="price">$49.99</h1>
          <div className="counter">
            <button >-1</button>
            <span>+</span>
            <button >+1</button>
          </div>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>

      
      <footer className="footer">
        <p>© 2024 Your Brand - All rights reserved</p>
      </footer>
    </div> */}



<div className="product-card">
      <div className="product-id">id: 12345689</div>
      <div className="product-image">
        <img src="./product-image.svg" alt="Apple iPhone 15 Pro"  className="apple" width={100} />
        <div className="actions">
         

          <img src="./scales.svg " width={20} alt="scales" className="scales" />
          <img src="./btn.svg" width={20} alt="btn" className="btn-img"/></div>
     
      </div>
      <h3 className="product-title">iPhone 15 Pro</h3>
      <div className="ratings">
       <img src="./Rating.svg" width={100} alt="reviews"/> <span className="review-count">(97)</span>
      </div>
      <div className="pricing">
        <span className="original-price">$999.00</span>
        <span className="discount">-10%</span>
      </div>
      <div className="final-price">$899.00</div>
      <button className="add-to-cart"><img src="./Cart.svg" width={20}  /></button>
    </div>

</>

    );
}

export default Product ; 