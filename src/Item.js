import React from 'react';
import ButtonContainer from './ButtonContainer';
import Details from './Details';

const Item = ({item})=>{
   const {featured}=item;
return (
  <div className={`${featured ? "item-con item-featured" : "item-con"}`}>
    <Details item={item} />
    <ButtonContainer item={item} />
  </div>
);
};
export default Item;