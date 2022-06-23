import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { ArticlesBoard } from "components/ArticlesBoard/ArticlesBoard";

import { HomePage } from "pages/HomePage";
import { NotFound } from "pages/NotFound";

export const App = () => {
  const [articles, setArticles] = useState([]);
  
  return (
    <ArticlesBoard>
      <Routes>
        <Route index element={<HomePage
          articles={articles}
          setArticles={setArticles}
        />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ArticlesBoard>
  );
};