import React, { Component } from 'react';
import { AppStyles } from './AppStyles';
import Preview from '../preview';
import Basket from '../basket';
import Shipping from '../../components/shipping';
import Tabs from '../../components/tabs';
import { ModalProvider } from '../../components/modal';
import GlobalFonts from '../../assets/fonts/fonts';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ModalProvider>
        <GlobalFonts />
        <AppStyles>
          <Preview id="images" />
          <section id="details">
            <Basket />
            <Shipping />
            <Tabs />
          </section>
        </AppStyles>
      </ModalProvider>
    );
  }
}

export default App;