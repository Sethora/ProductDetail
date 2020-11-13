import React, { Component, createRef } from 'react';
import CarouselStyles from './CarouselStyles';
import Card from '../card';
import LeftArrow from '../left-arrow';
import RightArrow from '../right-arrow';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horizontalPoint: 0
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


  render() {
    return (
      <CarouselStyles>
        <LeftArrow
          slide={this.slideLeft.bind(this)}
          height={28}
          width={28}
        />
        <Card
          reference={this.mySlide}
          cards={this.props.photos}
          scroll={this.onScroll.bind(this)}
          click={this.props.click}
          height={70}
          width={70}
        />
        <RightArrow
          slide={this.slideRight.bind(this)}
          height={28}
          width={28}
        />
      </CarouselStyles>
    );
  }
}

export default Carousel;