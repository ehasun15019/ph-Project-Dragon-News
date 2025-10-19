import React, { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router";
import Header from "../Components/Header/Header";
import Title from "../Components/Title.jsx/Title";
import RightAside from "../Components/HomeLayout/RightAside";
import NewsDetailsCard from "./NewsDetailsCard";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [newsData, setNewsData] = useState({});

  useEffect(() => {
    const newsDetailsData = data.find(signNewsData => signNewsData.id == id);
    setNewsData(newsDetailsData);
  }, [data, id]);

  return (
    <div>
      <header className="py-4">
        <Header />
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-3 py-5">
        <section className="col-span-9">
          <Title title1={<>Dragon News</>} />

          <NewsDetailsCard newsData={newsData} />
        </section>

        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
