import styled from 'styled-components';

const TabStyles = styled.div`
margin-top: 2%;
width: 100%;
.outer {
  cursor: pointer;
  padding: 8% 4%;
  text-align: center;
  border-right: 1px solid #ECECEC;
  border-left: 1px solid #ECECEC;
}
.clicked {
  cursor: pointer;
  padding: 8% 4%;
  text-align: center;
  border-top: 1px solid #ECECEC;
  border-right: 1px solid #ECECEC;
  border-left: 1px solid #ECECEC;
}
`;

export default TabStyles;