import { Card, Row, Col, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import ItemPrice from './ItemPrice';
import CardTitle from './CardTitle';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import Context from '../contexts/Context';

function Item(props) {
  let context = useContext(Context);
  const onAdd = function onAdd(q) {
    context.addItem(
      props.producto.id,
      q,
      props.producto.title,
      props.producto.price,
      props.producto.description,
      props.producto.image,
      props.producto.category,
      props.producto.discount
    );
  };

  return (
    <Card className="h-100 border-color-como border-radius-como bg-color-card-como">
      <Card.Body className="px-0 pb-1 pt-0">
        <Row>
          <Col md="12">
            <NavLink to={`/item/${props.producto.id}`}>
              <div className="border-radius-como">
                <Card.Img src={props.producto.image} alt={props.producto.title} className="border-radius-img-como" />
              </div>
            </NavLink>
          </Col>
          <Col md="12" className=" px-3 pt-3">
            <LinkContainer to={`/item/${props.producto.id}`}>
              <CardTitle producto={props.producto} textClasses="text-center me-3 mb-1" />
            </LinkContainer>
            {/* <ItemBadges producto={props.producto} /> */}
            <Container className="text-center fw-light py-2">Descripción corta o acortada por codigo</Container>
            <ItemPrice producto={props.producto} col1Classes="text-center" />
          </Col>
        </Row>
      </Card.Body>
      <Container className="text-center p-0">
        {/* <Col xs={4} className="ps-3 text-start">
            <LinkContainer to={`/item/${props.producto.id}`}>
              <Button variant="outline-secondary" size="sm" className="ms-1 p-1 border-0 rounded-0">
                <span className="text-center">
                  <small>More</small>
                </span>
              </Button>
            </LinkContainer>
          </Col> */}

        <LinkContainer to={`/item/${props.producto.id}`}>
          {/* <Container className="d-grid gap-2 my-2 px-3 pb-2"> */}
          <ItemCount initial={props.producto.stock > 0 ? 1 : 0} stock={props.producto.stock} onAdd={onAdd} />
          {/* <Button variant="secondary" className="border-radius-como button-color-como border-0 py-3">
              <span className="text-center">Agregar al carrito</span>
            </Button>
          </Container> */}
        </LinkContainer>
      </Container>
    </Card>
  );
}

export default Item;
