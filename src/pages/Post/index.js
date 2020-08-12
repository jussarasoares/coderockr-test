import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

function Post() {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    api.get('articles').then((response) => {
      const result = response.data.find((data) => data.id === id);
      setArticle(result);
    });
  }, [id]);

  return (
    <div className="post">
      <div className="post_header">
        <img
          className="post__photo"
          alt={article.author}
          src={article.imageUrl}
        />
        <div className="post__info">
          <span className="post__date">
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="post__author">{article.author}</span>
          <h1 className="post__title">{article.title}</h1>
        </div>
      </div>
      <div className="post__content">
        <div dangerouslySetInnerHTML={{ __html: article.article }}></div>
      </div>
    </div>
  );
}

export default Post;
