import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      chkChars: props.maxChars
    };
  }

  updateMsg = event => {
    event.persist()
    this.setState(previousState => {
      return {
        message: event.target.value,
        chkChars: previousState.chkChars - 1
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.updateMsg(event)} value={this.state.message} />
        <p>Remaining characters: {this.state.chkChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
