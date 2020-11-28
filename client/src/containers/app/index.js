import React, { Component } from 'react';
import { AppStyles } from './AppStyles';
import { WindowDimensionContext } from '../../context/WindowDimensionContext';
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
    const id = this.props.match.params.id || 2;
    getProductService(id)
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
      <WindowDimensionContext.Consumer>
        {(window) => (
          <ModalProvider window={window}>
            <GlobalFonts />
            <AppStyles window={window}>
              <Preview
                window={window}
                product={this.state.product}
              />
              <section window={window}>
                <Basket
                  id="basket"
                  window={window}
                  brand_name={this.state.brand.name}
                  product={this.state.product}
                />
                <Shipping
                  id="shipping"
                  window={window}
                />
                <Tabs
                  id="Tabs"
                  window={window}
                  tabs={this.state.tabs}
                />
              </section>
            </AppStyles>
          </ModalProvider>)}
      </WindowDimensionContext.Consumer>
    );
  }
}

export default App;