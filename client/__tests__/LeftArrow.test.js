import LeftArrow from '../src/components/carousel/left-arrow';

describe('Left Arrow', () => {
  let wrapper;
  beforeAll(() => wrapper = shallow(<LeftArrow
    slide={() => { }}
    height={28}
    width={28}
  />));

  it('render the left arrow', () => {
    expect(wrapper).toMatchSnapshot();
  });
});