import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Button, Glyphicon, Tooltip, OverlayTrigger, Table,
} from 'react-bootstrap';

const deleteTooltip = (
  <Tooltip id="delete-tooltip" placement="top">Delete Product</Tooltip>
);
const editTooltip = (
  <Tooltip id="Edit-tooltip" placement="top">Edit Product</Tooltip>
);

const ProductRow = withRouter(({ product, index, deleteProduct }) => (
  <tr>
    <td>{ product.name }</td>
    <td>
      { product.price }
    </td>
    <td>{ product.category }</td>

    <td>
      <Link to={`/viewimage/${product.id}`} target="_blank">
        <Button bsSize="xsmall">
          <Glyphicon glyph="picture" />
          {' '}
          View image
        </Button>
      </Link>
    </td>
    <td>
      <LinkContainer to={`/edit/${product.id}`}>
        <OverlayTrigger delayShow={1000} overlay={editTooltip}>
          <Button bsSize="xsmall">
            <Glyphicon glyph="edit" />
          </Button>
        </OverlayTrigger>
      </LinkContainer>
      <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
        <Button bsSize="xsmall" onClick={() => { deleteProduct(index); }}>
          <Glyphicon glyph="trash" />
        </Button>
      </OverlayTrigger>
    </td>
  </tr>
));
export default function ProductTable({ products, deleteProduct }) {
  const productRows = products.map((product, index) => (
    <ProductRow key={product.id} product={product} index={index} deleteProduct={deleteProduct} />
  ));
  return (
    <Table bordered condensed hover responsive>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price($)</th>
          <th>Category</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </Table>
  );
}
