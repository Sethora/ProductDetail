import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './containers/app';
import { WindowDimensionProvider } from './context/WindowDimensionContext';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

ReactDOM.render(<Router>
  <WindowDimensionProvider>
    <Route path={['/:id', '/']} component={App} />
  </WindowDimensionProvider>
</Router>, document.getElementById("root"));