import axios from "axios";

export const getPostsData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${process.env.REACT_APP_BASE_URL}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
