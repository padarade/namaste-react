import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);s
  // const params = useParams();
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const data = useRestaurantMenu(resId);

  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      MENU_API +
        `restaurantId=${resId}` +
        `&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();

    setResInfo(json);

    // cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
  };

  if (data === null) {
    return <Shimmer />;
  }
  const { name, menu, costForTwoMessage, cuisines } =
    data?.data?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    data?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const categories =
    data?.data?.cards[4].groupedCard.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-l">
        {cuisines?.join(",")}- {costForTwoMessage}
      </p>
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return <li key={item.card.info.id}>{item.card.info.name}</li>;
        })}
      </ul> */}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card?.card?.title}
            data={category.card.card}
            showItems={index === showIndex}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
