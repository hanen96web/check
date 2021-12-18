import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ data, searchText, searchPrice }) => {
  return (
    <div className="catLIst">
      {data
        .filter(
          (cha) =>
            cha.name.toLowerCase().includes(searchText.toLowerCase()) &&
            cha.price <= searchPrice
        )
        .map((chat) => (
          <MenuItem chat={chat} />
        ))}
    </div>
  );
};

export default MenuList;
