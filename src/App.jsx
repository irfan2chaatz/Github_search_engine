import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailsPage from "./pages/UserDetailsPage";
import { useState } from "react";
import SearchUsers from "./pages/SearchUsers";

function App() {

  let [isLoading, setIsLoading] = useState(false)
  let [isError, setIsError] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:user" element={<SearchUsers />} />
      <Route path="/users/:userName"
        element={<UserDetailsPage 
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    isError={isError}
                    setIsError={setIsError}  />} 
      />
    </Routes>
  );
}

export default App;
