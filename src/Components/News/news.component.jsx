import { useContext } from 'react';
import { NewsContext } from '../../context/news.context';
import NewsArticle from '../NewsArticle/news-article.component';
import './news.styles.scss';

const News = () => {
    const { data } = useContext(NewsContext);
    
  return(
    <div className="news-container">
        { data && data.articles.map((news) => 
          <NewsArticle data={news} key={news.url}/> 
        )}
    </div>
  );  
};

export default News;