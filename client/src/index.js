import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { WindowDimensionProvider } from './context/WindowDimensionContext';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

ReactDOM.render(<WindowDimensionProvider><App /></WindowDimensionProvider>, document.getElementById("root"));