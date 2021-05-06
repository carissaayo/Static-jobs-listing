import React, {  } from "react";
import { useGlobalContext } from "./Context";

const Details = ({ item }) => {
    const {  setIsFeatured} = useGlobalContext();
  
const {
  company,
  logo,
  latest,
  featured,
  position,
  location,
  postedAt,
  contract,
} = item;
  return (
    <section>
      <div className="image-con">
        <img alt='logo' src={logo} />
      </div>
      <section className="company-info">
        <div>
          <h4>{company}</h4>
          {latest ? setIsFeatured(true) : setIsFeatured(false)}
          <p className="latest">{latest ? `new` : null}</p>
          {featured ? setIsFeatured(true) : setIsFeatured(false)}
          <p className="featured">{featured ? "featured" : null}</p>
        </div>
        <h2>{position}</h2>
        <div class="details">
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
        </div>
      </section>
    </section>
  );
};

export default Details;
