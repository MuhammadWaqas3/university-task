import "../../styles/product.css";



export default function Product (props) {



const {}  = props

    return ( 

<>

<div className="container">
      {/* Top Navigation */}
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

      {/* Main Product Section */}
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

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Your Brand - All rights reserved</p>
      </footer>
    </div>



</>

    );
}