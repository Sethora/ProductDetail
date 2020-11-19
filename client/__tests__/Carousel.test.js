import Carousel from '../src/components/carousel/outer-carousel';
import { getProductService } from '../src/services/appservice/__mock__/getProductService';


jest.mock(getProductService);

describe('Outer carousel ', () => {
  let wrapper;
  beforeAll(() => wrapper = shallow(<Carousel />));
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});