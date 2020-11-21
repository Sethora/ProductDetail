import Card from '../src/components/carousel/card';
import { getProductService } from '../src/services/appservice/__mock__/getProductService';

jest.mock(getProductService);

describe('Card', () => {
  let wrapper;
  beforeAll(() => wrapper = shallow(<Card
    reference={() => { }}
    cards={[]}
    scroll={() => { }}
    click={() => { }}
    height={70}
    width={70}
  />));

  it('render the card', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has atleast one image', () => {
    setTimeout(() => {
      wrapper.update();
      const props = wrapper.instance().props;

      expect(props.card.length).toBeGreaterThan(1);
    });
  });
});