import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { restaurantRequest, restaurantsTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);
  // console.log(restaurants)
  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    console.log(restaurants);
    
      restaurantRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setError(null);
          setIsLoading(false);
          setRestaurants(results);
          // console.log(restaurants);
        })
        .catch((err) => {
          setRestaurants([]);
          setIsLoading(false);
          setError(err);
        });
  };
  useEffect(() => {
    if (location) {
      console.log(location);
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
