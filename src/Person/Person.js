import React from "react";

import "./Person.css";
import Radium from "radium";

const personExport = (props) => {
  const mQueryStyle = {
      '@media (min-width: 650px)': {
        width: '150px',
        backgroundColor: 'green'
      },
  };

    const redStyle = {
        color: "red",
    };
  return (
    <div className="Person" style={mQueryStyle}>
      <p>
        I'm {props.name} and I am {props.age}
      </p>
      <p>{props.children}</p>
        <label htmlFor="changeName">Name: </label>
      <input name='changeName' type="text" onChange={props.changed} />
      <p style={redStyle} onClick={props.click}>
        Delete {props.name}
      </p>
    </div>
  );
};

export default Radium(personExport);
