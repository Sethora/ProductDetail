import styled from 'styled-components';

const CardStyles = styled.div`
display: flex;
align-items: center;
overflow-x: scroll;
overflow-y: hidden;
white-space: nowrap;
transition: transform 0.45s ease 0s;
height: 86px;
width: 100%;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}
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
    border: 2px solid black;
  }
}
.transform {
  transform: translateX(-302%);
  transition: transform 0.45s ease 0s;
}
.stay {
  transform: translateX(0);
}
`;

export default CardStyles;