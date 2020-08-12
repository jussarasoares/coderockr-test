import React, { useState, useEffect } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from '../../components/Card';
import api from '../../services/api';
import useInfiniteScroll from '../../utils/useInfiniteScroll';

import './styles.css';

function Home() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [stopFetching, setStopFetching] = useState(false);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreArticles);
  const limit = 11;

  useEffect(() => {
    api
      .get('articles', {
        params: { _page: 1, _limit: limit },
      })
      .then((response) => {
        setArticles(response.data);
      });
  }, []);

  function fetchMoreArticles() {
    if (stopFetching) return;

    const nextPage = page + 1;
    api
      .get('articles', {
        params: { _page: nextPage, _limit: limit },
      })
      .then((response) => {
        console.log(response.data.length);
        if (response.data.length === 0) {
          console.log('parou');
          setIsFetching(false);
          setStopFetching(true);
          return;
        }
        setArticles((prevState) => {
          return [...prevState, ...response.data];
        });
        setPage(nextPage);
        setIsFetching(false);
      });
  }

  let gridCount = 0;
  const gridClass = [
    'double',
    'double',
    'single-right',
    'double photo-right',
    'double photo-right',
    'single-left',
  ];

  return (
    <div className="home">
      <div className="home__posts">
        {articles.map((article) => {
          if (gridCount > 5) {
            gridCount = 0;
          }

          const cardClass = `home__post ${gridClass[gridCount]}`;
          gridCount++;

          const description = `${article.article
            .replace(/<p>/g, '')
            .replace(/<\/p>/g, ' ')
            .substr(0, 100)} ...`;

          return (
            <Card
              className={cardClass}
              title={article.title}
              description={description}
              photo={article.imageUrl}
              author={article.author}
            />
          );
        })}
      </div>
      {isFetching && !stopFetching && (
        <div className="home__loading">
          Loading <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      )}
    </div>
  );
}

export default Home;
