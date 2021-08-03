import axios from "axios";

const KEY = "AIzaSyDyicJi2rkp6S8CEEj0JHXz-n5VEAh_9y0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
