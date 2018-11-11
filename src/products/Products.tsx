import React, { Component } from "react";
import "./products.css";
import api from "../api";
import { Product } from "../api/products";
import { ProductList } from "./ProductList";
import { Grid } from "semantic-ui-react";

export interface ProductsState {
  products: Product[];
}

export class Products extends Component<{}, ProductsState> {
  state = { products: api.products.findProduct(".*") };
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width="2" />
          <Grid.Column width="8">
            <ProductList products={this.state.products} />
          </Grid.Column>
          <Grid.Column width="4" />
        </Grid.Row>
      </Grid>
    );
  }
}
