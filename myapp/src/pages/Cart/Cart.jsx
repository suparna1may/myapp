import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import { useDispatch, useSelector }  from "react-redux";
import { decreaseItemQuantity, getCartTotal, increaseItemQuantity, removeItem } from '../../redux/data/cartSlice';


function Cart() {

    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCartTotal());
    }, [cart]);

    return (
        <>
            <Layout>

                <main className="main cart">
                    <div className="page-content pt-7 pb-10">

                        <div className="container mt-7 mb-2">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 pr-lg-4">
                                    <table className="shop-table cart-table">
                                        <thead>
                                            <tr>
                                                <th><span>Product</span></th>
                                              
                                               
                                                <th><span>quantity</span></th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {cart?.map((data) => (

                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <figure>
                                                           
                                        <img src={data.src} width="100" height="100" alt="product" />
                                                          
                                                        </figure>
                                                    </td>
                                                 
                                               
                                                    <td className="product-quantity">
                                                        <div className="input-group">
                                                            <button className="quantity-minus d-icon-minus"  onClick={() =>
                              dispatch(decreaseItemQuantity(data.id))
                            }></button>
                                                            <input className="quantity form-control" value={data.quantity}  onChange={() => null} type="number" min="1"
                                                                max="1000000" />

                                                            <button className="quantity-plus d-icon-plus" onClick={() =>
                              dispatch(increaseItemQuantity(data.id))
                            }></button>
                                                        </div>
                                                    </td>
                                                    <td className="product-price">
                                                        <span className="amount">${data.price}</span>
                                                    </td>
                                                    <td className="product-close">
                                                        <a  onClick={() => dispatch(removeItem(data.id))} className="product-remove" title="Remove this product">
                                                            <i className="d-icon-close"></i>
                                                        </a>
                                                    </td>
                                                </tr>

                                            ))
                                            }



                                        </tbody>
                                    </table>
                                    <div className="cart-actions mb-6 pt-4">
                                        <a href="shop.html" className="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4"><i
                                            className="d-icon-arrow-left"></i>Continue Shopping</a>
                                        <button type="submit"
                                            className="btn btn-outline btn-dark btn-md btn-rounded btn-disabled">Update
                                            Cart</button>
                                    </div>

                                </div>
                                <aside className="col-lg-4 sticky-sidebar-wrapper">
                                    <div className="sticky-sidebar" data-sticky-options="{'bottom': 20}">
                                        <div className="summary mb-4">
                                            <h3 className="summary-title text-left">Cart Total({totalQuantity})</h3>

                                            <table className="total">
                                                <tr className="summary-subtotal">
                                                    <td>
                                                        <h4 className="summary-subtitle">Total</h4>
                                                    </td>
                                                    <td>
                                                        <p className="summary-total-price ls-s">${totalPrice.toFixed(2)}</p>
                                                    </td>
                                                </tr>
                                            </table>
                                            <a href="checkout.html" className="btn btn-dark btn-rounded btn-checkout">Proceed to
                                                checkout</a>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>

                </main>

            </Layout>
        </>
    )
}

export default Cart
