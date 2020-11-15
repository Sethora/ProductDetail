import styled from 'styled-components';

const TabStyles = styled.div`
margin-top: 2%;
width: 100%;
font-size: 0.9rem;
.outer {
  cursor: pointer;
  padding: 8% 4%;
  font-family: RobotoRegular;
  text-align: center;
  border-right: ${props => props.position === 4 ? '1px solid white' : '1px solid #ECECEC'};
  border-left: ${props => props.position === 0 ? '1px solid white' : '0px'};
  border-bottom: 1px solid #ECECEC;
}
.clicked {
  cursor: pointer;
  padding: 8% 4%;
  text-align: center;
  font-weight: 800;
  font-family: RobotoMedium;
  border-top: 1px solid #ECECEC;
  border-right: 1px solid #ECECEC;
  border-left: ${props => props.position === 0 ? '1px solid #ECECEC' : '0px'};
}
.divider {
  width: 80%;
  margin: 0 auto;
  background-color: black;
  height: 2.5px;
}
`;

export default TabStyles;