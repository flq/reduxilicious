import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";
import { Product } from "../api/products";

export interface ProductListProps {
  products: Product[];
}

export class ProductList extends Component<ProductListProps> {
  render() {
    const { products } = this.props;
    return (
      <List divided>
        {products.map(p => (
          <List.Item key={p.id} className="product__container">
            <Image src={p.image} floated="left" size="small" verticalAlign="middle" />
            <List.Header className="product__header">{p.name}</List.Header>
            <List.Content>{p.description}</List.Content>
          </List.Item>
        ))}
      </List>
    );
  }
}
