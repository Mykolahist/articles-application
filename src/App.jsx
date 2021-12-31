import { Component } from "react";

import { Container } from "components/Container/Container";
import { Searchbar } from "components/Searchbar/Searchbar";
import { CountResults } from "components/CountResults/CountResults";
import { ArticleList } from "components/ArticleList/ArticleList";

import api from './service/articles-api';

export class App extends Component {

  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    this.scrollToBottom();
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      articles: [],
      currentPage: 1,
      error: null,
    });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    api
      .fetchArticles(options)
      .then(articles => {
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  showSelectedArticle = (url, alt) => {
    this.setState({
      largeImageUrl: url,
      description: alt,
    });

    this.toggleModal();
  };

  render() {
    const { articles } =
      this.state;

    // const renderButton = articles.length > 0 && !isLoading;


    return (
      <Container>
        <Searchbar onSubmit={this.onChangeQuery} />
        <CountResults />
        <ArticleList articles={articles} onArticleClick={this.showSelectedArticle} />
        {/* {isLoading && <Loader />} */}
        {/* {renderButton && <Button onClick={this.fetchArticles} />} */}
        {/* {showModal && (
          <Modal
            url={largeImageUrl}
            alt={description}
            onClose={this.toggleModal}
          />
        )} */}
      </Container>
    );
  };
};