import React, { Component } from 'react';
import { AppStyles } from './AppStyles';
import Preview from '../preview';
import Basket from '../basket';
import Shipping from '../../components/shipping';
import { ModalProvider } from '../../components/modal';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ModalProvider>
        <AppStyles>
          <Preview id="images" />
          <section id="details">
            <Basket />
            <Shipping />
            <article id="tabs"></article>
          </section>
        </AppStyles>
      </ModalProvider>
    );
  }
}

export default App;