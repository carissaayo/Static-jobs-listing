import React from "react";


const Details = ({ item }) => {
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
    <section className="item">
      <div className="image-con">
        <img alt="logo" src={logo} />
      </div>
      <section>
        <div className="company-info">
          <h4>{company}</h4>
          <p className={latest ? `latest` : ""}>{latest ? `NEW!` : null}</p>
          <p className={featured ? "featured" : ""}>
            {featured ? "featured" : null}
          </p>
        </div>
        <h2>{position}</h2>
        <div className="details">
          <p>{postedAt}</p>
          <li>{contract}</li>
          <li>{location}</li>
        </div>
      </section>
    </section>
  );
};

export default Details;
