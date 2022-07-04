import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setJobs(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <section>
        <section className="loading">
          <h1>Loading ...</h1>
        </section>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <article className="job-info">
        {/* btn-container */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        {/* job-info */}
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default App;
