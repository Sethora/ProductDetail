import styled from 'styled-components';

const ShippingStyles = styled.div`
display: flex;
padding 0 2%;
flex-direction: column;
background-color: #ECECEC;
a {
  color: #1D7CF2;
  margin-left: 2%;
  font-family: RobotoRegular;
  text-decoration: none;
}
.radio {
  height: 1.4em;
  width: 1.4em;
  margin-right: 2%;
  border: 8px solid black;
}
.first {
  display: flex;
  align-items: center;
}
.sub {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
}
.second {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shipping-info {
  margin-left: 2%;
  font-family: RobotoRegular;
}
#divider {
  height: 1px;
  margin: 1% 0;
  width: 100%;
  background-color: #D4D4D4;
}
.icons {
  height: 32px;
  eight: 32px
}
`;

export default ShippingStyles;