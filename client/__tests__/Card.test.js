import Card from '../src/components/carousel/card';

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
});