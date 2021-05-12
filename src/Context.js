import React, { useContext, useState } from "react";
import data from "./data";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [items, setItems] = useState(data);
  const [filters, setFilters] = useState([]);

  // Function for clearing the filter List
  const clearFilteredList = () => {
    setFilters([]);
  };
  // Function for removing a tag from the filter List
  const clearTag = (passedFilter) => {
    const newFilteredList = filters.filter((item) => item !== passedFilter);
    setFilters(newFilteredList);
  };
  
  //funtion for creating a new List when the tags are being clicked on 
    const addToFilteredList = ({ role, level, languages, tools }) => {
    if (filters.length === 0) {
      return true;
    }
    let tags = [role, level];
    if (languages) {
      tags.push(...languages);
    }
    if (tools) {
      tags.push(...tools);
    }

    return tags.some((tag) => filters.includes(tag));
  };
  const filteredList = items.filter(addToFilteredList);
// Function for adding tag to the filter LIst
  const handleTagClick = (tag) => {
    // To prevent having the same tag multiple times
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };
  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        filteredList,
        clearFilteredList,
        clearTag,
        addToFilteredList,
        filters,
        setFilters,
        handleTagClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
