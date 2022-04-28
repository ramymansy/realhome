import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "918dfaa4camsh80e5a3e85931384p1f18bbjsn6fbdb56c0612",
    },
  });
  return data;
};
