import styled from 'styled-components';

const CardStyles = styled.div`
overflow-x: scroll;
overflow-y: hidden;
white-space: nowrap;
height: 86px;
background-color: purple;
.box {
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: auto 5%;
  display: inline-block;
  background-color: blue;
}
`;

export default CardStyles;