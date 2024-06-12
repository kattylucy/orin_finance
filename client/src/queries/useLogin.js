import { useMutation } from "@tanstack/react-query";
import { postRequest } from "@/api/request";
import { useNavigate } from "react-router-dom";

const postLogin = async (params) => {
  try {
    const response = postRequest("/api/auth/login", params);
    return response;
  } catch (error) {
    throw error;
  }
};

const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (params) => postLogin(params),
    onSuccess: (data, params) => {
      const { accessToken, refreshToken, user } = data;
      if (params.rememberMe) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("userId", user.id);
      } else {
        sessionStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userId", user.id);
      }
      navigate("/dashboard");
    },
    onError: (error) => console.log(error),
  });
};

export default useLogin;
