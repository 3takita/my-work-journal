import React from "react";

export default function Work(prop) {
  return (
    <section className="d-work">
      <span>
        <img
          src={`../images/${prop.officePic}`}
          className="ofisPic"
          alt="pix"
        />
        <h1>{prop.employer}</h1>
        <h3>{prop.jobTitle}</h3>
      </span>
      <span>
        <p>
          {prop.startDate} - {prop.endDate}
        </p>
      </span>
      <div className="pros-n-cons">
        <p>
          {prop.pros}. {prop.cons}
        </p>
      </div>
      <p>{prop.workCulture}</p>
      <p>
        <b>{prop.startPay}</b>
      </p>
    </section>
  );
}
