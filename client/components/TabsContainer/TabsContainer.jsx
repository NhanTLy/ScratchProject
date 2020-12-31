import React, { useEffect } from "react";
import { AddItem } from "./AddItem.jsx";
import { SearchBar } from "./SearchBar.jsx";
import { Tabs } from "./Tabs.jsx";
import CheckoutButton from './CheckoutButton.jsx';
import { useDispatch } from "react-redux";
import { getShoppingItems } from "../../store/actions/shoppingActions.js";

export const TabsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingItems());
  })

  return (
    <div>
      <div className="flex flex-row m-2 px-5 justify-between bg-gray-200 ">
        <AddItem />
        <SearchBar />
        <div>
          <CheckoutButton />
        </div>
      </div>
      <Tabs />
    </div>
  );
};
