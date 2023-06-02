import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (id, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/user/login", {
        id,
        password
      });

      const data = response.data;

      // Save to local storage
      localStorage.setItem("user", JSON.stringify(data));

      // // Fetch the Codeforces handle using the user ID
      // const handleResponse = await axios.get(`/api/user/fetching/${data.id}`);
      // const handleData = handleResponse.data;

      // // Add the Codeforces handle to the user data in local storage
      // data.codeforcesHandle = handleData.handle;
      // localStorage.setItem('user', JSON.stringify(data));


      // Update the auth context
      dispatch({ type: "LOGIN", payload: data });

      setIsLoading(false);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred during Login.");
      }
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
