import { useState } from "react";
import { theme } from "constants/theme";

import { FiSearch } from "react-icons/fi";

import {
  Form,
  Label,
  Input,
  Button
} from "./Searchbar.styled";

export const Searchbar = ({onSubmit}) => {
  const [query, setQuery] = useState("");

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
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
        <FiSearch
          style={{
            width: "20px",
            height: "20px",
            color: `${theme.colors.lightGray}`
          }}
        />
      </Button>
    </Form>
  );
};