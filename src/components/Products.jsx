import React from 'react'
import product1 from '../../public/product 1.jpeg'
import product2 from '../../public/product 2.jpeg'
import product3 from '../../public/product 3.jpg'
import product4 from '../../public/product 4.jpg'

function Products() {
  return (
    <section className="products" id="products">
      <h1 className="heading"> Latest <span>Products</span> </h1>
      <div className="box-container">


        <div className="box">
          <span className="discount">-10%</span>
          <div className="image">
            <img src={product1} alt="Flower" />
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <button className="cart-btn">add to cart</button>
              <a href="#" className="fas fa-share"></a>
            </div>
          </div>
          <div className="content">
            <h3>flower card</h3>
            <div className="price">$12 <span>$15</span></div>
          </div>
        </div>

        <div className="box">
          <span className="discount">-15%</span>
          <div className="image">
            <img src={product2} alt="Flower" />
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <button className="cart-btn">add to cart</button>
              <a href="#" className="fas fa-share"></a>
            </div>
          </div>
          <div className="content">
            <h3>rose cup</h3>
            <div className="price">$18 <span>$20</span></div>
          </div>
        </div>
        
        <div className="box">
          <span className="discount">-20%</span>
          <div className="image">
            <img src={product3} alt="Flower" />
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <button className="cart-btn">add to cart</button>
              <a href="#" className="fas fa-share"></a>
            </div>
          </div>
          <div className="content">
            <h3>spring bouquet</h3>
            <div className="price">$22 <span>$28</span></div>
          </div>
        </div>

        <div className="box">
          <span className="discount">-12%</span>
          <div className="image">
            <img src={product4} alt="Flower" />
            <div className="icons">
              <a href="#" className="fas fa-heart"></a>
              <button className="cart-btn">add to cart</button>
              <a href="#" className="fas fa-share"></a>
            </div>
          </div>
          <div className="content">
            <h3>peony box</h3>
            <div className="price">$30 <span>$34</span></div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Products
