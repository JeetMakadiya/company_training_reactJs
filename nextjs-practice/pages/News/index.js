import React from "react";
import Link from "next/link";

const News = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/News/news-details-1">Link1</Link>
        </li>
        <li>
          <Link href="/News/news-details-2">Link2</Link>
        </li>
        <li>
          <Link href="/News/news-details-3">Link3</Link>
        </li>
      </ul>
    </>
  );
};

export default News;
