import { useState } from "react";
import { Icons } from "../Icons/Icons";

import {
  Form,
  Label,
  Input,
  Button
} from "./Searchbar.styled";

export const Searchbar = () => {
  const [query, setQuery] = useState("");

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    reset();
  };

  const reset = () => {
    setQuery("");
  };

  return (
    <Form
      onSubmit={handleSubmit}
    >
      <Label>Filter by keywords</Label>
      <Input
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search news about spaceflights"
        value={query}
        onChange={handleChange}
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