import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Title from "../Components/Title.jsx/Title";
import NewsCard from "../Components/NewsCard/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();

  const data = useLoaderData();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategories(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter((news) => {
        return news.others.is_today_pick === true;
      });
      setCategories(filteredNews);
    } else {
      const filteredNews = data.filter(
        (news) => String(news.category_id) === String(id)
      );

      setCategories(filteredNews);
    }
  }, [data, id]);


  return (
    <div className="px-5">
      <Title title1={<>Dragon News Home</>} />
      <p className="mt-1">Total ({categories.length}) news found</p>

      <div className="grid gird-cols-1 gap-5">
        {categories.map((item) => {
          return (
            <NewsCard
              key={item.id}
              id={item.id}
              author={item.author}
              title={item.title}
              thumbnail_url={item.thumbnail_url}
              published_date={item.author?.published_date} // fallback just in case
              details={item.details}
              tags={item.tags}
              rating={item.rating}
              total_view={item.total_view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNews;
