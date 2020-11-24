import React, { Component, createRef } from 'react';
import CarouselStyles from './CarouselStyles';
import Card from '../card';
import Arrow from '../arrow';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horizontalPoint: 0,
      direction: 'left'
    };
    this.mySlide = createRef();
  }

  slideRight() {
    if (this.state.horizontalPoint < 850) {
      this.setState({ horizontalPoint: this.state.horizontalPoint + 50 }, () => {
        this.mySlide.current.scrollLeft = this.state.horizontalPoint;
      });
    }
  }
  slideLeft() {
    if (this.state.horizontalPoint > 0) {
      this.setState({ horizontalPoint: this.state.horizontalPoint - 50 }, () => {
        this.mySlide.current.scrollLeft = this.state.horizontalPoint;
      });
    }
  }
  onScroll() {
    this.setState({ horizontalPoint: this.mySlide.current.scrollLeft });
  }
  changeDirection(side) {
    if (this.state.direction !== side) {
      this.setState({ direction: side });
    }
  }



  render() {
    const { window } = this.props;
    return (
      <CarouselStyles window={window}>
        <Arrow
          height={28}
          width={28}
          side={'left'}
          slide={this.changeDirection.bind(this)}
        />
        <Card
          height={70}
          width={70}
          window={window}
          reference={this.mySlide}
          click={this.props.click}
          enter={this.props.enter}
          leave={this.props.leave}
          cards={this.props.photos}
          scroll={this.onScroll.bind(this)}
          styling={this.state.direction === 'right' ? 'transform' : ''}
        />
        <Arrow
          height={28}
          width={28}
          side={'right'}
          slide={this.changeDirection.bind(this)}
        />
      </CarouselStyles>
    );
  }
}

export default Carousel;