import React from 'react'
import BannerImg from "../../assets/images/ban1.jpg"
import Arrivalimg1 from "../../assets/images/arrival1.jpg"
import Arrivalimg2 from "../../assets/images/arrival2.jpg"
import { Link } from 'react-router-dom'


function Banner() {
  return (
    <>
      <div className="container">
        
        <div className="row">
          <div className="col-12 mb-4">
            <div className="banner banner-fixed intro-slide1 content-center content-middle">
              <figure>
                <img src={BannerImg} alt="intro-banner" width="1180" height="600" />
              </figure>
              <div className="banner-content">
                <h4 className="banner-subtitle font-weight-semi-bold text-white ls-normal lh-1 mb-0 text-uppercase text-left slide-animate">
                  Men’s wear</h4>
                <h2 className="banner-title text-uppercase text-white slide-animate">
                  Collection</h2>
                <h5 className="font-weight-normal text-white lh-1 ls-normal text-right mb-1 slide-animate">
                  Start at <span className="text-secondary font-weight-bold">$19.99</span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="banner banner-fixed intro-banner intro-banner1 content-middle">
              <figure>
                <img src={Arrivalimg1} width="580" height="249" alt="banner" />
              </figure>
              <div className="banner-content">
                <h4
                  className="banner-subtitle ls-normal text-white text-uppercase font-weight-normal lh-1">
                  New Arrivals</h4>
                <h3 className="banner-title text-white font-weight-bold ls-md">
                  Women's Sale
                </h3>
                <Link to="/Shop" className="btn btn-white btn-link btn-underline font-weight-semi-bold">Shop
                  Now <i className="d-icon-arrow-right"></i></Link>
                
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="banner banner-fixed intro-banner intro-banner2 content-middle">
              <figure>
                <img src={Arrivalimg2} width="580" height="249" alt="banner" />
              </figure>
              <div className="banner-content">
                <h4
                  className="banner-subtitle ls-normal text-white text-uppercase font-weight-normal lh-1">
                  Trending</h4>
                <h3 className="banner-title text-white font-weight-bold ls-md">
                  New Sneaker
                </h3>
                <Link to="/Shop" className="btn btn-white btn-link btn-underline font-weight-semi-bold">Shop
                  Now <i className="d-icon-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}


export default Banner
