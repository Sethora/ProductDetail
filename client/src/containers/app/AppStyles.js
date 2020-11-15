import styled from 'styled-components';

export const AppStyles = styled.div`
display: grid;
grid-template-columns: 1.3fr 2fr;
width: 70%;
min-height: 100vh;
margin: 2% auto;
body {
  overflow: hidden;
}
#details {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
}
#tabs {
  height: 100%;
}
p {
  margin: 0;
}
`;