import { RestaurantCard } from "./RestaurantCard";
import {restaurantList} from "../config/config"
export const body = () => {
    return (
      <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
    );
  };