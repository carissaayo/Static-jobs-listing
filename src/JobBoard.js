import React, { Component } from 'react'
const JobBoard = ({ job, handleTagClick }) => {
  const {
    company,
    logo,
    latest,
    featured,
    position,
    location,
    postedAt,
    contract,
    role,
    level,
    tools,
    languages,
  } = job;
  const tags = [role, level];

  if (languages) tags.push(...languages);
  if (tools) tags.push(...tools);
  return (
    <div className="item-con">
        
      <section className={featured ? `item item-featured` : "item"}>
        <div className="image-con">
          <img alt="logo" src={logo} />
        </div>
        <section>
          <div className="company-info">
            <h4>{company}</h4>
            {/* {latest ? setIsFeatured(true) : setIsFeatured(false)} */}
            <p className={latest ? `latest` : ""}>{latest ? `NEW!` : null}</p>
            {/* {featured ? setIsFeatured(!isFeatured) : setIsFeatured(false)} */}
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
      <section className="btn-con">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              onClick={(tag) => handleTagClick()}
              className="btn"
            >
              {tag}
            </button>
          );
        })}
      </section>
    </div>
  );
};
export default JobBoard;