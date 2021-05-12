import React from "react";
import { useGlobalContext } from "./Context";

const ButtonConainer = ({ item }) => {
  const {
    handleTagClick,
  } = useGlobalContext();
  
  const { role, level, languages, tools } = item;
  const tags = [role, level];
  

  if (languages) tags.push(...languages);
  if (tools) tags.push(...tools);

  return (
    <section className="btn-con">
      {tags.map((tag, index) => {
        return (
          <button
            key={index}
            onClick={()=>handleTagClick(tag)}
            className="btn"
          >
            {tag}
          </button>
        );
      })}
    </section>
  );
};

export default ButtonConainer;
