import React from "react";
import { useRouter } from "next/router";

const NewsDetails = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <h1>News Details Page</h1>;
};

export default NewsDetails;
