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
    <div className="admissions-criteria-container">
      <div className="title">ADMISSIONS CRITERIA</div>
      <div className="row">
        <div className="column">
          <table>
            <tbody>
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
            </tbody>
          </table>
        </div>
        <div className="column">
          <table>
            <tbody>
              {/* filter through last five criteria and put in table */}
              {data &&
                data.length > 0 &&
                data
                  .filter((item, index) => index > 4 && index < 9)
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

      {/* non required criteria- */}
      <div className="non-required-container">
        <table className="column ">
          <tbody>
            {/* filter through last two criteria and put in table */}
            {data &&
              data.length > 0 &&
              data
                .filter((item, index) => index > 9)
                .map((item) => (
                  <>
                    <tr>
                      <td>
                        <div className="main-text not-required-text">
                          {item.mainText}
                        </div>
                        <div className="sub-text">{item.subText}</div>
                      </td>
                      <td className="percent">{item.percent}</td>
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
