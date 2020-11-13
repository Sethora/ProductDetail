import styled from 'styled-components';

const InnerCarouselStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

.mainWrapper {
  display: flex;
  justify-content: center;
  height: 550px;
}
.secondaryWrapper {
  height: 100px;
  background-color: red;
}

.divider {
  width: 100%;
  margin: 1% 0;
  background-color: gray;
  opacity: 0.2;
  height: 0.2px;
}

.image {
  height: 80%;
  width: 60%;
}
.one {
  height: 100%;
  width: 15%;
}
.two {
  height: 100%;
  width: 15%;
}
`;

export default InnerCarouselStyles;