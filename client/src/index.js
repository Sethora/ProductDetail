import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { WindowDimensionProvider } from './context/WindowDimensionContext';

ReactDOM.render(<WindowDimensionProvider><App /></WindowDimensionProvider>, document.getElementById("root"));