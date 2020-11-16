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
      product: {},
      tabs: []
    };
  }

  componentDidMount() {
    getProductService()
      .then(result => {
        if (result.product) {
          const { store, brand, product } = result;
          this.setState({ store, brand, product }, () => this.getTabs());
        }
      })
      .catch(error => console.log(error));
  }

  getTabs() {
    const tabs = [];
    const { details, instructions, ingredients } = this.state.product;
    tabs.push(details);
    tabs.push(instructions);
    tabs.push(ingredients);
    tabs.push(this.state.brand);
    tabs.push(this.state.store);
    this.setState({ tabs });
  }

  render() {
    return (
      <ModalProvider>
        <GlobalFonts />
        <AppStyles>
          <Preview product={this.state.product} />
          <section id="details">
            <Basket
              brand_name={this.state.brand.name}
              product={this.state.product}
            />
            <Shipping />
            <Tabs tabs={this.state.tabs} />
          </section>
        </AppStyles>
      </ModalProvider>
    );
  }
}

export default App;