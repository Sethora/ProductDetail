import styled from 'styled-components';

const BasketStyles = styled.div`
display: flex;
min-height: ${props => (96.7 / 1000) * ((2200 / props.window.windowWidth) * props.window.windowWidth)}px;
height: 16%;
select {
  height: 28px;
  width: 38px;
  padding: 1%;
  margin: 0 3%;
}
.product-title {
  margin-top: 1%;
  font-family: RobotoRegular;
}
.product {
  font-family: RobotoBold;
}
.interest {
  margin-top: 6%;
  margin-bottom: 4.6%;
  font-size: 0.8rem;
  color: #989898;
  font-family: RobotoRegular;
}
.limited {
  margin-top: 4%;
  font-size: 0.9rem;
  font-family: RobotoMedium;
}
.button-txt {
  letter-spacing: 1px;
  font-family: RobotoMedium;
  font-size: 0.8rem;
}
.one {
  flex: 1.8;
  .subOne {
    .item-number {
      margin-top: 3%;
      margin-bottom: 3.2%;
      color: #989898;
      font-family: RobotoThin;
      font-size: 0.7rem;
    }
  }
  .ranking {
    font-family: RobotoMedium;
  }
}
.subTwo {
  display: flex;
  height: 16px;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  .icon {
    width: 12px;
    height: 12px;
  }
  .flowingOne {
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 60%;
  }
  #divider {
    height: 100%;
    width: 1.5px;
    background-color: black;
    margin: 0 3%;
  }
  .flowingTwo {
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
  }
  .fontOne {
    margin-left: 2%;
  }
}

.two {
  flex: 1;
  padding-left: 3%;
}
.three {
  flex: 1.6;
  display: flex;
  justify-content: space-between;
  .button {
    font-family: RobotoMedium;
    width: ${props => (96.7 / 1000) * ((1800 / props.window.windowWidth) * props.window.windowWidth)}px;
    height: ${props => (96.7 / 1000) * ((420 / props.window.windowWidth) * props.window.windowWidth)}px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    border-radius: 30px;
    border: 1px solid black;
  }
  #buttonTwo {
    color: black;
    background-color: white;
    border-width: 2px;
  }
  #buttonOne {
    color: white;
    margin-bottom: 6%;
    background-color: #B3210D;
  }
  .icon {
    height: 24px;
    width: 24px;
    padding-right: 4%;
  }
}
`;

export default BasketStyles;