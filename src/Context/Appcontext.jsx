import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create a context
// const AppContext = createContext(null);
export const ImageContext = createContext(null);
// Original useAxios logic
const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data.results);
      setError("");
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    response,
    isLoading,
    error,
    fetchData,
  };
};

// Combined AppContextProvider
function ImageContextProvider({ children }) {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  // Data creation takes place
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>;
}

// Custom hook to consume the context
const useAppContext = () => {
  return useContext(ImageContext);
};

export { ImageContextProvider, useAppContext, useAxios };
