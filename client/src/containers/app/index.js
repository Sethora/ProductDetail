import React, { Component } from 'react';
import { AppStyles } from './AppStyles';
import Preview from '../preview';
import Basket from '../basket';
import Shipping from '../../components/shipping';
import Tabs from '../../components/tabs';
import { ModalProvider } from '../../components/modal';
import GlobalFonts from '../../assets/fonts/fonts';
import { getProductService } from '../../services/appservice';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: {},
      brand: {},
      product: {}
    };
  }

  componentDidMount() {
    getProductService()
      .then(result => {
        if (result.product) {
          const { store, brand, product } = result;
          this.setState({ store, brand, product });
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ModalProvider>
        <GlobalFonts />
        <AppStyles>
          <Preview product={this.state.product} />
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