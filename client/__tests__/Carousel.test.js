import Carousel from '../src/components/carousel/outer-carousel';
import { getProductService } from '../src/services/appservice/__mock__/getProductService';

describe('Outer carousel ', () => {
  let counter = 0;
  let wrapper;
  beforeAll(() => wrapper = shallow(<Carousel />));
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});