import { message } from "antd";
import axios from "axios";

export const getPostsData = async ({ page, limit }) => {
  try {
    const { data } = await axios.get(
      `https://gorest.co.in/public/v1/posts?page=${page}&limit=${limit}`
    );
    return data;
  } catch (error) {
    message.error(error.message || "Something went wrong!");
  }
};
