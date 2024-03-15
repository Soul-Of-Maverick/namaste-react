import { REST_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { restinfo } = props;

  const { cloudinaryImageId, name, cuisines, sla, costForTwo, avgRating } =
    restinfo?.info;

  return (
    <div className="res-card" sytle={{ backgroundColor: "#f0f0ff" }}>
      <img src={REST_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{sla?.slaString}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating}⭐</h5>
    </div>
  );
};

export default RestaurantCard;
