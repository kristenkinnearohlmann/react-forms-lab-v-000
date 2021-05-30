import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      maxChars: this.props.maxChars
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.updateMsg(event)} value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
