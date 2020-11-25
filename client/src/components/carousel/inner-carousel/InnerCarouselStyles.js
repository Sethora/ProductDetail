import styled from 'styled-components';

const InnerCarouselStyles = styled.div`
.mainWrapper {
  display: flex;
  justify-content: center;
  height: 550px;
}
.secondaryWrapper {
  display: flex;
  align-items: center;
  height: 100px;
}

.divider {
  width: 100%;
  margin: 1% 0;
  background-color: gray;
  opacity: 0.2;
  height: 0.2px;
}

.photoContainer {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none;
  scroll-behavior: smooth;
  height: 80%;
  width: 55%;
  transition: transform 0.45s ease 0s;
}

.photoContainer::-webkit-scrollbar {
  display: none;
}

.image {
  height: 100%;
  min-height: 100%;
  width: 100%;
  min-width: 100%;
  transform: translateX(${props => props.x}px);
  transition: transform 0.45s ease 0s;
}
.transform {
  transform: translateX(-660px);
  transition: transform 0.45s ease 0s;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
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