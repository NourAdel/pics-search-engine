import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9232eb4f238f09c5555e7ea8f4faf835c442e1eefd33e3e5fb6f622593b3422e"
  }
});
