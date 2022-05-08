import { Component } from "react";
import { Icons } from "../Icons/Icons";

import {
  Form,
  Label,
  Input,
  Button
} from "./Searchbar.styled";

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    
    return (
      <Form
        onSubmit={this.handleSubmit}
      >
        <Label>Filter by keywords</Label>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          placeholder="The most successful IT companies in 2020"
          value={query}
          onChange={this.handleChange}
        />
        <Button type="submit">
          <Icons
            name="search"
            width="20px"
            height="20px"
          />
        </Button>
      </Form>
    );
  };
};