import "./Carousel.scss";
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    
    <Carousel className='carousel-contenedor'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://github.com/Micromundofede22/PF-Folmer/blob/main/imagenes/terrarios/berlin.jpg?raw=true"
          alt="Terrario de pared"
        />
        <Carousel.Caption>
          <h3>Terrario Berlín</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://github.com/Micromundofede22/PF-Folmer/blob/main/imagenes/terrarios/cerrado.jpg?raw=true"
          alt="Terrario cerrado"
        />

        <Carousel.Caption>
          <h3>Terrario Cerrado</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://github.com/Micromundofede22/PF-Folmer/blob/main/imagenes/terrarios/roma.jpg?raw=true"
          alt="Terrario"
        />

        <Carousel.Caption>
          <h3>Terrario Roma</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;