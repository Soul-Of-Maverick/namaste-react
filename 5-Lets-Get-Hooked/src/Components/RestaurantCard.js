import { REST_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { restinfo } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  } = restinfo?.data;

  return (
    <dev className="res-card" sytle={{ backgroundColor: "#f0f0ff" }}>
      <img src={REST_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{area}</h5>
      <span className="card-info">
        <h5>{lastMileTravelString}</h5>
        <h5>{costForTwoString}</h5>
        <h5>{avgRating}⭐</h5>
      </span>
    </dev>
  );
};

export default RestaurantCard;
