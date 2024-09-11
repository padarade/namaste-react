import { useState } from "react";
import restaurantsList from "../utils/restaurant.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // state variable - super power varaible
  const [listofRestaurant, setListofRestaurant] = useState(restaurantsList);


  // Alternate way to destructure array object of useState
  // const arr = useState(restaurantsList);
  // const [listofRestaurant, setListofRestaurant] = arr;
  // or;
  // const listofRestaurant = arr[0];
  // const setListofRestaurant = arr[1];

  // normal javascript variable
  // let listofRestaurant= [];

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("listofRestaurant", listofRestaurant);
            const filteredList = listofRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            console.log("filteredList", filteredList);
            setListofRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
