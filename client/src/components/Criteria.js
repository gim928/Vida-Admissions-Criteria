import React, { useState, useEffect } from "react";

const Criteria = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (criteria) {
        setData(criteria);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {/* filter through first five criteria and put in table */}
        {data && data.length > 0 && data.map((item) => <p>{item.mainText}</p>)}
      </div>
      <div>{/* filter through last five criteria and put in table */}</div>
      <div>{/* add line break and 100 percent */}</div>
      <div>{/* add non required criteria- hardcode in  */}</div>
    </>
  );
};

export default Criteria;
