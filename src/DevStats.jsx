import React from "react";
import "./DevStats.css";

const stats = [
  {
    title: "Total GitHub Contributions",
    unit: "commits",
    value: 12_480,
    from: 2019,
    change: "+35%",
    years: [
      { year: "2022", value: 12480 },
      { year: "2021", value: 9800 },
      { year: "2020", value: 6900 },
      { year: "2019", value: 6200 },
    ],
  },
  {
    title: "Average Code Coverage",
    unit: "%",
    value: 87,
    from: 2019,
    change: "+12%",
    years: [
      { year: "2022", value: 87 },
      { year: "2021", value: 82 },
      { year: "2020", value: 76 },
      { year: "2019", value: 75 },
    ],
  },
  {
    title: "Lines of Code Written",
    unit: "LOC",
    value: 1_280_000,
    from: 2019,
    change: "+55%",
    years: [
      { year: "2022", value: 1280000 },
      { year: "2021", value: 940000 },
      { year: "2020", value: 880000 },
      { year: "2019", value: 825000 },
    ],
  },
];

const DevStats = () => {
  return (
    <div className="stats-wrapper">
      {stats.map((block, idx) => (
        <div className="stat-block" key={idx}>
          <h3>{block.title}</h3>
          <div className="stat-main">
            <div className="main-value">{block.value.toLocaleString()}</div>
            <div className="subtext">
              {block.unit} <span>from {block.from}</span>
            </div>
            <div className={`change ${block.change.startsWith("+") ? "up" : "down"}`}>
              {block.change}
            </div>
          </div>
          <div className="bars">
            {block.years.map((item, i) => {
              const max = Math.max(...block.years.map(y => y.value));
              const width = (item.value / max) * 100;
              return (
                <div className="bar-row" key={i}>
                  <span>{item.year}</span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${width}%` }}></div>
                  </div>
                  <span className="bar-label">{item.value.toLocaleString()}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DevStats;
