import { Container, Grid } from "semantic-ui-react";
import React from "react";

export interface MainLayoutProps {
  navBar: () => JSX.Element;
  body: () => JSX.Element;
}

export function MainLayout({ navBar, body }: MainLayoutProps) {
  return (
    <Container fluid>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>{navBar()}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>{body()}</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
