import LeftArrow from '../src/components/carousel/left-arrow';

describe('Left Arrow', () => {
  test('render the left arrow', () => {
    const wrapper = shallow(<LeftArrow
      slide={() => { }}
      height={28}
      width={28}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});