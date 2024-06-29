import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function DogApi() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const [data, setData] = useState();
  const getDog = () => {
    fetch(url)
      .then((response) => response.json())
      .then((apiData) => setData(apiData.message));
  };
  useEffect(() => {
    getDog();
    console.log(data);
  }, []);
  return (
    <div className="container">
      <h1> DOG API WITH PURE FETCH</h1>
      <img src={data} />
      <button type="button" onClick={getDog}>
        change dog
      </button>
    </div>
  );
}

export default DogApi;
