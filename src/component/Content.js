import React from "react";
import Carouu from "./Carouu";
import MenuList from "./MenuList";

const Content = ({ searchPrice, searchText, data }) => {
  return (
    <div>
      <Carouu />

      <MenuList searchPrice={searchPrice} searchText={searchText} data={data} />
    </div>
  );
};

export default Content;
