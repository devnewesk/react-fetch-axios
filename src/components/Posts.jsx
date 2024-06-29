import axios from "axios";
import React, { useEffect, useState } from "react";

function Posts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState();
  const getData = () => {
    axios.get(url).then((apiData) => setData(apiData.data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="posts">
      <h1>FAKE POSTS WITH AXIOS</h1>
      {data?.map((d) => {
        const { title, body } = d;
        return (
          <div className="post">
            <h1> {title} </h1>
            <p> {body} </p>
          </div>
        );
      })}{" "}
    </div>
  );
}

export default Posts;
