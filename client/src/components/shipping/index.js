import React from 'react';
import ShippingStyles from './ShippingStyles';
import { truck, pickup } from '../../assets/images';

const Shipping = (props) => {
  return (
    <ShippingStyles>
      <div className="first">
        <div className="sub">
          <input className="radio" type="radio" />
          <strong>Get it Shipped</strong>
          You're only $50.00 away from Free Shipping.
        <a href='#'>Shipping and Returns</a>
        </div>
        <div>
          <img className="icons" src={truck} />
        </div>
      </div>
      <div id="divider"></div>
      <div className="second">
        <div className="sub">
          <input className="radio" type="radio" />
          <strong>Reserver & Pick Up</strong>
        Select to see availability at <strong>Reston</strong>
        </div>
        <div>
          <img className="icons" src={pickup} />
        </div>
      </div>
    </ShippingStyles>
  );
};

export default Shipping;