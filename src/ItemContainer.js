import React from "react";
import Item from "./Item";
import { useGlobalContext } from "./Context";
import FilterMenu from "./FilterMenu";

const ItemContainer = () => {
  const { filteredList, filters} = useGlobalContext();
  
  return (
    <div className="items-con">
      <header></header>
      {filters.length > 0 && <FilterMenu />}

      {filteredList.map((item) => {
        const { id } = item;
        return <Item key={id} item={item} />;
      })}
    </div>
  );
};
export default ItemContainer;
