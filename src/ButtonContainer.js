import React, { Component } from "react";

const ButtonConainer = ({ item }) => {
  const { role, level, languages, tools } = item;
  return (
    <section>
      <button className="btn">{role}</button>
      <button className="btn">{level}</button>
      {/* <button className="btn">{languages}</button> */}
      {languages.map((language) => {
        return <button className="btn">{language}</button>;
      })}
      {/* {tools.length >= 1 ? <button className="btn">{tools}</button> : null} */}
      {/* <button className="btn"></button> */}
      {tools.map((tool) => {
        return <button className="btn">{tool}</button>;
      })}
    </section>
  );
};

export default ButtonConainer;
