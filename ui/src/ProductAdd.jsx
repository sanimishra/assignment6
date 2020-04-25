/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Button } from 'react-bootstrap';
import {
  ButtonToolbar,Form,FormGroup, FormControl, ControlLabel, InputGroup,Row, Col,
} from 'react-bootstrap';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { price: '$' };
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;
    const price = form.price.value.replace('$', '');
    const product = {
      name: form.name.value,
      price: price > null ? price : null,
      category: form.category.value,
      image: form.image.value,
    };
    const { createProduct } = this.props;
    createProduct(product);
    form.name.value = '';
    form.category.value = '';
    form.price.value = '$';
    form.image.value = '';
  }

  render() {
    const { price } = this.state;
    return (
      <Form name="productAdd" onSubmit={this.handleSubmit} className="addprodstyle">
        <Row>
          <Col sm={3}>
           <FormGroup>
              <ControlLabel htmlFor="category">Category</ControlLabel>
              <FormControl componentClass="select" name="category" id="category">
                  <option value="">Select Catergory</option>
                  <option value="Shirts">Shirts</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Jackets">Jackets</option>
                  <option value="Sweaters">Sweaters</option>
                  <option value="Accessories">Accessories</option>
              </FormControl>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <ControlLabel htmlFor="name">Product Name</ControlLabel>
              <FormControl type="text" name="name" id="name" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col  sm={3} >
            <FormGroup>
              <ControlLabel htmlFor="price" id="price">Price Per Unit</ControlLabel>
              <FormControl type="text" name="price" id="price" defaultValue={price} />
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <ControlLabel htmlFor="image">Image URL</ControlLabel>
              <FormControl type="url" name="image" id="image" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <FormGroup>
            <ButtonToolbar>
                <Button bsStyle="primary" type="submit" >Add Product</Button>
                <Button  type="reset"> Reset </Button>
            </ButtonToolbar>
          </FormGroup>
        </Row>
      </Form>
    );
  }
}
