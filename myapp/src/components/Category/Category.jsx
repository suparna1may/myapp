import React from 'react'
import CategoryImg1 from "../../assets/images/category1.jpg"
import CategoryImg2 from "../../assets/images/category2.jpg"
import CategoryImg3 from "../../assets/images/category3.jpg"

function Category() {
    return (
        <>
        <div className="container">
            <div className="pt-md-2 pb-md-6 category-section">
                <h2 className="title title-simple ls-m">Top Categories</h2>
                <div className="row grid">
                    <div className="grid-item col-md-6">
                        <div className="banner banner-fixed content-middle content-center overlay-dark">
                            <a href="demo2-shop.html">
                                <figure>
                                    <img src={CategoryImg1} alt="category" width="585" height="397" />
                                </figure>
                            </a>
                            <div className="banner-content text-center w-100 h-100 d-flex flex-column">
                                <h3 className="banner-title text-uppercase ls-s mb-0">Padded Clothes</h3>
                                <h4
                                    className="banner-subtitle flex-1 font-weight-normal text-capitalize text-body ls-md lh-1 mb-0">
                                    Collection</h4>
                                <div className="btn-group">
                                    <a href="demo2-shop.html"
                                        className="btn btn-white btn-rounded font-weight-semi-bold">Women’s</a>
                                    <a href="demo2-shop.html"
                                        className="btn btn-white btn-rounded font-weight-semi-bold">Men's</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item col-md-6">
                        <div className="row grid">
                            <div className="grid-item col-md-12">
                                <div className="category category-light category-absolute overlay-dark">
                                    <a href="demo2-shop.html">
                                        <figure className="category-media">
                                            <img src={CategoryImg2} alt="category" width="585"
                                                height="205" />
                                        </figure>
                                    </a>
                                    <div className="category-content">
                                        <h4 className="category-name"><a href="demo2-shop.html">Women’s T-Shirt</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item  col-md-12">
                                <div className="category category-light category-absolute overlay-dark">
                                    <a href="demo2-shop.html">
                                        <figure className="category-media">
                                            <img src={CategoryImg3} alt="category" width="585"
                                                height="397"/>
                                        </figure>
                                    </a>
                                    <div className="category-content">
                                        <h4 className="category-name"><a href="demo2-shop.html">Sports & Outdoors</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 grid-space"></div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="banner banner-sale mt-10 mb-10">
                <div className="banner-content">
                    <h4 className="banner-subtitle text-uppercase text-white font-weight-normal lh-1 ls-m mb-0">End
                        Of Season</h4>
                    <hr className="divider mb-2" />
                    <h3 className="banner-title text-uppercase text-white lh-1 mb-0">Sale</h3>
                    <div className="price-rotated">
                        <div className="banner-price-info d-flex align-items-center justify-content-center skrollr">
                            <h5 className="text-uppercase text-white ls-l mb-0">At Up To<br/><span
                                className="text-secondary ls-l">50%</span> Off</h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Category
