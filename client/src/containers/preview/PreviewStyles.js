import styled from 'styled-components';

const PreviewStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid green;
  max-width: 95%;
  width: 95%;
  padding: 2%;
  .img {
    height: 44%;
    width: 92%;
    cursor: pointer;
    border-radius: 6px;
    margin-bottom: 8%;
  }
`;

export default PreviewStyles;