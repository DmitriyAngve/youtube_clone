import axios from "axios";

export const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
  params: { id: "dQw4w9WgXcQ" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
// import axios from "axios";

// const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";
// // const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

// const options = {
//   //   params: { id: "dQw4w9WgXcQ" },
//   params: { query: "cat", geo: "US", lang: "en" },
//   //   params: { maxResults: "50" },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//     "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
//   },
// };

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };
