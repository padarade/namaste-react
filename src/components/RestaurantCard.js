import { Component } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, cuisines, avgRating, name, costForTwo, sla } =
    resData?.info;
  return (
    <div
      data-testid="resCard"
      className="res-card p-4 m-4 w-[200px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-400"
      // style={{ background: "#f0f0f0" }}
    >
      <img
        className="res-logo rouded-lg"
        alt="res-logo"
        // src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200  /${cloudinaryImageId}`}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-l">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

// Higher Order Component

// input RestaurantCard => PromotedRestaurantCard

export const withPromoted = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};
