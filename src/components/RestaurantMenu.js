import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  // const params = useParams();
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
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

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(
    resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards
  );
  const { name, menu, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(",")}- {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return <li key={item.card.info.id}>{item.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
