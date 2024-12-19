import React from 'react'
import indeximages from '../../pages/Home/ProductsImage'

function ProductThumb() {
    return (
        <>

            <section className="mt-10 pt-3 mb-6">
                <div class="container">
                    <h2 className="title title-simple title-center ls-m">Best Selling</h2>
                    <div className="product-wrapper row">

                        {indeximages.map(({ id, src, name, price, category }) =>
                            <div className="col-lg-3 col-md-4 col-6 mb-4">
                                <div className="product">
                                    <figure className="product-media">
                                        <a href="demo2-product.html">
                                            <img src={src} alt="Blue Pinafore Denim Dress"
                                                width="280" height="315" />
                                        </a>
                                        <div className="product-label-group">
                                            <label className="product-label label-new">new</label>
                                        </div>
                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-cart" data-toggle="modal"
                                                data-target="#addCartModal" title="Add to cart"><i
                                                    className="d-icon-bag"></i></a>
                                            <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i
                                                className="d-icon-heart"></i></a>
                                        </div>
                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                                                View</a>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="product-cat">
                                            <a href="demo2-shop.html">{category}</a>
                                        </div>
                                        <h3 className="product-name">
                                            <a href="demo2-product.html">{name}</a>
                                        </h3>
                                        <div className="product-price">
                                            <span className="price">{price}</span>
                                        </div>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" ></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="demo2-product.html" className="rating-reviews">( 12 reviews )</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>

        </>
    )
}

export default ProductThumb
