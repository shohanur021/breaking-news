import React, { useEffect,useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles,setArticles] = useState([]);
    useEffect(() => {
      fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=badafb73e45240d3a73cf78dc8454a45')
      .then(res => res.json())
      .then(data => setArticles(data.articles))
    },[])

    return (
        <div>
            {
               articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;