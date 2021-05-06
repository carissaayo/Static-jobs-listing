import React, { Component } from 'react';
import ButtonContainer from './ButtonContainer';
import Details from './Details';
const Item = ({item})=>{
   
return (
  <div>
    <Details item={item} />
    <ButtonContainer item={item} />
  </div>
);
};
export default Item;