import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout'

function ProductInfo() {

	const { productId } = useParams(); // Get the product ID from the URL
    const product = useSelector((state) =>
        state.allCart.items.find((item) => item.id === parseInt(productId)) // Find the product by ID
    );

    if (!product) {
        return <div>Product not found</div>;
    }
	
  return (
    <>
	<Layout>
	<div className="main mt-6 single-product">
			<div className="page-content mb-10 pb-6">
				<div className="container">
					<div className="product product-single row mb-2">
						<div className="col-md-6">
							<figure className="product-image">
										<img src={product.src} alt="Blue Pinafore Denim Dress"/>
									</figure>							
						</div>
						<div className="col-md-6">
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
								<p className="product-short-desc">Sed egestas, ante et vulputate volutpat, eros pede semper
									est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus
									adipiscing.</p>

								<hr className="product-divider"/>

								<div className="product-form product-qty">
									<div className="product-form-group">
										<div className="input-group mr-2">
											<button className="quantity-minus d-icon-minus"></button>
											<input className="quantity form-control" type="number" min="1" max="1000000"/>
											<button className="quantity-plus d-icon-plus"></button>
										</div>
										<button  onClick={() => alert('Added to Cart')} className="btn-product btn-cart text-normal ls-normal font-weight-semi-bold">
											<i className="d-icon-bag"></i>Add to
											Cart</button>
									</div>
								</div>

								<hr className="product-divider mb-3"/>

								<div className="product-footer">
								
									<span className="divider d-lg-show"></span>
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
	</Layout>
  
      
    </>
  )
}

export default ProductInfo
