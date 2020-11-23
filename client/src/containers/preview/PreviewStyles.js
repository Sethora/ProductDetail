import styled from 'styled-components';

const PreviewStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 95%;
  min-height: ${props => (96.7 / 1000) * ((1800 / props.window.windowWidth) * props.window.windowWidth)}px;
  width: 92%;
  padding: 2%;
  .img {
    object-fit: contain;
    cursor: pointer;
    border-radius: 500px;
    margin-bottom: 8%;
  }
`;

export default PreviewStyles;