import RestaurantCard from "./RestaurantCard";
import restorentList from "../utils/mockData";
import { useState } from "react";
import restorentList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restorentList);
  return (
    <div className="cody-container">
      <div className="filter">
        <button
          className="flt-btn"
          onClick={() => {
            const restList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(restList);
          }}
        >
          Filetr top Restaurant
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} restinfo={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
