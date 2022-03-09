import React, { useEffect } from "react";
import { Container } from "./style";
import axios from "axios";
import { message, Pagination } from "antd";
const News = () => {
  const { REACT_APP_BASE_URL } = procces.env;
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [posts, setPosts] = useState(0);

  useEffect(() => {
    const getPosts = async () => {
      let res;

      try {
        res = await axios.get(`${REACT_APP_BASE_URL}page=${page}`);
        setPosts(res?.data?.items);
        setTotal(res?.data?.total_count);
      } catch (err) {
        message.error(err?.message);
      }
    };
    getPosts();
  }, [page, REACT_APP_BASE_URL]);

  const onShowSizeChange = (current, size) => {
    setSize(size);
  };

  const handlePaginationChange = (n) => {
    setPage(n);
  };

  return <Container></Container>;
};

export default News;
