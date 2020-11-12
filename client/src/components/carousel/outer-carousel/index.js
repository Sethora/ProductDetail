import React, { Component, createRef } from 'react';
import CarouselStyles from './CarouselStyles';
import Card from '../card';
import LeftArrow from '../left-arrow';
import RightArrow from '../right-arrow';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horizontalPoint: 0,
      length: 5
    };
    this.mySlide = createRef();
  }

  slideRight() {
    if (this.state.horizontalPoint < 850) {
      this.setState({ horizontalPoint: this.state.horizontalPoint + 50 }, () => {
        this.mySlide.current.scrollLeft = this.state.horizontalPoint;
        console.log(this.mySlide)
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
        <LeftArrow slide={this.slideLeft.bind(this)} />
        <Card
          reference={this.mySlide}
          cards={[1, 2, 3, 4, 56, 7, 8, 9, 10]}
          scroll={this.onScroll.bind(this)}
          height={100}
          width={100}
        />
        <RightArrow slide={this.slideRight.bind(this)} />
      </CarouselStyles>
    );
  }
}

export default Carousel;