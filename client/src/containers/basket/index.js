import React, { Component } from 'react';
import BasketStyles from './BasketStyles';
import { star, heart, empty } from '../../assets/images';

class Basket extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name = '',
      price = 0,
      code = '',
      reviews = '93',
      loves = '9.2K'
    } = this.props.product;
    return (
      <BasketStyles>
        <div className="one">
          <div className="subOne">
            <label className="product">{this.props.brand_name}</label>
            <div className="product-title">
              <p>{name}</p>
              <p className="item-number">ITEM {code}</p>
            </div>
          </div>
          <div className="subTwo">
            <div className="flowingOne">
              {
                [1, 2, 3, 4, 5].map((el, index) => <img className="star" key={`index-${index}`} src={star} />)
              }
              <span className="fontOne ranking">{reviews} reviews</span>
            </div>
            |
            <div className="flowingTwo">
              <img className="heart" src={"https://grubini-images.s3.amazonaws.com/icons/heart.png"} />
              <span className="ranking">{loves} loves</span>
            </div>
          </div>
          <p className="limited">limited - edition . exclusive</p>
        </div>
        <div className="two">
          <p className="product">${Number.parseFloat(price).toFixed(2)}</p>
          <p className="product-title">($150.00 value)</p>
          <div className="interest">
            <p>Pay in 4 interest-free</p>
            <p>payments of $24.75</p>
          </div>
          <strong>Klarna.</strong>
        </div>
        <div className="three">
          <select>
            {
              [...Array(10).keys()].map((el, index) => <option key={`indesax-${index}`} value={el}>{el + 1}</option>)
            }
          </select>
          <div className="buttons">
            <div className="button button-txt" id="buttonOne">Add to Basket</div>
            <div className="button button-txt" id="buttonTwo">
              <img className="icon" src={"https://grubini-images.s3.amazonaws.com/icons/emptyheart.png"} />
              Add to Loves
            </div>
          </div>
        </div>
      </BasketStyles>
    );
  }
}

export default Basket;