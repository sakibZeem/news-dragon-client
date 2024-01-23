import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            {id && <h6 className='mb-4'>Total {categoryNews.length} news in this page</h6>}
            {
                categoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;