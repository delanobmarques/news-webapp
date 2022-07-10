import React from 'react';
import './news-article.styles.scss';

const NewsArticle = ({data}) => {
  return (
    <div className="news-article__card">
        <div className="news-article__thumbnail">
            <img src={data.urlToImage} alt={data.title} />
        </div>
        <div className="news-article__body"> 
            <div className="news-article__body__published-at">Published at {data.publishedAt.slice(0,10)}</div>       
            <div className="news-article__body__title">{data.title}</div>
            <div className="news-article__body__author">
                {data.author && `${data.author} - `} {data.source.name}
            </div>
            <p className="news-article__body__description">
                {data.description}
                <a className="read-more" href={data.url} target="blank">read more</a>
            </p>            
        </div>
    </div>
  )
}

export default NewsArticle;







// <div class="content-wrapper">
  
//   <div class="news-card">
//     <a href="#" class="news-card__card-link"></a>
//     <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image">
//     <div class="news-card__text-wrapper">
//       <h2 class="news-card__title">Amazing First Title</h2>
//       <div class="news-card__post-date">Jan 29, 2018</div>
//       <div class="news-card__details-wrapper">
//         <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
//         <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
//       </div>
//     </div>
//   </div>

// </div>