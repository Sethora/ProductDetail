import React, { Component } from 'react';
import { AppStyles } from './AppStyles';
import Preview from '../preview';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppStyles>
          <Preview id="images" />
          <section id="details">
            <article id="basket"></article>
            <article id="shipping">
              <div id="fifty">

              </div>
            </article>
            <article id="tabs"></article>
          </section>
        </AppStyles>
      </div>
    );
  }
}

export default App;