import styled from 'styled-components';

const RightArrowStyles = styled.div`
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;
&:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.icons {
  cursor: pointer;
  height: 42px;
  width: 28px;
}
`;

export default RightArrowStyles;