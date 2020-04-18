import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "erwe", name: "Jack", age: 20 },
      { id: "dfsdf", name: "Jill", age: 30 },
      { id: "hjgh", name: "Jane", age: 40 },
      { id: "hhjkj", name: "Bill", age: 50 }
    ],
    showPersons: false
  };

  deletePersonHandler = index => {
    const personsCopy = [...this.state.persons];
    // const personsCopy2 = this.state.persons.slice();
    personsCopy.splice(index, 1);
    this.setState({ persons: personsCopy });
  };

  nameChangedHandler = (event, id) => {
    // const personReferenceBad = this.state.persons.find( person => person.id === id );
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    const personCopy = { ...this.state.persons[personIndex] };
    personCopy.name = event.target.value;

    const personsArrayCopy = [...this.state.persons];
    personsArrayCopy[personIndex] = personCopy;

    this.setState({ persons: personsArrayCopy });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    const classes = [];
    const pLength = this.state.persons.length;
    const danger = 1;
    const warn = 3;
    if (pLength > danger && pLength <= warn) {
      classes.push("orange");
    }
    if (pLength <= danger) {
      classes.push("red");
      classes.filter(item => item !== "orange");
    }

    let persons = null;
    if (this.state.showPersons) {
      buttonStyle.backgroundColor = "red";
      buttonStyle[":hover"] = {
        backgroundColor: "orange",
        color: "white"
      };
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                // click={this.deletePersonHandler.bind(this, index)}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1 className={classes.join(" ")}>Hi, React App</h1>
          <button
            style={buttonStyle}
            onClick={() => this.togglePersonsHandler()}
          >
            {this.state.showPersons ? "Hide People" : "Show People"}
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
