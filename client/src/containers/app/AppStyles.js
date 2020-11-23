import styled from 'styled-components';

export const AppStyles = styled.div`
display: grid;
grid-template-columns: 1.3fr 2fr;
width: 70%;
margin: 2% auto;
body {
  overflow: hidden;
}
section {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
  #shipping {
    background-color: pink;
  }
  #tabs {
    background-color: orange;
  }
  #basket {
    background-color: yellow;
  }
}
p {
  margin: 0;
}

`;