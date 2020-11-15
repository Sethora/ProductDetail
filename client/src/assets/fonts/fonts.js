import { createGlobalStyle } from 'styled-components';

import RobotoBlack from './roboto/Roboto-Black.ttf';
import RobotoBold from './roboto/Roboto-Bold.ttf';
import RobotoLight from './roboto/Roboto-Light.ttf';
import RobotoMedium from './roboto/Roboto-Medium.ttf';
import RobotoRegular from './roboto/Roboto-Regular.ttf';
import RobotoThin from './roboto/Roboto-Thin.ttf';

export default createGlobalStyle`
@font-face {
  font-family: 'RobotoBlack';
  src: url(${RobotoBlack}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display-auto;
}
@font-face {
  font-family: 'RobotoBold';
  src: url(${RobotoBold}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display-auto;
}
@font-face {
  font-family: 'RobotoLight';
  src: url(${RobotoLight}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display-auto;
}
@font-face {
  font-family: 'RobotoMedium';
  src: url(${RobotoMedium}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display-auto;
}
@font-face {
  font-family: 'RobotoRegular';
  src: url(${RobotoRegular}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display-auto;
}
@font-face {
  font-family: 'RobotoThin';
  src: url(${RobotoThin}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display-auto;
}
`;