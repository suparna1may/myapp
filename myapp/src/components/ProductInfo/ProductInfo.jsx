import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItemToCart } from '../../redux/data/cartSlice';
import Layout from '../Layout/Layout'

function ProductInfo() {

  const { productId } = useParams(); 
    const product = useSelector((state) =>
        state.allCart.items.find((item) => item.id === parseInt(productId)) 
    );

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    const updatedProduct = { ...product, quantity };
    dispatch(addItemToCart(updatedProduct));
    alert('Product added to cart');
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  
  
  return (
    <>
  <Layout>
    {
      <div className="main mt-6 single-product">
      <div className="page-content mb-10 pb-6">
        <div className="container">
          <div className="product product-single row mb-2">
            <div className="col-md-5">
              <figure className="product-image">
                    <img src={product.src} alt={product.name}/>
              </figure>             
            </div>
            <div className="col-md-7">
              <div className="product-details">
            
                <h1 className="product-name">{product.name}</h1>
                <div className="product-meta">
                  SKU: <span className="product-sku">12345670</span>
                  BRAND: <span className="product-brand">The Northland</span>
                </div>
                <div className="product-price mb-2">${product.price}</div>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings"></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href="#product-tab-reviews" className="link-to-tab rating-reviews">( 6 reviews )</a>
                </div>
              
                <hr className="product-divider"/>

                <div className="product-form product-qty">
                  <div className="product-form-group">
                    <div className="input-group mr-2">
					            <button className="quantity-minus d-icon-minus" onClick={handleDecrease}></button>
                        <input value={quantity} className="quantity form-control" type="number" readOnly/>
                      <button className="quantity-plus d-icon-plus" onClick={handleIncrease}></button>
                      </div>
                      <button onClick={handleAddToCart} className="btn-product btn-cart text-normal ls-normal font-weight-semi-bold">  
                       <i className="d-icon-bag"></i>Add to Cart</button>
                  </div>
                </div>

                <hr className="product-divider mb-3"/>

                <div className="product-footer">             
                  <div className="product-action">
                    <a href="#" className="btn-product btn-wishlist mr-6"><i
                        className="d-icon-heart"></i>Add to
                      wishlist</a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
      
    </div>
    }
  
  </Layout>
  
      
    </>
  )
}

export default ProductInfo
