import React, { useState, useContext } from "react";
import Item from "./Item";
import { useGlobalContext } from "./Context";


const ItemContainer = () => {
  const {items} = useGlobalContext();
  return (
    <div>
      <header></header>
      {items.map((item) => {
        const { id } = item;
        return <Item key={id} item={item} />;
      })}
    </div>
  );
};
export default ItemContainer;
