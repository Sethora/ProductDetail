import App from '../src/containers/app';
import Shipping from '../src/components/shipping';
import GlobalFonts from '../src/assets/fonts/fonts';
import Preview from '../src/containers/preview';
import Tabs from '../src/components/tabs';
import { getProductService } from '../src/services/appservice/__mock__/getProductService';

jest.mock(getProductService);

describe('App', () => {
  let wrapper;
  console.log(shallow)
  beforeAll((done) => {
    wrapper = shallow(<App />);
    done();
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should contain Shipping tag', () => expect(wrapper.contains(<Shipping />)).toBe(true));
  it('should contain the global fonts', () => expect(wrapper.contains(<GlobalFonts />)).toBe(true));
  it('should contain the Preview component', () => expect(wrapper.contains(<Preview product={{}} />)).toBe(true));
  it('should contain the Tabs component', () => expect(wrapper.contains(<Tabs tabs={[]} />)).toBe(true));

  it('should contain the respective data in state', () => {
    setTimeout(() => {
      wrapper.update();
      const state = wrapper.instance().state;
      expect(state.tabs.length).toEqual(4);
      expect(state.product.images.length).toEqual(5);
      expect(state.store.name).toBeDefined();
      expect(state.brand.name).toBeDefined();
    });
  });
});
