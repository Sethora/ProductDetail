import styled from 'styled-components';

const BasketStyles = styled.div`
display: flex;
border: 2px solid orange;
height: 24%;
select {
  height: 22%;
  padding: 1%;
}
.one {
  flex: 1.4;
}
.subTwo {
  display: flex;
  padding: 0;
  margin: 0;
  .star {
    width: 12px;
    height: 12px;
  }
  .heart {
    width: 12px;
    height: 12px;
  }
  .flowingOne {
    flex: 1;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 1rem;
    font-weight: 200;
    margin-right: 1%;
  }
  .flowingTwo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 38%;
  }
  .fontOne {
    margin-left: 2%;
  }
}

.two {
  flex: 1;
  padding-left: 3%;
}
.three {
  flex: 1.4;
  display: flex;
  justify-content: space-between;
  .button {
    width: 22vh;
    height: 28%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    border-radius: 30px;
    border: 1px solid black;
  }
  #buttonTwo {
    color: black;
    background-color: white;
    border-width: 2px;
  }
  #buttonOne {
    color: white;
    margin-bottom: 6%;
    background-color: #ff0000;
  }
  .icon {
    height: 24px;
    width: 24px;
    padding-right: 4%;
  }
}
`;

export default BasketStyles;