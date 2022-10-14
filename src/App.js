import { createContext, useState } from "react";
import "./App.css";
import FindButton from "./components/FindButton";
import Images from "./components/Images";
import Search from "./components/Search";
import useAxios from "./Hooks/useAxios";

 export const ImageContext = createContext()

function App() {
  const [searchImage, setSearchImage] = useState("")
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  
  );
  console.log(response)


  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    
    <ImageContext.Provider value={value}>
      <FindButton>
        <Search />
      </FindButton>
      <Images />
      </ImageContext.Provider>
    
  );
}

export default App;
