import styled from 'styled-components';

const CardStyles = styled.div`
display: flex;
align-items: center;
overflow-x: scroll;
overflow-y: hidden;
white-space: nowrap;
height: 86px;
width: 100%;
.box {
  cursor: pointer;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 12px;
  margin: auto 5%;
  display: inline-block;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
    transform: translate3d(0px, -1px, 0px) scale(1.2);
  }
}
`;

export default CardStyles;