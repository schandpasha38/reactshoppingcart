import React from 'react';
import "./Cart.css"



function ShoppingCart() {
    return (
        <div id="shopping-cart">
            <div className="item-wrapper">
                <div className="item">
                    <div id="item-img-promo">
                        <div className="item-image">
                            <img src="https://rukminim1.flixcart.com/image/128/128/j9k8ivk0/pulses/2/w/6/1-toor-dal-arhar-dal-tata-sampann-original-imaezcefmwmbejsa.jpeg?q=70" alt="" />
                        </div>
                        <div className="item-promotxt">
                            <h3>10% Off</h3>
                        </div>
                    </div>
                    <div id="item-details">
                        <div className="product-details">
                            <div className="brand">
                                <h3>Dabar</h3>
                            </div>
                            <div className="product-name">
                                <h4>Chyawanprash - Double Immunity</h4>
                            </div>
                            <div className="quantity">
                                <h4>10</h4>
                            </div>
                            <div className="mrp">
                                <h4>MRP 149</h4>
                            </div>
                            <div className="mrp">
                                <h4>Rs 130</h4>
                            </div>
                        </div>
                        <div className="addtocart">
                            <div className="addtocart-wrap">
                                <button className="addtocart-btn">Add to Cart</button>
                            </div>
                            <div className="qty-wrap">
                                <button className="qty-add">+</button>0<button className="qty-reduce">-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;