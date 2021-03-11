import React from "react";
import Message from "./Message";
import translate from "translate-google-api";

function Messages(props) {
  // Loop through all the messages in the state and create a Message component
  const messages = props.messages.map((message, i) => {
    const result = translate({ message }, { to: props.lang });
    return (
      <Message
        key={i}
        message={result}
        fromMe={message.fromMe}
        side={props.side}
      />
    );
  });

  return <div className="messages">{messages}</div>;
}

Messages.defaultProps = {
  messages: [],
};

export default Messages;
