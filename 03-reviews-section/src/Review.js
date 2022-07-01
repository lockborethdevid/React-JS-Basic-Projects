import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  };

  const prevClick = () => {
    let newIndex = index - 1;
    return setIndex(checkIndex(newIndex));
  };

  const nextClick = () => {
    let newIndex = index + 1;
    return setIndex(checkIndex(newIndex));
  };

  const randomClick = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex === index) {
      newIndex = index + 1;
    }
    return setIndex(checkIndex(newIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevClick}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextClick}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomClick}>
        Random Review
      </button>
    </article>
  );
};

export default Review;
