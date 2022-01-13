import React, { useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [keywords, setKeywords] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeywords(searchKeyword);
  }
    useEffect(() => {
      if (!keywords.length) {
        // don't do anything
        return;
    }
    locationRequest(keywords.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setError(null);
        setIsLoading(false);
        setLocation(result);
        // console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  
    }, [keywords])

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keywords,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
