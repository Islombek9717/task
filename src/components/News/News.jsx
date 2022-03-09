import React, { useEffect, useState } from "react";
import { Container, Wrapper, Title, Body, Heading } from "./style";
import { message, Pagination, Space, Skeleton } from "antd";
import { getPostsData } from "../../api";
import { Navigate } from "react-router-dom";

const News = () => {
  const token = localStorage.getItem("userToken");
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(false);

  const onShowSizeChange = (current, size) => {
    setSize(size);
  };

  const handlePaginationChange = (n) => {
    setPage(n);
  };

  useEffect(() => {
    const getData = () => {
      setLoading(true);

      getPostsData({ page, limit: size })
        .then((data) => {
          setPosts(data?.data);

          setLoading(false);
          setTotal(data?.meta?.pagination?.total);
        })
        .catch((err) => {
          message.error(err?.message || "Something went wrong!");
          setLoading(false);
        });
    };

    getData();
  }, [page, size]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Container>
      {loading ? (
        <Skeleton active />
      ) : (
        posts?.map(({ title, body, id }) => (
          <Wrapper key={id}>
            <Title>
              <Heading>Title:</Heading> {title}
            </Title>
            <Body>
              <Heading>Body:</Heading> {body}
            </Body>
          </Wrapper>
        ))
      )}

      <Space>
        <Pagination
          defaultCurrent={page === 0 ? 1 : page}
          current={page === 0 ? 1 : page}
          total={total}
          onChange={handlePaginationChange}
          defaultPageSize={size}
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          pageSizeOptions={["5", "10", "20", "50", "100"]}
          pageSize={size}
        />
      </Space>
    </Container>
  );
};

export default News;
