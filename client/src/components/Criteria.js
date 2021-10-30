import React, { useState, useEffect } from "react";
import "./Criteria.css";

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
      <div className="title">ADMISSIONS CRITERIA</div>

      <div className="row">
        <table className="column">
          {/* filter through first five criteria and put in table */}
          {data &&
            data.length > 0 &&
            data
              .filter((item, index) => index < 5)
              .map((item) => (
                <>
                  <tr>
                    <td>
                      <div className="main-text">{item.mainText}</div>
                      <div className="sub-text">{item.subText}</div>
                    </td>
                    <td className="percent">{item.percent}%</td>
                  </tr>
                </>
              ))}
        </table>
        <table className="column">
          {/* filter through last five criteria and put in table */}
          {data &&
            data.length > 0 &&
            data
              .filter((item, index) => index > 4)
              .map((item) => (
                <>
                  <tr>
                    <td>
                      <div className="main-text">{item.mainText}</div>
                      <div className="sub-text">{item.subText}</div>
                    </td>
                    <td className="percent">{item.percent}%</td>
                  </tr>
                </>
              ))}
        </table>
      </div>
      <img
        src="https://fastly-cdn-shopvida.global.ssl.fastly.net/OneLeague/V2/pie-chart-edit.png?auto=webp"
        alt="circle chart"
        className="pie-chart"
      ></img>
      <div className="line-container">
        {/* add line break and 100 percent */}
        <hr className="line"></hr>
      </div>

      <div className="hundred">
        <p>100%</p>
      </div>

      <div className="non-required">
        {/* add non required criteria- hardcode in  */}
        <tr>
          <td className="test-scores">
            NOT REQUIRED: STANDARDIZED TEST SCORES
          </td>
          <td>+5%</td>
        </tr>
      </div>
    </>
  );
};

export default Criteria;
