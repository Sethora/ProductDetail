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
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100%;
  height: 100%;
}
#shipping {
  border: 2px solid purple;
  height: 14%;
}
#tabs {
  border: 1px solid red;
  height: 100%;
}
#fifty {
  height: 100%;
}
p {
  margin: 0;
}
`;