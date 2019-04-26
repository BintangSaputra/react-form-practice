import React from "react";

class TextArea extends React.Component {
  state = {
    value: "Only doctor Strange knows Stark will die"
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(`Essay:${this.state.value}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Essay:</label>
        <textarea value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit Essay" />
      </form>
    );
  }
}

export default TextArea;
