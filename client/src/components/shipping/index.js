import React from 'react';
import ShippingStyles from './ShippingStyles';
import { truck, pickup } from '../../assets/images';

const Shipping = (props) => {
  return (
    <ShippingStyles>
      <div className="first">
        <div className="sub">
          <input className="radio" type="radio" />
          <span>Get it Shipped</span>
          <p className="shipping-info">You're only $50.00 away from Free Shipping.</p>
          <a href='#'>Shipping and Returns</a>
        </div>
        <div>
          <img className="icons" src={"https://grubini-images.s3.amazonaws.com/icons/truck.png"} />
        </div>
      </div>
      <div id="divider"></div>
      <div className="second">
        <div className="sub">
          <input className="radio" type="radio" />
          <span>Reserver & Pick Up</span>
          <p className="shipping-info">Select to see availability at <span>Reston</span></p>
        </div>
        <div>
          <img className="icons" src={"https://grubini-images.s3.amazonaws.com/icons/pickup.png"} />
        </div>
      </div>
    </ShippingStyles>
  );
};

export default Shipping;