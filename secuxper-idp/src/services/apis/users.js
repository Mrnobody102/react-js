import axios from "axios";

const baseUrl = "http://localhost:8080/user";

export const getUserData = async () => {
  try {
    const response = await axios.get(baseUrl + "/all");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
