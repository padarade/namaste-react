import { useEffect, useState } from "react";
import restaurantsList from "../utils/restaurant.json";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // state variable - super power varaible
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Alternate way to destructure array object of useState
  // const arr = useState(restaurantsList);
  // const [listofRestaurant, setListofRestaurant] = arr;
  // or;
  // const listofRestaurant = arr[0];
  // const setListofRestaurant = arr[1];

  // normal javascript variable
  // let listofRestaurant= [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    //  fetch('https://dummyjson.com/users')
    // .then(res => res.json())
    // .then(console.log);

    // const data = await fetch('https://dummyjson.com/users')
    const json = await data.json();
    const list =
      json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListofRestaurant(list);
    setFilteredRestaurant(list);
  };

  //Conditional Rendering
  // if (listofRestaurant.length === 0) {
  //  return <Shimmer />;
  // }
  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filterarr = listofRestaurant.filter((res) => {
                console.log(res.info.name.includes(searchText), res.info.name);
                return res.info?.name
                  .toLowerCase()
                  .includes(searchText?.toLowerCase());
              });

              setFilteredRestaurant(filterarr);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listofRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant?.info?.id}>
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
