import styled from 'styled-components';

const CarouselStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${(props => (96.7 / 1000) * ((1000 / props.window.windowWidth) * props.window.windowWidth))}px;
  width: ${(props => (96.7 / 1000) * ((3950 / props.window.windowWidth) * props.window.windowWidth))}px;
`;

export default CarouselStyles;
// (96.7 / 1000) * ((3900 / windowWidth) * windowWidth)