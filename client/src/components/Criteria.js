import React, { useState, useEffect } from "react";
import "./Criteria.css";

const Criteria = () => {
  //defining initial state and variables
  const [data, setData] = useState([]);
  //define const getData in local memory that will fetch data from json file in public folder
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (criteria) {
        setData(criteria);
      });
  };

  //hook calls getData function
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="admissions-criteria-container">
      <div className="title">ADMISSIONS CRITERIA</div>
      <div className="row">
        <div className="column">
          <table>
            <tbody>
              {/* filter through first five criteria from json file and put in table */}
              {data &&
                data.length > 0 &&
                data
                  .filter((item, index) => index < 5)
                  .map((item) => (
                    <>
                      <tr>
                        <td>
                          <div className="main-text" key="{item.mainText}">
                            {item.mainText}
                          </div>
                          <div className="sub-text" key="{item.subText}">
                            {item.subText}
                          </div>
                        </td>
                        <td className="percent" key="{item.percent}">
                          {item.percent}%
                        </td>
                      </tr>
                    </>
                  ))}
            </tbody>
          </table>
        </div>
        <div className="column">
          <table>
            <tbody>
              {/* filter through last five required criteria in json file and put in table */}
              {data &&
                data.length > 0 &&
                data
                  .filter((item, index) => index > 4 && index < 9)
                  .map((item) => (
                    <>
                      <tr>
                        <td>
                          <div className="main-text" key="{item.mainText}">
                            {item.mainText}
                          </div>
                          <div className="sub-text" key="{item.subText}">
                            {item.subText}
                          </div>
                        </td>
                        <td className="percent" key="{item.percent}">
                          {item.percent}%
                        </td>
                      </tr>
                    </>
                  ))}
            </tbody>
          </table>
        </div>
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

      {/* non required criteria-listed below required criteria table */}
      <div className="non-required-container">
        <table className="column ">
          <tbody>
            {/* filter through last two criteria from json file (non-required) and put in table */}
            {data &&
              data.length > 0 &&
              data
                .filter((item, index) => index > 9)
                .map((item) => (
                  <>
                    <tr>
                      <td>
                        <div
                          className="main-text not-required-text"
                          key="{item.mainText}"
                        >
                          {item.mainText}
                        </div>
                        <div className="sub-text" key="{item.subText}">
                          {item.subText}
                        </div>
                      </td>
                      <td className="percent" key="{item.percent}">
                        {item.percent}
                      </td>
                    </tr>
                  </>
                ))}
            <tr>
              <td className="case-by-case-text">
                *Applicants below these thresholds are considered on a case by
                case basis.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Criteria;
