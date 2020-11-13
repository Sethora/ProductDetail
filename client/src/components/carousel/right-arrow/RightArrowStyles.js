import styled from 'styled-components';

const RightArrowStyles = styled.div`
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;
height: 100%;
.icons {
  cursor: pointer;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  &:hover {
    transform: scale(1.5);
    transition: 0.5s;
  }
}
`;

export default RightArrowStyles;