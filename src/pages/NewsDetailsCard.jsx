import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ newsData }) => {
  return (
    <div className="space-y-5">
      <img
        className="w-full h-[450px] object-cover"
        src={newsData.image_url}
        alt=""
      />
      <h2 className="text-2xl mt-3 font-semibold">{newsData.title}</h2>

      <p className="mt-3">{newsData.details}</p>

      <div className="mt-15">
        <Link
          className="bg-[#D72050] px-5 py-4 text-white"
          to={`/category/${newsData.category_id}`}
        >
          All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
