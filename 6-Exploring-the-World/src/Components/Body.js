import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterListOfRestaurant, setFliterListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFliterListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="search-filter">
        <div className="search">
          <input
            type="input"
            className="search-text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filterRestData = listOfRestaurant.filter((res) =>
                res.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );

              setListOfRestaurant(filterRestData);
            }}
          >
            search
          </button>
        </div>
        <div className="filter">
          <button
            className="flt-btn"
            onClick={() => {
              const restList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurant(restList);
            }}
          >
            Filetr top Restaurant
          </button>
        </div>
      </div>
      <div className="rest-container">
        {listOfRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} restinfo={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
