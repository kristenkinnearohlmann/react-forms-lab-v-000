import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: this.props.maxChars
    };
  }

  updateMsg = event => {

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.updateMsg(event)} value={this.state.maxChars} />
      </div>
    );
  }
}

export default TwitterMessage;
