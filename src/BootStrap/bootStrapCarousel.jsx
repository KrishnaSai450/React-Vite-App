import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';


import CustomImage from '../Image/image';

function CustomCarousel() {
  return (
    <Carousel>
      <CarouselItem>
        <CustomImage source={"https://tse2.mm.bing.net/th?id=OIP.xung4mlBfvUR3RKzjnRY2AHaEK&pid=Api&P=0&h=180"} height={600} width={1300}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
      <CustomImage source={"https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180"} height={600} width={1300}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
      <CustomImage source={"https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg"} height={600} width={1300}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  );
}

export default CustomCarousel;