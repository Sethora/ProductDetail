import styled from 'styled-components';

const CarouselStyles = styled.div`
  display: flex;
  flex-direction: row;
  height: 10%;
  width: 46vh;
  .box {
    width: 100px;
    height: 100px;
    margin: auto 5%;
    display: inline-block;
    background-color: blue;
  }
  #two{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    height: 86px;
    background-color: purple;
  }
`;

export default CarouselStyles;