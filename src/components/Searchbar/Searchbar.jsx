import { Component } from "react";

import styles from "./Searchbar.module.scss";

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
      <form className={styles.searchForm}>
        <div className={styles.formInput} onSubmit={this.handleSubmit}>
          <label className={styles.label}>Filter by keywords</label>
          <input
            className={styles.input}
            type="text"
            name="query"
            autocomplete="off"
            placeholder="The most successful IT companies in 2020"
            value={query}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className={styles.searchBtn}></button>
      </form>
    );
  };
};