import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { postRequest } from "@/api/request";

const postRegister = async (params) => {
  try {
    const response = await postRequest("/api/auth/register", params);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: postRegister,
    onSuccess: () => navigate("/login"),
  });
};

export default useRegister;
