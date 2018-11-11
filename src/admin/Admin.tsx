import React from "react";
import { Segment, TextArea, Button, Form } from "semantic-ui-react";

export default class Admin extends React.Component<{}, { input: string }> {
  constructor(props: {}) {
    super(props);
    const value = localStorage.getItem("db");
    this.state = {
      input: value || ""
    };
  }

  render() {
    return (
      <Segment basic>
        <Form>
          <Form.Field>
            <label>Paste in the JSON which will be the backing store for the API</label>
            <TextArea autoHeight rows={10} onChange={this.onChange} value={this.state.input} />
          </Form.Field>
          <Button primary onClick={this.onSave}>
            Save
          </Button>
        </Form>
      </Segment>
    );
  }

  onSave = () => {
    localStorage.setItem("db", this.state.input);
  };

  onChange = (e: React.FormEvent<HTMLTextAreaElement>) =>
    this.setState({ input: e.currentTarget.value });
}
