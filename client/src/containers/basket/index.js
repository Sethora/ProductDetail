import React, { Component } from 'react';
import BasketStyles from './BasketStyles';
import { star, heart, empty } from '../../assets/images';

class Basket extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BasketStyles>
        <div className="one">
          <div className="subOne">
            <label><strong>amika</strong></label>
            <p>New York Minute Hair Blow Dryer Brush Set</p>
            <p>ITEM 2390243</p>
          </div>
          <div className="subTwo">
            <div className="flowingOne">
              {
                [1, 2, 3, 4, 5].map((el, index) => <img className="star" key={`index-${index}`} src={star} />)
              }
              <span className="fontOne">93 reviews</span>
            </div>
            |
            <div className="flowingTwo">
              <img className="heart" src={heart} />
              <span>9.2K loves</span>
            </div>
          </div>
          limited - edition
        </div>
        <div className="two">
          <strong>$99.00</strong>
          <p>($150.00 value)
          Pay in 4 interest-free</p>
          <p>payments of $24.75</p>
          <strong>Klarna.</strong>
        </div>
        <div className="three">
          <select>
            {
              [...Array(10).keys()].map((el, index) => <option key={`indesax-${index}`} value={el}>{el + 1}</option>)
            }
          </select>
          <div className="buttons">
            <div className="button" id="buttonOne">Add to Basket</div>
            <div className="button" id="buttonTwo">
              <img className="icon" src={empty} />
              Add to Loves
            </div>
          </div>
        </div>
      </BasketStyles>
    );
  }
}

export default Basket;