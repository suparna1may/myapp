import React from 'react'
import FooterLogo from "../../assets/images/logo-footer.png"
import PaymentLogo from "../../assets/images/payment.png"

function Footer() {
  return (
    <>
      <footer className="footer">
        <div class="container">
          <div class="footer-middle">
            <div class="row">
              <div class="col-lg-4 col-sm-6">
                <div class="widget widget-about">
                  <a href="demo2.html" class="logo-footer mb-4">
                    <img src={FooterLogo} alt="logo-footer" width="150"
                      height="43" />
                  </a>
                  <div class="widget-body">
                    <p class="ls-s">Fringilla urna porttitor rhoncus dolor purus<br />
                      luctus venenatis lectus magna fringilla diam<br />
                      maecenas ultricies mi eget mauris.</p>
                      <img src={PaymentLogo} alt="payment" width="159" height="29" />
                      </div>
                </div>

              </div>
              <div class="col-lg-8">
                <div class="row">
                  <div class="col-lg-4 col-sm-4">
                    <div class="widget">
                      <h4 class="widget-title">About Us</h4>
                      <ul class="widget-body">
                      
                        <li><a href="#">Order History</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Terms &amp; Condition</a></li>
                      </ul>
                    </div>

                  </div>
                  <div class="col-lg-4 col-sm-4">
                    <div class="widget">
                      <h4 class="widget-title">Customer Service</h4>
                      <ul class="widget-body">
                        <li><a href="#">Payment Methods</a></li>
                        <li><a href="#">Money-back Guarantee!</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                      </ul>
                    </div>

                  </div>
                  <div class="col-lg-4 col-sm-4">
                    <div class="widget">
                      <h4 class="widget-title">My Account</h4>
                      <ul class="widget-body">
                        <li><a href="#">Sign In</a></li>
                        <li><a href="cart.html">View Cart</a></li>
                        <li><a href="wishlist.html">My Wishlist</a></li>
                        
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-bottom justify-content-center">
          
            <div class="footer-center">
              <p class="copyright text-center">STORE eCommerce &copy; 2021. All Rights Reserved</p>
            </div>
         
          </div>

        </div>
      </footer>

    </>
  )
}

export default Footer
