import styled from 'styled-components';

const CarouselStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10%;
  width: ${(props => (96.7 / 1000) * ((3950 / props.windowWidth) * props.windowWidth))};
`;

export default CarouselStyles;
// (96.7 / 1000) * ((3900 / windowWidth) * windowWidth)