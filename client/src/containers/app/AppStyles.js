import styled from 'styled-components';

export const AppStyles = styled.div`
display: grid;
grid-template-columns: 1.3fr 2fr;
width: 70%;
height: 100vh;
margin: 2% auto;

#images {
  background-color: green;
  height: 56vh;
}
#details {
  display: flex:
  flex-direction: column;
  background-color: blue;
  min-height: 100%;
  height: 100%;
}
#basket {
  background-color: orange;
  height: 30%;
}
#shipping {
  background-color: purple;
  height: 14%;
}
#tabs {
  background-color: red;
  height: 100%;
}
#fifty {
  height: 100%;
}
`;