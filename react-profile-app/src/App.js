import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Okiotor Igho",
        bio: "I am a Photographer, and IT student currently studying at GoMycode",
        imgSrc:
          "data:image/jpeg;base64,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",
        profession: "Software Engineer",
      },
      show: false,
      intervalId: null,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>React Profile App</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
