import React from "react";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router";

const NewsCard = ({
  author,
  title,
  thumbnail_url,
  published_date,
  details,
  tags,
  rating,
  total_view,
  id
}) => {
  return (
    <div className="w-full border border-gray-200 rounded-lg shadow-md p-4 space-y-4 hover:shadow-lg transition-shadow mt-3">
      {/* Author Info & Share */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 hover:text-black cursor-pointer" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold leading-snug">{title}</h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Details Preview */}
      <p className="text-sm text-gray-700">
        <span className="line-clamp-2 block">{details}</span>
        <Link to={`/news-details/${id}`} className="text-blue-600 font-medium cursor-pointer">
          Read More
        </Link>
      </p>

      {/* Tags */}
      <div className="text-xs text-gray-500">
        Tags:{" "}
        {tags.map((tag, index) => (
          <span key={index}>
            {tag}
            {index < tags.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>

      {/* Rating and Views */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <AiFillStar
              key={index}
              className={
                index < rating.number ? "text-orange-400" : "text-gray-300"
              }
            />
          ))}
          <span className="text-black text-sm font-medium ml-1">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <FaEye /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
