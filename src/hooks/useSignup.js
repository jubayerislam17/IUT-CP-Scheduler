import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (name, id, password, confirmPassword, handle_codeforces, handle_atcoder) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/user/signup", {
        name,
        id,
        password,
        confirmPassword,
        handle_codeforces,
        handle_atcoder
      });

      const data = response.data;

      // Save to local storage
      localStorage.setItem("user", JSON.stringify(data));

      // Update the auth context
      dispatch({ type: "LOGIN", payload: data });

      setIsLoading(false);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred during signup.");
      }
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
